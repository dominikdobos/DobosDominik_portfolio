const modal = document.querySelectorAll(".modal");
const openModal = document.querySelectorAll(".open-button");
const closeModal = document.querySelectorAll(".close-button");

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", () => {
    modal[i].showModal();
  });
}

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", () => {
    modal[i].close();
  });
}
