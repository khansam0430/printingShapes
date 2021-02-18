console.log("connected");
// part1-------------------------------------------------------------
let input = prompt("Enter in Numbers/Integers, separated by spaces");
let arr = input.split(" ");
let sum = 0;

arr.forEach(element => sum += parseInt(element));

console.log("Sum of inputs: " + sum);

document.getElementById('total').value = sum;

// part2-------------------------------------------------------------
var arr = prompt("Enter values to be added with + or -.").split(";");
arr.pop();
var str = arr.toString();
str = str.replace(/\s/g, '');
console.log("string without spaces", str);
// var arr = str.match(/[^\d()]+|[\d.]+/g);
// console.log("array after split", arr);
var total = eval(str);
console.log("total", total);

// part3-------------------------------------------------------------
var arr = prompt("Enter values to be added with + or -.").split(";");
        arr.pop();
        var str = arr.toString();
        str = str.replace(/\s/g, '');
        console.log("string without spaces", str);
        // var arr = str.match(/[^\d()]+|[\d.]+/g);
        // console.log("array after split", arr);
        var total = eval(str);
        console.log("total", total);