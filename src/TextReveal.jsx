import React, { useEffect } from "react";
import "./TextReveal.css";
const TextReveal = () => {
  useEffect(() => {
    function checkForVisibility() {
      const headers = document.querySelectorAll(".header");
      headers.forEach(function (header) {
        if (isElementInViewport(header)) {
          header.classList.add("headerVisible");
        } else {
          header.classList.remove("headerVisible");
        }
      });
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    checkForVisibility();

    if (window.addEventListener) {
      window.addEventListener("DOMContentLoaded", checkForVisibility, false);
      window.addEventListener("load", checkForVisibility, false);
      window.addEventListener("scroll", checkForVisibility, false);
    }

    return () => {
      window.removeEventListener("DOMContentLoaded", checkForVisibility, false);
      window.removeEventListener("load", checkForVisibility, false);
      window.removeEventListener("scroll", checkForVisibility, false);
    };
  }, []);
  return (
    <>
      <div class="section section-white">
        <h1 class="header">Hello 👋</h1>
      </div>

      <div class="section section-blue">
        <h1 class="header">Text on this page...</h1>
      </div>

      <div class="section section-black">
        <h1 class="header">will only appear...</h1>
      </div>

      <div class="section section-white">
        <h1 class="header">when it becomes...</h1>
      </div>

      <div class="section section-blue">
        <h1 class="header">visible in the viewport...</h1>
      </div>

      <div class="section section-black">
        <h1 class="header">nifty, right?</h1>
      </div>
    </>
  );
};

export default TextReveal;
