const textArea = document.querySelector("#textArea");
const buttons = {
  loadCode: document.querySelector("#buttonLoadCode"),
};

buttons.loadCode.addEventListener("click", async (e) => {
  const path = prompt("Write the file relative path:");
  if (typeof path === "string") {
    textArea.value = await (await fetch(path)).text();
  }
  textArea.focus();
});

textArea.focus();
