app.constant('slides', [{
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
}]);

app.component('slider', {
    templateUrl: 'app/js/components/slider/slider.html',
    controller: ['slides', function(slides){
        this.slides = slides;
        this.slidesInterval = 3000;
    }]
});
