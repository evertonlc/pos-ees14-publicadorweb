angular.module('publicadorweb').factory('PublicacaoResource',
		function($resource) {
			var resource = $resource('rest/publicacaos/:PublicacaoId', {
				PublicacaoId : '@id'
			}, {
				'queryAll' : {
					method : 'GET',
					isArray : true
				},
				'query' : {
					method : 'GET',
					isArray : false
				},
				'update' : {
					method : 'PUT'
				}
			});
			return resource;
		});