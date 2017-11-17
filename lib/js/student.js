// Define Student class here
class Student{
  constructor (first_name, last_name, cohort, project_name, img){
    this.first_name = first_name;
    this.last_name = last_name;
    this.cohort = cohort;
    this.project_name = project_name;
    this.img = function(img){

      if(this.img){
        this.img = this.img
      }else{
        this.img = 'assets/placeholder.png'
      }

      return this.img;
    };
  }

}

// exporting for Jasmine
module.exports = {
        student: Student
    }
