var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;

console.log("a: ", a);
console.log("b: ", b);

var c = {
    name: "Juana"
}
var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.name = "Maria";

console.log("c: ", c);
console.log("d: ", d);

c.name = "Pedro";

console.log("c: ", c);
console.log("d: ", d);