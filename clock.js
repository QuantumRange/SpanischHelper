let resultForm = document.querySelector('.result-form');

// Wait for the website to load
window.addEventListener('load', () => {
    let timeFrom = document.querySelector('.timeFrom');
    let timeTo = document.querySelector('.timeTo');

    timeFrom.addEventListener('change', () => {
        let cursorPosition = timeFrom.selectionStart;

        if (cursorPosition === 2) {
            timeFrom.value = timeFrom.value.substring(0, cursorPosition) + ':' + timeFrom.value.substring(cursorPosition);
        }
        else if (cursorPosition === 5) {
            timeFrom.value = timeFrom.value.substring(0, cursorPosition) + ':' + timeFrom.value.substring(cursorPosition);
        }
    });

});