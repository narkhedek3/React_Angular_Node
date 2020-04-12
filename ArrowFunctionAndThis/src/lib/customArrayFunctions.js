
const i = (function () {
  return {

    getCurrentDate: function(callback) {
      let date = new Date().toUTCString();
      callback(date);
    },

    forEach: function(list, callback) {
      for(let i = 0; i < list.length; i++) {
        callback(list[i]);
      }
    },

    map: function(list, callback) {

      let mappedList = [];

      for(let i = 0; i < list.length; i++) {
        let temp = callback(list[i]);
        mappedList.push(temp);
      }

      return mappedList;
    },

    filter: function(list,callback) {
      let filteredList = [];

      for(let i = 0; i < list.length; i++) {

        let canAdd = callback(list[i]);
        if(canAdd) {
          filteredList.push(list[i]);
        }
        
      }

      return filteredList;
    }


  }
})();

module.exports = i;