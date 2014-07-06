
angular.module('publicadorweb').controller('NewPublicacaoController', function ($scope, $location, locationParser, PublicacaoResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.publicacao = $scope.publicacao || {};
    
    $scope.tipoPublicacaoList = [
        "PUBLICACAO_PERIODICO",
        "PUBLICACAO_CONFERENCIA",
        "LIVRO",
        "CAPITULO",
        "TRECHO"
    ];
    
    $scope.naturezaList = [
        "COMPLETA",
        "RESUMO"
    ];
    
    $scope.alcanceList = [
        "NACIONAL",
        "INTERNACIONAL"
    ];
    
    $scope.publicadaList = [
        "true",
        " false"
    ];
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Publicacaos/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        PublicacaoResource.save($scope.publicacao, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Publicacaos");
    };
});