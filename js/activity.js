//activity.js
$(document).ready(function () {
  $(".selectable").on("click", function () {
    if (!$(this).hasClass("not-available")) {
      $(this).toggleClass("selected");
    }
  });
});
