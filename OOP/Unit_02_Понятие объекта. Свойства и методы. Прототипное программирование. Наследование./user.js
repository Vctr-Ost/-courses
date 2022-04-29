let user = {
	'login': '',
	'password': '',
	'validatePass': function () {
		if (this.password.length >= 6 ) return true;
		return false;
	}
};