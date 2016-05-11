
//匿名函数以及闭包


// (function(){
// 	console.log(111);
// })();

// (function(age){
// 	alert(age)
// })(100);

//函数内放一个匿名函数
// function Box(){
// 	return function(){
// 		return 'wpf';
// 	}
// }

// console.log(Box);
// console.log(Box());
// console.log(Box()())


// function box(){
// 	var age = 100;
// 	return function(){
// 		return age;
// 	}
// }

// console.log(box()())
// 
// 
// 使用匿名函数实现局部变量驻留内存

// function box(){
// 	var age = 100;
// 	return function(){
// 		age++;
// 		return age;
// 	}
// }

// var b = box();
// console.log(b());
// console.log(b());
// console.log(b());
// console.log(b());
// console.log(b());


// function box(){
// 	var arr = [];

// 	for(var i=0;i<5;i++){
// 		arr[i] = (function(num){
// 			return num;
// 		})(i);
// 	}

// 	return arr;
// }

// //var b = box();
// var b = new box();
// console.dir(b);

// for(var j=0;j<b.length;j++){
// 	console.log('-------------------------------')
// 	console.log(b);
// 	console.log(b[j]);
// }


//this对象的应用
//
var box = {
	getThis:function(){
		return this;
	}
}

console.log(box.getThis() == box);


//私有作用域

// (function(){
// 	var age = 100;
// 	alert(age);
// })();

// alert(age);

function Box(){
	var age = 100;
	function run(){
		return '调用到了.......';
	}

	this.publicGo = function(){
		return age+run();
	}
}


alert(new Box().publicGo());


































