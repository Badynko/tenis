"use strict";

const $match = document.querySelectorAll(".accordion");
const $details = document.querySelectorAll(".match");

const $matches = $match.forEach(($match) =>
  $match.addEventListener("click", function () {
    $match.classList.add("hidden");
  })
);