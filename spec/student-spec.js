// can install dependencies with "npm install" (jasmine)

// run tests with "jasmine-node spec/"

// make sure to export class in each file being tested
// module.exports = {
//     student: Student
// }

let Student = require("../lib/js/student.js").student;

describe("Student",function(){
    let student1;
    beforeEach(function(){
        student1 = new Student("Bob","Bobby","Fake Cohort","assets/blah.png");
    })

    afterEach(function(){
        delete Student.all //clearing array
    })

    it('should have a .all CLASS property that stores each new instance upon construction',function(){
        expect(Array.isArray(Student.all)).toBeTruthy();
        expect(Student.all.length).toBe(1);
        expect(Student.all[0]).toBe(student1);
    });

    it('should have a .first_name property',function(){
        expect(student1.first_name).toBeDefined();
        expect(student1.first_name).toBe("Bob");
    });

    it('should have a .last_name property',function(){
        expect(student1.last_name).toBeDefined();
        expect(student1.last_name).toBe("Bobby");
    });

    it('should have a .cohort property',function(){
        expect(student1.cohort).toBeDefined();
        expect(student1.cohort).toBe("Fake Cohort");
    });
    
    it('should have a .img property',function(){
        expect(student1.img).toBeDefined();
        expect(student1.img).toBe("assets/blah.png");
    });

    it('should have a .img property that defaults to "assets/placeholder.png" when no string or empty string given',function(){
        let student2 = new Student("1","2","3");
        expect(student2.img).toBe("assets/placeholder.png");
        
        let student3 = new Student("1","2","3","");
        expect(student3.img).toBe("assets/placeholder.png");
    });
});