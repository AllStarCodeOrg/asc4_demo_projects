// Define Project class here



class Project {
  constructor(name, githubLink, projectLink, shortDesc, longDesc, img, team) {
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
  
  // fillTeam(students) {
  //   for (var i in students)   //Iterate through each aspect of the student object
  //   {
  //     if (!Array.isArray(students)) {
  //       throw new TypeError("Input was not an array")
  //     }
  //     if (students[i].project_name == this.name)/*Checking if the student's project name is the same as the project name     */ {
  //       this.team.push(students[i])   // push to empty array if above is true
  //       console.log(this.team)  //Checked the array
  //     }
  //     if (!students[i] instanceof Student) {
  //       throw new TypeError("That's not a student...")  //Throwing typeError
  //     }
  //     else {
  //       return //just a closing else statement
  //     }
  //   }
  // }

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








//exporting for Jasmine
// module.exports = {
//         project: Project
//     }
