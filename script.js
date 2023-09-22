function educationBtn() {
  var x = document.getElementById("education");
  var x1 = document.getElementById("skills");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    x1.style.display ="none"
  }
}
function skillsBtn() {
  var x = document.getElementById("skills");
  var x1 = document.getElementById("education");
  if (x.style.display === "flex") {
    x.style.display = "none";
  
  } else {
    x.style.display = "flex";
    x1.style.display = "none";
  }
}
