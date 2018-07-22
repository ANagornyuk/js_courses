var a = 10;
console.log(a);
var obj = {
	attr1: "val1",
	attr2: 10,
	attr3: function(){
		console.log("func");
	},
	attr4: {
		attr4_1: "some text",
		attr4_2: 20,
	},
	attr5: "dkmkd"
};

function ObjectCopy(object)
{
	/*
	Why do I need use recursion here?
	It works well without any.
	*/
	var objcop = {};
	for (var i in object)
	{
		objcop[i] = object[i];
	}
	return objcop;

}