var app = (function (w, d) { "use strict";
  
  if (!Object.hasOwnProperty('create')) {
    Object.create = function (parentObj) {
      function tmpObj() {}
      tmpObj.prototype = parentObj;
      return new tmpObj();
    }
  }

  if (!Object.hasOwnProperty('defineProperties')) {
    Object.defineProperties = function(obj, props) {
      for (var prop in props) {
        Object.defineProperty(obj, prop, props[prop]);
      }
    };
  }

  var ret = {
    init: function(cb) {
      if (typeof cb === "function") {
        document.addEventListener("deviceready", cb, false);
      }
    }, 
    create: function(parent, props) {
      if (typeof props === "undefined") {
        return Object.create(parent)
      } else {
        return Object.create(parent, props);
      }
    }, 
    get: function(id) {
      return d.getElementById(id);
    }
  };
  
  return ret;

})(window, document);
