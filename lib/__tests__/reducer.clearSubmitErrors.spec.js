'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var describeClearSubmitErrors = function describeClearSubmitErrors(reducer, expect, _ref) {
  var fromJS = _ref.fromJS;
  return function () {
    it('should do nothing on clear submit errors with no previous state', function () {
      var state = reducer(undefined, (0, _actions.clearSubmitErrors)('foo'));
      expect(state).toEqualMap({
        foo: {}
      });
    });

    it('should clear submit errors with previous state', function () {
      var state = reducer(fromJS({
        foo: {
          values: {
            myField: 'initialValue'
          },
          initial: {
            myField: 'initialValue'
          },
          fields: {
            myField: {},
            otherField: {
              visited: true,
              active: true
            }
          },
          submitErrors: {
            some: 'error'
          },
          active: 'otherField',
          triggerSubmit: true
        }
      }), (0, _actions.clearSubmitErrors)('foo'));
      expect(state).toEqualMap({
        foo: {
          values: {
            myField: 'initialValue'
          },
          initial: {
            myField: 'initialValue'
          },
          fields: {
            myField: {},
            otherField: {
              visited: true,
              active: true
            }
          },
          active: 'otherField',
          triggerSubmit: true
        }
      });
    });
  };
};

exports.default = describeClearSubmitErrors;