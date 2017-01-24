

//x=>x*x;

//console.log((x=>x+x+x)(1));

//var obj = {
//		name:'xiaoming',
//    birth: 1990,
//    getAge: function () {
//        var b = this.birth; // 1990
//        var fn = function (x) {
//					var that = b;
//					console.log(this.birth);
//					console.log(that);
//					//console.log(this);
//            return new Date().getFullYear() - that; // this指向window或undefined
//            //return new Date().getFullYear() - that.birth; // this指向window或undefined
//        };
//        return fn();
//    }
//};


//var xiaoming = {
//    name: '小明',
//    birth: 1990,
//    age: function () {
//        var y = new Date().getFullYear();
//        return y - this.birth;
//    }
//};
//
//var obj = {
//    birth: 1990,
//    getAge: function () {
//				//var that = this
//        var b = this.birth; // 1990
//      //  var fn => function () {
//      //      return new Date().getFullYear() - this.birth; // this指向window或undefined
//      //  };
//      //  return fn();
//			
//				var fn =() =>new Date().getFullYear() - this.birth;
//				return fn();
//		
//		}
//};
//
//console.log(obj.getAge());






//console.log(xiaoming.age());
//var fn = xiaoming.age;
//console.log(xiaoming.age());
//console.log(fn());


//console.log(typeof NaN);
console.log(typeof parseInt('2'));
console.log(typeof parseFloat(2.103));
console.log(typeof NaN);
console.log(typeof NaN);
console.log(new Boolean('false'));







































































































































