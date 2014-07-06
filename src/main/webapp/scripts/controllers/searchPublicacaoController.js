

angular.module('publicadorweb').controller('SearchPublicacaoController', function($scope, $http, PublicacaoResource ) {

    $scope.search={};
    $scope.currentPage = 0;
    $scope.pageSize= 10;
    $scope.searchResults = [];
    $scope.filteredResults = [];
    $scope.pageRange = [];
    $scope.numberOfPages = function() {
        var result = Math.ceil($scope.filteredResults.length/$scope.pageSize);
        var max = (result == 0) ? 1 : result;
        $scope.pageRange = [];
        for(var ctr=0;ctr<max;ctr++) {
            $scope.pageRange.push(ctr);
        }
        return max;
    };
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

    $scope.performSearch = function() {
        $scope.searchResults = PublicacaoResource.queryAll(function(){
            $scope.numberOfPages();
        });
    };
    
    $scope.previous = function() {
       if($scope.currentPage > 0) {
           $scope.currentPage--;
       }
    };
    
    $scope.next = function() {
       if($scope.currentPage < ($scope.numberOfPages() - 1) ) {
           $scope.currentPage++;
       }
    };
    
    $scope.setPage = function(n) {
       $scope.currentPage = n;
    };

    $scope.performSearch();
});