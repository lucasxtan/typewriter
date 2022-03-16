const sentence = "hello there from lighthouse labs";
let delay = 0;
let counter = 0

for (const char of sentence) {

  if (counter !== sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay += 50)
  } else {
    setTimeout(() => {
      process.stdout.write(char + "\n")
    }, delay += 50)
  }
  counter += 1;
}


