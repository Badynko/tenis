"use strict";

const $match = document.querySelectorAll(".accordion");
const $details = document.querySelectorAll(".accordion");

const $matches = $matches.forEach(($match) =>
  $match.addEventListener("click", function () {
    $match.classList.add("hidden");
  })
);
