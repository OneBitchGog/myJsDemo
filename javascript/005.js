


//装饰器

//var count = 0;
//var oldParseInt = parseInt;
//
//
//global.parseInt = function(){
//		
//		count += 1;
//		return oldParseInt.apply(null,[]); 
//}
//
//parseInt('10');
//parseInt('20');
//parseInt('30');

//console.log(count);




//高阶函数

function jdz (a,b,c){
	return c(a)+c(b);
//	console.log(c(a)+c(b))
}


var ss =function(a,b,c){
	return c(a)+c(b);
	//console.log(c(a)+c(b))
}

//console.log(jdz(-2,-3,Math.abs))
//console.log(ss(-2,-3,Math.abs))

function add(a) {
    return function (b) {
        return a + b;
    }
}
//add(2)(3);

//console.log(add(2)(3));
//console.log(add(2));


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(arr.map()); 
//console.log(arr.map(function(item){
//	return item*item;
	 //item*item;
//})); 


//console.log(arr.map(String));

//console.log(arr.reduce(function(x,y){
//	return x*10+y;
//}));





//var str = '12345';
//
//var a = [];
//
//for(let i=0;i<str.length;i++){
//  a[i] = function(){
//			return str.substring(i,i+1);
//	}
//	
//	
//	
//	//a[i] = str.substring(i,i+1);
//}
//
//console.log(a[0]());

var str1 = '123456789';
//console.log(str1.split(''));
var s =function(){
	return strl.split('').map(function(x){
			return x-0;
	})
}

var s1 =(function(){
	//return '123456789'.split('').map(function(x){return x-0}).reduce(function(x,y){x*10+y});
	return '123456789'.split('').map(function(x){return x-0});
})();
//console.log(s1.reduce(function(x,y){return x+y});
//console.log(s1.map(String));

//console.log(s1);
//console.log(s1.reduce(function(x,y){
//		return x*10+y;
//}))


//console.log(parseInt('2'));

//console.log(2);


console.log(parseInt('---------------------'));
console.log(parseInt('2',0));
console.log(parseInt('2',1));
console.log(parseInt('2',2));
console.log(parseInt('2',3));
//console.log();

































































