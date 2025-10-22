// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const operator = document.getElementById("operator");
// const ans = document.getElementById("ans");
// const solve = document.getElementById("solve");

// solve.addEventListener("click", () => {
//   if (operator.value === "+") {
//     const solution = Number(num1.value) + Number(num2.value);
//     ans.innerHTML = String(solution);
//   } else if (operator.value === "-") {
//     const solution = Number(num1.value) - Number(num2.value);
//     ans.innerHTML = String(solution);
//   } else if (operator.value === "/") {
//     const solution = Number(num1.value) / Number(num2.value);
//     ans.innerHTML = String(solution);
//   } else if (operator.value === "%") {
//     const solution = Number(num1.value) % Number(num2.value);
//     ans.innerHTML = String(solution);
//   } else if (operator.value === "*") {
//     const solution = Number(num1.value) * Number(num2.value);
//     ans.innerHTML = String(solution);
//   }
// });



const display = document.getElementById("display");
const numberButton = (params) => {
    const current = display.textContent;
    if (current == 0) {
        display.innerText = Number(`${current}${params}`);
    } else {
        display.innerText = `${current}${params}`;
    }
};
const equalsBtn = () => {
    const current = display.textContent;
    const solution = eval(current);
    display.innerText = solution;
};
const clearALL=()=>{
    display.innerText = 0;
}