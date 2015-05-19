"use strict";
module.exports = function(sequelize, DataTypes) {
  var commentsfavorites = sequelize.define("commentsfavorites", {
    commentId: DataTypes.INTEGER,
    favoritesId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return commentsfavorites;
};