var numbers = [1,2,3,4,5,6];
function sum(n) {
	var summation = 0;
	summation = n.reduce(function (o,n){ return o+n ; });
	return summation;
}

console.log(sum ( numbers ));

//added comment by user 1