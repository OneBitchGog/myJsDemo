



 //函数和方法测试 


//function foo() {
//    var x = 'Hello, ' + y;
//    console.log(x);
//    var y = 'Bob';
//}
//
//foo();


//function letDemo(){
//	//for(let i= 0;i<=10;i++){
//	for(var i= 0;i<=10;i++){
//		
//	}
//	++i;
//	console.log(i)
//}
//
//letDemo()


//var xiaoming = {
//	name:'小明',
//	brith:1990,
//	age:function(){
//		var y = new Date().getFullYear();
//		return y- this.brith;
//	}
//};
//
//console.log(xiaoming.age());


function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

//console.log(xiaoming.age());
//console.log(getAge.apply(xiaoming,[]));
//console.log((getAge.call(xiaoming));

//var fn = xiaoming.age;
//console.log(fn);
//fn();
//console.log(fn());

//console.log(Math.max.apply('',[1,3,5,2]));



//console.log('a'&&'b');
//console.log('a'&&'b');
//console.log('a'&&'b');
//console.log('b'&&'a');
//console.log('b'&&'a');
//console.log('b'&&'a');
//console.log('b'&&'a');
//console.log('b'&&'a');
//console.log('b'||'a');
//console.log('b'||'a');


var i = null;
var a = [];

for(i=0;i<10;i++){
	a[i] = function(){
		console.log(i);
	}
}


//a[6]();


//var a = ['晓丽','建哥'];

//for(var i=0;i<10;i++){
//	a[i] = function(){
//		console.log(i);
//	}
//}

//a[1]();

//var count = 0;

//var oldParseInt = parseInt;
//
//global.parseInt = function(){
//	count +=1;
//	return oldParseInt.apply(null,[])
//}

//console.log('a'&& (1>2));
//console.log(false&&'a');

//var a = [];
//
//for(var i= 0;i <10;i++){
//
//	a[i] = (function(x){
//		 return function(){
//				console.log(x);
//		 }
//	})(i);
//}
//
//a[6]();
//
var c = (function (){
	return	1;
	})();

//console.log(c);



var a = [];

for(let i=0;i<10;i++){
	a[i] = function(){
		console.log(i)
	}
//	console.dir(a[i]);
}
console.log(a[0]);
console.log(a[6]);
a[6]();
































