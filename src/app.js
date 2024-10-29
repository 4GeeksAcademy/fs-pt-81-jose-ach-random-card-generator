/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  console.log("evento.onload");
  const palos = ["♦", "♥", "♠", "♣"];
  const valores = [
    "A",
    "J",
    "K",
    "Q",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];

  const aleatorioPalos = palos[Math.floor(Math.random() * palos.length)];
  const aleatorioValores = valores[Math.floor(Math.random() * valores.length)];
  document.querySelector(".paloArriba").innerText = aleatorioPalos;
  document.querySelector(".valor").innerText = aleatorioValores;
  document.querySelector(".paloAbajo").innerText = aleatorioPalos;
  if (aleatorioPalos == "♦" || aleatorioPalos == "♥") {
    document.querySelector(".paloArriba").classList.add("red");
    document.querySelector(".valor").classList.add("red");
    document.querySelector(".paloAbajo").classList.add("red");
  }
};
