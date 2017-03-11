var app = angular.module('App', [
    'ui.bootstrap',
    'ui.router',
    'pascalprecht.translate'
]);

app.config(['$sceProvider', function($sceProvider) {
  $sceProvider.enabled(false);
}]);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('', '/home');
    $stateProvider.state({
        name: 'home',
        url: '/home',
        template: '<page-home></page-home>',
        // component: 'pageHome'
    });

    $stateProvider.state({
        name: 'presentations',
        url: '/presentations',
        template: '<page-presentations></page-presentations>',
        // component: 'pagePresentations'
    });
}]);

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escape');

    $translateProvider.translations('en', {
        CONTACT: 'Contact',
        PRESENTATIONS: 'Presentations',
        ABOUT_ME: 'About me',
        PROGRAMMING: 'Programming',
        WORK: 'Work',
        OPEN_SOURCE: 'Open Source',
        CONFERENCES: 'Conferences',
        MEETUPS: 'Meetups',
        EVENTS: 'Events Organising',
        TRAININGS: 'Commercial Trainings',
        WORKSHOPS: 'Community Workshops',
        PUBLICATIONS: 'Publications',
        HELLO_WITH_NAME: 'Hello! My name is {{name}}.',
        DROP_MESSAGE_AT: 'Drop a message at',
        CO_CREATOR: 'Co-creator of',
        COMMUNITIES: 'Communities',
        COMMUNITIES_DESC: 'I speak about modern frontend technologies at Polish and European conferences and meetups mainly related to JavaScript, Java, Python technologies',
        TRAININGS: 'Trainings',
        TRAININGS_DESC: 'Expert trainings on Frontend technologies // conducted in English and Polish // in cooperation with',
        SLIDES: 'Slides'
    });
    $translateProvider.translations('pl', {
        CONTACT: 'Kontakt',
        PRESENTATIONS: 'Prezentacje',
        ABOUT_ME: 'O mnie',
        PROGRAMMING: 'Programowanie',
        WORK: 'Praca',
        OPEN_SOURCE: 'Open Source',
        CONFERENCES: 'Konferencje',
        MEETUPS: 'Meetupy',
        EVENTS: 'Organizacja eventów',
        TRAININGS: 'Szkolenia komercyjne',
        WORKSHOPS: 'Warsztaty społecznościowe',
        PUBLICATIONS: 'Publikacje',
        HELLO_WITH_NAME: 'Cześć! Nazywam się {{name}}.',
        DROP_MESSAGE_AT: 'Pisz na adres',
        CO_CREATOR: 'Współtwórca',
        COMMUNITIES: 'Społeczności',
        COMMUNITIES_DESC: 'Prowadzę prezentacje dotyczące nowoczesnych technologii frontendowych, na konferencjach oraz meetupach poświęconym głównie JavaScriptowi, Javie oraz Pythonowi, w Polsce i innych krajach Europy',
        TRAININGS: 'Szkolenia',
        TRAININGS_DESC: 'Eksperckie szkolenia z technologii frontendowych // prowadzone po polsku lub angielsku // we współpracy z',
        SLIDES: 'Slajdy'
    });
    $translateProvider.preferredLanguage('en');
}]);

app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
    $scope.ok = function () {
        $modalInstance.close(true);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
