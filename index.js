$(document).ready(function () {
  console.log("ready!");
  $("#switch").click(function () {
    if ($("#switch").is(":checked")) {
      $(".container")
        .removeClass("container--dark")
        .addClass("container--light");
    } else {
      $(".container")
        .removeClass("container--light")
        .addClass("container--dark");
    }
  });
});
