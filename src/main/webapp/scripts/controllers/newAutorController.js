angular.module('publicadorweb').controller(
		'NewAutorController',
		function($scope, $location, locationParser, AutorResource) {
			$scope.disabled = false;
			$scope.$location = $location;
			$scope.autor = $scope.autor || {};

			$scope.save = function() {
				var successCallback = function(data, responseHeaders) {
					var id = locationParser(responseHeaders);
					$location.path('/Autors/edit/' + id);
					$scope.displayError = false;
				};
				var errorCallback = function() {
					$scope.displayError = true;
				};
				AutorResource.save($scope.autor, successCallback, errorCallback);
			};

			$scope.cancel = function() {
				$location.path("/Autors");
			};
		});