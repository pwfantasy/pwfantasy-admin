(function() {
    "use strict";

    angular
        .module('matches.editor')
        .controller('EditorCtrl', EditorCtrl);

    EditorCtrl.$inject = [];

    function EditorCtrl() {
        var vm = this;

        vm.upsert = function() {
          console.log(vm.talent);
        }
    }
})();