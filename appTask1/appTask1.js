function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("Yout must write something");
  } else {
    document.getElementById("ulTaskList").appendChild(li);
  }
  document.getElementById("userInput").value = "";

  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }


}
