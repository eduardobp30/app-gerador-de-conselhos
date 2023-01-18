"use strict";

const btn = document.getElementById("btn");
const adviceNumber = document.getElementById("advice-number");
const quote = document.getElementById("quote");

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const adviceContent = await response.json();
  const adviceId = adviceContent.slip.id;
  const adviceQuote = adviceContent.slip.advice;
  adviceNumber.innerHTML = `Advice #${adviceId}`;
  quote.innerHTML = `"${adviceQuote}"`;
}

btn.addEventListener("click", getAdvice);

getAdvice();
