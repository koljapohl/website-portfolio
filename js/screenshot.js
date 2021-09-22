function showScreenshot () {
  let modalBody = document.querySelector('.modal-body');
  modalBody.setAttribute('style', 'display: grid;');
  window.onclick = function (event) {
    if (event.target == modalBody) {
      modalBody.style.display = 'none';
    }
  };
};

function closeModal () {
  let modalBody = document.querySelector('.modal-body');
  modalBody.setAttribute('style', 'display: none;');
}