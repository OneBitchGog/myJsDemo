/*
function person() {
	var _name = '张三';
	var _age = 18;

	return {
		getName: function() {
			return _name;
		},
		setName: function(name) {
			_name = name;
		},
		getAge: function() {
			return _age;
		},
		setAge: function(age) {
			_age = age;
		},
		toString: function() {
			return 'name:' + _name + '\tage:' + _age;
		}
	};
}

var p = person();
console.log(p.toString());
p.setName('王鹏飞');
p.setAge(28);
console.log(p);

*/

var idObject = (function(){
	var _id;
	return {
		setId: function(id) {
			_id = id;
		},
		getId: function() {
			return _id;
		}
	};
})();


idObject.setId('123456');
console.log(idObject.getId());
