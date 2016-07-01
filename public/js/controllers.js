'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, Resident, Apartment) {
  Resident.getAll()
    .then(res =>{
      $scope.residents = res.data;
      console.log("$scope.residents:", $scope.residents);
    })
    .catch(err =>{
      console.log("err: ", err);
    })
});

app.controller('apartmentListCtrl', function($scope, Apartment) {
  Apartment.getAll()
    .then(res =>{
      $scope.apartments = res.data;
      console.log("$scope.apartments:", $scope.apartments);
    })
    .catch(err =>{
      console.log("err: ", err);
    })

    $scope.addApartment = () =>{
      Apartment.addApartment($scope.newItem)
      .then(apartment =>{
        $scope.apartments.push(apartment);
        $scope.newItem = {};
      })
      .catch(err=>{
        console.log("error: ", err );
      });
    }


  $scope.deleteApartment = (ind, apartment) =>{
    console.log("apartment:", apartment)
    Apartment.deleteApartment(apartment._id)
    .then(apartment => {
      //console.log("item to add", item);
      $scope.apartments.splice(ind,1);
    })
    .catch(err=>{
      console.log("error: ", err );
    });
  }

  $scope.showUpdateForm = (index, apartment) =>{
    console.log("index: ", index);
    console.log("apartment: ", apartment);
    $scope.showUpdate =true;
    $scope.updateItem = apartment;
    $scope.updateIndex = index;
  }

  $scope.updateApartment = () =>{
    $scope.showUpdate =false;
    Apartment.updateApartment($scope.updateItem._id, $scope.updateItem)
    .then(apartment =>{
      console.log("update apt:" , $scope.updateItem._id, " , " , $scope.updateItem);
    })
    .catch(err=>{
      console.log("error: ", err );
    });
  }

});


app.controller('showApartmentCtrl', function($scope, Apartment, $stateParams) {
  console.log('showApartmentCtrl!');
  console.log('$stateParams:', $stateParams);   //this will be apt id

  //or w/e my func is called
  Apartment.getById($stateParams.apartmentId)
    .then(res =>{
      $scope.apartment = res.data;
    })

  $scope.addResidentToApartment = (apartment, resId) =>{
    Apartment.addResident(apartment, resId)
    .then()
    .catch(err=>{
      console.log("error: ", err );
    })
  }
  
});


app.controller('residentListCtrl', function($scope, Resident) {
  Resident.getAll()
    .then(res =>{
      $scope.residents = res.data;
      console.log("$scope.residents:", $scope.residents);
    })
    .catch(err =>{
      console.log("err: ", err);
    })
});


app.controller('showResdientCtrl', function($scope, Resident, $stateParams) {
  console.log('showResdientCtrl!');
  console.log('$stateParams:', $stateParams);   //this will be resident id

  //or w/e my func is called
  Resident.getById($stateParams.residentId)
    .then(res =>{
      $scope.resident = res.data;
    })
});



