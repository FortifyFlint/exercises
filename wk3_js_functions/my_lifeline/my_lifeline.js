function linfeline () {
	

}
// what we want to do 
var linfeline = function (job, location, spouse, children) {
	var string = "You are a;"
	if (job.charAt(0) === "a" || "e" || "i" || "o" || "u" {
		string += "an"; }
		else string += "a";
	}


	string += job;
	string += "from";
	string += location;
	string += "and married to"
	string += spouse;
	string += "with";
	string += children;
	string += "kids";

	return string;

}


console.assert ("test 1", lifeLine('bball player', 'Spain', 'Shaq', 3) === 'You are a bball player from Spain and married to Shaq  with 3 kids.');

console.assert ("test 2", lifeLine('stunt double', 'Japan', 'Ryan Gosling', 3000) === 'You are a stunt double from Japan and married to Ryan Gosling  with 3000 kids.');




// what we want to do Option B
var linfeline = function (job, location, spouse, children) {
	var string = "You are";
	var firstJobLetter = 
	if (job.charAt(0) .toLowerCase() === "a" || "e" || "i" || "o" || "u") {
		string += "an"; }
		else {
			string += "a";
	}
	string += job;
	string += "from";
	string += location;
	string += "and married to"
	string += spouse;
	string += "with";
	string += children;
	string += "kids";

	return string;

}


console.assert ("test 1", lifeLine('bball player', 'Spain', 'Shaq', 3) === 'You are a bball player from Spain and married to Shaq  with 3 kids.');

console.assert ("test 2", lifeLine('stunt double', 'Japan', 'Ryan Gosling', 3000) === 'You are a stunt double from Japan and married to Ryan Gosling  with 3000 kids.');



// what we want to do Option C
var function = (startWithVowel (word) {
	var word = word.toLowerCase ();
	var firstLetter = word.charAt(0);
	var vowels = {"a", "e", "i", "o", "u"}; 



	for (var i = 0; i < vowels.length; i ++) {
		if (firstLetter === vowels[i]) {
			result = true; 
			break;
		}	else {
			result = false;
				}
			}
		}
}

var lifeline = function (job, location, spouse, children) {
	var string = "You are";

	var firstJobLetter = job.charAt(0) .toLowerCase();
	if (firstJobLetter === "a" || "e" || "i" || "o" || "u") {
		string += "an"; }
		else {
			string += "a";
	}
	string += job;
	string += "from";
	string += location;
	string += "and married to"
	string += spouse;
	string += "with";
	string += children;
	string += "kids";

	return string;

}


console.assert ("test 1", lifeLine('bball player', 'Spain', 'Shaq', 3) === 'You are a bball player from Spain and married to Shaq  with 3 kids.');

console.assert ("test 2", lifeLine('stunt double', 'Japan', 'Ryan Gosling', 3000) === 'You are a stunt double from Japan and married to Ryan Gosling  with 3000 kids.');



// what we want to do Option D!!!

function startsWithVowel(word) {
  var word = word.toLowerCase();
  var firstLetter = word.charAt(0);
  var vowels = ["a", "e", "i", "o", "u"];
  
  var result = false;
   
  for (var i = 0; i < vowels.length; i++) {
    if (firstLetter === vowels[i]) {
      result = true;
      break;
    }
  }
  
  return result;

}

function lifeLine(job, location, spouse, children) {
  
  var string = "You are ";
  if (startsWithVowel(job) === true) {
    string += "an ";
  } else {
    string += "a ";
  }
  string += job;
  string += " from ";
  string += location;
  string += " and married to ";
  string += spouse;
  string += " with ";
  string += children;
  string += " kids.";
  
  return string;
}

console.assert(lifeLine('bball player', 'Spain', 'Shaq', 3) === 'You are a bball player from Spain and married to Shaq  with 3 kids.' );
