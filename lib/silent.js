/*jshint -W103*/
/**
 * Module dependencies.
 */

var Base = require('mocha').reporters.Base,
  color = Base.color;

/**
 * Expose `Silent`.
 */



/**
 * Initialize a new `Silent` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Silent(runner) {
  'use strict';
  Base.call(this, runner);

  var n = 0;

  runner.on('start', function(){
    process.stdout.write('\n');
  });

  runner.on('fail', function(test, err){
    console.log(color('fail', '  %d) %s'), ++n, test.fullTitle());
  });

  runner.on('end', this.epilogue.bind(this));
}

Silent.prototype.__proto__ = Base.prototype;
exports = module.exports = Silent;
