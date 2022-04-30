class Test4 extends Test2 {
	//set testProp(a) {
	//	this._testProp = a * 10;
	//	return this._testProp;
	//}
	#testValue = 84;
	getTestValue() {
		if (this.#testValue > 100) return this.#testValue;
		return false;
	}
}
