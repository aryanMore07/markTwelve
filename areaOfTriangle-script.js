const input = document.querySelectorAll(".input-text");
const checkbtn = document.querySelector(".btn-check");
const output = document.querySelector("#output");

function calcAreaOfTriangle(a, b) {
  const areaOfTriangle = 0.5 * a * b;
  return areaOfTriangle;
}

function areaTriangle() {
  const areaOfTriangle = calcAreaOfTriangle(
    Number(input[0].value),
    Number(input[1].value)
  );
  output.innerText = `The area of Triangle is : ${areaOfTriangle}  cm²`;
}

checkbtn.addEventListener("click", areaTriangle);
