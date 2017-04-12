(function() {
    "use strict";

    angular
        .module('superstars.editor')
        .config(configuration);

    function configuration($stateProvider) {
        $stateProvider
            .state('superstars.editor', {
                url: '/edit/:slug',
                templateUrl: '/app/states/superstars/editor/editor.view.html',
                controller: 'EditorCtrl',
                controllerAs: 'editorVm',
                resolve: {
                    slug: getSlug,
                    talent: getTalent
                }
            });

        getSlug.$inject = ['$stateParams'];
        function getSlug($stateParams) {
            return $stateParams.slug;
        }

        getTalent.$inject = ['slug', '$http'];
        function getTalent(slug, $http) {
            if (!slug || !slug.length) return Promise.reject();

            return new Promise((resolve, reject) => {
                function _success(response) {
                    resolve(response.data || false);
                }

                function _error(response) {
                    reject(response);
                }

                var req = {
                    method: 'GET',
                    url: `/api/superstar/${slug}`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: ''
                }

                $http(req).then(_success, _error);
            });
        }
    }
})();