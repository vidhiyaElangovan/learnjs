var persons =[{name:"vid",id:1},{name:"laks",id:2},{name:"muk",id:3},{name:"mad",id:4},{name:"vij",id:5},{name:"kar",id:6}];
var newArr = Array.prototype.slice.call(persons,2);
console.log(newArr);
console.log(Array.prototype.reverse.call(persons));
var data = [];
function testCallback(userData, name, firstName, lastName){
  this.name = name;
  this.fullname = "vidh knsdfugef";
  console.log(userData, this.name);
  function setFullname(){
    this.fullname = firstName + " " + lastName;
    console.log(this.fullname);
  }
  console.log(this.fullname);
  setFullname();
}
function getInputValue(options, callback,  name, fname, lname){
  data.push(options);
  if (typeof callback === "function") {
    callback.apply(this,[data, name, fname,lname]);
  }
}
getInputValue(persons,testCallback,"adadad","vidhiya","laks");
getInputValue(persons,testCallback,"adadjhkjhjad","vidhisfeserya","lasefertertks");

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
person.fullName();
var sample = {firstName:"xdfdsf",lastName:"dfsegertg"};
person.fullName.apply(sample);
