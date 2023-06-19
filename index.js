function convertToRoman(num) {
  let NumberA = Array.from(String(num), Number);
  let Number1 = NumberA[0];
  let Number2 = NumberA[1];
  let Number3 = NumberA[2];
  let Number4 = NumberA[3];
  function romanUnids(arrayLength) {
    const romanU = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
    };

    const numberDefault = "";
    const numberRomanConvert = romanU[arrayLength] || numberDefault;
    return numberRomanConvert;
  }

  function romanDecends(arrayLength) {
    const romanD = {
      1: "X",
      2: "XX",
      3: "XXX",
      4: "XL",
      5: "L",
      6: "LX",
      7: "LXX",
      8: "LXXX",
      9: "XC",
    };

    const numberDefault = "";
    const numberRomanConvert = romanD[arrayLength] || numberDefault;
    return numberRomanConvert;
  }

  function romanCents(arrayLength) {
    const romanC = {
      1: "C",
      2: "CC",
      3: "CCC",
      4: "CD",
      5: "D",
      6: "DC",
      7: "DCC",
      8: "DCCC",
      9: "CM",
    };

    const numberDefault = "";
    const numberRomanConvert = romanC[arrayLength] || numberDefault;
    return numberRomanConvert;
  }

  function romanHundred(arrayLength) {
    const romanH = {
      1: "M",
      2: "MM",
      3: "MMM",
    };

    const numberDefault = "";
    const numberRomanConvert = romanH[arrayLength] || numberDefault;
    return numberRomanConvert;
  }

  switch (NumberA.length) {
    case 1:
      romanUnids(Number1);
      num = romanUnids(Number1);
      return num;
      break;
    case 2:
      num = romanDecends(Number1) + romanUnids(Number2);
      return num;
      break;
    case 3:
      num = romanCents(Number1) + romanDecends(Number2) + romanUnids(Number3);
      return num;
      break;
    case 4:
      num = romanHundred(Number1) +
        romanCents(Number2) +
        romanDecends(Number3) +
        romanUnids(Number4);
      return num;
      break;

    default:
      console.log("sin numero");
      break;
  }
}

convertToRoman(36);
