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
    for(var i in students){
      if(students[i].project_name == this.name){
      this.team.push(students[i])
      console.log(this.team)
      }
      if(!Array.isArray(students)){
        var x = () => new TypeError("What?")
        x()
      }
      if(!students.includes(student)){
        var x = () => new TypeError("What?")
        x()
      }
      else{
        window.close()
      }
    }
  }
}








// exporting for Jasmine
// module.exports = {
//         project: Project
//     }
