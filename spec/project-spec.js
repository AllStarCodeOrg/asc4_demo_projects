// can install dependencies with "npm install" (jasmine)

// make sure to export class in each file being tested
// module.exports = {
//     project: Project
// }

let Project = require("../lib/js/project.js").project;

describe("Project",function(){
    let project1;
    beforeEach(function(){
        project1 = new Project(
            "Fake Project",
            "blah.github.com",
            "rawgit.blah.github.com",
            "blah blah blah",
            "No, really, blah blah blah",
            "assets/blah.png"
        );
    })

    afterEach(function(){
        delete Project.all //clearing array
    })


    it('should have a .all CLASS property that stores each new instance upon construction',function(){
        expect(Array.isArray(Project.all)).toBeTruthy();
        expect(Project.all.length).toBe(1);
        expect(Project.all[0]).toBe(project1);
    });

    it("should have a .name property that is also the 1st constructor parameter",function(){
        expect(project1.name).toBeDefined();
        expect(project1.name).toBe("Fake Project");
    });

    it("should have a .githubLink property that is also the 2nd constructor parameter",function(){
        expect(project1.githubLink).toBeDefined();
        expect(project1.githubLink).toBe("blah.github.com");
    });

    it("should have a .projectLink property that is also the 3rd constructor parameter",function(){
        expect(project1.projectLink).toBeDefined();
        expect(project1.projectLink).toBe("rawgit.blah.github.com");
    });

    it("should have a .shortDesc property that is also the 4th constructor parameter",function(){
        expect(project1.shortDesc).toBeDefined();
        expect(project1.shortDesc).toBe("blah blah blah");
    });

    it("should have a .longDesc property that is also the 5th constructor parameter",function(){
        expect(project1.longDesc).toBeDefined();
        expect(project1.longDesc).toBe("No, really, blah blah blah");
    });

    it("should have a .img property that is also the 6th constructor parameter",function(){
        expect(project1.img).toBeDefined();
        expect(project1.img).toBe("assets/blah.png");
    });

    it('should have a .img property that defaults to "assets/placeholder.png" when no string or empty string given',function(){
        let project2 = new Project("1","2","3","4","5");
        expect(project2.img).toBe("assets/placeholder.png");

        let project3 = new Project("1","2","3","4","5","");
        expect(project2.img).toBe("assets/placeholder.png");
    });

    it("should have a .team property that defaults to an empty array",function(){
        expect(project1.team).toBeDefined();
        expect(Array.isArray(project1.team)).toBeTruthy();
        expect(project1.team.length).toBe(0);
    });

    describe(".fillTeam()",function(){
        it('should take an array of Student objects as a parameter and add to the .team array only the students belonging to the project (based on project name)',function(){
            class Student{}
            let student1 = new Student;
            let student2 = new Student;
            student1.project_name = "Fake Project";
            student2.project_name = "No Project";
            let students = [student1,student2];
            project1.fillTeam(students);
            expect(project1.team).toContain(student1);
            expect(project1.team).not.toContain(student2);
        });

        it('should throw a Type Error if the input parameter is not an array',function(){
            expect(()=>project1.fillTeam("a string")).toThrow();
        });
        it('should throw a Type Error if any element of the array parameter is not a Student instance',function(){
            class Student{}
            expect(()=>project1.fillTeam([1,new Student])).toThrow();
        });
    });
});
