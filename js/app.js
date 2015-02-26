angular.module('myApp',["ui.router", "myApp.factoryBookmarksService","myApp.factoryCategoriesService"])

   .config(function($stateProvider, $urlRouterProvider) {
          $stateProvider
            .state('bookmark', {
                url: '/bookmark',
                templateUrl: 'templates/bookmark.html'
            })
          $urlRouterProvider.otherwise('/bookmark');
    })

.constant('FIREBASE_URI', 'https://apk3.firebaseio.com/')
    
.controller('MainCtrl', function($location, $scope,  CategoriesService, BookmarksService){
   
 $scope.categories = CategoriesService.getCategories();
 $scope.bookmarks = BookmarksService.getBookmarks();
 
 $scope.addCategory = function(category){
            CategoriesService.addCategory(category);
        }
        
$scope.addBookmark = function(bookmark){
            BookmarksService.addBookmark(bookmark);
        }
        
 $scope.removeCategory = function(){
            CategoriesService.removeCategory($scope.currentCategory.name);
            BookmarksService.removeBookmarksForCategory($scope.currentCategory);
        }
$scope.removeBookmark = function(){
            BookmarksService.removeBookmark($scope.currentBookmark.id);
            $scope.startCreating();
        }
        
        
$scope.currentCategory = null;
$scope.currentBookmark = null;
$scope.isCreating = true;
$scope.isEditing = false;

function setCurrentCategory(category) {
            $scope.currentCategory = category;
            $scope.currentBookmark = null;
        }
        
function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }
        
function isCurrentBookmark(bookmark) {
            return $scope.currentBookmark !== null && bookmark.id === $scope.currentBookmark.id;
        }
        
        function setCurrentBookmark(bookmark) {
            $scope.currentBookmark = bookmark;
        }
        
function shouldShowCreating() {
            return $scope.isCreating;
        }
function shouldShowBookmark(){
            return $scope.currentBookmark !== null;
        }
        
$scope.setCurrentCategory = setCurrentCategory;
$scope.setCurrentBookmark = setCurrentBookmark;
$scope.isCurrentCategory = isCurrentCategory;
$scope.isCurrentBookmark = isCurrentBookmark;
$scope.shouldShowCreating = shouldShowCreating;
$scope.shouldShowBookmark = shouldShowBookmark;

 })
