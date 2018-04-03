var myKey = "listValues";
var myItems = [];

$(document).ready(function(){

  setupLocal();

  $(".btnAdd").on("click", function(){

      let curVal = $("#userInput").val();

      if (curVal === '')
      {
        alert("You must write something");

      } else {

        newListItem(curVal);
        myItems.push(curVal);
        saveItems();
      }
  });
});

function setupLocal() {

  if(localStorage.getItem(myKey) !== null) {

     let myItemsString = localStorage.getItem(myKey);
     myItems = JSON.parse(myItemsString);

     $(myItems).each(function(){
       newListItem(this);
     });
  }
}

function newListItem(userInput){

    let liElement = '<li>' + userInput +
                    '<span class ="close">X</span></li>';

    $(".close").on("click", function(){
      deleteTask(this);
    });

    $("#ulTaskList").append(liElement);
}

function deleteTask(item){
  myItems.splice($(item).index(), 1)
  saveItems();
  $(item).closest("li").remove();
}

function saveItems() {
  let myItemsString = JSON.stringify(myItems);
  localStorage.setItem(myKey, myItemsString);
}
