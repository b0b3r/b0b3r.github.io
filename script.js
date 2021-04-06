

var message = 'Hello!!! Yfrjytw-nj'; 

var slotsArray = [];

slotsArray[0] = {
	toggle: true,
	time:"00:00",
	fixPayment: 0,
	varPayment: 0,
}

slotsArray[1] = {
	toggle: true,
	time:"01:00",
	fixPayment: 0,
	varPayment: 0,
}




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


/*
var allQuestions = new Array();
    
function loadQuestions() {
    $.getJSON('question.json', function (data) {
        allQuestions = data.quiz;
    })
    .error(function() {
        console.log('error: JSON not loaded'); 
    })
    .done(function() {
        console.log( "JSON loaded!" );
        printQuestion(allQuestions[0].question); 
    });
}
*/

/*
var JSONItems = []; 

$.getJSON( "question.json", function(data){ 
  JSONItems = data; 
  console.log(JSONItems); 
});
*/

//document.getElementById("_message").innerHTML = message;




//console.log (slotsArray[0]);

