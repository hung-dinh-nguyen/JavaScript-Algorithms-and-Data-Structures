function telephoneCheck(str) {
    /* 
    NOTE 1: Create a regex that counts the total value of numbers in the str /\s/ 
    --- if it equals 11 digits, check if the first is 1, 
    --- if 10, run through normally 
    
    NOTE 2: Create 1 additional regex outside of the object = /^1.(STAR)/
    --- Check to see if str starts with 1 
    
    1. Create an object filled with 5 regexes
    a) 5 regexes should match valid formats of US numbers
    2. Create a for loop to iterate str through each regexes in the object 
    3. 
    */
     let copyStr = str.slice(); 
     let regexCheck = /\d/g; 
    
      let objRegex = {
        regex1: /^\d\d\d-\d\d\d-\d\d\d\d$/,
        regex2: /^\(\d\d\d\)\d\d\d-\d\d\d\d$/,
        regex3: /^\(\d\d\d\) \d\d\d-\d\d\d\d$/,
        regex4: /^\d\d\d \d\d\d \d\d\d\d$/,
        regex5: /^\d\d\d\d\d\d\d\d\d\d$/,
        regex6: /^1 \d\d\d-\d\d\d-\d\d\d\d$/,
        regex7: /^1\(\d\d\d\)\d\d\d-\d\d\d\d$/,
        regex8: /^1 \(\d\d\d\) \d\d\d-\d\d\d\d$/,
        regex9: /^1 \d\d\d \d\d\d \d\d\d\d$/,
      };
    
     let arrDigits = copyStr.match(regexCheck); 
    console.log(arrDigits);
      let strDigits = arrDigits.join('');
    console.log(strDigits);
    
      if (arrDigits.length == 11) {
        if (arrDigits[0] == 1) {
          for (let regex in objRegex) {
    console.log(objRegex[regex].test(copyStr));
            if (objRegex[regex].test(copyStr) == true) {
              return true; 
            } 
          }
        }
      }
    
      if (arrDigits.length == 10) {
          for (let regex in objRegex) {
    console.log(objRegex[regex].test(copyStr));
            if (objRegex[regex].test(copyStr) == true) {
              return true; 
          } 
        }
      }
      return false;
    } 
     
telephoneCheck("(555-555-5555");
telephoneCheck("-1 (757) 622-7382");