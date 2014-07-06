angular.module('publicadorweb').factory('AutorResource', function($resource) {
	var resource = $resource('rest/autors/:AutorId', {
		AutorId : '@id'
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