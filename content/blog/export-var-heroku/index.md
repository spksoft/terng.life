---
title: Export และ Import “Config Vars” ใน Heroku
description: นื่องจากวันก่อนจำเป็นต้องสร้าง Development environment เพราะแต่ก่อนมีแค่ Staging กับ Production แล้วตัว API มีการใช้ environment variables เยอะมากเลยเกิดความขี้เกียจที่จะต้องมานั่งก็อปทีล่ะกัน และใน Heroku console ไม่มีปุ่มให้ Import Export ก็เลยลอง Search ดูก็ไปเจอ
date: "2019-03-28T15:18:35.321Z"
categories: []
keywords: []
slug: >-
  /@sippakornraksakiart/export-%E0%B9%81%E0%B8%A5%E0%B8%B0-import-config-vars-%E0%B9%83%E0%B8%99-heroku-eadb1cd72316
---

### TL;DR

Export

heroku config -s -a <app-name> > ~/config-var.txt

Import

cat ~/config-var.txt | tr '\\n' ' ' | xargs heroku config:set -a <app-name>

เนื่องจากวันก่อนจำเป็นต้องสร้าง Development environment เพราะแต่ก่อนมีแค่ Staging กับ Production แล้วตัว API มีการใช้ environment variables เยอะมากเลยเกิดความขี้เกียจที่จะต้องมานั่งก็อปทีล่ะกัน และใน Heroku console ไม่มีปุ่มให้ Import Export ก็เลยลอง Search ดูก็ไปเจอ [นี้](https://emirkarsiyakali.com/heroku-copying-environment-variables-from-an-existing-app-to-another-9253929198d9)

#### อธิบายแต่ล่ะคำสั่ง

Export

heroku config -s -a <app-name> > ~/config-var.txt

\# -s คือดึง config var ออกมา  
\# -a คือชื่อ App

Import

cat ~/config-var.txt | tr '\\n' ' ' | xargs heroku config:set -a <app-name>

\# cat อ่านไฟล์  
\# | ส่งผลลัพจากคำสั่งแรกไปคำสั่ง 2  
\# tr คือ translate characters จริงๆตะคล่ายๆคำสั่ง replace ในกรณีนี้คือแปลง \\n ไปเป็น " " (whitespace)  
\# xargs จะเอาผลลัพธ์จากคำสั่งก่อหน้าไปไป param ของคำสั่งใหม่คือ heroku config:set -a <app-name>

Ref

[https://emirkarsiyakali.com/heroku-copying-environment-variables-from-an-existing-app-to-another-9253929198d9](https://emirkarsiyakali.com/heroku-copying-environment-variables-from-an-existing-app-to-another-9253929198d9)
