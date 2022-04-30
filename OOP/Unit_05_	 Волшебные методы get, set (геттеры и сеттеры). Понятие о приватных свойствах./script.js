const test = new Test();
test.testProp = 'abs12';
//console.log(test.testProp);

const test2 = new Test2();
//console.log(test2.testProp = 'asd15');		// asd15
//console.log(test2.testProp = '');				// пусто
//console.log(test2.setTestProp('')); 			// false
//console.log(test2.testProp);					// result

const test3 = new Test3();
//console.log(test3.testProp = 'ababagalamaga');
//console.log(test3.setTestProp(''));
//console.log(test3.testProp);

const test4 = new Test4();
//console.log(test4.testProp = 15);
//console.log(test4);
//console.log(test4.testProp);
console.log(test4.getTestValue());
