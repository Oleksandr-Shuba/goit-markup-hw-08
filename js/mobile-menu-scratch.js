(() => {
  const mobileBtn = document.querySelector('#mobile-menu-btn');
  const mobileMainMenu = document.querySelector('.nav');

  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('is-open');
    mobileMainMenu.classList.toggle('is-open');
  });
})();