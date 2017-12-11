
var datThing;



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

datCreateProjsStuds = data =>{
  //will use parsed data to create Project and Student objects
  return new Promise((res,rej)=>{
    // loop through each 'student' array from data array
      // create a new Student
      // if !Project.datExist(projectName) then create a new Project
  })
}

datPLoop = () =>{
  //loops through Project.all to create cards
  return new Promise((res,rej)=>{
      for (var i = 0; i < Project.all.length; i++){
        bobTheBuilder(Project.all[i]);
      }
      res();
  })
}

datFileReader('./data/Star_data.csv').then(datFileParser).then(datCreateProjsStuds).then(datPLoop);
