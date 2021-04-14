const {expect} = require('chai');
const convert = require('../src/index');

describe('conversion', () => {

  	it('should return a number', () => {
		let actualResult = typeof convert('I');
		let expectedResult = 'number';
		expect(expectedResult).to.equal(actualResult);
	});

	it('given VI, should return 6', () => {
    let actualResult = convert('VI');
    let expectedResult = 6;
    expect(expectedResult).to.equal(actualResult);
	});

	it('given LXX, should return 70', () => {
		let actualResult = convert('LXX');
		let expectedResult = 70;
		expect(expectedResult).to.equal(actualResult);
	});

	it('given MCC, should return 1200', () => {
		let actualResult = convert('MCC');
		let expectedResult = 1200;
		expect(expectedResult).to.equal(actualResult);
	});

	it('given IV, should return 4', () => {
		let actualResult = convert('IV');
		let expectedResult = 4;
		expect(expectedResult).to.equal(actualResult);
	});

	it('given XC, should return 90', () => {
		let actualResult = convert('XC');
		let expectedResult = 90;
		expect(expectedResult).to.equal(actualResult);
	});

	it('given CM, should return 900', () => {
		let actualResult = convert('CM');
		let expectedResult = 900;
		expect(expectedResult).to.equal(actualResult);
	});

	it('given XCV, should return 95', () => {
		let actualResult = convert('XCV');
		let expectedResult = 95;
		expect(expectedResult).to.equal(actualResult);
	});

	it('given XCIX, should return 99', () => {
		let actualResult = convert('XCIX');
		let expectedResult = 99;
		expect(expectedResult).to.equal(actualResult);
	});

	it('given XX, should return 95', () => {
		let actualResult = convert('XX');
		let expectedResult = 20;
		expect(expectedResult).to.equal(actualResult);
	});

	it('given XXX, should return 30', () => {
		let actualResult = convert('XXX');
		let expectedResult = 30;
		expect(expectedResult).to.equal(actualResult);
	});
});
