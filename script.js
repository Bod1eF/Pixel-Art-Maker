$(document).ready(() =>{
let erase = false;
let selectedColor;
let recentColors = [];
let colorCount = 0;
let selelectedRecent = false;
  
$("#update").click(() => {
  $("#update").html("Update Grid");
  $("table").removeClass("hidden");
  $("table").empty();
  let row = "";
  let column = "";
  let gridSize = $("#grid_size").val();
  for(let i=0; i<gridSize; i++) {
    row += "<th class='border'></th>";
  }
  column = "<tr>" + row + "</tr>";
  for(let j=0; j<gridSize; j++) {
    $("table").prepend(column);
  }
   });

$("table").click((event) => {
  if(erase) {
    selectedColor = "#F2F7F2";
    $(event.target).css("background-color", selectedColor);
  }
  else if(selelectedRecent) {
    $(event.target).css("background-color", selectedColor);
  }
  else {
    selectedColor =  $("#pickColor").val();
    $(event.target).css("background-color", selectedColor);
    if (!recentColors.includes(selectedColor)){
      recentColors.unshift(selectedColor);
      updateRecentColors(selectedColor);
    }
  }
   });

$("#border_toggle").click(() => {
  $("th").toggleClass("border"); 
   });

$("#erase_toggle").click(() => {
if(!erase) {
  erase = true;
  $("#erase_toggle").html("Toggle Eraser: On");
}
else {
  $("#erase_toggle").html("Toggle Eraser: Off");
  erase = false; 
}
   });

$("#pickColor").click(() => {
  selelectedRecent = false;
  erase = false;
  $("#erase_toggle").html("Toggle Eraser: Off");
   });

$("#clear_recents").click(() => {
 $("#colors").empty();
   });

function updateRecentColors(newColor) {
    colorCount++;
    $("#colors").prepend("<div class='recentColors' id='" + newColor + "' style='background-color:" + newColor + ";''></div>");
}

$("#colors").click((event) => {
  selelectedRecent = true;
  erase = false;
  $("#erase_toggle").html("Toggle Eraser: Off");
  selectedColor = $(event.target).attr("id");
   });
  
});