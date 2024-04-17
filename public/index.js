const textArea = document.querySelector("#textArea");
const buttonClick = document.querySelector("#buttonClick");

buttonClick.addEventListener('click', (e) => {
  alert("You've clicked !");
  textArea.focus();
});

textArea.focus();
