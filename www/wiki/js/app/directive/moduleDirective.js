/**
 * Created by wuxiangan on 2016/12/20.
 */

define(['require', 'app'], function (require, app) {
    app.directive('wikiBlock', function ($compile) {
        return {
            restrict: 'E',
            replace: true,
            template:'<div></div>',
            link: function ($scope, $element, $attrs) {
                if ($attrs.path) {
                    require([config.wikiModPath+$attrs.path], function (wikiModule) {
                        $scope.wikiBlockParams = $attrs; // 传递模块参数
                        var content = wikiModule.render ? wikiModule.render($attrs) : '';
                        content = $compile(content)($scope);
                        $element.replaceWith(content);
                        $scope.$apply();
                    });
                }
            },
        };
    });
});