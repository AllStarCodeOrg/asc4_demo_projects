var bobTheBuilder = project => {
  //Creates the html
  //Append entire project to html ("giantContainer")
  //takes project as an arg
  //NOTE define card css

  var num = $(".card").length + 1;
  var pDiv = $("<div class='project'height='300' width='300'/>")  //empty project div
  var cDiv = $(`<div class='card' id='card${num}' />`)  // empty card div
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
  var imgage = $(`<img src= '${src}'>`)  //STRING INTERPOLATIONNNNNNNNN, change image size
  var namess = $(`<div class='name' > ${cfName} </div>`) //Creating div for the modal with name content
  var minatureDesc = $(`<div class='lildesc'><p> ${miniDesc}</p> </div>`) //Creating div for short descripition

  var modalTrigger = $(`<button class="btn btn-primary modButt waves-effect" data-target='#modalcontent${num}' data-toggle="modal">Details</div>`); //Has to be added in before the modal, and must be decalred before the append
  //appending to card
  //imgage.append(cfDiv) NOTE: For some reason, activating this makes the front div not show up, so that's gonna stay like that for the time being

  //Appending stuff here
  cfDiv.append(imgage)
  cfDiv.append(namess) //Appending to front (Works)
  cbDiv.append(minatureDesc) //Appending this to back (works)
  cbDiv.append(modalTrigger) //Adding button

  //getting some vars
  var bigDesc = project.longDesc //Long description

  //Making the divs
  var modalPart1 = $(`<div class="modal fade" tabindex="-1" role="dialog" id='modalcontent${num}' aria-labelledby="exampleModalLabel" aria-hidden="true"></div>`); //main modal

  var modalPart2 = $('<div class="modal-dialog" role="document"></div>') // to be nested under the main div ^
  var modalExtra = $('<div class="modal-content"></div>')
  var modalPart3 = $('<div class="modal-header"></div>') //Nested under above div ^
  var modalPart4 = $(`<div id="back_title" class="modal-title">${cfName}</div>`) //Nested under above ^
  var modalPart5 = $('<button type="button" class="close" data-dismiss="modal" aria-label="close"></button>') //Nested under above ^
  var modalPart6 = $('<span aria-hidden="true">&times;</span>') //Nested under button above
  var modalPart7 = $(`<div class="modal-body thatBigDesc">${bigDesc}</div>`) //Nested under modal content
  var modalPart8 = $('<div class="modal footer"></div>') //nested under modal content
  var modalPart9 = $('<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>')
  //Wellllllllllll here goes nothing....Gonna try and build it

  pDiv.append(modalPart1)
  modalPart1.append(modalPart2)
  modalPart2.append(modalExtra)
  modalPart3.append(`<img src="${src}">`);
  modalPart3.append(modalPart4)
  modalPart3.append(modalPart5)
  modalPart5.append(modalPart6)
  modalPart8.append(modalPart9)
  
  // body of modal
  modalExtra.append(modalPart3) //header
  modalExtra.append(modalPart7) //desc
  modalExtra.append(modalPart8) // ??
  //project links
  modalExtra.append(`<div class='project_links'> <a href="${project.projectLink}">Project Link</a> <a href="${project.githubLink}">GitHub Link</a> </div>`);
  //adding students
  modalExtra.append($(`<p>Students: ${project.team.map(x=>`<a href="${x.github}">${x.first_name} ${x.last_name}</a>`).join(", ")}</p>`));
  
  //That should be the right order....First shot lets go! OK Forgot to add button to back of card
  //Ok so something's not working.... Might be the first "unecessary button"
  //Fixed it!!!!!!!!!! The whole modal was being appended to the entire card itself and that was messing it up.
  //So the spacing is weird, but I'll try and fix it...




  // $.each(project.team, function (i, item) {
  //   var memFName = (item.first_name)
  //   var memLName = (item.last_name)
  //   var studName = memFName + ' ' + memLName + ' '

  //   var studContainer = $(`<div class='studentBox'> ${studName} </div> `);
  //   modalExtra.append(studName);
  //   return studName
  // })



  $("#giantContainer").append(pDiv)

}
