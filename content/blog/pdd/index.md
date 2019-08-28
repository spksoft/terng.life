---
title: "PDD : Puzzle driven development ด้วย 0pdd"
description: >-
  หลายวันก่อนได้มีโอกาสดู Live โดย คุณไท และ น้องภูมิ ขึ้นโครงเว็บของงาน React
  Thailand Meetup 3.0 ซึ่งมีช่วงนึงเขาพูดถึง PDD หรือ Puzzle…
date: "2018-05-07T11:15:29.907Z"
categories: []
keywords: []
slug: >-
  /@sippakornraksakiart/pdd-puzzle-driven-development-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-0pdd-add6cef7dfdd
---

![](https://cdn-images-1.medium.com/max/800/1*lfSjrqBrF1TTRZIg0iAudw.png)

หลายวันก่อนได้มีโอกาสดู [Live](https://www.facebook.com/dtinth/videos/10209923835926705/) โดย [คุณไท](https://github.com/dtinth/2.0.0) และ [น้องภูมิ](https://github.com/phoomparin) ขึ้นโครงเว็บของงาน [React Thailand Meetup 3.0](https://github.com/reactbkk) ซึ่งมีช่วงนึงเขาพูดถึง PDD หรือ Puzzle Driven Development ซึ่งฟังดูแล้วน่าสนใจมากเลยลองไปหาข้อมูลดูและอยากมาแชร์ให้ฟังกันครับ

### Outline

- PDD คืออะไร
- ลองดู Project ที่ใช้ PDD
- ลองใช้ [0pdd](https://github.com/yegor256/0pdd) PM Bot

### PDD คืออะไร

PDD เป็นแนวคิดการพัฒนา software ที่คิดค้นโดย [yegor256](https://www.yegor256.com/2010/03/04/pdd.html) @ [Zerocrazy](http://www.zerocracy.com/)

โดย PDD เกิดมาเพื่อ Implement การจัดการ Project แบบ [Distributed development](https://en.wikipedia.org/wiki/Distributed_development) โดย [Distributed development](https://en.wikipedia.org/wiki/Distributed_development) กล่าวคร่าวๆคือโดยปกติการพัฒนา Software คนในทีมอาจจะต้องมาคุยกัน meeting กัน planing กัน หรือ รับ Requirement แต่ว่าหากเราใช้ PDD มันจะทำให้แต่ล่ะคนในทีมไม่จำเป็นต้องมาเจอกันแบบ face to face ซึ่งแนวคิดนี้เหมาะมากกับการนำมาใช้กับ Open source Project

ซึ่งวิธีของ PDD คือจะมอง Issue (bug, feature, other) เป็นอะไรที่ใหญ่มากๆ ซึ่งใน Issue เนี้ยเราจะย่อยมันเป็น todo โดยไอ้ todo นี้แหละเราจะเรียกมันว่า puzzle เช่น Issue ใหญ่คือ _“เพิ่มระบบ Login โดยต่อกับ Firebase”_ ซึ่งเราทำไม่เสร็จแน่ในคนเดียวเราก็ทำการขึ้นโคร่งคร่าวๆไว้ อาจจะเป็นการสร้างไฟล์ สร้าง Test หรือ สร้างฟังชั่นคร่าวๆไว้ โดยให้เราใส่ TODO ไว้ทุกอย่างที่ต้องกลับมาทำ ซึ่ง PDD จะมอง TODO เป็น Puzzle ที่เล็กและสามารถให้คนอื่นมาช่วยแก้ Puzzle ได้ จะเห็นว่าการทำแบบนี้จะทำให้ Issue นึงมีคนมาช่วย solve puzzle เพื่อให้ Issue นั้นปิดได้ง่าย ซึ่งเราจะลองทำ PDD โดยใช้บอท [0pdd](https://github.com/yegor256/0pdd) กัน

### ทดลองใช้ [0pdd](https://github.com/yegor256/0pdd)

[0pdd](https://github.com/yegor256/0pdd) เป็น bot ที่ทำหน้าที่เป็น PM ให้กับ Project ของเรา

ก่อนลงมือทำขอเล่าก่อนว่า [0pdd](https://github.com/yegor256/0pdd) มันทำอะไรได้บ่าง

- ดักจับ @todo เพื่อเอามาสร้างเป็น issue
- ดักจับ @todo ว่ายังมีอยู่ไหมถ้าไม่มีแล้วก็ถือว่า issue นั้นปิดแล้ว
- Report ได้ว่า Issue หลักมีการ puzzle ที่ยังไม่เสร็จ

#### ทำการเพิ่ม [0pdd](https://github.com/yegor256/0pdd) ไปใน Project เราใน github

ทำการ add webhook ไปที่

http://p.rehttp.net/http://www.0pdd.com/hook/github

และ set ให้ hook ไปเมื่อมี event **_push_**

![](https://cdn-images-1.medium.com/max/800/1*PabrTA_qP3V3Awuj7zn8fQ.png)

ทำการเพิ่ม [0pdd](https://github.com/yegor256/0pdd) เป็น Collaborators (ในกรณีที่ต้องการใช้ label)

![](https://cdn-images-1.medium.com/max/800/1*SGSWcpl0UJWLeNCmINZFEA.png)

ตอนนี้ [0pdd](https://github.com/yegor256/0pdd) ก็ก็สามารถเข้ามาจัดการ Project ของเราได้แล้ว

#### ทำการเพิ่ม Issue ใน github repo ของเรา

![](https://cdn-images-1.medium.com/max/800/1*aUfxsfZrXgoHMI4K4-SFQw.png)

จากนั้นเราลองคิดดูว่าเราจะต้อง Implement อะไรบ่างเพื่อให้ Issue นี้ปิดได้เช่น

- ต้องทำการสร้าง Store ใน Mobx
- ต้องการสร้างตัวเชื่อมต่อ firebase
- ต้องทำการ implement login container
- more

#### ทำการเพิ่ม @todo ไปใน Code ของเรา

โดย syntax จะเป็นประมาณนี้ครับ

// @todo #<id of issue>:<estimate time> detail of todo (puzzle)

![ตัวอย่างการใช้ @todo](https://cdn-images-1.medium.com/max/800/1*aBPbQgqR1wXTZVHR2L4RGQ.png)
ตัวอย่างการใช้ @todo

จะเห็นว่าพอเรา push code ขึ้นไปจะมี Issue เพิ่มขึ้นมาเพื่อรอให้คนมาทำ

![](https://cdn-images-1.medium.com/max/800/1*BJAbOSXrb2w00pybSxlzcg.png)

และหากเราลองเข้าไปดูใน Issue หลักของเราจะเห็นว่า [0pdd](https://github.com/yegor256/0pdd) จะมีการรายงานความเคลื่อนไหวตลอด

![](https://cdn-images-1.medium.com/max/800/1*gtLE1qAbd2DXSopUvBuzwQ.png)

หากเราลองกดไปดู issue ที่ถูกสร้างโดย [0pdd](https://github.com/yegor256/0pdd) ก็จะเห็นว่าจะมี detail อยู่ว่า relate กับ issue ไหน ต้องใช้เวลาเท่าไหร

![](https://cdn-images-1.medium.com/max/800/1*n-DUedUmcUPgJ_nKJj5oFA.png)

#### ลองลบ @todo ออกจาก code

หากเราทำการ implement ต่างของ puzzle นั้นๆเสร็จแล้วก็สามารถลบ todo ออกจาก code ได้เลยแล้วบอทก็จะทำการ report owner และปิด issue ให้

![](https://cdn-images-1.medium.com/max/800/1*e7RxwkF7WtaSNOFiUT-b8Q.png)

### สรุปกันหน่อย

จะเห็นว่า [0pdd](https://github.com/yegor256/0pdd) สามารถช่วยให้เรา tag งานได้ง่ายขึ้นและสามารถช่วยให้คนอื่นสามารถมาช่วยให้เราปิด Issue ได้ง่าย ซึ่งจริงแล้วมีบอทอีกตัวนึงของ [yegor256](https://www.yegor256.com/2010/03/04/pdd.html) เหมือนกันชื่อว่า [0crat](https://www.0crat.com/) ซึ่ง 0crat จะเป็น PM ที่เก่งกว่าคือสามารถหาคนมาทำ issue ได้ จ่ายเงินรับเงินได้ จัดการคะแนนนู้นนี้นั้นได้ สำหรับวันนี้สวีสดีครับ ;)

### Ref.

[**Puzzle Driven Development**  
\_PDD, or Puzzle Driven Development, is a method used to break down programming tasks into smaller ones and enable their…\_www.yegor256.com](https://www.yegor256.com/2010/03/04/pdd.html "https://www.yegor256.com/2010/03/04/pdd.html")[](https://www.yegor256.com/2010/03/04/pdd.html)

[**US20120023476A1 - Puzzle Driven Development (PDD) Method and Software - Google Patents**  
\_Puzzle Driven Development (PDD) method and software that optimizes communication and planning of concurrent development…\_patents.google.com](https://patents.google.com/patent/US20120023476 "https://patents.google.com/patent/US20120023476")[](https://patents.google.com/patent/US20120023476)

[**PDD in Action**  
\_Puzzle Driven development (PDD) is a methodology we've been practicing on our teams for more than seven years. Using…\_www.yegor256.com](https://www.yegor256.com/2017/04/05/pdd-in-action.html "https://www.yegor256.com/2017/04/05/pdd-in-action.html")[](https://www.yegor256.com/2017/04/05/pdd-in-action.html)

[**yegor256/0pdd**  
\_0pdd - PDD Puzzles Collector_github.com](https://github.com/yegor256/0pdd "https://github.com/yegor256/0pdd")[](https://github.com/yegor256/0pdd)

[**Zerocracy**  
\_An automated project management chat bot to streamline software development project in a distributed team; a project…\_www.zerocracy.com](http://www.zerocracy.com/ "http://www.zerocracy.com/")[](http://www.zerocracy.com/)
