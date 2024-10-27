document.addEventListener('keydown', (event) => {
    const keyCodeDisplay = document.getElementById('key-code-display');
    keyCodeDisplay.textContent = `Keyboard Key: ${event.key} | Code: ${event.keyCode}`;
});
