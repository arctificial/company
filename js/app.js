(function() {
    'use strict';
    var app;

    app = angular.module('arctificial', []);

    app.controller('StaffCtrl', ['$scope', '$http',
        function($scope, $http) {
            $http.get('./data/staff-data.json').success(function(data) {
                $scope.data = data;
            });
        }
    ])
}).call(this);