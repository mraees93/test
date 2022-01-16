const { isIDNumberValid } = require("../idNumber.js");

describe("Check if id number is valid", () => {
	it("Check if string is less than 13 length", () => {
		expect(isIDNumberValid("2001014800086")).toBe(true);
		//expect(isIDNumberValid(2909035800085)).toBe(true);
	});
});
