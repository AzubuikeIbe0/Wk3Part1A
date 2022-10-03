// multiply two numbers passed as a parameter

function multiply(a=NaN, b=NaN) {
    // Declare answer 
    let answer = NaN;

    // Validation to ensure that both values are numbers
    if(!isNaN(a) && !isNaN(b)){
        a=Number(a);
        b=Number(b);
        answer=a*b;
    }

    // Return a JS object containing the result

    return {
        "a": a,
        "b": b,
        "operator": "*",
        "answer": answer
    }
} // End of multiply() function

module.exports={multiply} //export module