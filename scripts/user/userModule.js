'use strict';
var userModule = angular.module('userModule',[]);
userModule.config(function($stateProvider) {
    $stateProvider.state('login', {
        url: "/login",
        templateUrl: "views/user/login.html"
    }).state('register', {
        url: "/register",
        templateUrl: "views/user/register.html"
    }).state('help', {
        url: "/help",
        templateUrl: "views/user/help.html"
    });
});