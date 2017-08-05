(function() {
    "use strict";

    angular
        .module('matches.editor')
        .directive('editor', Editor);

    function Editor() {
        return {
            restrict: 'E',
            templateUrl: '/app/states/matches/editor/editor.view.html'
        };
    }

})();
