//Quick function to iterate through the modal body id's







x = 0;
var y = () => x++
var target = "modalcontent";

var idTargeter = () => {
 var nm = y()
 var num = nm.toString();
 var result = target + num;

 return result
}

b = 0;
var t = () => b++
var work = "modalcontent";

var idTargeteSpy = () => {
 var nm = t()
 var num = nm.toString();
 var result = "#" + work + num;

 return result
}


var bobTheBuilder = project => {
  //Creates the html
  //Append entire project to html ("giantContainer")
  //takes project as an arg
  //NOTE define card css

  //List of html nested things that we need below
  /*
  card div with class=card"
  front div
    front-text div
    img div NOTE will somehow need to force image height and width
  back div
    short desc div
    modal trigger button with data target being the same as the modal id

  modal div class="modal fade" id="blah" tabindex="-1" role="dialog"
    div class="modal-dialog" role="document"
      div class="modal-content"
        div class="modal-header"
          h5 class="modal-title"
            button type="button" class="close" data-dismiss="modal" aria-label="close"
              <span aria-hidden="true"> &times; </span> NOTE:Not sure what this is doing or if it's at all necessary
            </button>
        <end of header div>
        div class="modal-body" id="modalcontent"
          longDesc here
        end of body div
        div class="modal footer"
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        end of footer div
      /div end of modal content
    /div end of modal dialog
  /div end of main modal div


  */


  var pDiv = $("<div id='project'height='300' width='300'/>")  //empty project div
  var cDiv = $("<div class='card' id='card1' />")  // empty card div
  pDiv.append(cDiv)  //adding the card as a child for project


  var cfDiv = $('<div class="front"> </div>')  // creating front of card
  var cbDiv = $('<div class="back" />')  //creating back of card

  cDiv.append(cfDiv) //adding to card
  cDiv.append(cbDiv) //adding to Card


  //getting the necessary data
  var src = project.img   //getting the respective project image
  var cfName = project.name //Getting project names
  var miniDesc = project.shortDesc //Short description


  //NOTE: Stuck with normal div endings just in case of the off chance of it making things wonky, will change it after this works though
  var imgage = $(`<img src= 'assets/${src}'>`)  //STRING INTERPOLATIONNNNNNNNN, change image size
  var namess = $(`<div class='name' > ${cfName} </div>`) //Creating div for the modal with name content
  var minatureDesc = $(`<div class='lildesc'> ${miniDesc} </div>`) //Creating div for short descripition

  var modalTrigger = $(`<button class="btn btn-primary" data-toggle="modal">Click me for more info</div>`).attr('data-target', idTargeteSpy()); //Has to be added in before the modal, and must be decalred before the append
 //appending to card
 //imgage.append(cfDiv) NOTE: For some reason, activating this makes the front div not show up, so that's gonna stay like that for the time being

//Appending stuff here
cfDiv.append(namess) //Appending to front (Works)
cbDiv.append(minatureDesc) //Appending this to back (works)
cbDiv.append(modalTrigger) //Adding button




//getting some vars

var bigDesc = project.longDesc //Long description
var teamMem1 = project.team[0] //Student first and last name
var teamMem2 = project.team[1]
var teamList = $(`<div class='theSquad'> ${teamMem1} ${teamMem2}</div>`) //NOTE this will likeley need some css as it's going to be an array if I'm correct

//Making the divs
var modalPart1 = $(`<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"></div>`).attr("id", idTargeter()); //main modal

var modalPart2 = $('<div class="modal-dialog" role="document"></div>') // to be nested under the main div ^
var modalExtra = $('<div class="modal-content"></div>')
var modalPart3 = $('<div class="modal-header"></div>') //Nested under above div ^
var modalPart4 = $(`<div class="modal-title">${cfName}</div>`) //Nested under above ^
var modalPart5 = $('<button type="button" class="close" data-dismiss="modal" aria-label="close"></button>') //Nested under above ^
var modalPart6 = $('<span aria-hidden="true">&times;</span>') //Nested under button above
var modalPart7 = $(`<div class="modal-body">${bigDesc}</div>`) //Nested under modal content

var modalPart8 = $('<div class="modal footer"></div>') //nested under modal content
var modalPart9 = $('<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>')
//Wellllllllllll here goes nothing....Gonna try and build it

pDiv.append(modalPart1)
modalPart1.append(modalPart2)
modalPart2.append(modalExtra)
modalExtra.append(modalPart3)
modalPart3.append(modalPart4)
modalPart3.append(modalPart5)
modalPart5.append(modalPart6)
modalExtra.append(modalPart7)
modalExtra.append(modalPart8)
modalPart8.append(modalPart9)
//That should be the right order....First shot lets go! OK Forgot to add button to back of card
//Ok so something's not working.... Might be the first "unecessary button"
//Fixed it!!!!!!!!!! The whole modal was being appended to the entire card itself and that was messing it up.
//So the spacing is weird, but I'll try and fix it...




$.each(project.team, function(i, item){
  var memFName = (item.first_name)
  var memLName = (item.last_name)
  var studName = memFName + ' ' + memLName + ' '
  var studContainer = $(`<div class='studentBox' ${studName} /> `).css('font-weight:bold;')
  modalExtra.append(studName)
  return studName
})



$("#giantContainer").append(pDiv)



}




seedData()
bobTheBuilder(Project.all[0])
bobTheBuilder(Project.all[1])

























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
