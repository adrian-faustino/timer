const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }
  if (key === 'b') {
    console.log('Alarm!');
  }  
  
  if (key < 10 && key > 0) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      console.log(`Alarm for input ${key}!`);
    }, key * 1000);
  }
});
