app.component('pagePresentations', {
    templateUrl: 'app/js/components/page-presentations/page-presentations.html',
    controller: [function () {
        var data = [
            {
                "title": "Continous Integration with git",
                "event": "Git Kata 2",
                "date": "2013.12.08",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "git scrum",
                "event": "Git Kata 2",
                "date": "2013.12.08",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "Nasz system rozmawia po Thrifcie (Our system speaks Thrift)",
                "event": "PyWaw (Python Warsaw User Group) #31",
                "date": "2013.12.16",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "python & django workshops",
                "event": "Django Carrots IV",
                "date": "2014.05.09",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "Modern webapp development workflow/tools workshops",
                "event": "Warsjawa",
                "date": "2014.09.26",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "A co, jeśli nie mamy API?",
                "event": "PyWaw (Python Warsaw User Group) #41",
                "date": "2014.10.13",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "yo coffee! or butler on call",
                "event": "meet.js",
                "date": "2014.10.16",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "What if we don't have API",
                "event": "WarsawJS #2",
                "date": "2014.10.28",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "python & django workshops",
                "event": "Django Girls",
                "date": "2014.11.07",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "yo coffee!... czyli kamerdyner na wezwanie",
                "event": "LJUG (Lublin Java User Group)",
                "date": "2014.11.04",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "yo coffee!... czyli kamerdyner na wezwanie",
                "event": "WJUG (Warsaw Java User Group) #147",
                "date": "2014.11.12",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "python & django workshops",
                "event": "Django Carrots V",
                "date": "2015.01.16",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "All that JS",
                "event": "WarsawJS #7",
                "date": "2015.03.18",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "Sytuacja na froncie, czyli czy warto inwestować w JavaScript",
                "event": "CybercomDEV",
                "date": "2015.05.23",
                "address": {
                    "city": "Łódź",
                    "countryCode": "PL"
                }
            }, {
                "title": "Grunt.js: Frontend Automation",
                "event": "meet.js",
                "date": "2015.06.10",
                "address": {
                "city": "Warsaw",
                "countryCode": "PL"
                }
            }, {
                "title": "Enterprise Interface Architecture: JSON Schema",
                "event": "WarsawJS #10",
                "date": "2015.06.17",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "JSON Schema",
                "event": "PyWaw (Python Warsaw User Group) #50",
                "date": "2015.08.31",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "JSON Schema: Controlling Communication Structures",
                "event": "PyCon PL '15",
                "date": "2015.10.18",
                "address": {
                    "city": "Ossa/Rawa Mazowiecka",
                    "countryCode": "PL"
                }
            }, {
                "title": "Enterprise Interface Architecture: Seeking Scalable Design",
                "event": "WarsawJS #14",
                "date": "2015.10.21",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "Enterprise Interface Architecture",
                "event": "FullStack London",
                "date": "2015.10.28",
                "address": {
                    "city": "London",
                    "countryCode": "UK"
                }
            }, {
                "title": "JSON taki albo owaki... czyli kontrolowanie struktur z JSON Schema",
                "event": "WJUG (Warsaw Java User Group) #169",
                "date": "2015.11.03",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "API Contracting: first steps",
                "event": "PyWaw (Python Warsaw User Group) #54",
                "date": "2016.01.25",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "Backend-less Development in AngularJS",
                "event": "AngularJS Warsaw #6",
                "date": "2016.02.22",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "http://slides.com/ducin/backend-less-development"
                }
            }, {
                "title": "Backend-less Development Revisited",
                "event": "JavaScript Summit",
                "date": "2016.02.25",
                "address": "online",
                "links": {
                    "slides": "http://slides.com/ducin/backend-less-development"
                }
            }, {
                "title": "Backend-less Development Revisited",
                "event": "4Developers",
                "date": "2016.04.11",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "http://slides.com/ducin/backend-less-development"
                }
            }, {
                "title": "JavaScript + Java = TypeScript",
                "event": "4Developers",
                "date": "2016.04.11",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "https://slides.com/ducin/javascript-plus-java-equals-typescript"
                }
            }, {
                "title": "JSON Schema: validate, generate, mock & automate",
                "event": "DevCrowd",
                "date": "2016.04.23",
                "address": {
                    "city": "Szczecin",
                    "countryCode": "PL"
                }
            }, {
                "title": "JavaScript + Java = TypeScript",
                "event": "DevCrowd",
                "date": "2016.04.23",
                "address": {
                    "city": "Szczecin",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "https://slides.com/ducin/javascript-plus-java-equals-typescript"
                }
            }, {
                "title": "Backend-less Development Revisited",
                "event": "Geecon",
                "date": "2016.05.13",
                "address": {
                    "city": "Cracow",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "http://slides.com/ducin/backend-less-development"
                }
            }, {
                "title": "JavaScript + Java = TypeScript",
                "event": "WarsawJS #22",
                "date": "2016.06.08",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "https://slides.com/ducin/javascript-plus-java-equals-typescript"
                }
            }, {
                "title": "JavaScript + Java = TypeScript",
                "event": "EnterJS",
                "date": "2016.06.15",
                "address": {
                    "city": "Darmstadt",
                    "countryCode": "DE"
                },
                "links": {
                    "slides": "https://slides.com/ducin/javascript-plus-java-equals-typescript"
                }
            }, {
                "title": "Backend-less Development Revisited",
                "event": "EnterJS",
                "date": "2016.06.16",
                "address": {
                    "city": "Darmstadt",
                    "countryCode": "DE"
                },
                "links": {
                    "slides": "http://slides.com/ducin/backend-less-development"
                }
            }, {
                "title": "Backend-less Development Revisited",
                "event": "FullStack London",
                "date": "2016.07.15",
                "address": {
                    "city": "London",
                    "countryCode": "UK"
                },
                "links": {
                    "slides": "http://slides.com/ducin/backend-less-development"
                }
            }, {
                "title": "You don't know TS",
                "event": "meet.js",
                "date": "2016.09.08",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "https://slides.com/ducin/javascript-plus-java-equals-typescript"
                }
            }, {
                "title": "Backend-less Development Revisited",
                "event": "DevDay",
                "date": "2016.09.15",
                "address": {
                    "city": "Cracow",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "http://slides.com/ducin/backend-less-development"
                }
            }, {
                "title": "JavaScript + Java = TypeScript",
                "event": "WebExpo",
                "date": "2016.09.23",
                "address": {
                    "city": "Praha",
                    "countryCode": "CZ"
                },
                "links": {
                    "slides": "https://slides.com/ducin/javascript-plus-java-equals-typescript"
                }
            }, {
                "title": "Backend-less Development Revisited",
                "event": "JDD (Java Developer Day)",
                "date": "2016.10.11",
                "address": {
                    "city": "Cracow",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "http://slides.com/ducin/backend-less-development"
                }
            }, {
                "title": "ng-enterprise",
                "event": "NG Poland",
                "date": "2016.11.22",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "https://slides.com/ducin/ng-enterprise"
                }
            }, {
                "title": "Backend-less Development Revisited",
                "event": "IT NonStop",
                "date": "2016.12.10",
                "address": {
                    "city": "Wrocław",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "http://slides.com/ducin/backend-less-development"
                }
            }, {
                "title": "JavaScript + Java = TypeScript",
                "event": "WJUG (Warsaw Java User Group) #196",
                "date": "2017.01.31",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "https://slides.com/ducin/javascript-plus-java-equals-typescript"
                }
            }, {
                "title": "JavaScript + Java = TypeScript",
                "event": "AngularJS Warsaw #11",
                "date": "2017.02.14",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                },
                "links": {
                    "slides": "https://slides.com/ducin/javascript-plus-java-equals-typescript"
                }
            }, {
                "title": "5 architectures of asynchronous JavaScript",
                "event": "4developers",
                "date": "2017.04.03",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }, {
                "title": "JavaScript + Java = TypeScript",
                "event": "InfoMEET",
                "date": "2017.04.22",
                "address": {
                    "city": "Warsaw",
                    "countryCode": "PL"
                }
            }
        ];
        this.presentations = data.slice().reverse();
    }]
});
