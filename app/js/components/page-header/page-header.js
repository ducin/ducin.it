app.constant('languages', [
    {name: 'English', code: 'en'},
    {name: 'Polski', code: 'pl'}
]);

app.component('pageHeader', {
    templateUrl: 'app/js/components/page-header/page-header.html',
    controller: ['$translate', '$modal', 'languages', function ($translate, $modal, languages) {
      this.languages = languages;
        this.open = function () {
            $modal.open({
                templateUrl: 'templates/modalContact.html',
                controller: 'ModalInstanceCtrl'
            });
        };

        this.setLanguage = function (code) {
            $translate.use(code);
        };
    }]
});
