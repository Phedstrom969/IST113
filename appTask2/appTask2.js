$(document).ready(function(){

  $(".btnAdd").on("click", newElement);
});

function newElement(){
  var userInput = $("#userInput");

  if (userInput.val().length === 0)
  {
    alert("You must write something");
  } else {

    var liElement = '<li>' +
                    userInput.val() +
                    '<span class ="close">X</span>' +
                    '</li>'

    $("#ulTaskList").append(liElement);

    $(".close").on("click", function(){
      $(this).closest("li").remove();
    });
  }
}
