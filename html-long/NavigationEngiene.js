class NavigationEngiene {
    navigate(path) {
      $(".Screen").hide();
      $("." + path).show();
    }
  }