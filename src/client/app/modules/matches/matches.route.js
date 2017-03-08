(function() {
    "use strict";

    angular
        .module('matches')
        .config(configuration);

    function configuration($stateProvider) {
        $stateProvider
            .state('matches', {
                url: '/matches',
                templateUrl: '/app/modules/matches/matches.view.html',
                controller: 'MatchesCtrl',
                controllerAs: 'matchesVm',
                resolve: {
                }
            });
    }
})();