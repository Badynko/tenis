"use strict";

const $matches = document.querySelectorAll(".accordion");
const $matches = document.querySelectorAll(".accordion");

const $details = $matches.forEach(($match) =>
  $match.addEventListener("click", function () {
    $match.classList.add("hidden");
  })
);
