$scope.registrar = function(){
    $http.post("auth.php")
    .success(function(data){
        console.log("guardado exitosamente")
    });
}