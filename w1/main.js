console.log('Hello from the inside main.js file')

//let myVar;


const myVar = 42;
const myVarType = typeof(myVar);

console.log("myVarType" + myVarType);
console.log("myVarType + ${myVarType}");

if(myVarType === "number") {
    console.log('will 11 run?');
} else {
    console.log('will 13 this one run?');
}

fucntion runNow () {
    console.log('inside the function');
}