$(document).ready(function() {
  $(".test").submit(function(event){
    event.preventDefault();
    var question1 = $("input:radio[name=answer1]:checked").val();
    var question2 = $("input:radio[name=answer2]:checked").val();
    var question3 = $("input:radio[name=answer3]:checked").val();
    var question4 = $("input:radio[name=answer4]:checked").val();

    var val1 = parseInt(question1);
    var val2 = parseInt(question2);
    var val3 = parseInt(question3);
    var val4 = parseInt(question4);
    var add = (val1 + val2 + val3 + val4);

    window.open("index2.html", "_self");
  });
});

var next = function(){
    window.open("index2.html", "_self");
};


var retake = function(){
  window.open("index.html", "_self");
};

var submit = function(){
    alert()
};
