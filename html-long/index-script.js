$(document).ready(function() {
  $('[active="false"]').hide();
  $(".toggle-naviation ").click(function() {
    $('[active="true"]').attr("active", "false");
    var divToShow = $(this).attr("divToShow");
    $("." + divToShow).attr("active", "true");
    $('[active="true"]').show();
    $('[active="false"]').hide();
  });
});
