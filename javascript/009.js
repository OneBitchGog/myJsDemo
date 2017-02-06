


//console.log('1111');

//function Student(name){
//	this.name = name;
//	this.hello = function(){
//		return name+' say hello!';
//	}
//}
//
//
//var student = new Student('lisi');
//
//console.log(student.name);
//console.log(student.hello());
//
//console.log(student instanceof Student);

//
//function Student(prop){
//	this.name = prop.name || '匿名';
//	this.age = prop.age  || 1;
//}
//
//Student.prototype.hello = function(){
//	return this.name + ' say hello!';
//}
//
//function createStudent(prop){
//	return new Student(prop || []);
//}
//
//var xiaoming = createStudent({
//	name:'xiaoming'
//})
//
//console.log(xiaoming.hello());




//function Student(props) {
//    this.name = props.name || 'Tony';
//}
//
//Student.prototype.hello = function () {
//    console.log('Hello, ' + this.name + '!');
//}
//
//function PrimaryStudent(props){
//	Student.call(this,props);
//	this.grade = props.grade || 1;	
//}
//
//function F(){};
//
//F.prototype = Student.prototype;
//
//PrimaryStudent.prototype  =  new F();
//
//// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
//PrimaryStudent.prototype.constructor = PrimaryStudent;
//
//PrimaryStudent.prototype.getGrade = function(){
//	return this.grade;
//}
//
//var xiaohua = new PrimaryStudent({
//	name:'校花',
//	grade:2
//})
//
//console.log(xiaohua.name)




class Student{
	constructor(name){
		this.name = name;
	}

	hello(){
		console.log(this.name + '  say hello!');
	}
}

var xiaoming = new Student('小明1');
console.log(xiaoming.hello());































































































































