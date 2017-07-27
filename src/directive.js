var mainApp = angular.module("mainApp", []);

//Create a directive, first parameter is the html element to be attached.	  
//We are attaching student html tag. 
//This directive will be activated as soon as any student element is encountered in html

mainApp.directive('student', function() {
   //define the directive object
   var directive = {};
   
   //restrict = E, signifies that directive is Element directive
   directive.restrict = 'E';
   
   //template replaces the complete element with its text. 
   directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";
   
   //scope is used to distinguish each student element based on criteria.
   directive.scope = {
      student : "=name"
   }
   
   //compile is called during application initialization. AngularJS calls it once when html page is loaded.
	
   directive.compile = function(element, attributes) {
      element.css("border", "1px solid #cccccc");
      
      //linkFunction is linked with each element with scope to get the element specific data.
      var linkFunction = function($scope, element, attributes) {
         element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
         element.css("background-color", "#ff00ff");
      }
      return linkFunction;
   }
   return directive;
});

