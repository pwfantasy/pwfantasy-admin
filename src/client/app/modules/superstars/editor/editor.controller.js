(function() {
    "use strict";

    angular
        .module('superstars.editor')
        .controller('EditorCtrl', EditorCtrl);

    EditorCtrl.$inject = ['slug', 'talent'];

    function EditorCtrl(slug, talent) {
        var vm = this;

        vm.slug = slug;
        vm.talent = talent;
    }
})();