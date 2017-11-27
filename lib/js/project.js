// Define Project class here



class Project{
  constructor(name, githubLink, projectLink, shortDesc, longDesc, img, team){
    this.name = name;
    this.githubLink = githubLink;
    this.projectLink = projectLink;
    this.shortDesc = shortDesc;
    this.longDesc = longDesc;
    this.img = img || "assets/placeholder.png";
    if(!Project.all){
      Project.all = [];
    };
    Project.all.push(this);

    this.team = [];

  }
  fillTeam(students) {
    for(var i in students)   //Iterate through each aspect of the student object
  {
    if(!Array.isArray(students)){
      throw new TypeError("What?") //Throwing a type Error
    }
      if(students[i].project_name == this.name)/*Checking if the student's project name is the same as the project name     */{
      this.team.push(students[i])   // push to empty array if above is true
      console.log(this.team)  //Checked the array
      }
      if(!students[i] instanceof Student){
        throw new TypeError("That's not a student...")  //Throwing typeError
      }
      else{
        return //just a closing else statement
      }
    }
  }
}








//exporting for Jasmine
// module.exports = {
//         project: Project
//     }
