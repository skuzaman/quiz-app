function smt() {
var question1=document.getElementById("tag1").value;
var question2=document.getElementById("tag2").value;
var question3=document.getElementById("tag3").value;
var question4=document.getElementById("tag4").value;

var val1= parseInt(question1);
var val2 = parseInt(question2);
var val3 = parseInt(question3);
var val4 = parseInt(question4);
var add = (val1 + val2 + val3);

if (val1==val2 && val2==val3 && val4==val4) {
  alert("your score is 40")
  }
else if (val1==val2 && val2==val3 && val3!=val4){
  alert("your score is 30")
 }
else if (val1==val4 && val2==val3 && val3!=val1){
   alert("your score is 30")
  }
else if (val1==val2 && val2==val4 && val3!=val2){
    alert("your score is 30")
  }
else if (val1==val3 && val2==val3 && val2!=val4){
    alert("your score is 30")
 }
}
