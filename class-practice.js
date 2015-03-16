var isTyler = function (name) {
if (name === "Tyler")
return "true"; 
 else
return "false";
}
isTyler(name);
var name = "greg";

var getName = function(){
 var name = prompt("What is your name?");
    return name;
}

var welcome = function(){
 var name = getName();
    alert("Welcome " + name);
}

var myName = function(){
 var name = "Steve Woodis";   
}

var newMyName = myName();

alert(newMyName);

var outerfn = function(){
  function myName(){
  return "Steve Woodis";
 };
    return myName();
}
var innerfn = outerfn;