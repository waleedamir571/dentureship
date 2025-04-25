
document.addEventListener("DOMContentLoaded", function () {
  const modalEl = document.getElementById("videoModal");
  const iframe = document.getElementById("youtube-video");
  const playButtons = document.querySelectorAll(".play-button");

  if (!modalEl || !iframe) return;

  const modalInstance = new bootstrap.Modal(modalEl);

  playButtons.forEach(button => {
    button.addEventListener("click", () => {
      const videoUrl = button.getAttribute("data-video");
      iframe.src = videoUrl;
      modalInstance.show();
    });
  });

  modalEl.addEventListener("hidden.bs.modal", () => {
    iframe.src = "";
  });
});

