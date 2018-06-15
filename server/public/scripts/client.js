var app = angular.module('TimeApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as HC'
    }).when('/addEntry', {
        templateUrl: '/views/addEntry.html',
        controller: 'AddEntryController as AC'
    }).when('/manageProject', {
        templateUrl: '/views/manageProject.html',
        controller: 'ManageProjectController as MC'
    }).when('/reports', {
        templateUrl: '/views/reports.html',
        controller: 'ReportsController as RC'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
