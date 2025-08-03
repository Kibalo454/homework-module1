$(document).ready(function () {
  $("#activity-table td.selectable").on("click", function () {
    if ($(this).hasClass("not-available")) return;

    $(this).toggleClass("selected");

    const activity = $(this).text().trim();
    const colIndex = $(this).index();
    const cliffSite = $("#activity-table thead th").eq(colIndex).text().trim();
    const fullActivity = `${activity} at ${cliffSite}`;
    const $list = $("#selected-activities ul");

    if ($(this).hasClass("selected")) {
      $list.append(
        `<li data-cliff="${colIndex}" data-activity="${activity}">${fullActivity}</li>`
      );
    } else {
      $list
        .find(
          `li[data-cliff="${colIndex}"][data-activity="${activity}"]`
        )
        .remove();
    }

    if ($list.children().length > 0) {
      $("#selected-activities").show();
    } else {
      $("#selected-activities").hide();
    }
  });
});
