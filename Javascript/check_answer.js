function checkAnswer(input, answer) {
    // Sanitise(?) input
    input = input.split(" ").join("");
    input = input.toUpperCase();
  
    var encoded = input;
    for (let i = 0; i < 5; i++) {
      encoded = btoa(encoded);
    }
  
    if (encoded == answer) {
      return true;
    } else {
      return false;
    }
}