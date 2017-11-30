// requires "mahdi.js" to be loaded first

let randStudent = function(){
    let first_name = randName();
    let last_name = randName();
    let cohort = randName();
    let project_name = ""; //will be set later
    let img = "placeholder.png"; // has been included in "assets"
    new Student(first_name, last_name, cohort, project_name, img);
}

let randProject = function(){
    let name = randName(2);

    let first = randName();
    let second = randName();
    let githubLink = `https://github.com/${first}/${second}`;
    let projectLink = `http://rawgit.com/${first}/${second}/master/index.html`

    let shortDesc = randSentence();
    let longDesc = randParagraph();
    let img = "placeholder.png";
    new Project(name, githubLink, projectLink, shortDesc, longDesc, img);
}

let randStudents = function(num){
    num = num || 40;
    for( let i = 0; i < num; i++){
        randStudent();
    }
}

let randProjects = function(num){
    num = num || 10;
    for( let i = 0; i < num; i++){
        randProject();
    }
}

let seedData = function(){
    randProjects()
    randStudents()
    let students = Student.all;
    let projects = Project.all;
    //assigning project names to student
    let project_names = projects.map(project=>project.name);

    // assign students into group of 2-4 and assign 
    let num=0;
    for(let i = 0; i < projects.length; i++){
        let project_name = projects[i].name;
        let final_num = num+myRandom(2,5); //a random number between 2-4

        while(num<final_num){
            let student = students[num].project_name=project_name;
            num++;
        }
    }
    projects.forEach(project=>project.fillTeam(students));
}
