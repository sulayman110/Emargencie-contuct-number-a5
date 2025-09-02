<!-- What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll -->
ans: 
getElementById = একটিমাত্র element Return করে (unique)
getElementsByClassName = অনেক গুলো element Return করে
 querySelector = এটা CSS selector ব্যবহার করে element ধরে।প্রথম যে        elementমিলে যায়, শুধু একটিই রিটার্ন করে। 

 querySelectorAll = এটাও CSS selector দিয়ে সব element রিটার্ন করে।

ফলাফল NodeList আকারে আসে (loop বা forEach ব্যবহার করা যায়)।

 <!-- How do you **create and insert a new element into the DOM**? -->
ans: 
1. Create the element = using document.createElement().

2. Add content / attributes = set innerText

3. Insert into the DOM = using appendChild()

 <!-- What is **Event Bubbling** and how does it work? -->
 ans:
 Event Bubbling হলো JavaScript এর একটা Event Propagation মেকানিজম।
 Event Bubbling যে ভাবে কাজ করে =  event প্রথমে child element এ হয়, তারপর ধাপে ধাপে তার parent এরপর যাই grandparent তারপর document পর্যন্ত যায়।


<!-- What is **Event Delegation** in JavaScript? Why is it useful? -->

 Event Delegation হলো JavaScript এর একটা টেকনিক, যেখানে আমরা child element এ আলাদা আলাদা event listener না বসিয়ে, তাদের parent element এ একটা event listener বসাই।

তারপর event bubbling এর মাধ্যমে parent element সেই child element এর event গুলো ধরতে পারে।

কেন দরকারিঃ
যদি আমি একটা বড় ul লিস্ট লিখি যেখানে ১০০টা <li> আছে।
যদি আমি প্রত্যেক <li> তে আলাদা আলাদা click event বসাই, তাহলে  Performance খারাপ হবে কোড maintain করা কঠিন হবে

কিন্তু Event Delegation ব্যবহার করলে —

আমি শুধু ul এ একটাই click event বসালে

event bubbling এর মাধ্যমে  আমি জানতে পারবে কোন <li> তে ক্লিক হয়েছে ।

<!-- What is the difference between **preventDefault() and stopPropagation()** methods? -->

preventDefault = element এর default action বন্ধ করে।

stopPropagation = event এর propagation (ছড়ানো) বন্ধ করে।