// const arr = [1,'s',23,'yy',-99,0]
// function numberFilter(l) {
//     return l.filter((val)=>Number.isFinite(val))
// }
// console.log(numberFilter(arr));


// const number = -1
// const ss = function (num) {
//     const res = Math.sqrt(number)
//     if(Number.isInteger(res)) {
//         return true 
//     } else {
//         return false
//     }
// }
// console.log(ss());


// const arr = ["Bolta","Altynai","Adilet","Aibek","Kubas","Aibolat"]
// function filterByA(l) {
//     return l.filter((val)=> val.length === 4)
// }
// console.log(filterByA(arr));


// const numbers = 1947837
// const res = numbers.toString().split("").reverse().map(Number)
// console.log(res);


// function hoopCount (n) {
//    if (n<10) {
//      return "Keep at it until you get it"
//    } else {
//       return "Great, now move on to tricks"
//    }
// } 


// function updateLight(current) {
//   if  (current==="green") {
//      return "yellow"
//   } else if (current==="yellow") {
//   return "red"
//    } else if (current==="red") {
// return "green"
//    }
// }


// const str = "helulo worlid tashkent"
// const res = str.match(/[^AOUEIaioeu]/ig).join("")
// console.log(res);


// const string = "123456"
// console.log( typeof Number(string));


// function getSum(a, b) {
//   let min = Math.min(a, b);
//   let max = Math.max(a, b);

//   let count = max - min + 1;
//   return (count * (min + max)) / 2;
// }
// console.log(getSum(2,-9));



// function findAverage(array) {
//   if (array.length===0) {
//     return 0
// } else {
//   return (array.reduce((acc,val)=>acc+val)/array.length)
// }
// }
// console.log(findAverage([1,1,1]));



// function yy(num) {
//    var res = ''
//     for (var l = 1; l <= num; l++) {
//        res += `${l} sheep...`
//     }
//     return res
// }
// console.log(yy(7));


// let str = "allRight"
// function solution(text) {
//     return str.split(/(?=[A-Z])/).toString().replaceAll(","," ") 
  
// }
// console.log(solution());


// function solution(s) {
//     return s.replaceAll(/!/g,"")
// }

// console.log(solution(""));


// 1 hours 0.5 l
// const number = 1
// function litres(l) {
//    return parseInt(number/2)
// }
// console.log(litres());

// const pointsMe = 100
// const pointsClass = [50,50,50]
// function betterThanAverage() {
//     const res =  pointsClass.reduce((acc,val)=>acc+val)/pointsClass.length   
// if (res <pointsMe) {
//   return true
// } else {
//     return false
// }
// }
// console.log(betterThanAverage());


// const ss = "jon will"
// function abbrevName(name){
//     const toArr =  ss.split(" ")
//     const first = toArr[0].charAt(0).toLocaleUpperCase()
//     const second = toArr[1].charAt(0).toLocaleUpperCase()
//     return `${first}.${second}`
// }
// console.log(abbrevName());



// function otherAngle(a, b) {
//   return 180-a-b
// }

// console.log(otherAngle(2,3));


// const num = "1 2 3 4 56 76 8 9"
// function highAndLow(numbers){
//     const arr = num.split(" ")
//     const res = Math.min(...arr)
//     const res2 = Math.max(...arr)
//     return `${res} ${res2}`
// }
// console.log(highAndLow());

