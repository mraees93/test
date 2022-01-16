function isIDNumberValid(id_num) {
	if (id_num.length < 13) {
		return false;
	}
	return true;
}
console.log(isIDNumberValid("2001014800086"));

module.exports = { isIDNumberValid };
