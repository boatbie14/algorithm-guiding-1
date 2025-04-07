/*
#
# Option 1 
#
*/

const moveZeroes = function (nums) {
  let zeroArr = [];
  let numsArr = [];

  nums.filter((num) => {
    if (num <= 0) {
      zeroArr.push(num);
    } else {
      numsArr.push(num);
    }
  });

  console.log("Zero = " + zeroArr);
  console.log("Num = " + numsArr);

  for (let i = 0; i < numsArr.length - 1; i++) {
    for (let j = 0; j < numsArr.length - 1 - i; j++) {
      if (numsArr[j] > numsArr[j + 1]) {
        let temp = numsArr[j];
        numsArr[j] = numsArr[j + 1];
        numsArr[j + 1] = temp;
      }
    }
  }

  const result = [...numsArr, ...zeroArr];
  return result;
};

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]
