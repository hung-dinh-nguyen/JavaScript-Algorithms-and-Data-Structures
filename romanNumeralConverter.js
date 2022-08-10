function convertToRoman(num) {
    let objRoman = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C':100,
      'CD': 400,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1
    }
  
    let copy = num;
    var array = []; 
  
    function pushArr(copyNum, arrRoman) {
    while (copyNum > 0) {
      if (copyNum - objRoman.M >= 0) {
        copyNum = copyNum - objRoman.M; 
        arrRoman.push('M');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.CM >= 0) {
        copyNum = copyNum - objRoman.CM; 
        arrRoman.push('CM');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.D >= 0) {
        copyNum = copyNum - objRoman.D; 
        arrRoman.push('D');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.CD >= 0) {
        copyNum = copyNum - objRoman.CD;
  console.log(copyNum) 
        arrRoman.push('CD');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.C >= 0) {
        copyNum = copyNum - objRoman.C;
  console.log(copyNum) 
        arrRoman.push('C');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.XC >= 0) {
        copyNum = copyNum - objRoman.XC;
  console.log(copyNum) 
        arrRoman.push('XC');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.L >= 0) {
        copyNum = copyNum - objRoman.L;
  console.log(copyNum) 
        arrRoman.push('L');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.XL >= 0) {
        copyNum = copyNum - objRoman.XL;
  console.log(copyNum) 
        arrRoman.push('XL');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.X >= 0) {
        copyNum = copyNum - objRoman.X;
  console.log(copyNum) 
        arrRoman.push('X');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.IX >= 0) {
        copyNum = copyNum - objRoman.IX;
  console.log(copyNum) 
        arrRoman.push('IX');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.V >= 0) {
        copyNum = copyNum - objRoman.V;
  console.log(copyNum) 
        arrRoman.push('V');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.IV >= 0) {
        copyNum = copyNum - objRoman.IV;
  console.log(copyNum) 
        arrRoman.push('IV');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
      if (copyNum - objRoman.I >= 0) {
        copyNum = copyNum - objRoman.I;
  console.log(copyNum) 
        arrRoman.push('I');
  console.log(arrRoman);
      return pushArr(copyNum, arrRoman);
      }
    } 
    return arrRoman;
  }
    pushArr(copy, array);
  
  console.log(array)
  
    let romanNumeral = array.join('');
  console.log(romanNumeral);
    return romanNumeral;
  }
  
  
console.log(convertToRoman(798));

