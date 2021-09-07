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
    } else {
      prefix = "questions/" + input.slice(0,2) + "/";
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
  let code = prompt("Please enter the question you wish to fast travel to:\nPlease note: The code should look like Q#_CODE (e.g. Q3_HI)\n\nIf you don't know the code, ask your teammates to look in the top left of their screens", "");
  var url = getFullFileUrl(code);
  var exists = doesFileExist(url);
  if (exists == true) {
    location.href = url;
  } else {
    alert("Sorry that url doesn't exist!");
  }
}