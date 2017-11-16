// Define Project class here

var globalProjectArray = [];


class Project{
  constructor(name, team, githubLink, projectLink, shortDesc, longDesc, img){
    this.name = name;
    this.githubLink = githubLink;
    this.projectLink = projectLink;
    this.shortDesc = shortDesc;
    this.longDesc = longDesc;
    this.img = function(img){
      if (this.img != 'assets/blah.png')
     this.img = 'assets/placeholder.png'
    }




    this.all = function() {
      var project1 = this.name + '' + this.githubLink  + '' + this.projectLink + '' + this.shortDesc + '' + this.longDesc + '' + this.img;
      return project1;
    }

  }

}
class student extends Project {
    constructor(firstName, lastName, cohort, imgString, name){
      this.firstName = firstName;
      this.lastName = lastName;
      this.cohort = cohort;
      this.imgString = imgString;
      this.name = name;
      this.full = function () {
        return this.firstName + '' + this.lastName + '' + this.cohort + '' + this.imgString + '' + this.name;
      }
    }
  }
// class MyArray extends Project {
// static get [Symbol.species]() { return Array; }
// }





// exporting for Jasmine
module.exports = {
        project: Project
    }
