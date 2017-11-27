// Define Student class here


class Student{

  constructor (first_name, last_name, cohort, project_name, img){
    this.first_name = first_name;
    this.last_name = last_name;
    this.cohort = cohort;
    this.project_name = project_name;
    this.img = img || "assets/placeholder.png";

    if(!Student.all){
      Student.all = [];
    }
    Student.all.push(this);

  }

}


// exporting for Jasmine
// module.exports = {
//         student: Student
//     }
