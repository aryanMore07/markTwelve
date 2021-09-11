const inputs = document.querySelectorAll(".input-text");
const isTrianglebtn = document.querySelector("#isTriangle-btn");
const output = document.querySelector("#output");

function calcSum(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
  const sumOfAngles = calcSum(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    output.innerText = "Yay It Forms A Triangle";
  } else {
    output.innerText = "The Angles Given Are Not Form A Triangle";
  }
}

isTrianglebtn.addEventListener("click", isTriangle);
