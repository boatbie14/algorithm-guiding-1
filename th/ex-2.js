const romanToInt = function (s) {
  const spiltText = s.split("");
  console.log(spiltText);

  const switchToNumber = spiltText.map((text) => {
    switch (text) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return 0;
    }
  });

  console.log(switchToNumber);

  let result = 0;

  for (let i = 0; i < switchToNumber.length; i++) {
    if (switchToNumber[i] < switchToNumber[i + 1]) {
      result -= switchToNumber[i];
    } else {
      result += switchToNumber[i];
    }
  }

  return result;
};

const result4 = romanToInt("IV"); //4
console.log("result 4 = " + result4);
console.log("========");

const result5 = romanToInt("VII"); //7
console.log("result 5 = " + result5);
console.log("========");

const result6 = romanToInt("VXX"); //7
console.log("result 5 = " + result6);
console.log("========");

const result1 = romanToInt("III"); // 3
console.log(result1);
console.log("========");

const result2 = romanToInt("LVIII"); // 58
console.log(result2);
console.log("========");

const result3 = romanToInt("MCMXCIV"); //1994
console.log("result = " + result3);
console.log("========");
