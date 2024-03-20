
module.exports = {
    computeStringLength: function (str) {
      return str.length;
    },
  
    extractSubstring: function (str, start, end) {
      return str.substring(start, end);
    },
  
    countWords: function (str) {
      return str.split(/\s+/).filter(word => word.length > 0).length;
    },
  
    countCharacters: function (str) {
      return str.length;
    },
  
    countLines: function (str) {
      return str.split(/\r\n|\r|\n/).length;
    }
  };
  