angular.module('myApp',["ui.router", "myApp.factoryCategoriesService"])

.constant('FIREBASE_URI', 'https://apk3.firebaseio.com/')
    
.controller('MainCtrl', function($location, $scope,  CategoriesService){
   
 $scope.categories = CategoriesService.getCategories();
 $scope.addCategory = function(category){
            CategoriesService.addCategory(category);
        }
 $scope.removeCategory = function(){
            CategoriesService.removeCategory($scope.currentCategory.name);
        }
        
$scope.currentCategory = null;

function setCurrentCategory(category) {
            $scope.currentCategory = category;
            $scope.currentBookmark = null;
        }
        
function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }
        
$scope.setCurrentCategory = setCurrentCategory;
$scope.isCurrentCategory = isCurrentCategory;
 })
