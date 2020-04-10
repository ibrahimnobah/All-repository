class RouterEngine {
    init() {
  
      $(".toggle-naviation ").click(this.onNavigationLinkClick);
      $("#nameform").submit(this.onNavigationLinkClick);
  
    }
  
    onNavigationLinkClick() {
      var navigationEngiene = new NavigationEngiene();
      var path = $(this).data("naviation");
      navigationEngiene.navigate(path);
    }
  }