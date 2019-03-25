'use strict';

var MyClass = (function() {
  function MyClass(props) {
    this.state = { a: props };

    this.method_0 = function() {}; // method_0 = ()=>{}
    this.method_3 = function() {};
    var v = props;
  }

  // static method_1 (){}
  Object.defineProperty(MyClass, 'method_1', {
    value: function() {
      console.log('method_1');
    },
    enumerable: false, //!!! не перечисляемое !!!
    writable: true,
  });

  // method_2 (){}
  Object.defineProperty(MyClass.prototype, 'method_2', {
    value: function() {
      console.log('method_2');
    },
    enumerable: false, //!!! не перечисляемое !!!
    writable: true,
  });

  return MyClass;
})();
