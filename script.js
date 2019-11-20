function ctrl($scope){
  $scope.rows = ['Milk','Eggs','Bread'];
  $scope.temp = false;
  
  $scope.addRow = function(){
    $scope.temp = false;
    $scope.addItem="";
  };
  
  $scope.deleteRow = function(row){
    $scope.rows.splice($scope.rows.indexOf(row),1);
  };
  
  $scope.plural = function (tab){
    return tab.length > 1 ? 's': ''; 
  };
  
  $scope.addTemp = function(){
    if($scope.temp) $scope.rows.pop(); 
    else if($scope.addItem) $scope.temp = true;
    
    if($scope.addItem) $scope.rows.push($scope.addItem);
    else $scope.temp = false;
  };
  
  $scope.isTemp = function(i){
    return i==$scope.rows.length-1 && $scope.temp;
  };
  
}

