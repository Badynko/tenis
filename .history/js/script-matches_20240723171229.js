"use strict";

const $match = document.querySelectorAll(".match");
const $details = document.querySelectorAll(".accordion");

const $matches = $match.forEach(($match, $details) =>
  this.addEventListener("click", function () {
    $details.classList.remove("hidden");
  })
);
