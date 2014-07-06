
angular.module('publicadorweb').controller(
		'EditPublicacaoController',
		function($scope, $routeParams, $location, PublicacaoResource) {
			var self = this;
			$scope.disabled = false;
			$scope.$location = $location;

			$scope.get = function() {
				var successCallback = function(data) {
					self.original = data;
					$scope.publicacao = new PublicacaoResource(self.original);
				};
				var errorCallback = function() {
					$location.path("/Publicacaos");
				};
				PublicacaoResource.get({
					PublicacaoId : $routeParams.PublicacaoId
				}, successCallback, errorCallback);
			};

			$scope.isClean = function() {
				return angular.equals(self.original, $scope.publicacao);
			};

			$scope.save = function() {
				var successCallback = function() {
					$scope.get();
					$scope.displayError = false;
				};
				var errorCallback = function() {
					$scope.displayError = true;
				};
				$scope.publicacao.$update(successCallback, errorCallback);
			};

			$scope.cancel = function() {
				$location.path("/Publicacaos");
			};

			$scope.remove = function() {
				var successCallback = function() {
					$location.path("/Publicacaos");
					$scope.displayError = false;
				};
				var errorCallback = function() {
					$scope.displayError = true;
				};
				$scope.publicacao.$remove(successCallback, errorCallback);
			};

			$scope.tipoPublicacaoList = [ "PUBLICACAO_PERIODICO",
					"PUBLICACAO_CONFERENCIA", "LIVRO", "CAPITULO", "TRECHO" ];
			$scope.naturezaList = [ "COMPLETA", "RESUMO" ];
			$scope.alcanceList = [ "NACIONAL", "INTERNACIONAL" ];
			$scope.publicadaList = [ "true", " false" ];

			$scope.get();
		});