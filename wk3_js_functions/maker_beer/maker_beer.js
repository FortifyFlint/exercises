// PART 1


var legalDrinkingAge = 21;

function ofAge (age) {
	if (age >= legalDrinkingAge) {
		return true;
	} else {
		return false;
	}
}
// pass in to test
ofAge(20.5);

// option a.2
function ofAge (age) {
	if (age >= 21) {
		return true;
	} else {
		return false;
	}
}


// option B
var legalDrinkingAge = 21;

function ofAge (age) {
	return age >= legalDrinkingAge;
}



// Part 2
/**
 * Exercise 2 Part 2: getAge
**/

    function calculateAge(birthMonth, birthDay, birthYear) {

        // Get Todays Date
        var todayDate = new Date(),
            todayYear = todayDate.getFullYear(),
            todayMonth = todayDate.getMonth(),
            todayDay = todayDate.getDate();

        // Calculate Age
        var age = todayYear - birthYear;

        // Check month discrepancies
        if (todayMonth < (birthMonth - 1) || ((birthMonth - 1) == todayMonth) todayDay < birthDay)) {
            age--;
        }
  

        // @return {Number} age
        return age;
    }


