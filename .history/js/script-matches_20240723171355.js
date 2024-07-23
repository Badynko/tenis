"use strict";

const $match = document.querySelectorAll(".match");
const $details = document.querySelectorAll(".accordion");

const $matches = $match.forEach(($match, $details) =>
  $match.addEventListener("click", function () {
    this.classList.add("hidden");
  })
);
