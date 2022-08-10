function checkCashRegister(price, cash, cid) {
    /* 
    1. slice() cid into a copyCid array 
    2. determine change amount by finding the difference between price and cash 
    3. Create a for loop to sum the values in CID 
    4. Check if CID is less than Change.  
    a) If so, return {status: "INSUFFICIENT_FUNDS", change: []}
    5. If CID == Change, return {status: "CLOSED", change: copyCID}
    6. If CID > Change, perform a function similar to Roman Numeral Challenge 
    a) subtract the highest values until Change = 0
    
    NOTES:
    // create a 2nd function that cleans up the first
    // it checks if any subtraction from copyCid will produce a negative value on the return value from fucntion 1 
    // Remove elements where array value is 0 
    */
      let copyCid = cid.slice(); 
      let arrChange = [
      ["ONE HUNDRED", 0],
      ["TWENTY", 0],
      ["TEN", 0],
      ["FIVE", 0],
      ["ONE", 0],
      ["QUARTER", 0],
      ["DIME", 0],
      ["NICKEL", 0],
      ["PENNY", 0]
    ]
      let leftover = cash - price; 
    console.log('leftover1 = ' + leftover);
      let sum = 0;
      let total;
    console.log(copyCid);
     
      for (let i = 0; i < copyCid.length; i++) {
        sum += copyCid[i][1]; 
        total = sum.toFixed(2);
      }
    console.log('total = ' + total);
     
      if (total == leftover) {
        return {status: "CLOSED", change: copyCid}
      }
      
      function changeLoop(change) {
        change = change.toFixed(2);
        if (copyCid[8][1] - 100 >= 0 && change - 100 >= 0) {
          copyCid[8][1] = copyCid[8][1] - 100;
          change = change - 100;
          arrChange[0][1] = arrChange[0][1] + 100;
          return changeLoop(change)
        }
        if (copyCid[7][1] - 20 >= 0 && change - 20 >= 0) {
          copyCid[7][1] = copyCid[7][1] - 20;
          change = change - 20;
          arrChange[1][1] = arrChange[1][1] + 20;
          return changeLoop(change)
        }
        if (copyCid[6][1] - 10 >= 0 && change - 10 >= 0) {
          copyCid[6][1] = copyCid[6][1] - 10;
          change = change - 10;
          arrChange[2][1] = arrChange[2][1] + 10;
          return changeLoop(change)
        }
        if (copyCid[5][1] - 5 >= 0 && change - 5 >= 0) {
          copyCid[5][1] = copyCid[5][1] - 5;
          change = change - 5;
          arrChange[3][1] = arrChange[3][1] + 5;
          return changeLoop(change)
        }
        if (copyCid[4][1] - 1 >= 0 && change - 1 >= 0) {
          copyCid[4][1] = copyCid[4][1] - 1;
          change = change - 1;
          arrChange[4][1] = arrChange[4][1] + 1;
          return changeLoop(change)
        }
        if (copyCid[3][1] - 0.25 >= 0 && change - 0.25 >= 0) {
          copyCid[3][1] = copyCid[3][1] - 0.25;
          change = change - 0.25;
          arrChange[5][1] = arrChange[5][1] + 0.25;
          return changeLoop(change)
        }
        if (copyCid[2][1] - 0.1 >= 0 && change - 0.1 >= 0) {
          copyCid[2][1] = copyCid[2][1] - 0.1;
          change = change - 0.1;
          arrChange[6][1] = arrChange[6][1] + 0.1;
          return changeLoop(change)
        }
        if (copyCid[1][1] - 0.05 >= 0 && change - 0.05 >= 0) {
          copyCid[1][1] = copyCid[1][1] - 0.1;
          change = change - 0.05;
          arrChange[7][1] = arrChange[7][1] + 0.05;
          return changeLoop(change)
        }
        if (copyCid[0][1] - 0.01 >= 0 && change - 0.01 >= 0) {
          copyCid[0][1] = copyCid[0][1] - 0.01;
          change = change - 0.01;
          arrChange[8][1] = arrChange[8][1] + 0.01;
          return changeLoop(change)
        }
        return leftover = change;
      }
    
    
      if (total < leftover) { 
        return {status: "INSUFFICIENT_FUNDS", change: []}; 
      }
    
      if (total > leftover) { 
        changeLoop(leftover); 
        if (leftover > 0) {
          return {status: "INSUFFICIENT_FUNDS", change: []}
        }
      }
    console.log('leftover2 = ' + leftover);
    console.log(arrChange);
    
      for (let j = arrChange.length - 1; j >= 0 ; j--) {
        if (arrChange[j][1] == 0) {
          arrChange.splice(j, 1); 
        }
      }
    console.log('slice()')
    console.log(arrChange);
    
      return {status: "OPEN", change: arrChange}
    } 
    
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])