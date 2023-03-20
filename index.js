function convertToRoman(num) {
  let NumberA = Array.from(String(num), Number);
  console.log(NumberA)
  let unit = "";
  function romanUnits123() {
    if (NumberA[0] >= 1 && NumberA[0] <= 3) {
      unit = "I";
      for (let index = 1; index < NumberA[0]; index++) {
        unit += "I";
      }
      console.log(unit);
      return unit;
    } else if (NumberA[0] == 4) {
      unit = "V";
      for (let index = 1; index < NumberA[0]; index++) {
        "I" + unit;
      }
      console.log("I" + unit);
      return unit;
    } else if (NumberA[0] >= 5 && NumberA[0] <= 8) {
      unit = "V";
      for (let index = 1; index < NumberA[0]; index++) {
        unit += "I";
      }
      console.log(unit);
      return unit;
    }
  }

  switch (NumberA.length) {
    case 1:
      romanUnits123();
      // romanUnits45678();
      break;
    // case 2:
    //   break;
    // case 3:
    //   console.log("la cantidad de numero es: " + NumberA.length);
    //   console.log(NumberA[0], NumberA[1], NumberA[2]);
    //   break;
    // case 4:
    //   console.log("la cantidad de numero es: " + NumberA.length);
    //   console.log(NumberA[0], NumberA[1], NumberA[2], NumberA[3]);
    //   break;
    default:
      console.log('sin numeros')
      break;
  }
}

convertToRoman(5);
