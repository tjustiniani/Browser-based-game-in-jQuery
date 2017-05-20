generatedNumber = []

var total = 0;
var wins = 0;
var losses = 0;


$("#randomNumberWins").text(wins);
	$("#randomNumberLosses").text(losses);



$( document ).ready(function(){
var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19)
$("#random-number").text(randomNumber);


for (var i = 0; i < 4; i++) {
 var num = Math.floor(Math.random() * 11+1);

generatedNumber.push(num);
}


console.log(randomNumber);

console.log(generatedNumber);


// working on this section "reset"
function fourRandomNumbers(){
	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random()*11+1);
		generatedNumber.push(num);
	}
	console.log(generatedNumber)
}
fourRandomNumbers();

//resets the game wip
function reset(){
        randomNumber=Math.floor(Math.random()*101+19);
        console.log(randomNumber)
        $("#random-number").text(randomNumber);
        generatedNumber = [];
        fourRandomNumbers();
        total= 0;
        $("#total-so-far").text(total);
        }

function winner(){
	
	$("#outcome .win-title").html("You won!!!");
		$("#outcome").show();
		wins++;
	$("#randomNumberWins").text(wins);
		reset();
}

//adds the losses to the total
function loser(){
	
$("#randomNumberLosses.losses-title").html("You lost!!!");
		$("#randomNumberLosses").show();
		losses++;
		$("#randomNumberLosses").text(losses);
		reset();
}


$(".close").on ("click",function(){
	$("#randomNumberLosses").hide();
})




// this section works

		$("#one").on ("click", function(){
			total = total + generatedNumber[0];
			console.log("New total= " + total);
			$("#total-so-far").text(total);
	 if (total == randomNumber){
					winner();
					}
					else if ( total > randomNumber){
						loser();
					}
  })
      		$("#two").on ("click", function(){
			total = total + generatedNumber[1];
			console.log("New total= " + total);
			$("#total-so-far").text(total);
	 if (total == randomNumber){
					winner();
					}
					else if ( total > randomNumber){
						loser();
					}
  })
      

      		$("#three").on ("click", function(){
			total = total + generatedNumber[2];
			console.log("New total= " + total);
			$("#total-so-far").text(total);

      	 if (total == randomNumber){
					winner();
					}
					else if ( total > randomNumber){
						loser();
					}
  })

      		$("#four").on ("click", function(){
			total = total + generatedNumber[3];
			console.log("New total= " + total);
			$("#total-so-far").text(total);

      	 if (total == randomNumber){
					winner();
					}
					else if ( total > randomNumber){
						loser();
					}
    });


})	
