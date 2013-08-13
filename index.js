var tinycolor = require('./tinycolor');
var mod = window.angular.module('flat-icon-button', []);

mod.directive('flatIconButton', function ($parse) {

  return {
    restrict: 'E',
    replace: true,
    template: require('./template'),
    scope: {
      background: '=',
      icon: '=',
      text: '=',
      shadowColor: '=',
      iconColor: '=',
      textColor: '=',
      click: '&'
    },
    link: function (scope, root, attrs) {
      root.css('background', scope.background);
      root.css('color', scope.textColor || tinycolor.darken(scope.background, 25).toString());
      root.find('i').css('color', scope.iconColor || tinycolor.darken(scope.background, 15).toString());
      root.css('box-shadow', '0 4px 0 ' + (scope.shadowColor || tinycolor.lighten(scope.background, 35)));

      if (!scope.icon) {
        root.find('span').css('margin-left', '5px');
      }

    }
  };


});

module.exports = 'flat-icon-button';
