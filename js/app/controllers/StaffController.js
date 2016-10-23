function StaffController() {
  vm = this;
  vm.name = "Peter"
  vm.email = "peterberwind@gmail.com"
  vm.phone = "555.555.5555"
}

angular
  .module('app')
  .controller('StaffController', StaffController);
