app.factory("storage", function() {
  var userId = {};

  return {
    getId: function (id) {
      if (userId.hasOwnProperty(id)) {
        return userId[id];
      }
    },
    addId: function (key, value) {
      userId[key] = value;
    }
  };
});