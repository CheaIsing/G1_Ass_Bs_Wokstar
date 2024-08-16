var className = "inverted";
var scrollTrigger = 40;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("nav")[0].classList.add(className);
  } else {
    document.getElementsByTagName("nav")[0].classList.remove(className);
  }
};

// Get the <html> element

/**
 * Utility function to calculate the current theme setting.
 * Look for a local storage value.
 * Fall back to system setting.
 * Fall back to light mode.
 */
function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

/**
 * Utility function to update the button text and aria-label.
 */
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark
    ? `<i class="fa-solid fa-moon"></i>`
    : `<i class="fa-solid fa-sun"></i>`;
  // use an aria-label if you are omitting text on the button
  // and using a sun/moon icon, for example
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerHTML = newCta;
}

/**
 * Utility function to update the theme setting on the html tag
 */
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
 * On page load:
 */

/**
 * 1. Grab what we need from the DOM and system settings on page load
 */
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * 2. Work out the current site settings
 */
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

/**
 * 3. Update the theme setting and button text accoridng to current settings
 */
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });
/**
 * 4. Add an event listener to toggle the theme
 */
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});


// script toast
// toast cart
var buttons = document.querySelectorAll('#toast-cart');
    
   // Loop through each button and attach the click event listener
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var toast = new bootstrap.Toast(document.getElementById('liveToast-cart'));
        toast.show();
    });
});
// toast compare
var buttons = document.querySelectorAll('#toast-wish');
    
   // Loop through each button and attach the click event listener
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var toast = new bootstrap.Toast(document.getElementById('liveToast-wish'));
        toast.show();
    });
});
// toast wishlist
var buttons = document.querySelectorAll('#toast-compare');
    
   // Loop through each button and attach the click event listener
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var toast = new bootstrap.Toast(document.getElementById('liveToast-compare'));
        toast.show();
    });
});

//btn close
const myToastEl = document.getElementById('myToast')
myToastEl.addEventListener('hidden.bs.toast', () => {
  // do something...
})


//validation
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
          }

          form.classList.add('was-validated')
      }, false)
  })
})()

//cart script
const plus = document.querySelector(".plus"),
            minus = document.querySelector(".minus"),
            num = document.querySelector(".num");
        let a = 1;

        plus.addEventListener("click", () => {
            a++;
            a = (a < 10) ? "0" + a : a;
            num.innerText = a;
        });
        minus.addEventListener("click", () => {
            if (a >= 1) {
                a--;
                a = (a < 10) ? "0" + a : a;
                num.innerText = a;
            }
        });

const header = document.getElementsByTagName("header");
console.log(header);
