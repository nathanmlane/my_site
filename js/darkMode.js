let toggleDarkMode = function() {
  $("body").toggleClass('day night');
  $("body").toggleClass('dark');
  $(".nav").toggleClass('dark');
  $("h1").toggleClass('dark');
  $("p").toggleClass('dark');
  $(".menu-list").toggleClass('dark');
  $(".menu-item").toggleClass('dark');
  $(".contact-box").toggleClass('dark');
  $(".js-btn").toggleClass('dark');
}

$("#sun-moon").click(toggleDarkMode);
