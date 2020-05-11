(function() {
    'use strict';

    angular
        .module('horizon.dashboard.identity.policy.policies.policies-search')
        .controller('SearchController', SearchController);

        SearchController.$inject = [
        '$scope',
        'horizon.dashboard.identity.policy.policies'
    ];

    function SearchController($scope, Policies) {
        var $ctrl = this;
        $scope.policies = Policies.policies;
        $scope.query;
        $scope.showOptions = false;
        $scope.searchProject = true;
        $scope.searchTarget = true;
        $scope.searchRule = true;
        $scope.searchDefault = true;
        $scope.searchScopes = true;
        $scope.searchOperations = true;
        $scope.searchDescription = true;

        // Table search functions
        $scope.$watch('query', function(newValue, oldValue) {
            if(oldValue!=newValue) {
                filterPolicies();
            }
        },true);

        function filterPolicies() {
            // search is empty
            if (!$scope.query || $scope.query == '' || $scope.query == undefined) {
                Policies.setFilteredPolicies(Policies.policies.allPolicies);
                Policies.setCurrentPage(0);
                Policies.setNumberOfPages(Math.ceil(Policies.policies.filteredPolicies.length/Policies.policies.itemsPerPage));
            }

            let filtered = [];
            for (let i = 0; i < Policies.policies.allPolicies.length; i++) {
                let policy = Policies.policies.allPolicies[i];
                let added = false;
                const query = $scope.query.toLowerCase();

                if ($scope.searchProject) {
                    if (policy['project'].toLowerCase().indexOf(query) != -1) {
                        filtered.push(policy);
                        added = true;
                    }
                }
                if ($scope.searchTarget && !added) {
                    if (policy['target'].toLowerCase().indexOf(query) != -1) {
                        filtered.push(policy);
                        added = true;
                    }
                }
                if ($scope.searchRule && !added) {
                    if (policy['rule'].toLowerCase().indexOf(query) != -1) {
                        filtered.push(policy);
                        added = true;
                    }
                }
                if ($scope.searchDefault && !added) {
                    if (policy['default'].toLowerCase().indexOf(query) != -1) {
                        filtered.push(policy);
                        added = true;
                    }
                }
                if ($scope.searchScopes && !added) {
                    for (let i = 0; i < policy['scopes'].length; i++) {
                        if (policy['scopes'][i].toLowerCase().indexOf(query) != -1 && !added) {
                            filtered.push(policy);
                            added = true;
                        }
                    }

                }
                if ($scope.searchOperations && !added) {
                    for (let i = 0; i < policy['operations'].length; i++) {
                        if (policy['operations'][i].toLowerCase().indexOf(query) != -1 && !added) {
                            filtered.push(policy);
                            added = true;
                        }
                    }
                }
                if ($scope.searchDescription && !added) {
                    if (policy['description'].toLowerCase().indexOf(query) != -1) {
                        filtered.push(policy);
                        added = true;
                    }
                }
            }
            Policies.setFilteredPolicies(filtered);
            Policies.setCurrentPage(0);
            Policies.setNumberOfPages(Math.ceil(Policies.policies.filteredPolicies.length/Policies.policies.itemsPerPage));
        }

    }

})();