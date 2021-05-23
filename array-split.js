const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2,6);
const removed = nums.splice(1,4, //inject 
    55,66);
console.log(part);
console.log("remove",removed);
console.log(nums);
const together = nums.join(",");
console.log(together);
