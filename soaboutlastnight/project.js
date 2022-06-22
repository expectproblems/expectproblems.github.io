// -----------------------------------

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}
// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-dark');
   }
})();


// always attempt to break to a new line in a way that
// preserves a minimum number of words per line
import "./patches/minwordsperline.js";

import "./patches/storage.js";
import "./patches/memorycard.js";
import "./patches/autosave.js";
import "./patches/preload.js";

// click and drag to scroll the page
import "./patches/dragtoscroll.js";

// convert markdown to HTML tags
import "./patches/markdowntohtml.js"

// -----------------------------------

// import helper patch for binding shortcuts to choices
import choices from "./patches/shortcuts/choices.js";

// bind the number keys to choices
for (var i = 0; i < 9; i++)
{
	choices.add((i+1).toString(), i, true);
}

// bind z, x, and c to the first three shortcuts respectively
["z", "x", "c"].forEach((key, index) => { choices.add(key, index, true) })

// bind spacebar to progress the story,
// provided there's only one choice available
choices.add(" ", 0, true, true);

options.linedelay = 200.0;


// -----------------------------------

// create our game
var story = new Story("soaboutlastnight.json");