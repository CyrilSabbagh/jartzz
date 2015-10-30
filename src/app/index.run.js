(function() {
  'use strict';

  angular
    .module('jartzz')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
