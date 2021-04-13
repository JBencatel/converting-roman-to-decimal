const {expect} = require('chai');
const convert = require('../src/index');

describe('conversion', () => {

  	it('should return a number', () => {
		let actualResult = typeof convert('I');
		let predictedResult = 'number';
		expect(predictedResult).to.equal(actualResult);
	});

	it('given VI, should return 6', () => {
    let actualResult = convert('VI');
    let predictedResult = 6;
    expect(predictedResult).to.equal(actualResult);
	});

	it('given LXX, should return 70', () => {
		let actualResult = convert('LXX');
		let predictedResult = 70;
		expect(predictedResult).to.equal(actualResult);
	});

	it('given MCC, should return 1200', () => {
		let actualResult = convert('MCC');
		let predictedResult = 1200;
		expect(predictedResult).to.equal(actualResult);
	});

	it('given IV, should return 4', () => {
		let actualResult = convert('IV');
		let predictedResult = 4;
		expect(predictedResult).to.equal(actualResult);
	});

	it('given XC, should return 90', () => {
		let actualResult = convert('XC');
		let predictedResult = 90;
		expect(predictedResult).to.equal(actualResult);
	});

	it('given CM, should return 900', () => {
		let actualResult = convert('CM');
		let predictedResult = 900;
		expect(predictedResult).to.equal(actualResult);
	});

	it('given XCV, should return 95', () => {
		let actualResult = convert('XCV');
		let predictedResult = 95;
		expect(predictedResult).to.equal(actualResult);
	});

	it('given XCIX, should return 99', () => {
		let actualResult = convert('XCIX');
		let predictedResult = 99;
		expect(predictedResult).to.equal(actualResult);
	});

	it('given XX, should return 95', () => {
		let actualResult = convert('XX');
		let predictedResult = 20;
		expect(predictedResult).to.equal(actualResult);
	});

	it('given XXX, should return 30', () => {
		let actualResult = convert('XXX');
		let predictedResult = 30;
		expect(predictedResult).to.equal(actualResult);
	});
});
