'use strict';

var app = angular.module("mainApp", []);

app.controller("app", function($scope) {

       

    	$scope.temp = [];
        $scope.todoTasks = [];
        $scope.completedTasks = [];
        

        //localStorage.clear();
       

    	var taskData = localStorage['tasksList'];
        var taskData1 = localStorage['tasksList1'];

    
    	if(taskData !== undefined){
            
    		$scope.todoTasks = JSON.parse(taskData);

    	};

        if(taskData1 !== undefined){
            
            $scope.completedTasks = JSON.parse(taskData1);

        };
        

        $scope.temp = $scope.todoTasks;

 
        $scope.addTasks = function () {

            if($scope.task != null){

                    $scope.todoTasks.push({'taskMessage':$scope.task, 'status':'false', 'input':'true'})

                    $scope.task = null;
                
            }

            localStorage['tasksList'] = JSON.stringify($scope.todoTasks);

        };


        $scope.CompletedTasks = function(onetask) {

            $scope.completedTasks.push({'taskMessage': onetask.taskMessage, 'status':'true','input':'false'})
            $scope.todoTasks.splice($scope.todoTasks.indexOf(onetask), 1);

            localStorage['tasksList'] = JSON.stringify($scope.todoTasks); 
            localStorage['tasksList1'] = JSON.stringify($scope.completedTasks); 
        }; 


        $scope.finishedTasks = function(onetask) {
            if($scope.temp == $scope.todoTasks){
                $scope.todoTasks.splice($scope.todoTasks.indexOf(onetask), 1);
                
            }
            else{
                $scope.completedTasks.splice($scope.completedTasks.indexOf(onetask), 1);
                
            }
            localStorage['tasksList'] = JSON.stringify($scope.todoTasks); 
            localStorage['tasksList1'] = JSON.stringify($scope.completedTasks); 
            
        };  
        


        $scope.todotasks = function() {

            $scope.temp = $scope.todoTasks ;

        };

        $scope.donetasks = function() {

            $scope.temp = $scope.completedTasks ;

        };


    });

 /*

    $scope.contentEdit = function(msg) {

    	console.log($scope.tasks);

    	for (i=0; i<$scope.tasks.length; i++) {
    		if ($scope.tasks[i].taskMessage == msg) {
    			$scope.tasks[i].taskMessage = event.target.innerText;
    		}
    	}

    	localStorage['tasksList'] = JSON.stringify($scope.tasks); 

    	console.log($scope.tasks);

    	event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";

    };

    $scope.enterAgain = function(){
        if((event.which == 13) && ($scope.task != null)){
            event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
        }
   		
    };

*/

