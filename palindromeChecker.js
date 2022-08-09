function palindrome(str) {
    let copyStr = str.slice();
    let lowStr = copyStr.toLowerCase();  
    let regex = /[a-z0-9]/ig; 
    
    let pureStr = lowStr.match(regex);
  console.log(pureStr);
  
    let mirrorStr = [];
    for (let i = 0; i < pureStr.length; i++) {
      mirrorStr.unshift(pureStr[i]);
    }
  console.log(mirrorStr); 
  
    if (mirrorStr.join('') == pureStr.join('')) {
      return true; 
    } else {
      return false;
    }
  }
  
  palindrome("eye");
  palindrome("_eye");
  palindrome("A man, a plan, a canal. Panama");