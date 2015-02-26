angular.module("myApp.factoryCategoriesService", ["firebase"])

.factory('CategoriesService',function($firebase,FIREBASE_URI){
    var ref = new Firebase(FIREBASE_URI+"/categories");
    var sync = $firebase(ref);
    var categories = sync.$asArray();
    
    var getCategories = function(){
        return categories;
    };
    
    var addCategory = function(category){
        category.id = categories.length;
        categories.$add(category); 
    };
    
    var removeCategory = function(index){
          for (var i = 0, len = categories.length; i < len; i++) {
          if (categories[i].name === index) {
                categories.$remove(i);
          }
        } 
    };

return{
        getCategories: getCategories,
        addCategory: addCategory,
        removeCategory: removeCategory
    }
    })
