//Q.1  


function counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


//Q.2.  


let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();

//output=  1 0

//Q.3.


for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i);
    }, 1000);
}
///output=  3 times 

//Q.4. 

//output

var a = 12;

(function() {
    alert(a);
})();

//Q.5.. 


var a = 10;
var x = (function() {
    var a = 12;
    return function() {
        alert(a);
    };
})();
x();

//Q.6.


var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';

    (function innerFunc(innerArg) {
        var innerVar = 'b';

        console.log(
            "outerArg = " + "outerArg" + "\n" +
            "innerArg = " + "innerArg" + "\n" +
            "outerVar = " + "outerVar" + "\n" +
            "innerVar = " + "innerVar" + "\n" +
            "globalVar = " + "globalVar");

    })(456);
})(123);


//Q.6 .


const outerFunction = function(length) {
    innerFunction = function(breadth) {
        console.log(`area of RECTANGLE ${length*breadth}`);
    }
}
outerFunction(20);
innerFunction(50);

//Q.7..

let outer = function() {
    variableCount = 0;
    inner = function() {
        console.log(`the count is ${variableCount+=1}`)
    }
}

outer();
inner();
inner();
inner();
inner();
inner();