// the howdy function
function howdy() {
    console.log('Kelley Smith say hello.');
}
// this calls the howdy function
howdy();

// this is the function expression
var numba = function (string) {
	if (string.length < 7) {
		console.log('What a short little word!');
	} else if (string.length > 7) {
		console.log('I\'m sorry, but that\'s too many to count.');
	} else {
		console.log('7, what a perfect choice!');
	}
};

// this calls the numba function expression with three different strings, "7", "seventy", and "univesity"
numba('7');
numba("seventy");
numba("university");

// this the inception function
function inception (display, favMovie) {
	display(favMovie);
}

// the movieStatement function add the movieName with the favorite movie string
function movieStatement(movieName) {
	console.log(movieName + ' is a favorite mmovie.');
}

// this sets the movieStatement parameter in the above function as Forrest Gump
inception(movieStatement, 'Forrest Gump');
