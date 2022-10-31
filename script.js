const textField = document.querySelector("#text-field");
const translateBtn = document.querySelector("#translateBtn");
const translatedTextField = document.querySelector("#translated-text-field");
const url = `https://api.funtranslations.com/translate/minion.json?text=`;

translateBtn.addEventListener("click", () => {
    let msg = textField.value;
    console.log(msg)
    getTranslation(msg);
});

function getTranslation(msg) {
    fetch(url + msg)
        .then((res) => res.json())
        .then((data) => addTranslatedText(data.contents.translated));
}

function addTranslatedText(translatedText) {
    translatedTextField.textContent = translatedText;
}
