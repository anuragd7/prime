#!/usr/bin/env node

//Check whether number is Prime
var checkprime = function(n) {
    for (j=2 ; j<Math.sqrt(n)+1; j++) {
	var rem = n % j;
	if (rem == 0){
	    return null};
	};
return n;
};

var firstkprime = function(k) {
    var testnum = 3;
    var arr = [];
    var i = arr.length;
    for (i = 0; i < k ; i = i+0) {
	calc = checkprime(testnum);
	if (calc != null) {arr.push(calc);i++;}
	testnum++;
    }
    return arr;
};

//Print to console

var k = 20;
console.log("firstkprime("+ k + ")");
console.log(firstkprime(k));
