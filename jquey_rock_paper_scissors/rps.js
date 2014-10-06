$('#rock').on('click', function(){
    var result = compare('rock', computerChoice());
    $("#decision").html(result);
    });

    $('#paper').on('click', function(){
       var result = compare('paper', computerChoice());
       $("#decision").html(result);
    });

    $('#scissors').on('click', function(){
       var result = compare('scissors', computerChoice());
       $("#decision").html(result);
    });

var computerChoice = function () {
var random = Math.random();
	if (random < .333) {
		return "rock";
	} else if (random < 0.6777) {
		return "paper";
	} else {
		return "scissors";
	}
	};

var compare = function(me, opponent) {
	if (me == "rock") {
		if (opponent == "rock") {
			return "Tie!";
		} else if (opponent == "paper") {
			return "lost to paper"; 
		} else if (opponent == "scissors") {
			return "My rock crushed scissors";
		}

	} else if (me == "paper") {
		if (opponent == "rock") {
			return "My Paper ties up rock!";
		} else if ( (opponent == "paper") {
			return "Tie";
		} else if (opponent == "scissors") {
			return "My paper was cut by scissors";
		}

	} else if (me == "scissors") {
		if (opponent == "rock") {
			return "my scissors were crushed by rock";
		} else if ( (opponent == "paper") {
			return "I cut paper";
		} else if (opponent == "scissors") {
			return "Tie";
		}
	}
};






// // complete portion

// function computerChoice() {

//         var choice = Math.random();

//         if (choice < 0.3333) {
//             choice = "rock";
//         } else if (choice <= 0.67) {
//             choice = "paper";
//         } else {
//             choice = "scissors";
//         }
//         return choice;

//     }

//  function compare(choice1, choice2) {

//         if (choice1 === choice2) {
//             return "The result is a tie!";
//         }

//         if (choice1 === "rock") {
//             if (choice2 === "scissors") {
//                 return "Rock wins!";
//             } else {
//                 return "Paper wins!";
//             }
//         }

//         if (choice1 === "paper") {
//             if (choice2 === "rock") {
//                 return "Paper wins!";
//             } else {
//                 return "Scissors wins!";
//             }
//         }

//         if (choice1 === "scissors") {
//             if (choice2 === "paper") {
//                 return "Scissors wins!";
//             } else {
//                 return "Rock wins!";
//             }
//         }

//     }

//     $('#rock').on('click', function(){
//        var result = compare('rock', computerChoice());
//        $("#decision").html(result);
//     });

//     $('#paper').on('click', function(){
//        var result = compare('paper', computerChoice());
//        $("#decision").html(result);
//     });

//     $('#scissors').on('click', function(){
//        var result = compare('scissors', computerChoice());
//        $("#decision").html(result);
//     });



