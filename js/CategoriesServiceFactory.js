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
return{
        getCategories: getCategories,
        addCategory: addCategory
    }
    })
