const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function capitalize(word) {
  let firstLetter = word.slice(0,1);
  let restOfWord = word.slice(1);
  return firstLetter.toUpperCase() + restOfWord
}
const titleCased = () => {
  return tutorials.map(function(name){
    //return name[0].toUpperCase() + name.slice(1);
    return name.split(' ').map(word => capitalize(word)).join(' ')
  }); 
}

//for (let name of tutorials) {
     