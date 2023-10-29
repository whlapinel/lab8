"use strict";

const buttons = Array.from(document.querySelectorAll(".accordion-label"));
const root = document.documentElement;

buttons.forEach((button) => button.addEventListener('click', buttonClick));

function buttonClick(e) {
  const btn = e.target;
  btn.classList.toggle("open");
  btn.nextElementSibling.classList.toggle("open");
  root.style.setProperty('--content-height',btn.nextElementSibling.scrollHeight + 'px')
  buttons.forEach((button) => {
    if (button !== e.target) {
        button.classList.remove('open');
        button.nextElementSibling.classList.remove('open');
    }
  }
  );

}
