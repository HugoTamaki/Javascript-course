phoneList

.controller('phoneListCtrl', [
  '$scope',

  function ($scope) {
    $scope.app = "Lista Telefonica";

    $scope.contact = {}

    $scope.contactList = [
      {
        name: 'Fulano',
        number: '9999-9999'
      },
      {
        name: 'Beltrano',
        number: '8888-9997'
      }
    ];

    $scope.createContact = function (contact) {
      $scope.contactList.push(angular.copy(contact));
      delete $scope.contact;
    }
  }
]);