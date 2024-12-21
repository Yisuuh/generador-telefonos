const generateButton = document.getElementById('generate');
const clearButton = document.getElementById('clear');
const resultsList = document.getElementById('results');

function generatePhoneNumber() {
    const areaCode = "999";
    const prefix = Math.floor(100 + Math.random() * 900);
    const lineNumber = Math.floor(1000 + Math.random() * 9000);
    return `${areaCode}${prefix}${lineNumber}`;
}

function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = "¡Copiado!";
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);
    }).catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
    });
}

generateButton.addEventListener('click', () => {
    const phoneNumber = generatePhoneNumber();

    const listItem = document.createElement('li');
    listItem.textContent = phoneNumber;

    const copyButton = document.createElement('button');
    copyButton.textContent = "Copiar";
    copyButton.className = "copy-btn";
    copyButton.addEventListener('click', () => copyToClipboard(phoneNumber, copyButton));

    listItem.appendChild(copyButton);
    resultsList.appendChild(listItem);
});

clearButton.addEventListener('click', () => {
    resultsList.innerHTML = '';
});
