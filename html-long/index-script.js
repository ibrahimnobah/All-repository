$(document).ready(function() {
  $(".patient-edit").hide();
  $(".user-list").hide();
  $(".user-edit").hide();

  $("#patient-list ").click(function() {
    $(".patient-list").toggle();
  });
  $("#patient-edit").click(function() {
    $(".patient-edit").toggle();
  });
  $("#user-list ").click(function() {
    $(".user-list").toggle();
  });
  $("#user-edit ").click(function() {
    $(".user-edit").toggle();
  });
});
