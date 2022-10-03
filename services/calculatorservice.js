// Calculator program performs  add,, substract , multiply and divide functions

// Divide two numbers passed as a parameter

function divide(a=NaN, b=NaN) {
    // Declare answer 
    let answer = NaN;

    // Validation to ensure that both values are numbers
    if(!isNaN(a) && !isNaN(b)){
        a=Number(a);
        b=Number(b);
        answer=a/b;
    }

    // Return a JS object containing the result

    return {
        "a": a,
        "b": b,
        "operator": "/",
        "answer": answer
    }
} // End of divide() function

module.exports={divide} //export module