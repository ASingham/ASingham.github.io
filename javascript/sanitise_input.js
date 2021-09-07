function sanitiseInput(input) {
    // Sanitise(?) input
    input = input.split(">").join("");
    input = input.split("<").join("");
    input = input.split(" ").join("");
    input = input.toUpperCase();
    return input;
}