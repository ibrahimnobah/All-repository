$(document).ready(function() {
  $(".toggle-naviation ").click(function() {
    var id = this.id;
    switch (id) {
      case "users-add-naviation":
        $(".patient-list-screen").hide();
        $(".user-list-screen").show();
        $(".patient-edit-screen").hide();
        break;
      case "patient-navigation":
        $(".patient-list-screen").show();
        $(".user-list-screen").hide();
        $(".patient-edit-screen").hide();
        break;
      case "patient-edit-naviation":
        $(".patient-list-screen").hide();
        $(".user-list-screen").hide();
        $(".patient-edit-screen").show();
        break;
      default:
        alert("");
    }
  });
});
