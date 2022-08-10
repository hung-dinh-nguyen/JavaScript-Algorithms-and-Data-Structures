function rot13(str) {
    /*
    1. split('') str into a arrStr
    2. convert elements into ASCII values .toCharCode() 
    NOTE: Create a for loop to loop iterate through each element 
    3. create If Statement when ASCII are within the values of capital letters 
    a) create another If Else Statement where If ASCII Value + 13 is equal to or less than ASCII Value for Z, replace() or splice(i, 1, newValue) ASCII Value + 13, 
    b) else replace() or splice(i, 1, newValue) ASCII Value + 13 - 26(# of letters in alphabet)
    4. join('') the array into a new string
    */ 
    
      let copyStr = str.slice();
      let arrStr = []; 
      
      for (let i = 0; i < copyStr.length; i++) {
        arrStr.push(copyStr.charCodeAt(i));
      }
    console.log(arrStr);
    
      for (let j = 0; j < arrStr.length; j++) {
        if (65 <= arrStr[j] && arrStr[j] <= 90) {
          if (65 <= (arrStr[j] + 13) && (arrStr[j] + 13) <= 90) {
            arrStr[j] = (arrStr[j] + 13); 
    console.log(arrStr);
          } else {
            arrStr[j] = (arrStr[j] + 13 - 26);
          }
        }
      }
    console.log(arrStr);
    
      let newStr = String.fromCharCode(...arrStr);
    console.log(newStr);
    
      return newStr;
    }
    
rot13("SERR PBQR PNZC");