var questions = {
	"What is your Spouse's Name?" : "Mellisa Jane Horner",
	"What is your Spouse's NINO?" : "AB123456C",
	"What is your Nationality?" : "Australian",
	"What is your Telephone Number?" : ["07891401849", "02920216273"],
	"What is your Dependant's Name?" : "Callum Horner",
	"What is your Current Address?" : "2 St Peter's Square, Manchester, M2 3AA",
	"What is your Previous Addess?" : ["Oakwood, St Mary's Terrace, Gateshead, NE10 0NN", "6 Montreal Way, Canadian Estate, Bulford, SP4 9FQ"],
	"What is your Previous Name?" : "Mellissa Jane McDonald",
	"What is your Spouse's DOB?" : "22 November 1984",
	"What is your Dependants DOB?" : ["28 Janurary 2000", "15 June 1995"],
	"What is your Dependants NINO" : "AK112233B"
}

var keys = Object.keys(questions);

var arr = [];

function getProp() {	
	var randomProp = Math.floor(Math.random() * keys.length);
	return keys[randomProp];
}

function getValue(questionAndAnswers) {
    var challengeOne = questionAndAnswers[0].split(';');
    var challengeTwo = questionAndAnswers[1].split(';');
    var challengeThree = questionAndAnswers[2].split(';');
	document.getElementById("questionOneLabel").innerHTML = "<input type='checkbox' class='form-check-input' id='questionOneCheck'>" + challengeOne[0];
	document.getElementById("QuestionOne").setAttribute("value",challengeOne[1]);
	document.getElementById("questionTwoLabel").innerHTML = "<input type='checkbox' class='form-check-input' id='questionTwoCheck'>" + challengeTwo[0];
	document.getElementById("QuestionTwo").setAttribute("value",challengeTwo[1]);
	document.getElementById("questionThreeLabel").innerHTML = "<input type='checkbox' class='form-check-input' id='questionThreeCheck'>" + challengeThree[0];
	document.getElementById("QuestionThree").setAttribute("value",challengeThree[1]);
  
}

function getQA(){
  var value = getProp();
  return value + ";" +  questions[value];
}
 
function createArray(){
  for(var i = 0; i < 3; i++){
    var challenge = getQA();
    if(arr.length < 3) {
      if(arr.indexOf(challenge) === -1){
         arr.push(challenge);
      } else {
          i--;
      }
    }
   }
 
  getValue(arr);
}


function verify(){
	var checkboxOne = document.getElementById("questionOneCheck").checked;
	var checkboxTwo = document.getElementById("questionTwoCheck").checked;
	var checkboxThree = document.getElementById("questionThreeCheck").checked;
	
	if(checkboxOne === true && checkboxTwo === true && checkboxThree === true){
		document.getElementById("verifiedImage").innerHTML = "<img src='images/verified.png' alt='Verified'>";		
	} else {
		document.getElementById("verifiedImage").innerHTML = "<img src='images/notVerified.png' alt='Not Verified'>";
	}
}

