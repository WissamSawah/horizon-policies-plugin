(function() {
    'use strict';

    describe('TableController', function() {
        beforeEach(function () {
            module('horizon.framework.conf');
            module('horizon.framework.util.http');
            module('horizon.framework.widgets.toast');
            module('horizon.dashboard.identity.policy');
        });
        beforeEach(module('horizon.dashboard.identity.policy'));

        var $controller;

        beforeEach(inject(function(_$controller_){
          // The injector unwraps the underscores (_) from around the parameter names when matching
          $controller = _$controller_;
        }));

        describe('$scope.sortColumn()', function() {
            it('Sets the table´s column sort according to the passed variable', function() {
                    var expectation = 'rule';
                    var $scope = {};
                    var controller = $controller('TableController', { $scope: $scope });
                    $scope.column = 'target';
                    $scope.sortColumn(expectation);
                    expect($scope.column).toEqual(expectation);
            });
        });

        describe('$scope.sortColumn()', function() {
            it('Reverses the table´s column sort order if the passed variable is the same as the currently set column sort value', function() {
                var expectation = true;
                var $scope = {};
                var controller = $controller('TableController', { $scope: $scope });
                $scope.column = 'target';
                $scope.reverse = false;
                $scope.sortColumn($scope.column);
                expect($scope.reverse).toEqual(expectation);
            });
        });
    });

})();
