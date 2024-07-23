"use strict";

const $match = document.querySelectorAll(".match");
const $details = document.querySelectorAll(".accordion");

const $matches = $match.forEach(($match) =>
  $match.addEventListener("click", function () {
    const $details = document.querySelectorAll(".accordion");
    this.classList.add("hidden");
  })
);
