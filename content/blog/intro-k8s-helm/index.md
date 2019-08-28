---
title: HELM หมวกเหล็กของ Kubernetes
description: ในโลกของ k8s นั้นในการ deploy อะไรซักอย่างเราจำเป็นต้อง Set ค่าอะไรหลายๆเช่นหากเราต้องการทำ MySQL Server ใน Cluster เรา เราก็จำเป็นต้องสร้าง config ของ Deployment , PersistentVolumeClaim(PVC), Secret, ConfigMap และอื่นๆอีกเพื่อให้ MySQL Server เราทำงานได้อย่างสมบูรณ์บน Kubernetes ของเรา จะเห็นว่าเราจำเป็นต้อง Set อะไรมากๆมายหลายอย่างเลย แต่หลายๆอย่างก็มีคนทำไว้ให้หมดแล้ว Helm ก็เลยมาช่วยตรงนี้เพราะอะไรที่มีคนทำไว้แล้วอย่างเช่น
date: "2018-05-04T06:31:06.025Z"
categories: []
keywords: []
slug: >-
  /@sippakornraksakiart/helm-%E0%B8%AB%E0%B8%A1%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%87%E0%B8%81%E0%B8%82%E0%B8%AD%E0%B8%87-kubernetes-e64c9c70c1ac
---

#Introduction

