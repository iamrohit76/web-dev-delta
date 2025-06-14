// Qs1.WriteaJSprogramtodeletealloccurrencesofelement ‘num’ inagivenarray.
//  Example: ifarr=[1,2,3,4,5,6,2,3]&num=2
//  Resultshouldbearr=[1,3,4,5,6,3]

// let arr = [1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// Qs2.WriteaJSprogramtofindthenoofdigitsinanumber.
//  Example: ifnumber=287152,count=6

let number = 287152;
let count = 0;

while (number > 0) {
    number = Math.floor(number / 10); // remove last digit
    count++;
}

console.log(count); // Output: 6
