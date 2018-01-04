datFileReader = file => {
  //Will read the file and pass the file as a single string to res()
  return new Promise((res, rej)=>{
    $.get(file, function(data) {
      res(data);
    })
  })
}

datFileParser = data =>{
  //Will parse the data and pass the data array to res()
  return new Promise((res, rej)=>{
    Papa.parse(data, {
      complete: result => {
        res(result);
      }
    })
  })
}

datCreateProjsStuds = result =>{
  //will use parsed data to create Project and Student objects
  return new Promise((res,rej)=>{
    // loop through each 'student' array from data array
      // create a new Student
      //Last line of csv is empty by default
      for (var i = 1; i < result.data.length - 1; i++){

        //looping through each 'student array'
        new Student(result.data[i][0],result.data[i][1],result.data[i][2],result.data[i][3],result.data[i][4]);

        //Create project if it doesn't exist in Project.all
        Project.create_by_name(result.data[i][3],result.data[i][4],result.data[i][5],result.data[i][6],result.data[i][7], result.data[i][8])
      }
      // if !Project.datExist(projectName) then create a new Project
      res(Student.all, Project.all)
    })
}

datPLoop = () =>{
  //loops through Project.all to create cards
  return new Promise((res,rej)=>{
      Project.all.forEach(x=>x.fillTeam(Student.all));
      for (var i = 0; i < Project.all.length; i++){
        bobTheBuilder(Project.all[i]);
      }
      res();
  })
}

datFileReader('./data/Star_data.csv').then(datFileParser).then(datCreateProjsStuds).then(datPLoop).then((()=>$("a").attr("target","_blank")));//ensuring all links have target="_blank"