![](https://cdn-images-1.medium.com/max/800/1*Ee0IzN6iCegkEXV_p6pKnQ.png)

### [Helm](https://www.helm.sh/) คืออะไร ??

ตอนที่เราเขียนโปรแกรมหากเราใช้ NodeJS เราก็คงจะมี NPM หรือ Yarn ในการจัดการ Packages ต่างๆ ซึ่งในโลกของ Kubernetes เราก็มี _Helm_ ในการ [**_Chart_**](https://docs.helm.sh/developing_charts/#charts) **_(เหมือนกับ Package ใน npm)_** และ [**_Release_**](https://docs.helm.sh/using_helm/#learn-about-releases) **_(Chart ที่ deploy ขึ้นไปแล้ว)_**

### ทำไมต้อง [Helm](https://www.helm.sh/) ??

ในโลกของ k8s นั้นในการ deploy อะไรซักอย่างเราจำเป็นต้อง Set ค่าอะไรหลายๆเช่นหากเราต้องการทำ MySQL Server ใน Cluster เรา เราก็จำเป็นต้องสร้าง config ของ Deployment , PersistentVolumeClaim(PVC), Secret, ConfigMap และอื่นๆอีกเพื่อให้ MySQL Server เราทำงานได้อย่างสมบูรณ์บน Kubernetes ของเรา จะเห็นว่าเราจำเป็นต้อง Set อะไรมากๆมายหลายอย่างเลย แต่หลายๆอย่างก็มีคนทำไว้ให้หมดแล้ว Helm ก็เลยมาช่วยตรงนี้เพราะอะไรที่มีคนทำไว้แล้วอย่างเช่น [**_MySQL_**](https://github.com/kubernetes/charts/tree/master/stable/mysql) เราเพียงแค่พิมพ์ _helm install stable/mysql_ และ Config ค่าบางอย่างเท่านี้เราก็จะได้ MySQL บน cluster เราแล้ว

### ลองใช้ Helm เพื่อ deploy [Wordpress](https://github.com/kubernetes/charts/tree/master/stable/wordpress)

ก่อนเราจะเริ่มใช้ Helm ลองคิดเล่นๆดูก่อนว่าหากไม่ใช้ Helm เราต้อง Config อะไรบ้างเพื่อให้เราใช้งาน Wordpress ได้บน k8s

เราก็คงต้อง Build Docker Image ของ Wordpress สร้าง Config deployment , สร้าง Service, สร้าง Ingress, เอ้ … ต้องใช้ Database ด้วยก็ต้องมี deployment ของ MySQL อ่ะอ่าวววว… MySQL เป็น Stateful App ต้องทำ ConfigMap กับ PVC อีก เริ่มเยอะล่ะ !!! ไม่ต้องคิดต่อล่ะครับมาใช้ Helm กันเถอะ !!!

#### ทำการ Start [**_Minikube_**](https://kubernetes.io/docs/getting-started-guides/minikube/) เพื่อรัน k8s บนเครื่อง local เรา

\$ minikube start  
Starting local Kubernetes v1.10.0 cluster...  
Starting VM...  
Getting VM IP address...  
Moving files into cluster...  
Setting up certs...  
Connecting to cluster...  
Setting up kubeconfig...  
Starting cluster components...  
Kubectl is now configured to use the cluster.  
Loading cached images from config file.

#### เช็คว่า kubectl ต่อกับ minikube ที่เราเพิ่งรันไปแล้วหรือยัง ?

\$ kubectl config current-context  
minikube

ถ้า Output เป็น minikube แปลว่าแต่ไว้แล้ว แต่ถ้ายังไม่เป็นสามารถ [**_switch context_**](https://stackoverflow.com/questions/43643463/how-to-switch-kubectl-clusters-between-gcloud-and-minikube) ได้ครับ

#### ติดตั้ง Tiller บน Minikube ของเรา

> Tiller จะเป็นตัวจัดการ Releases ต่างๆที่เรา deploy ขึ้น k8s ไป

\$ helm init  
Tiller (the Helm server-side component) has been installed into your Kubernetes Cluster.

Please note: by default, Tiller is deployed with an insecure 'allow unauthenticated users' policy.  
For more information on securing your installation see: [https://docs.helm.sh/using_helm/#securing-your-helm-installation](https://docs.helm.sh/using_helm/#securing-your-helm-installation)  
Happy Helming!

เช็คว่า Tiller ถูกติดตั้งเรียบร้อยดีไหม

\$ helm ls  
Error: Get [http://localhost:8080/api/v1/namespaces/kube-system/configmaps?labelSelector=OWNER%!D(MISSING)TILLER:](http://localhost:8080/api/v1/namespaces/kube-system/configmaps?labelSelector=OWNER%!D%28MISSING%29TILLER:) dial tcp 127.0.0.1:8080: connect: connection refused

อ่าวเห้ย ! Error ([**_#3985_**](https://github.com/kubernetes/helm/issues/3985)) เราจะ work around โดยคำสั่งนี้ก่อน

\$ kubectl -n kube-system patch deployment tiller-deploy -p '{"spec": {"template": {"spec": {"automountServiceAccountToken": true}}}}'

ตอนนี้เรามีมี Tiller ในการจัดการ Releases ต่างๆเรียบร้อยแล้ว

#### Search หา Wordpress Chart

\$ helm search wordpress  
NAME CHART VERSION APP VERSION DESCRIPTION  
stable/wordpress 1.0.5 4.9.5 Web publishing platform for building blogs and ...

#### ดูว่ามี Values อะไรบ้างเราสามารถ config ได้

\$ helm inspect values stable/wordpress

หรือดูจาก [**_Doc ใน Github_**](https://github.com/kubernetes/charts/tree/master/stable/wordpress) ก็จะง่ายกว่าหน่อย

#### สร้างไฟล์สำหรับ Config ค่าต่างๆสำหรับ Chart ที่เราจะติดตั้ง

ทำการสร้างไฟล์ config.yaml โดย content ข้างในเป็นประมาณนี้ครับ

wordpressUsername: admin  
wordpressPassword: admin_password  
wordpressEmail: [spkrsk.37@gmail.com](mailto:spkrsk.37@gmail.com)  
wordpressFirstName: Sippakorn  
wordpressLastName: Raksakiart  
wordpressBlogName: sPkSoft's Blog

#### ถึงเวลาติดตั้ง Chart Wordpress ที่เราต้องการแล้ว

\$ helm install -f config.yaml stable/wordpress

ทำการเช็คว่า Helm สร้าง Pod อะไรบ้าง

\$ kubectl get pods  
NAME READY STATUS RESTARTS AGE  
ardent-grasshopper-mariadb-7479c58fb-mj5lq 0/1 PodInitializing 0 28s  
ardent-grasshopper-wordpress-5cc5f5c6d6-pxtr2 0/1 ContainerCreating 0 28s

จะเห็นว่ามีการสร้างขึ้นมา 2 deploy คือ mariadb กับ wordpress ซึ่งก่อนจะทำขั้นตอนต่อไปต้องรอ **_READY state เป็น 1/1_** หมดก่อนนะครับ

#### เช็คว่า Load Balancer ทำการแจก External IP ให้เราหรือยัง

kubectl get svc --namespace default -w ardent-grasshopper-wordpress

**_รอจนกว่า EXTERNAL-IP ไม่เป็น <pending> ก่อนนะครับ ซึ่งใช้เวลานิดนึงน่ะครับ_**

ซึ่งดูเหมือน Minikube มันจะไม่ Support LoadBalancer ดังนั้นจะทำการดู IP ของ Service โดย Minikube

\$ minikube service ardent-grasshopper-wordpress --url  
[http://192.168.99.100:31258](http://192.168.99.100:31258)  
[http://192.168.99.100:30215](http://192.168.99.100:30215)

#### ลองเข้าดู Blog สวยใช้ได้เลยครับ

![](https://cdn-images-1.medium.com/max/800/1*bFu0A1S9ya6ywQ4-Gaj9Cw.png)

### สรุปซักหน่อย

จะเห็นว่า Helm นั้นถูกใช้งานเหมือน npm หรือ yarn ใน node มากๆเลยช่วยให้ชีวิตเราง่ายขึ้นมากๆ แต่ด้วยความสามารถของ Helm นั้นมีเยอะมากมันจะช่วยให้ชีวิตเราง่ายขึ้นมากในการ deploy และจัดการ Pods, Services, ต่างๆใน k8s ได้ง่ายมาก เหมือนที่เราไม่ได้รัน node ตรงๆแต่รันผ่าน npm ซะส่วนใหญ่ ครั้งหน้าเรามาลองสร้าง Chart และจัดการ Releases ของเราของด้วย Helm กันนะครัช :)

### Ref.

[**kubernetes/helm**  
\_helm - The Kubernetes Package Manager_github.com](https://github.com/kubernetes/helm/blob/master/docs/chart_template_guide/yaml_techniques.md "https://github.com/kubernetes/helm/blob/master/docs/chart_template_guide/yaml_techniques.md")[](https://github.com/kubernetes/helm/blob/master/docs/chart_template_guide/yaml_techniques.md)

[**kubernetes/helm**  
\_helm - The Kubernetes Package Manager_github.com](https://github.com/kubernetes/helm/blob/master/docs/using_helm.md "https://github.com/kubernetes/helm/blob/master/docs/using_helm.md")[](https://github.com/kubernetes/helm/blob/master/docs/using_helm.md)

[**Kubernetes (Minikube) external ip does not work**  
\_I am new to Kubernetes and i have been browsing looking and reading why my external ip is not resolving. I am running…\_stackoverflow.com](https://stackoverflow.com/questions/39850819/kubernetes-minikube-external-ip-does-not-work "https://stackoverflow.com/questions/39850819/kubernetes-minikube-external-ip-does-not-work")[](https://stackoverflow.com/questions/39850819/kubernetes-minikube-external-ip-does-not-work)

[**kubernetes/charts**  
\_charts - Curated applications for Kubernetes_github.com](https://github.com/kubernetes/charts/tree/master/stable/wordpress "https://github.com/kubernetes/charts/tree/master/stable/wordpress")[](https://github.com/kubernetes/charts/tree/master/stable/wordpress)

[**Helm - The Package Manager for Kubernetes.**  
\_This guide covers how you can quickly get started using Helm. The following prerequisites are required for a successful…\_docs.helm.sh](https://docs.helm.sh/using_helm/#quickstart-guide "https://docs.helm.sh/using_helm/#quickstart-guide")[](https://docs.helm.sh/using_helm/#quickstart-guide)
