(function() {
    "use strict";

    angular
        .module('superstars')
        .controller('SuperstarsCtrl', SuperstarsCtrl);

    SuperstarsCtrl.$inject = ['$state'];

    function SuperstarsCtrl($state) {
        var vm = this;

        vm.search = function() {
          if (!vm.term || !vm.term.length) return;

          $state.go('superstars.search', {
            term: vm.term
          });
        }
    }
})();