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
      if(students[i].project_name == this.name)/*Checking if the student's project name is the same as the project name     */{
      this.team.push(students[i])   // push to empty array if above is true
      console.log(this.team)  //Checked the array
      }
      if(!Array.isArray(students)){
        var x = () => new TypeError("What?")  //Creating a typeError
        x() //Throwing a type Error
      }
      if(!students.includes(student)){
        var x = () => new TypeError("What?") //Creating a typeError
        x()  //Throwing typeError
      }
      else{
        return //just a closing else statement
      }
    }
  }
}








//exporting for Jasmine
module.exports = {
        project: Project
    }
