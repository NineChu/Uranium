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
const inputLocalstorageSetting = document.getElementById("inputLocalstorageSetting");
//#endregion

//#region dialog
buttonSettings.addEventListener(`click`, (event) => {
  dialogSettings.showModal();
});
buttonCloseSettings.addEventListener(`click`, (event) => {
  dialogSettings.close();
});
//#endregion

//#region localstorage
window.addEventListener(`beforeunload`, (event) => {
  if (inputLocalstorageSetting.checked) {
    localStorage.setItem(`textareaEditor`, textareaEditor.value);
  } else if (localStorage.length > 0) {
    localStorage.clear();
  }
});

if (localStorage.length > 0) {
  textareaEditor.value = localStorage.getItem(`textareaEditor`);
  inputLocalstorageSetting.checked = true;
}
//#endregion
