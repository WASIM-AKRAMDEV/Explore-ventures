var swiper = new Swiper(".mySwiper", {


  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

function toggleDropdown() {
  const dropdownContainer = document.querySelector(".dropdown-container");
  dropdownContainer.classList.toggle("dropdownActive");
}

function changeTab(tabId) {
  // Remove 'show' and 'active' classes from all tab panes
  document.querySelectorAll('.tab-pane').forEach(function (tabPane) {
    tabPane.classList.remove('show', 'active');
  });

  // Add 'show' and 'active' classes to the target tab pane (both top and bottom)
  document.getElementById(tabId).classList.add('show', 'active');
  document.getElementById(tabId + '-bottom').classList.add('show', 'active');
}
