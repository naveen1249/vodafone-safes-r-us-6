/**
 * DO NOT MODIFY, I REPEAT, DO NOT MODIFY
 **/

/**
 * Gets an item from a safe
 * @param {string} password - the password for the safe
 * @returns {Promise} promise that resolves or rejects depending on whether the password is correct
 *
 */
function getItemFromSafe(password) {
  // console.log(typeof(password))
  const itemsMap = {
    "10-A-w-4-878": "Magic Wand",
    "16-R-a-9-1497": "The one ring to rule them all",
    "5-N-3-441": "Corgi",
    "9-Y-d-2-643": "Apples and Pears",
    "7-H-673": "Oscar nomination",
    "12-D-l-4-860": "Chocolate Brownie",
  };
  return new Promise((resolve, reject) => {
    if (itemsMap[password]) {
      resolve(itemsMap[password]);
    } else {
      reject("Unauthorised access to safe");
    }
  });
}
/**
 * END DO NOT MODIFY
 **/

async function unlockSafe(customerName) {
  /**
   * WRITE YOUR CODE IN HERE
   **/
  const safe = await returnSafe(customerName)
  const safeitem = getItemFromSafe(safe);
  try{
    return await safeitem;
  }catch(err){
    return err;
  }
}


/** helperfunction **/
function returnSafe(str){
  var safe = null;
  for(i=1;i<=5;i++){
    if(i%3 ==0){
      if(str.split(" ").length > 1){
        safe += eval("section"+i)(str);
      }else{
        continue;
      }
    }else if(i%4 ==0){
      if(eval("section"+i)(str) != 0){
        safe += eval("section"+i)(str);
      }else{
        continue;
      }
    }else {
      safe += eval("section"+i)(str) ;
    }
  
  if(i != 5){
    safe += "-"; 
  }
  
}
return safe;
}

/** helperfunction **/
function removeDuplicates(str) {
  let s = str.toLowerCase();
  let chars = s.split("");
  let uniqueChars = chars.filter((element, index) => {
    return chars.indexOf(element) === index;
  });
  uniqueChars = uniqueChars.join("");
  const arr = uniqueChars.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
}


/** __Section 1__ **/

function section1(str){
  let output = null;
  const step1 = str.split(" ");
  if (step1.length > 1) {
    output = step1[0].length + step1[step1.length - 1].length;
  }else{
    output = str.length;
  }
  return output;
}

/** __Section 2__ **/
function section2(str){
  const s = str.split(" ");
  return s[0].charAt((s[0].length)-1).toUpperCase();
}

/** __Section 3__ **/
function section3(str){
  const s = str.split(" ");
  return s[1].charAt(0).toLowerCase();
}


/** __Section 4__ **/
function section4(str){
  const count = (str.match(/[aeiou]/gi) || []).length;
  return count;
}


/** __Section 5__ **/
function section5(str) {
  let uniqueChars = removeDuplicates(str).toLowerCase();
  let chararry = [];
  for (let i = 0; i < uniqueChars.length; i++) {
    chararry.push(uniqueChars.charCodeAt(i));
  }
  return chararry.reduce((a, b) => a + b);
}

module.exports = unlockSafe
