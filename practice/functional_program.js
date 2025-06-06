//calculate area and perimeter of circle.
let arr = [5, 6, 9];
const pi = Math.PI;

// const area = (r) => pi*r**2;
function area(r){
    return pi*r**2;
}
const perimeter = (r) => 2*pi*r;

console.log(arr.map(area));
console.log(arr.map((area) => {
   return area = area * 2;
}));



// solveCircle(arr);