
  // SCRIPT PARA DETENER VIDEO //

document.addEventListener("DOMContentLoaded", function () {
  // Detectar todos los botones que cambian de vista
  const backButtons = document.querySelectorAll("[data-back]");
  
  backButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Cuando el usuario sale de la vista NotebookLM, detener el video
      const notebookView = document.getElementById("notebooklmView");
      if (notebookView && notebookView.style.display !== "none") {
        const iframe = notebookView.querySelector("iframe");
        if (iframe) {
          iframe.src = iframe.src; // Reinicia el iframe → detiene el video
        }
      }
    });
  });
});