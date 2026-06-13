//#region elements
/** @type {HTMLTextAreaElement} */
const textareaEditor = document.getElementById("textareaEditor");
/** @type {HTMLButtonElement} */
const buttonSettings = document.getElementById("buttonSettings");
/** @type {HTMLDialogElement} */
const dialogSettings = document.getElementById("dialogSettings");
/** @type {HTMLButtonElement} */
const buttonCloseSettings = document.getElementById("buttonCloseSettings");
/** @type {HTMLInputElement} */
const inputSettingSaveText = document.getElementById("inputSettingSaveText");
//#endregion

/** @type {{ saveText: boolean, editorContent: string }} */
const settings = JSON.parse(localStorage.getItem(`UraniumSettings`)) || {};

//#region dialog
buttonSettings.addEventListener(`click`, (event) => {
  dialogSettings.showModal();
});
buttonCloseSettings.addEventListener(`click`, (event) => {
  dialogSettings.close();
});
//#endregion

//#region localStorage
window.addEventListener(`beforeunload`, (event) => {
  if (inputSettingSaveText.checked) {
    const settings = {
      editorContent: textareaEditor.value,
    };

    localStorage.setItem(`UraniumSettings`, JSON.stringify(settings));
  } else if (localStorage.length > 0) {
    localStorage.removeItem("UraniumSettings");
  }
});

if (`editorContent` in settings) {
  inputSettingSaveText.checked = true;
  textareaEditor.value = settings.editorContent;
}
//#endregion
