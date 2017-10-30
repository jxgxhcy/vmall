'use strict';

/**
 * @ngdoc overview
 * @name myApp
 * @description
 * # myApp
 *
 * Main module of the application.
 */
angular
    .module('myApp', [
        "ui.router",
        'userModule',
        'productModule'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('phone');
        $stateProvider.state('home', {
            url: "/home",
            templateUrl: "views/index.html",
            controller:function($state){
                $state.go('home.notebook');
            }
        }).state('home.phone', {
            url: "/phone",
            templateUrl: "views/tab_phone.html"
        }).state('home.notebook', {
            url: "/notebook",
            templateUrl: "views/tab_notebook.html"
        });
    }).controller('AppCtrl', ['$scope',function($scope) {
        $scope.links = global.links;
        $scope.promotes = global.promotes;
        $scope.categories = global.categories;
        $scope.new_arrivals = global.new_arrivals;
        $scope.announces = global.announces;
        $scope.announces = global.announces;
    $scope.goods = global.goods;
    $scope.lists = global.lists;

    }]).controller("dateCtrl",['$scope','$interval',function($scope,$interval) {
        // 对Date的扩展，将 Date 转化为指定格式的String
        // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
        // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
        // 例子：
        // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
        // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
        Date.prototype.Format = function (fmt) { //author: meizz
            var o = {
                "M+": this.getMonth() + 1, //月份
                "d+": this.getDate(), //日
                "h+": this.getHours(), //小时
                "m+": this.getMinutes(), //分
                "s+": this.getSeconds(), //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        };

        $scope.currentTime = getCurrentTime();
        $interval(function () {
            $scope.currentTime = getCurrentTime();
        }, 1000);

        function getCurrentTime() {
            return  new Date().Format("yyyy年MM月dd日 hh:mm:ss");
        }
    }]
);
