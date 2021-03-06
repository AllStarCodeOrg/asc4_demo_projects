// Define Project class here



class Project {
  constructor(name, githubLink, projectLink, shortDesc, longDesc, img) {
    this.name = name;
    this.githubLink = githubLink;
    this.projectLink = projectLink;
    this.shortDesc = shortDesc;
    this.longDesc = longDesc;
    this.img = img || "assets/placeholder.png";
    if (!Project.all) {
      Project.all = [];
    };
    Project.all.push(this);

    this.team = [];

  }


  fillTeam(students){
    //Should check if input is an array BEFORE iterating through it
    if (!Array.isArray(students)){
      throw new TypeError("Input was not an array");
    }

    // the .some() method is a default array method
    // here, I'm checking if even 1 element is not a Student object
    if(students.some(student=>!student instanceof Student)){
      throw new TypeError('An item was not a proper Student Object') ;
    }

    //now that error checking has passed, can iterate through array to fill team
    students.forEach(student=>{
      if (student.project_name == this.name){
        this.team.push(student)   // push to empty array if above is true
      }
    })
  }
}






Project.datExist = name => {
  //returns true if name exists in project pool false if nothing is there
  if(Project.all){
    // console.log(Project.all);
  return Project.all.some(project => name == project.name)
  }
  else{
    return false
  }

}

//


Project.create_by_name = (name, githubLink, projectLink, shortDesc, longDesc, img) => {
//This will create a project using the result data if said project doesn't exist already
if(!Project.datExist(name)){
  new Project(name, githubLink, projectLink, shortDesc, longDesc, img)
}



}


// Project.datExist = name => !!Project.all.find(true);
// Project.datExist = name => !!projectObj; //make true
// Project.datExist = name => !!undefined;  //make false










//exporting for Jasmine
// module.exports = {
//         project: Project
//     }
