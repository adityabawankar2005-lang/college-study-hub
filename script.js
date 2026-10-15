// College Study Hub - JavaScript
<h2>☕ Java Programming</h2>

document.addEventListener("DOMContentLoaded", function () {

    // Subject Notes Button
    const notesButton = document.querySelector(
        ".notes-btn"
    );

    // Previous Year Questions Button
    const pyqButton = document.querySelector(
        ".pyq-btn"
    );

    // Study Materials Button
    const materialsButton = document.querySelector(
        ".materials-btn"
    );

    // Programming Button
    const programmingButton = document.querySelector(
        ".programming-btn"
    );

    // Button click functions

    if (notesButton) {
        notesButton.addEventListener("click", function () {
            alert("Welcome to Subject Notes!");
        });
    }

    if (pyqButton) {
        pyqButton.addEventListener("click", function () {
            alert("Welcome to Previous Year Questions!");
        });
    }

    if (materialsButton) {
        materialsButton.addEventListener("click", function () {
            alert("Welcome to Study Materials!");
        });
    }

    if (programmingButton) {
        programmingButton.addEventListener("click", function () {
            alert("Welcome to Programming Learning!");
        });
    }

    console.log("College Study Hub JavaScript Loaded!");

});