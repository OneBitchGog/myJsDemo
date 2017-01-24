


//高级函数
 

var a = [1,2,3,4,5,6,7,8];

var r = a.map(function(x){
	return x%2==0;
})

var r1 = a.filter(function(x){
	return x%2==0;
})

//console.log(r1);


var a1 = ['1','3df','fdsf','','',null];

function ss(x){
	console.log(x.filter(function(y){
			 y&&y.trim();
	}))
}

//ss(a1);
//


//var arr = ['A', 'B', 'C'];
//var r = arr.filter(function (element, index, self) {
//    console.log(element); // 依次打印'A', 'B', 'C'
//    console.log(index); // 依次打印0, 1, 2
//    console.log(self); // self就是变量arr
//    return true;
//});
//
//console.log(r);


//var r,arr = ['apple','ss','apple','aa','ww','er','aa','ss'];
//
//r = arr.filter(function(ele,index,self){
//		console.log("-------------------");
//		console.log(self.indexOf(ele));
//		console.log(self);
//		console.log(index);
//		console.log(ele);
//		return self.indexOf(ele)==index;
//})
//
//console.log(r);


//var r= [];
//var j= 0
//for(let i=0;i<100;i++){
//		
//		r[j] = function(i){
//			if(){
//			}
//		}
//		j++;
//}

//判断是不是质数
function isPrime(num){
	if(typeof (num) != 'number' || num <2){
			//console.log(true);
			return false;
	}

	if(num === 2){
			//console.log(true);
			return true;
	}else if(num % 2 == 0){
			return false;
	}

	for(let i=3;i<=Math.sqrt(num);i+=2){
		if(num % i == 0){
				return false;
		}	
	}

	return true;
}
//console.log(Math.sqrt(3));
//console.log(isPrime(3));

//for(let i=0;i<=100;i++){
//	console.log('---------------');
//	console.log(isPrime(i));
//	if(isPrime(i)){
	//		console.log(i);
	//}
//	console.log('***************');
//}




var arr1 = [1,3,4,56,6];
function ss(arr){
		return arr.reduce(function(x,y){
				return x+y;
		})
}

//console.log(ss(arr1));








// 定义数字0:
var zero = function (f) {
    return function (x) {
        return 0;
    }
};

// 定义数字1:
var one = function (f) {
    return function (x) {
        return f(x);
    }
};

// 定义加法:
function add(n, m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        }
    }
}


// 计算数字2 = 1 + 1:
var two = add(one, one);
//console.log(one);
//console.log(two);
//console.log(two);


// var x = null || 0;
// console.log(x);

function create_counter(initial) {
    var x = initial || 0;
		console.log(x);
    return {
        inc: function () {
					console.log(x);
            x++;
            return x;
        }
    };
}

var c1 = create_counter();
console.log(c1.inc()); // 1
console.log(c1.inc()); // 2
console.log(c1.inc()); // 3






































































































