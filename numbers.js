//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
//not sure how to make string 8 into a number, split maybe
var sum = num10 + one + string8;
console.log(sum);
//2. write a loop that will log only numbers divisible by 3 between 20 - 100
for (let i = 20; i < 100; i++) {
  if (i % 3 == 0)
    console.log(i)
}




//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

function avg(arr, num) {
  arr = scores;
  num = scores.length
  for (let i = 0; i < scores.length; i++) {
    let sumArray = 0;
    sumArray += scores[i];
    let Average = 0
    return Average = (sumArray / scores.length);
  }
}
