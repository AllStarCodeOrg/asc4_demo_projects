seedData();





(() => {
  for (var i = 0; i < Project.all.length; i++){
    bobTheBuilder(Project.all[i])
  }
})()




var datThing;
reader = new FileReader
reader.onload = e => {
  Papa.parse(reader.result, {
    complete: (result) => {
    datThing = result;
    }
  })
}

reader.readAsText('data/Star_data.csv')
