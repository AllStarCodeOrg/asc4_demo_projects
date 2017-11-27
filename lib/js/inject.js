//Quick function to iterate through the modal body id's


x = 2;
var y = () => x++
var target = "modalcontent";

var idTargeter = () => {
 var nm = y()
 var num = nm.toString();
 var result = "#" + target + num;

 return result
}
var eye = idTargeter().toString()
for(var i = 0; i <18; i++){

}
$(idTargeter()).prepend("Buttcheeks")

//NOTE just a sort of backup version of the code
//
// x = 2;
// var y = () => x++
// var target = "modalcontent";
//
// var idTargeter = () => {
//  var nm = y()
//  var num = nm.toString();
//  var result = target + num;
//
//  return result
// }
//
// for(var i = 0; i <18; i++){
// idTargeter()
// console.log(result)
// }
