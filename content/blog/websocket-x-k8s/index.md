---
title: "WebSocket x Kubernetes : ปัญหาการเชื่อมต่อ"
description: >-
  วันก่อนได้มีโจทย์ว่าทำต้องทำ Web Chat เราก็นึกถึง WebSocket เลยเพราะต้องทำเป็น
  Realtime ทีมก็คุยกันก็มีกังวลเรื่องใช้ Socket กับ Graphql…
date: "2018-03-17T18:40:34.296Z"
categories: []
keywords: []
slug: >-
  /@sippakornraksakiart/websocket-x-kubernetes-%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%95%E0%B9%88%E0%B8%AD-29ea36d0f4ad
---

![](https://cdn-images-1.medium.com/max/800/1*lZPzbbD_IB_FmywdRAVXLQ.png)

วันก่อนได้มีโจทย์ว่าทำต้องทำ Web Chat เราก็นึกถึง WebSocket เลยเพราะต้องทำเป็น Realtime ทีมก็คุยกันก็มีกังวลเรื่องใช้ Socket กับ Graphql อยู่บ่าง แต่ก็ลอง Research กันดูก็ไม่น่ามีปัญหาอะไรเพราะ Apollo ก็ทำ Lib อย่าง [graphql-subscriptions](https://github.com/apollographql/graphql-subscriptions) เราก็ทำไปจนถึงจะต้อง Intergrate หลายๆส่วนเข้าด้วยกัน หลังจากนั้นเราก็ Set Docker, CI/CD แล้วก็ deploy ขึ้น [GKE](https://cloud.google.com/kubernetes-engine/) แล้วก็ทำการ Test ดูเข้ !!! ทำไม Client มันต่อ WebSocket ฝั่ง Server ไม่ได้หว่า ต่อแล้วหลุดบ่าง ต่อใหม่บ่างๆ บลาๆๆๆๆๆ เราก็โทษ Lib โทษนู้นนี้นั้นเต็มไปหมด ผ่านไป 1 Man Day ก็ตัดสินใจลองขึ้น Project [Socket.io](https://socket.io/) ธรรมดาเลยและกัน และแล้ว … ปัญหาต่างๆก็เริ่มคลีคลาย…

### ปัญหาที่จะต้องเจอแน่ๆ

1.  ปัญหาเชื่มต่อไม่ได้และ Reconnect รัวๆ
2.  ปัญหาต่อได้ล่ะแต่ Reconnect ทุกๆ 30 วิ

### ปัญหาเชื่มต่อไม่ได้และ Reconnect รัวๆ

![รูปแสดงการเชื่อมต่อไม่ได้](https://cdn-images-1.medium.com/max/800/1*gT1-8sAGDgFkkK22eTBF8w.png)
รูปแสดงการเชื่อมต่อไม่ได้

ปัญหานี้เกิดจากการที่การทำ Handshake สำหรับการต่อ WebSocket แล้วทีนี้ Load Balancer ของ k8s ทีทำหน้าที่คั่นกลางระหว่าง Backend Service กับ Client แล้วทีนี้การทำ Handshake มันจำเป็นจะต้องส่งข้อมูลหากันหลายครั้งแล้วทีนี้ LB ของ k8s โดย Default มันจะถูก set ค่า Session affinity เป็น None นั้นก็คือการเชื่อมต่อแต่ล่ะครั้งจะถูกโยนไปหลายๆ Pods นั้นจึงทำให้การทำ Handshake ไม่สำเร็จเพราะ handshake มีการแลกเปลี่ยนข้อมูลกันหลายครั้งแต่แต่ล่ะครั้งดันโดนส่งไปคนล่ะ Pods ทำให้การเชื่อมต่อไม่สำเร็จ ซึ่งสามารถ **แก้ไขได้โดยการ Set Session affinity เป็น ClientIP โดยการ Set เป็น ClientIP นั้นจะทำให้ request ที่มาจาก source เดียวกันจะวิ่งไปที่ Pods เดียวกันทุก request**

#### ขั้นตอนการ Set Session affinity

1.  ไปที่ Network Services → Load balancing → เลือก Load balancing ที่ต้องการ Set → เลือก Edit

![](https://cdn-images-1.medium.com/max/800/1*b2NCQYqyAVqvstU1T_7z4g.png)

2\. ทำการกดไปที่ Backend Service → แล้วคลิกที่ icon ดินสอ เพื่อแก้ไข Backend Services

![](https://cdn-images-1.medium.com/max/800/1*D8WL0fftkveAubfOTNBPig.png)

3\. ที่ช่อง Session affinity เลือก Client IP จากนั้นกด Update

![](https://cdn-images-1.medium.com/max/800/1*ekrF6L-in5l_GdY9wP59-A.png)

4\. หลักจากแก้ครบทุก Backend Services อย่าลืมกด Update ข้างนอกนะครับ

![](https://cdn-images-1.medium.com/max/800/1*TAwN-FWj2-AQ2JRQt4stiQ.png)

5\. รอระบบ Update ประมาณ 20 นาทีครับ … หลังจากเวลาผ่านไปจะเห็นว่าต่อติดแล้วไม่หลุดแล้วครับ

![](https://cdn-images-1.medium.com/max/800/1*9ZHi9YUj3IXAMcReezRaFQ.png)

### ปัญหาต่อได้ล่ะแต่ Reconnect ทุกๆ 30 วิ

ปัญหานี้เกิดจากค่า Default ของ Load balancer นั้นถูกตั้ง Timeout ไว้ 30 วิ ดังนั้นวิธีแก้ก็แค่ไป Set timeout ของ LB ใหม่ครับ โดยวิธีทำนั้นก็เหมือนกับ Session affinity เลยครับแต่ไปแก้ตรงช่อง Timeout ให้เป็น 86400 (เท่ากับ 24 ชม.)

**Ref.**

[**nginxinc/kubernetes-ingress**  
\_kubernetes-ingress - NGINX and NGINX Plus Ingress Controllers for Kubernetes_github.com](https://github.com/nginxinc/kubernetes-ingress/tree/master/examples/websocket "https://github.com/nginxinc/kubernetes-ingress/tree/master/examples/websocket")[](https://github.com/nginxinc/kubernetes-ingress/tree/master/examples/websocket)

[**kubernetes/ingress-gce**  
\_ingress-gce - Ingress controller for Google Cloud_github.com](https://github.com/kubernetes/ingress-gce/tree/master/examples/websocket "https://github.com/kubernetes/ingress-gce/tree/master/examples/websocket")[](https://github.com/kubernetes/ingress-gce/tree/master/examples/websocket)

[**Running Socket.IO Applications on Kubernetes**  
\_Socket.IO is a JavaScript library that enables real-time bidirectional event-based communication. It primarily uses the…\_deis.com](https://deis.com/blog/2016/socket.io-applications-kubernetes/ "https://deis.com/blog/2016/socket.io-applications-kubernetes/")[](https://deis.com/blog/2016/socket.io-applications-kubernetes/)

[**Services**  
\_Production-Grade Container Orchestration_kubernetes.io](https://kubernetes.io/docs/concepts/services-networking/service/ "https://kubernetes.io/docs/concepts/services-networking/service/")[](https://kubernetes.io/docs/concepts/services-networking/service/)
