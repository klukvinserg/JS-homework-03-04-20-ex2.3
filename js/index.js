let string = prompt("Enter string");

function result(el) {
  let arrString;
  let arrStringLowwer;
  let arrResult = [];

  arrString = el.split("");

  arrStringLowwer = arrString.map((el) => el.toLowerCase());

  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i] === arrStringLowwer[i] && isNaN(Number(arrString[i]))) {
      arrResult.push(arrString[i].toUpperCase());
    } else if (
      arrString[i] !== arrStringLowwer[i] &&
      isNaN(Number(arrString[i]))
    ) {
      arrResult.push(arrString[i].toLowerCase());
    } else if (!isNaN(Number(arrString[i]))) {
      arrResult.push("_");
    }
  }

  let newString = "";

  for (let i = 0; i < arrResult.length; i++) {
    newString += arrResult[i];
  }

  return newString;
  
}

document.write(`String start: ${string}<br>String end: ${result(string)}`);
