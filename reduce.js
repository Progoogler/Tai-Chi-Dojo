function each(array, func) {
	for (var i = 0; i < array.length; i += 1) {
		var item = array[i];
		func(item);
	};
}


array = [0,"silly"]
i = 1;


function reduce(array, combine, start) {
	var current = {val:0};

	each(array, function (item) {

		combine(value, current);

	});
	return current
}



var stupid = "something"


var myArray = [1,2,3,4,5,6];

var current = "something";

reduce(myArray, function (x, y){
	var x = arguments[0];
	var y = arguments[1];
	y.val = x
}, 0);

//repeat

function each(array, func) {
	for (var i = 0; i < array.length; i += 1) {
		func(array[i]);
	};
}

function reduce(array, combine, start) {
	var current = start;
	each(array, function(item) {
		current = combine(item, current);
	});
	return current;
}