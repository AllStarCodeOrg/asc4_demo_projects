
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
        console.log(result)
        datThing = result;
        res(result);
      }
    })
  })
}

datCreateProjsStuds = result =>{
  console.log("checkpoint 1")
  //will use parsed data to create Project and Student objects
  return new Promise((res,rej)=>{
    // loop through each 'student' array from data array
      // create a new Student
      // for (var i = 0; i <result.data.length; i++){
      //   console.log(result.data[i][0])
      // }
      console.log("checkpoint 2")
      for (var i = 0; i < result.data.length; i++){




        new Project(result.data[i][3],result.data[i][4],result.data[i][5],result.data[i][6],result.data[i][7])
        
        new Student(result.data[0],result.data[1],result.data[2],result.data[3],result.data[4])

      }





      // if !Project.datExist(projectName) then create a new Project
      res(Student.all, Project.all)
    })
}



// datPLoop = () =>{
//   //loops through Project.all to create cards
//   return new Promise((res,rej)=>{
//       for (var i = 0; i < Project.all.length; i++){
//         bobTheBuilder(Project.all[i]);
//       }
//       res();
//   })
// }

datFileReader('./data/Star_data.csv').then(datFileParser).then(datCreateProjsStuds).then()
//  .then(datPLoop);
