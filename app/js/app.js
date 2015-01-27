var app = angular.module('HomepageApp', ['ui.bootstrap', 'pascalprecht.translate']);

app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        CONTACT: 'Contact',
        ABOUT_ME: 'About me',
        PROGRAMMING: 'Programming',
        INTERESTS: 'Interests',
        COMMUNITIES: 'Communities',
        WORK: 'Work',
        OPEN_SOURCE: 'Open Source',
        CONFERENCES: 'Conferences',
        MEETUPS: 'Meetups',
        EVENTS: 'Events Organising',
        TRAININGS: 'Commercial Trainings',
        WORKSHOPS: 'Community Workshops',
        OPEN_SOURCE: 'Open Source',
        PUBLICATIONS: 'Publications',
        HELLO_WITH_NAME: 'Hello! My name is {{name}}.',
        DROP_MESSAGE_AT: 'Drop a message at',
        AND_MORE: 'and more...',
        AT: 'at'
    });
    $translateProvider.translations('pl', {
        CONTACT: 'Kontakt',
        ABOUT_ME: 'O mnie',
        PROGRAMMING: 'Programowanie',
        INTERESTS: 'Zainteresowania',
        COMMUNITIES: 'Społeczności',
        WORK: 'Praca',
        OPEN_SOURCE: 'Open Source',
        CONFERENCES: 'Konferencje',
        MEETUPS: 'Meetupy',
        EVENTS: 'Organizacja eventów',
        TRAININGS: 'Szkolenia komercyjne',
        WORKSHOPS: 'Warsztaty społecznościowe',
        OPEN_SOURCE: 'Open Source',
        PUBLICATIONS: 'Publikacje',
        HELLO_WITH_NAME: 'Cześć! Nazywam się {{name}}.',
        DROP_MESSAGE_AT: 'Pisz na adres',
        AND_MORE: 'i inne...',
        AT: 'w'
    });
    $translateProvider.preferredLanguage('en');
});

app.controller('HomepageCtrl', ['$scope', '$translate', function ($scope, $translate) {
        $scope.languages = [
            {name: 'English', code: 'en'},
            {name: 'Polski', code: 'pl'}
        ];

        $scope.setLanguage = function (code) {
            $translate.use(code);
        };

        $scope.slides = [{
                title: 'Conferences',
                i18n: 'CONFERENCES',
                imgPath: 'img/carousel/enterjs-2.jpg'
            }, {
                title: 'Meetups',
                i18n: 'MEETUPS',
                imgPath: 'img/carousel/warsawjs.no10-2.jpg'
            }, {
                title: 'Trainings',
                i18n: 'TRAININGS',
                imgPath: 'img/carousel/fullstack-2.jpg'
            }, {
                title: 'Workshops',
                i18n: 'WORKSHOPS',
                imgPath: 'img/carousel/django-carrots-2.jpg'
            }, {
                title: 'Events',
                i18n: 'EVENTS',
                imgPath: 'img/carousel/pywawsummit-2.jpg'
            }, {
                title: 'Open Source',
                i18n: 'OPEN_SOURCE',
                imgPath: 'img/carousel/json-schema-faker.jpg'
            }, {
                title: 'Publications',
                i18n: 'PUBLICATIONS',
                imgPath: 'img/carousel/publications-2.jpg'
            }];

        $scope.slidesInterval = 3000;

        $scope.communities = [{
            name: 'PyWaw',
            link: 'http://pywaw.org'
        }, {
            name: 'PyWaw Summit',
            link: 'http://summit.pywaw.org'
        }, {
            name: 'Codepot',
            link: 'http://codepot.pl'
        }, {
            name: 'Warsjawa',
            link: 'http://warsjawa.pl'
        }, {
            name: 'WarsawJS',
            link: 'http://warsawjs.com'
        }, {
            name: 'meet.js',
            link: 'https://www.facebook.com/meetjspl'
        }];

        $translate.use('en');
    }]);

app.controller('ModalContactCtrl', function ($scope, $modal) {
    $scope.open = function () {
        $modal.open({
            templateUrl: 'templates/modalContact.html',
            controller: 'ModalInstanceCtrl'
        });
    };
});

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
    $scope.ok = function () {
        $modalInstance.close(true);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
