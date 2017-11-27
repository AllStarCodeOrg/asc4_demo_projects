//Quick function to iterate through the modal body id's


x = 2;
var y = () => x++
var target = "modalcontent";

var idTargeter = () => {
 var nm = y()
 var num = nm.toString();
 var result = "#" + target + num;

 return result
}
var eye = idTargeter().toString()
for(var i = 0; i <18; i++){

}
$(idTargeter()).prepend("Buttcheeks")



/*



*/

var bobTheBuilder = project => {
  //Creates the html
  //Append entire project to html ("giantContainer")
  //takes project as an arg
  //NOTE define card css



  var pDiv = $("<div/>")  //empty project div
  var cDiv = $("<div class='card' />")  // empty card div
  pDiv.append(cDiv)  //adding the card as a child for project


  //var cfDiv = $('<div class="front"> </div>')  // creating front of card
  var cfDiv = $('<div class="front" />')
  var cbDiv = $('<div class="back" />')  //creating back of card

  cDiv.append(cfDiv) //adding to card
  cDiv.append(cbDiv) //adding to Card

  var src = project.img   //getting the respective project image

 var imgage = $(`<img src= 'assets/${src}'>`)  //STRING INTERPOLATIONNNNNNNNN, change image size
 imgage.append(cfDiv)

 var cfName = project.name //Getting project names

 var namess = $(`<div class="name" > ${cfName} </div>`) //Creating div for them with name content
 namess.append(cfDiv) //appending to card














$("#giantContainer").append(pDiv)
}


seedData()
bobTheBuilder(Project.all[0])


























//NOTE just a sort of backup version of the code
//
// x = 2;
// var y = () => x++
// var target = "modalcontent";
//
// var idTargeter = () => {
//  var nm = y()
//  var num = nm.toString();
//  var result = target + num;
//
//  return result
// }
//
// for(var i = 0; i <18; i++){
// idTargeter()
// console.log(result)
// }
