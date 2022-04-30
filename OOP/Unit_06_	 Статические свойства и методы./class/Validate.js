class Validate {
	constructor (item) {
		this.a = item;
	}

	static isNumber(par) {
		if (typeof par === 'number') return true;			// +
		return false;
	}
  
	static isInt(par) {
		if (par % 1 === 0) return true;						// +
		return false;
	}
  
	static isFloat(par) {
		return (par%1===0) ? false : true;					// +
	}
  
	static isChar(par) {
		if (typeof par === 'string' && par.length === 1) return true;		// +
		return false;
	}
  
	static isString(par) {
		return (typeof par === 'string') ? true : false;		// +
	}
  
	static isBoolean(par) {
		return (typeof par === 'boolean') ? true : false;		// +
	}
  
	static isArray(par) {
		return Array.isArray(par);								// +
	}
  
	static toMoney(par) {
		return par.toFixed(2);									// 
	}
}
