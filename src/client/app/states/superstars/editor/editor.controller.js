(function() {
    "use strict";

    angular
        .module('superstars.editor')
        .controller('EditorCtrl', EditorCtrl);

    EditorCtrl.$inject = ['$state'];

    function EditorCtrl($state) {
        var vm = this;

        vm.slug = $state.$current.locals.globals.slug;
        vm.talent = $state.$current.locals.globals.talent; 

        vm.upsert = function() {
          console.log(vm.talent);
        }
    }
})();