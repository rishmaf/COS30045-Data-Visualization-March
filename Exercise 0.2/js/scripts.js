document.querySelectorAll('.nav-link').forEach((button) => {
  button.addEventListener('click', () => {
    window.location.href = button.dataset.link;
  });
});

const currentPage = document.body.getAttribute('data-page');
document.querySelectorAll('.nav-link').forEach((button) => {
  if (button.dataset.page === currentPage) {
    button.classList.add('active');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
