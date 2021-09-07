function checkAnswer(input, answer) {
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