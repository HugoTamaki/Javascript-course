phoneList

.controller('phoneListCtrl', [
  '$scope',

  function ($scope) {
    $scope.app = "Phone List";

    $scope.contactList = [
      {
        name: 'Hugo',
        number: '9999-9999'
      },
      {
        name: 'Hugo',
        number: '9999-9999'
      },
      {
        name: 'Hugo',
        number: '9999-9999'
      }
    ];
}])