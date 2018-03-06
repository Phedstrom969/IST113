function clickyClick(){

  let body = document.getElementById("body");
  let myonoffswitch = document.getElementById("myonoffswitch");

  if (myonoffswitch.checked) {
    body.style.background = "white";
  }
  else {
    body.style.background = "black";
  }
}
