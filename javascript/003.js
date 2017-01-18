var arr1 = [[1, 2], [3, 4]];
/*
arr1.map(function (item, index, arr) {
	console.log("---------------------");
	console.log(item);
	return item;
} );


var b = arr1.map((item, index, arr) => {console.log(item); return item;});

var b = arr1.map((item) => {console.log(item); return item;});

console.log("---------------------");
console.log(b);


var a = 1;
var b = 2;
var c = 3;

var a = 1, b = 2, c = 3;

var [a, b, c, d] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);
console.log(d);


var b = [[1, 2], [3, 4]].map(([x, y]) => {console.log('x:' + x + '  y:' + y);return x + y;});

*/
var b = [[1, 2], [3, 4]].map(([x, y]) => x + y);
console.log(b);