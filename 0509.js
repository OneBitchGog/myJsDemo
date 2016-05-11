/*alert(111);
document.getElementById();

var box = 100;
eval("var box = 100");
alert(box);
eval() 方法很强大
alert(Math.min(1,23,4,5,6,7));
alert(Math.max(1,23,4,5,6,7));

alert(Math.floor(Math.random()*10+1));
alert(Math.floor(Math.random()*5+5));
function sele(s,e){
	var total = e - s + 1;
	return Math.floor(Math.random()*total + e);
}



*/

//工厂模式
// function createObject(name,age){
// 	var obj = new Object();
// 	//obj.name = name;
// 	//obj.age = age;
// 	obj.run = function(){
// 		return this.name + this.age + "运行中。。。。。"
// 	}

// 	return obj;
// }

// var box1 = createObject("tom",100);
//alert(typeof box1);
//alert(box1.run());
//alert(createObject())
//alert(typeof 100);
// var s = 100-0;
// alert(box1 instanceof Object);

// function test(){
// 	this.run = function(){
// 		return '11';
// 	}
// }

// alert(new test().run);
// alert(new test().run())

//-------------------------------------------
// function Box(){} //
// Box.prototype.name = 'wpf';
// Box.prototype.age = 26;
// Box.prototype.run = function(){
// 	return this.name + this.age + '运行中.....';
// }
// var box1 = new Box(); 
// alert(box1.constructor);
// //-------------------------------------------
// function Box(){} 
// Box.prototype = {
// 	name:"wpf",
// 	age:26,
// 	run:function(){
// 		return this.name + this.age + '运行中.....';
// 	}
// }

// var box1 = new Box(); 
// alert(box1.constructor);

// function P(){}

// P.prototype.name = ''


// var box = [2.,45,6,7,2,46];
// alert(box.sort());

// alert(Array.prototype.sort);


//内置引用的扩展
// String.prototype.aha = function(){
// 	return this + '有了这个方法了';
// }

//alert('message'.aha())
//
// function Box(){};
// Box.prototype = {
// 	constructor:Box,
// 	name:'Lee',
// 	age:100,
// 	family:['哥哥','姐姐','妹妹'],
// 	run:function(){
// 		return this.name + this.age + this.family;
// 	}
// }

//构造函数 + 原型模式
//
// function Box(name,age){
// 	this.name = name;
// 	this.age = age;
// 	this.family = ['1','2','3'];
// } 

// Box.prototype = {
// 	constructor:Box,
// 	run:function(){
// 		return this.anme + this.age + '原型模式.....';
// 	}
// }

// var box1 = new Box();
// alert(box1.family);
// box1.family.push(4);
// alert(box1.family);


// var box2 = new Box();
// alert(box2.family);


//动态原型模式

// function Box(name,age){
// 	this.name = name;
// 	this.age = age;
// 	this.family = ['1','2','3'];

// 	Box.prototype = {
// 		//alert('开始.........');
// 		//alert(11);
// 		run:function(){
// 			return this.anme + this.age + '原型模式.....';
// 		}
// 		//alert('结束........');
// 		//alert(22);
// 	}
// }

// var box1 = new Box('tom',11);
// var box2 = new Box('jack',22);


// function F(){
// 	this.name  = 'Lee';
// }

// function Z(){
// 	this.age = 100;
// }

// Z.prototype = new F();

// //alert(new Z().name);

// var f = new F();
// alert(f.constructor == F);
// 
function Box(name,age){
	this.name = name;
	this.age = age;
}

function Desk(name,age){
	Box.call(this,name,age);
}

var desk1 = new Desk('tom',12);
alert(desk1.name + desk1.age);


//原型模型最大的缺点就是优点--共享
//构造函数不会共享  自己的就是自己的





























































