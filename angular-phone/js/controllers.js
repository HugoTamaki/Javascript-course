phoneList

.controller('phoneListCtrl', [
  '$scope',
  '$http',

  function ($scope, $http) {
    var getContacts = function () {
      var url = "https://vast-mesa-46305.herokuapp.com/api/v1/contacts";
      var params = {
        nick: 'superman'
      };
      $http.get(url, { params: params })
        .then(function (response) {
          console.log('terminei de preencher a lista');
          $scope.contactList = response.data.contacts;
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    var saveContact = function (contact) {
      var url = "https://vast-mesa-46305.herokuapp.com/api/v1/contacts";

      var data = {
        contact: {
          name: contact.name,
          number: contact.number,
          carrier_id: 1
        },
        nick: 'superman'
      }

      $http.post(url, data)
        .then(function (response) {
          console.log(response);
          getContacts();
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    var removeContact = function (id) {
      var url = "https://vast-mesa-46305.herokuapp.com/api/v1/contacts/" + id;

      $http.delete(url)
        .then(function (response) {
          getContacts();
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    $scope.app = "Lista Telefonica";

    $scope.contact = {}

    $scope.createContact = function (contact) {
      saveContact(contact);
    }

    $scope.deleteContact = function (id) {
      removeContact(id);
    }

    getContacts();
  }
]);