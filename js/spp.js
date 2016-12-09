console.log("Sanity check")

function hello() {
  console.log("virus dectected");
  var changeDiv = document.getElementById("divelement");
  changeDiv.innerHTML = "wat";
  console.log(changeDiv);
}
function sofast(){
  console.log("hello");
  var classElements = document.getElementByClassName("first period");
  classElements[0].innerHTML = "bang";
  console.log("classElements");
}
