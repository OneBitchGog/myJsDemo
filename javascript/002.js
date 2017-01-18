//[[1, 2], [3, 4]].map(([a, b]) => a + b)


//console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));


//var a = [1,2];


//[1,2].map(function(item){
//	console.log(item);
//})
var a=[[1,2],[2,3]];

a.map(function(item){
	console.log(item);
})
console.log(a);


//var b = a.map((item) => item);

//console.log(b);

//var b = [1,2].map((item) => item);

//console.log(b);
var b1 = [1,2].map((item) => item);
var b2 = [2,1].map((item) => item);

//console.log(b1);
//console.log(b2);

var b = ([1,2],[2,3]).map((i) => i);
var c = ([2,1],[3,2]).map((i) => i);


//console.log(d);
//console.log(c);