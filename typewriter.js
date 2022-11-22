const sentence = "hello there from lighthouse labs";

const typewriter = () => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, i * 50);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, 1650);
};

typewriter();