---
title: Type alias Vs Interface ใน Typescript
description: >-
  หลายคนที่เขียน TypeScript คงเคยมีทำถามประมาณว่า “เย็ดโด้ !!! จะสร้าง Type
  ไหมตรูควรใช้ type alias หรือ interface ดีฟระ”…
date: "2017-09-08T11:03:56.953Z"
categories: []
keywords: []
---

![](https://cdn-images-1.medium.com/max/800/1*g8iL_qPoh4NotaTrrOeDGw.png)

หลายคนที่เขียน TypeScript คงเคยมีทำถามประมาณว่า “เย็ดโด้ !!! จะสร้าง Type ไหมตรูควรใช้ type alias หรือ interface ดีฟระ” ก็ลองมาดูกันเลยว่ามันต่างกันอย่างไร

หลายคนคงรู้จัก Interface กันอยู่แล้วงั้นเราจะข้ามไปไม่พูดถึงมัน (อ่าว เชี่ย!)

### นิยามของ type alias

_Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand._

_สรุปคือแมร่งเหมือน interface แต่สามารถกำหนดชื่อให้ primitives type ได้ ใช้ในรูป unions ได้ ในรูป tuples ได้_

### ลองเล่น Type กันหน่อย

1\. ลองกำหนดชื่อให้ type string ใหม่

ซึ่งจาก code ข้างบนเราไม่สามารถใช้ interface ทำแบบนี้ได้

2\. ลองใช้ unions ดูบ่าง

จะเห็นว่า type **NumberOrStringOrStudent** ของเราจะสามารถเป็นไปได้ถึง 3 type ด้วยกัน พอลองกำหนดให้ตัวแปร myValue เป็นค่า true จะเห็นว่ามันจะ error เจ็ดโด้ !!! คูลอ่ะดิซึ่งแบบนี้เราไม่สามารถใช้ interface define type แบบนี้ได้นะครัชชชชช

3). ข้อดีของ Interface คือการทำ inheritance ซึ่ง type alias ไม่สามารถใช้ความสามารถของ inheritance ได้ แต่ผมก็สงสัยว่าเราสามารถใช้ interface extends type ที่สามารถมาจาก type alias ได้ป่าว

เจ็ดโด้ !!!! จะเห็นว่ามันสามารถ extends type ที่สร้างจาก type alias ได้

### สรุป

คงขึ้นอยู่กับสถานการณ์น่ะครับ ว่าเราจะใช้ความสามารถพวกนั้นของ type alias หรือ interface หรือป่าว แต่สำหรับผมโดย default คงเลือกใช้ interface เพราะดูเป็นมาตรฐานกว่า

**Ref**

[**In Typescript, what is the difference between type and interface?**  
\_Interfaces can be extended interface A { x: number; } interface B extends A { y: string; } and also augmented interface…\_stackoverflow.com](https://stackoverflow.com/questions/36782896/in-typescript-what-is-the-difference-between-type-and-interface "https://stackoverflow.com/questions/36782896/in-typescript-what-is-the-difference-between-type-and-interface")[](https://stackoverflow.com/questions/36782896/in-typescript-what-is-the-difference-between-type-and-interface)

[**Advanced Types · TypeScript**  
\_You can combine string literal types, union types, type guards, and type aliases to build an advanced pattern called…\_www.typescriptlang.org](https://www.typescriptlang.org/docs/handbook/advanced-types.html "https://www.typescriptlang.org/docs/handbook/advanced-types.html")[](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
