const name = "RAHUL"
const repoCount = 50

// console.log(name + repoCount + " Value");

// this way of writing is called --string interpolation--
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rahul-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // last character is not included 
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   lugia    "
console.log(newStringOne);
console.log(newStringOne.trim());


console.log(gameName.split('-'));


const url = "https://rahul.com/rahul%20choudhary"
console.log(url.replace('%20', ''))
console.log(url.includes('sundar'))