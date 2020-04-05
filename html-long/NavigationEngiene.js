class NavigationEngiene {
    navigate(path) {
      $(".Screen").hide();
      if (path === "patient-list-screen") {
        renderPatientPageData();
        init();
      }
      $("." + path).show();
    }
  }