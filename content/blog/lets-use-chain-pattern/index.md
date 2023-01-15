---
title: ใช้ optional chaining ดีกว่านะเมิง code น่าจะอ่านง่ายกว่า
date: "2023-01-15T05:56:49.249Z"
description: "พอดีเห็นเมิงเขียนเช็ค null น่ะ จริงๆใช้ optional chaining ก็ได้"
---

ถ้าเมิงรู้ว่ากุไปดู PR เมิง เมิงคงำม่ชอบใจแน่ๆ ขอโทษทีวะ แมร่งยังคิดถึงอยู่เลย ก็ปล่อยกุดูไปก่อนนะ มันเป็นทางเดียวที่กุได้รู้ว่าเมิงเป็นไง

พอดีเห็นเมิงใช้

```js
const reviewDetail = review.attr.reviewDetail ? review.attr.reviewDetail : null;
```

จริงๆเราใช้ optional chaining แบบนี้ได้นะ

```js
const reviewDetail = review.attr?.reviewDetail;
```

แต่จะใช้แบบนี้ก็ต่อเมื่อ `review` เป็น object นะเช่น `const review = {}` ถ้าเป็น null หรือ undefined จะไม่ได้

อีกอันคือใน component อ่ะเวลา reder อ่ะเมิงจะเขียนประมาณนี้ช่ะ
```jsx
<div>
{
  images.data ? images.map(.......) : ''
}
</div>
```

จริงเปลี่ยนเป็นแบบนี้ได้นะ

```jsx
<div>
  images.data && images.map(.......)
</div>
```
