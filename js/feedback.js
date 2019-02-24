angular.module('feedbackApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])

  .controller('feedbackController', function($scope, $http, $interval, $cookies) {
  	
  	var dataRef = firebase.database().ref("form_data");

    dataRef.on('value', function(snapshot){
        $scope.datas = snapshot.val();
        console.log($scope.datas)

        var allOrdersHtml = "";
      
      //this is saying foreach order do the following function...
        snapshot.forEach(function(firebaseOrderReference){
        
          //this gets the actual data (JSON) for the order.
          var feed = firebaseOrderReference.val();
           //check your console to see it!
          if(feed.date == undefined){
            feed.date = " -- "
          }
          //create html for the individual order
          //note: this is hard to make look pretty! Be sure to keep your indents nice :-)
          //IMPORTANT: we use ` here instead of ' (notice the difference?) That allows us to use enters
          var individialOrderHtml = `<tr>
          <td>`+feed.p_name +`</td>
          <td>`+ feed.mob + `</td>
          <td>`+ feed.email + `</td>
          <td>`+ feed.c_name + `</td>
          <td>`+ feed.c_age + `</td>
          <td>`+ feed.date + `</td></tr>`;
          
          //add the individual order html to the end of the allOrdersHtml list
          allOrdersHtml = allOrdersHtml + individialOrderHtml;
        });
        
        //actaull put the html on the page inside the element with the id PreviousOrders
        $('#studentData').html(allOrdersHtml);
    });

  })