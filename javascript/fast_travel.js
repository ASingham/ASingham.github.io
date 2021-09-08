function getFullFileUrl(input) {
    var prefix;
    if (input === "") {
      return input;
    } else if (input.length < 2) {
      return input;
    }
    
    input = sanitiseInput(input);
    if (input.charAt(0) === "D") {
      prefix = "demo/";
    } else if (input.charAt(2) === "_") {
      prefix = "questions/" + input.slice(0,2) + "/";
    } else {
      prefix = "questions/" + input.slice(0,3) + "/";
    }
    var url = "https://asingham.github.io/" + prefix + input + ".html";
    return url;
}

function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}

function fastTravel() {
  let code = prompt("Please enter the question you wish to fast travel to:\n(e.g. Typing in D1 will take you to the first Demo Question)\n\nIf you don't know the code, ask your teammates to look in the top left of their screens", "");
  var url = getFullFileUrl(code);
  var exists = doesFileExist(url);
  if (exists == true) {
    location.href = url;
  } else {
    alert("Sorry, you've typed in an invalid code!");
  }
}