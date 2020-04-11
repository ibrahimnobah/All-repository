class RouterEngine {
    init() {
      $(".toggle-naviation ").click(this.onNavigationLinkClick);
      $("#nameform").submit(this.onNavigationLinkClick);
    }
    onNavigationLinkClick() {
      var path = $(this).data("naviation");
      router.navigate(path);
    }
   navigate(path) {
      $(".Screen").hide();
      $("." + path).show();
    }
  }