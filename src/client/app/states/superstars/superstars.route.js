(function() {
    "use strict";

    angular
        .module('superstars')
        .config(configuration);

    function configuration($stateProvider) {
        $stateProvider
            .state('superstars', {
                url: '/superstars',
                templateUrl: '/app/states/superstars/superstars.view.html',
                controller: 'SuperstarsCtrl',
                controllerAs: 'superstarsVm',
                resolve: {
                    user: function() {
                        return {};
                    }
                }
            });
    }
})();