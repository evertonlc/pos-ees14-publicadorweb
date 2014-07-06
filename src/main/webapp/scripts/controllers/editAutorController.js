
angular.module('publicadorweb').controller('EditAutorController',
		function($scope, $routeParams, $location, AutorResource) {
			var self = this;
			$scope.disabled = false;
			$scope.$location = $location;

			$scope.get = function() {
				var successCallback = function(data) {
					self.original = data;
					$scope.autor = new AutorResource(self.original);
				};
				var errorCallback = function() {
					$location.path("/Autors");
				};
				AutorResource.get({
					AutorId : $routeParams.AutorId
				}, successCallback, errorCallback);
			};

			$scope.isClean = function() {
				return angular.equals(self.original, $scope.autor);
			};

			$scope.save = function() {
				var successCallback = function() {
					$scope.get();
					$scope.displayError = false;
				};
				var errorCallback = function() {
					$scope.displayError = true;
				};
				$scope.autor.$update(successCallback, errorCallback);
			};

			$scope.cancel = function() {
				$location.path("/Autors");
			};

			$scope.remove = function() {
				var successCallback = function() {
					$location.path("/Autors");
					$scope.displayError = false;
				};
				var errorCallback = function() {
					$scope.displayError = true;
				};
				$scope.autor.$remove(successCallback, errorCallback);
			};

			$scope.get();
		});