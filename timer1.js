const input = process.argv;

const alarm = function() {
  process.stdout.write('\x07');
};

const timer = function(array) {
  if (array === undefined) {
    return undefined;
  }
  let userInput = array;
  //filter for negative numbers
  userInput = userInput.filter(e => e > 0);
  userInput = userInput.filter(e => e % e == 0);

  for (let element of userInput) {
    setTimeout(() => {
      alarm();
    }, element * 1000);
  }

  return userInput
};

module.exports = timer;

console.log(timer(input));