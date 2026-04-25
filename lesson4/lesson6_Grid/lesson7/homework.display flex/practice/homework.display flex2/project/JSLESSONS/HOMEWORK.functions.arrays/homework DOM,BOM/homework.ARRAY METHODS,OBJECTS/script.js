// function double(num){
//     return num*2
// }

// console.log(double(5))

// function square(num){
//     return num*num
// }

// console.log(square(6))
// console.log(square(8))

// function sum(a,b){
//     return a+b
// }

// console.log(sum(3,9))
// console.log(sum(25,40))

// function isPositive(num){
//     return num >0
// }

// console.log(isPositive(6))
// console.log(isPositive(0))
// console.log(isPositive(-7))

// function isEven(num){
//     return num %2===0

// }

// console.log(isEven(6))
// console.log(isEven(9))
// console.log(isEven(11))

// function getLength(text){
//     return text.length
// }

// console.log(getLength("phyton"))
// console.log(getLength("javascript"))

// function toUpper(text){
//     return text.toUpperCase()
// }

// console.log(toUpper("backend"))
// console.log(toUpper("marketing"))

// function addDot(text){
//     return text +"."
// }

// console.log(addDot("Привет"))
// console.log(addDot("JavaScript"))

// function getFirstChar(text){
//     return text[0]
// }

// console.log(getFirstChar("Hello"))

// function applyDiscount(price){
//     return price*0.9
// }

// console.log(applyDiscount(1000))
// console.log(applyDiscount(500))


// const double=(num)=>num*2

// const add=(a,b)=>a+b

// const isPositive=(num)=>num>0

// const isEven=(num)=>num%2===0

// const toUpper=(text)=>text.toUpperCase()

// const getMax=(a,b)=>a>b?a:b

// console.log(getMax(5, 10))
// console.log(getMax(20, 7))

// const makeLoud = (text) => text + "!"

// console.log(makeLoud("hello"))
// console.log(makeLoud("Привет"))

// let nums = [5, 12, 8, 20, 3, 15]

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i])
// }

// let nums = [5, 12, 8, 20, 3, 15]

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i] * 2)
// }

// let nums = [5, 12, 8, 20, 3, 15]

// let sum = 0

// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i]
// }

// console.log(sum)

// let nums = [5, 12, 8, 20, 3, 15]

// let max = nums[0]

// for (let i = 1; i < nums.length; i++) {
//   if (nums[i] > max) {
//     max = nums[i]
//   }
// }

// console.log(max);

// let nums = [5, 12, 8, 20, 3, 15]

// let count = 0

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 === 0) {
//     count++
//   }
// }

// console.log(count)

// let words = ["apple", "hi", "banana", "cat", "orange"]

// let upperWords = words.map(word => word.toUpperCase())

// console.log(upperWords)

// let words = ["apple", "hi", "banana", "cat", "orange"]

// let lengths = words.map(word => word.length)

// console.log(lengths)

// let words=["apple","hi","banana","orange"]
// let result=words.filter(word=>word.length>4)
// console.log(result)

// let words=["apple","hi","banana","orange"]
// let result=words.find(word=>word.length>5)
// console.log(result)

// let words = ["apple", "hi", "banana", "cat", "orange"]

// let hasBanana = words.includes("banana")

// console.log(hasBanana)

// let words = ["apple", "hi", "banana", "cat", "orange"]
// let sentence=words.join(" ")

// console.log(sentence)

// let nums = [10, 20, 30, 40, 50]

// nums.push(60)

// console.log(nums)

// let nums = [10, 20, 30, 40, 50]

// nums.pop(50)

// console.log(nums)

// let nums = [10, 20, 30, 40, 50]

// nums.unshift(60)

// console.log(nums)

// let nums = [10, 20, 30, 40, 50]

// nums.shift(10)

// console.log(nums)

// let nums = [10, 20, 30, 40, 50]

// console.log(nums.slice(1,3))

// let nums = [5, 12, 8, 20, 3, 15]

// let result = nums
//   .filter(num => num > 10)
//   .map(num => num * 3)

// console.log(result)

// ДОМАШНЕЕ ЗАДАНИЕ

// function triple(num) {
//   return num * 3;
// }

// console.log(triple(2))
// console.log(triple(5))
// console.log(triple(10))

// function isNegative(num) {
//   return num < 0;
// }

// console.log(isNegative(-5))
// console.log(isNegative(3))
// console.log(isNegative(0))

// function lastLetter(text) {
//   return text[text.length - 1];
// }

// console.log(lastLetter("hello"))
// console.log(lastLetter("JavaScript"))
// console.log(lastLetter("a"))

// function makeQuestion(text) {
//   return text + "?"
// }

// console.log(makeQuestion("Как дела"))
// console.log(makeQuestion("Ты готова"))

// const triple = (num) => num * 3
// const isNegative = (num) => num < 0
// const lastLetter = (text) => text[text.length - 1]
// const makeQuestion = (text) => text + "?"

// let nums = [7, 14, 2, 9, 20, 11, 4]
// let sum=0

// for (let i=0;i<nums.length;i++){
//     sum=sum+nums[i]
// }

// console.log(sum)

// let nums=[8,3,15,0,22,10]
// let max=nums[0]

// for (let i = 1; i < nums.length; i++) {
// if (nums[i] > max) {
// max = nums[i]
// }
// }
// console.log(max)

// let nums=[8,3,15,0,22,10]
// let count = 0;
// for (let i = 0; i < nums.length; i++) {
// if (nums[i] % 2 === 0) {
// count++;
// }
// }
// console.log(count)

// let nums = [1, 2, 3, 4, 5]

// let result = nums.map(num => num + 5)

// console.log(result)

// let nums = [5, 12, 8, 20, 3, 15]

// let result = nums.find(num => num > 10)

// console.log(result)

// let words = ["red", "blue", "green", "hi", "yellow", "cat"]
// let upperWords = words.map(word => word.toUpperCase())
// console.log(upperWords)

// let words = ["red", "blue", "green", "hi", "yellow", "cat"]

// let lengths = words.map(word => word.length)

// console.log(lengths)

// let words = ["red", "blue", "green", "hi", "yellow", "cat"]

// let result = words.filter(word => word.length > 3)

// console.log(result)

// let words = ["red", "blue", "green", "hi", "yellow", "cat"]

// let result = words.find(word => word[0] === "g")

// console.log(result)

// let words = ["red", "blue", "green", "hi", "yellow", "cat"]
// let sentence=words.join(",")

// console.log(sentence)