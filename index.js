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

    const numberDefault = " ";
    const numberRomanConvert = romanU[arrayLength] || numberDefault;
    return numberRomanConvert;
  }

  switch (NumberA.length) {
    case 1:
      console.log(romanUnids(Number1));
      break;

    default:
      console.log("sin numero");
      break;
  }

  romanUnids();
}

convertToRoman(3);
