app.component('pageHome', {
    templateUrl: 'app/js/components/page-home/page-home.html',
    controller: ['$translate', 'languages', function ($translate, languages) {
        this.languages = languages;
        $translate.use('en');
    }]
});
