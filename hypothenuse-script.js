const sides = document.querySelectorAll(".input-text");
const calcbtn = document.querySelector("#calculation-hypothenuse-btn");
const output = document.querySelector("#output");

function calcSumOfSqr(a, b) {
  const sumOfSqr = a ** 2 + b ** 2;
  return sumOfSqr;
}

function calcHypothenuse() {
  const sumOfSqr = calcSumOfSqr(Number(sides[0].value), Number(sides[1].value));
  const lengthOfHypothenuse = Math.sqrt(sumOfSqr);
  output.innerText = `The Calculation Of Hypothenuse Is : ${lengthOfHypothenuse} `;
}

calcbtn.addEventListener("click", calcHypothenuse);
