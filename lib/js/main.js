seedData();





(() => {
  for (var i = 0; i < Project.all.length; i++){
    bobTheBuilder(Project.all[i])
  }
})()




var datThing;

$(function() {
  $.get('./data/Star_data.csv', function(data) {
    Papa.parse(data, {
      complete: result => {
      datThing = result;
      }
    })
  });
});
