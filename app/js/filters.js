app.filter('multiline', ['$sce', function ($sce) {
  return function (input) {
      var result = input.replace(/\/\//g, '<br/>');
      $sce.trustAsHtml(result);
      return result;
  };
}]);
