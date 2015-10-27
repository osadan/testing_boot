var expect = require ("chai").expect;
var assert = require('chai').assert;
var should = require('chai').should;
var tags = require('../lib/tags.js');
var sinon = require('sinon');

describe('Mocha before and after',function(){
	before(function(){
		var a;
	});
	beforeEach(function(){
		var b = 2;
		a = 1;
	})
	it('does b exist in every function',function(){
		//console.log(b);
		//assert.equal(b,undefined);
		//expect(b).to.throw(Error);
		//expect(b).to.be.undefined;
		//expect(b).to.throw(ReferenceError)
		//assert.isUndefined(b);	
		//assert.throws(b,ReferenceError);
		//assert.notOk(b,'well');
		//should(b).not.exists;
		//should(b).to.be.undefined;
		assert.throw(function(){return b},ReferenceError);
		assert.ok(function(){return a;});

	});
	it('does a exist in every function',function(){
		expect(a).to.equal(1);
	})
});


describe("Object Function",function(){
	before(function(){
		var func;
	})
	beforeEach(function(){
		func = function func(){};
	})
	
	it('function is not an object',function(){
		expect(typeof func).not.to.be.an('object');
	});	

 	it('function is a function',function(){
		assert.typeOf(func,"function");
	});

	it('does function have a prototype ?',function(){
		expect(func).to.have.property('prototype');
		expect(func.prototype).to.not.be.undefined;
	});

	it('then what is function',function(){
		expect(func).to.be.instanceof(Function);
	});

	it('does function has a name',function(){
		expect(func.prototype.constructor.name).to.be.equal('func');
	});
});

describe("Literal Object",function(){
	before(function(){
		var obj;
	});

 	beforeEach(function(){
		obj = {};
		obj.variable = 'x';
		obj.amIaFunction = function(){
			return true;
		};
	});

	it('what is the type of obj',function(){
		assert.typeOf(obj,'object');
	});

	it('does literal object has prototype',function(){
		expect(obj.prototype).to.be.undefined;
	});

	it('does literal object has variables',function(){
		expect(obj.variable).not.to.be.null;
		expect(obj.variable).to.equal('x');
	});

	it('does literal object has methods',function(){
		expect(obj.amIaFunction()).to.be.true;
	});

	it('can we create literal objec instance',function(){
		assert.Throw(function(){new obj},TypeError,'object is not a function');
	});

	it('does javascript objects passed by reference',function(){
		
	});

	it('so how can we instantiate literal objects',function(){
		
		
	});

})