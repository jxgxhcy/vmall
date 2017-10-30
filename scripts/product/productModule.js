'use strict';
var productModule = angular.module('productModule',[]);
productModule.config(function($stateProvider) {
    $stateProvider.state('basket', {
        url: "/basket",
        templateUrl: "views/product/basket.html"
    }).state('info', {
        url: "/info",
        templateUrl: "views/product/info.html"
    }).state('phone', {
        url: "/phone",
        templateUrl: "views/product/productlist.html"
    }).state('jd', {
        url: "/jd",
        template:'这是家电页面!'
    }).state('book', {
        url: "/book",
        template:'这是图书页面!'
    }).state('dy', {
        url: "/dy",
        template:'这是日用页面!'
    });
});