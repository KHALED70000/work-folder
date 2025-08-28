## The answers to the provided questions are given below:

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  ANS:
    *getElementById("id")* → একটি নির্দিষ্ট ID এর element return করে (একটাই element পাওয়া যায়)|
    *getElementsByClassName("class")* → ঐ className এর সব element return করে (HTMLCollection আকারে)| 
    *querySelector("selector")* → CSS selector ব্যবহার করে প্রথম element return করে  
    *querySelectorAll("selector")* → CSS selector ব্যবহার করে সব element return করে (NodeList আকারে)|  

---

## 2. How do you create and insert a new element into the DOM?
  ANS:
    - নতুন element তৈরি করতে "document.createElement("tagName")" ব্যবহার করা হয়| 
    - DOM-এ insert করতে "appendChild()", "append()", "prepend()" ব্যবহার করা হয়|  

---

## 3. What is Event Bubbling and how does it work?
  ANS:
    - কোনো element-এ event ঘটলে প্রথমে সেই element-এ কাজ করে, তারপর তার parent → grandparent → document পর্যন্ত উপরের দিকে ছড়িয়ে যায়|  

---

## 4. What is Event Delegation in JavaScript? Why is it useful?
  ANS:
    - Event Delegation মানে parent element-এ event listener বসানো, আর bubbling এর কারণে child element-গুলোর event সেই parent দিয়েই handle করে| 
    - *ব্যবহারের কারণ:*
      - আলাদা আলাদা element-এ event listener বসাতে হয় না|  
      - নতুন element যোগ হলেও কাজ করে|  
      - Performance ভালো হয়|  

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?
  ANS:
    *preventDefault()* → কোনো element-এর default action বন্ধ করে (যেমন: link ক্লিক করলে redirect না হওয়া, form submit না হওয়া)|  
    *stopPropagation()* → Event Bubbling বন্ধ করে (event আর parent element-এ যায় না)|  

---
