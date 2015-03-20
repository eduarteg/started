/**
 * Created by eduarte on 19-01-15.
 */

var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when("/rutas", {
            templateUrl: "rutas.html",
            controller: "rutasCtrl"
        }).when("/otrasrutas", {
            templateUrl: "otrasrutas.html",
            controller: "otrasRutasCtrl"
        })
        .otherwise({ redirectTo: "/" });
}]);

app.module('rutasCtrl')
