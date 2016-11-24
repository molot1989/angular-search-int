angular.module('angularApp', ['ui.router','ngAnimate','int-search'])
    .config(['$locationProvider','$stateProvider', function($locationProvider,$stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/',
                template: '<int-search></int-search>'
            })
    }]);