let calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
};

console.log(calculator.add(9,7));
console.log(calculator.mul(9,7));
console.log(calculator.add);
console.log("Another Shorthand Method");

let calculator1 = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
};

console.log(calculator.add(9,7));
console.log(calculator.sub(9,7));
console.log(calculator.add);