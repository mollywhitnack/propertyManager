'use strict';

var app = angular.module('myApp');

app.service('Resident', function($http, $q){

  this.getAll = () =>{
    return $http.get('/api/residents');
  }

  this.getById = id =>{
    return $http.get(`/api/residents/${id}`);
  }

});

app.service('Apartment', function($http, $q){

  this.getAll = () =>{
    return $http.get('/api/apartments');
  }

  this.getById = id =>{
    return $http.get(`/api/apartments/${id}`);
  }

  this.addApartment = (apartment) =>{
    return $http.post(`/api/apartments`, apartment)
      .then(res => {
        return $q.resolve(res.data);
      })
      .catch(err => {   
        console.log('err:', err);
      })
    };

  this.deleteApartment = (id) =>{
    return $http.delete(`/api/apartments/${id}`)
      .then( () => {
        return $q.resolve();
      })
      .catch(err => {   
        console.log('err:', err);
      })
    };

  this.updateApartment = (id, apartment) =>{
      return $http.put(`/api/apartments/${id}`, apartment)
      .then(res => {
        return $q.resolve(apartment);
      })
      .catch(err => {   
        console.log('err:', err);
      })
    };

  this.addResident = (apartment, resId) =>{
      return $http.put(`/api/apartments/${apartment._id}/addResident/${resId}`, apartment)
      .then(res => {
        return $q.resolve(apartment);
      })
      .catch(err => {   
        console.log('err:', err);
      })
    };
});

//in residents Resident.getAll()
//                .then(residents =>{})