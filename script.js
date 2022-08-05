const smallCup = document.querySelectorAll(".cup-small");
const percentage = document.querySelector("#percentage");
const liters = document.querySelector("#liters");
const remained = document.querySelector(".remained small");

const height = 38.12;
const percents = 12.5;
liters.innerText = "2L";

smallCup.forEach((cup) => {
  cup.addEventListener("click", (e) => {
    e.target.classList.toggle("full");
    updateCup();
  });
});

const updateCup = () => {
  const count = document.querySelectorAll(".full").length;
  percentage.style.height = `${count * height}px`;
  percentage.innerText = `${count * percents}%`;
  liters.innerText = `${2 - count / 4}L`;
  if (count == 0) {
    percentage.innerText = "";
  }
  if (percentage.innerText === "100%") {
    remained.innerText = "";
    liters.innerText = "";
    percentage.style.height = `${322}px`;
  } else {
    remained.innerText = "Remained";
  }
};
