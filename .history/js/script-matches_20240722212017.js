"use strict";

const $matches = document.querySelectorAll(".match");
console.log($match);

$matches.forEach(($match) =>
  $match.addEventListener("click", function () {
    $match.classList.add("hidden");
  })
);
