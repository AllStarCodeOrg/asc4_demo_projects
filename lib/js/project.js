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

    this.fillTeam = (students) => {
      for(var i in students){
        if(students[i].project_name == this.name){
        this.team.push(students[i])
        }
      }
    }
  };
}








// exporting for Jasmine
module.exports = {
        project: Project
    }
