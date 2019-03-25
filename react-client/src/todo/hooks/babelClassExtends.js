'use strict';

var Parent = function Parent() {};

var Child =
  /*#__PURE__*/
  (function(_Parent) {
    Child.prototype = Object.create(_Parent && _Parent.prototype, {
      constructor: { value: Child, writable: true, configurable: true },
    });

    Child.__proto__ = _Parent;

    function Child(props) {
      return _Parent.call(this, props);
    }

    return Child;
  })(Parent);
