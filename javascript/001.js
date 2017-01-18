function test(){
	
	for(var i=0;i<10;i++){
		
	}
	console.log(i);
}

//test();

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
//console.dir(a);
a[9]();