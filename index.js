function convertToRoman(num) {
  let NumberA = Array.from(String(num), Number);
  let unit = "";
  function romanUnits123(numberTest) {
    let residuoPrueba = numberTest % 5;
    if (numberTest >= 1 && numberTest <= 3) {
      unit = "I";
      for (let index = 1; index < numberTest; index++) {
        unit += "I";
      }
      console.log(unit);
      return unit;
    } else if (numberTest == 0 || undefined) {
      unit = " ";
      return unit;
    } else if (numberTest == 4) {
      unit = "IV";
      console.log(unit);
      return unit;
    } else if (numberTest == 5) {
      unit = "V";
      console.log(unit);
      return unit;
    } else if (numberTest == 9) {
      unit = "IX";
      console.log(unit);
      return unit;
    } else if (numberTest >= 6 && numberTest <= 8) {
      unit = "V" + romanUnits123(residuoPrueba);
      console.log(unit);
      return unit;
    }
  }

  function romanTens123(numberTest) {
    if (numberTest >= 1 && numberTest <= 3) {
      unit = "X";
      for (let index = 1; index < numberTest; index++) {
        unit += "X";
      }
      console.log(unit + romanUnits123(NumberA[1]));
      return unit;
    } else if (numberTest == 4) {
      unit += "XL";
      console.log(unit + romanUnits123(NumberA[1]));
    } else if (numberTest == 5) {
      unit += "L";
      console.log(unit + romanUnits123(NumberA[1]));
    } else if (numberTest >= 6 && numberTest <= 8) {
      unit = "L";
      for (let index = 5; index < numberTest; index++) {
        unit += "X";
      }
      console.log(unit + romanUnits123(NumberA[1]));
      return unit;
    } else if (numberTest == 9) {
      unit += "XC";
      console.log(unit + romanUnits123(NumberA[1]));
    }
    console.log(unit);
    return unit;
  }

  switch (NumberA.length) {
    case 1:
      romanUnits123(NumberA[0]);
      break;
    case 2:
      romanTens123(NumberA[0]);
      break;
    default:
      console.log("sin numeros");
      break;
  }
}

convertToRoman(90);
