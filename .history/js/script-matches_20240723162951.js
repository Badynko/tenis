"use strict";

const $matches = document.querySelectorAll(".accordion");

$matches.forEach(($match) =>
  $match.addEventListener("click", function () {
    $match.classList.add("hidden");
  })
);
