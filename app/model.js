var MODEL = (function () {
  //function that updates the page content
  function _navToPage(pageName, callback) {
    $.get(`pages/${pageName}.html`, function (data) {
      $("#app").html(data);

      //run a callback function (if provided)
      if (callback) {
        callback();
      }
    });
  }

  //make MODEL functions accessible by the controller
  return {
    navToPage: _navToPage,
  };
})();
