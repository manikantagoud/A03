// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculateDays function with several sets of inputs', function (assert) {
  assert.equal(App.calculateDays("10/02/2018", "10/12/2018"), 10, ' calculatedays(10/02/2018,10/12/2018) returns 10');
  assert.equal(App.calculateDays("10/24/2018","10/02/2018"), 22, 'calculateDays(10/24/2018,10/02/2018) returns 22');
  assert.equal(App.calculateDays("11/16/2018","09/30/2018"), 48, 'calculateDays(11/16/2018,09/30/2018) returns 48');
  assert.equal(App.calculateDays("10/28/2018","03/21/2019"), 144, 'calculateDays(10/28/2018,03/21/2019) returns 144');
  //assert.equal(App.getDays('', ''), 0, 'Bouns-4 calculateNoOfSeats("","") returns 0');
  //assert.equal(App.getDays('tyu', 'iop'), 0, 'Bouns-5 calculateNoOfSeats("tyu","iop") returns 0');
  //assert.equal(App.getDays(2.0, 0.0), 0, 'Bouns-5 calculateNoOfSeats(2.0,"0.0) returns 0');
  
});


