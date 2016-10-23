function ContactController() {
  var vm = this;
  vm.name = "Peter"
  vm.email = "peterberwind@gmail.com"
  vm.phone = "555.555.5555"

  vm.changeName = function() {
    vm.name = "Something Else!"
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
