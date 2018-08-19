function onclickFun(){
  alert("i m triggered on click");
}
function fruit(name, color){
  this.name = name;
  this.color = color;
}
function vehicle(name){
  this.vech_name = name;
  var introname = "My name is " + name;
  function vech_color(){
    return introname+" and i am red ";
  }
  this.vechcol = vech_color();
}
function tree(name){
  this.tree_name = name.toUpperCase();
}
fruit.prototype.print = function () {
  console.log(this);
};
//vehicle.prototype = new fruit();
tree.prototype = new vehicle();
// function print(){
//   console.log(this.color);
// }
var obj = new fruit("mango", "yellow");
obj.print();
var obj1 = new fruit("apple", "red");
obj1.print();
var vech = new vehicle("car");
fruit.prototype.print.apply(vech);
vech.print();
var treeobj = new tree("banana");
treeobj.print();
var firstVehicle = new vehicle("bike");

function celebName (firstName) {
    var nameIntro = "This celeb is ";
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}
var myName = celebName ("Michael");
console.log(myName);
console.log(myName ("Jackson"));


var persons =[{name:"vid",id:1},{name:"laks",id:2},{name:"muk",id:3},{name:"mad",id:4},{name:"vij",id:5},{name:"kar",id:6}];
function idCreate(persons){
  var i, uniqId = 100;
  for (var i = 0; i < persons.length; i++) {
    persons[i]["id"] = function(){
        return uniqId + i;
    }();
  }
  return persons;
}

var personsId = idCreate(persons);
var personsList = personsId[2];
console.log(personsId, personsList.id);

var friends = ["vidhiya", "lakshmi","Anas","vel","jagan"];
friends.forEach(function(name, index){
  console.log((index+1) + ". " + name);
});
