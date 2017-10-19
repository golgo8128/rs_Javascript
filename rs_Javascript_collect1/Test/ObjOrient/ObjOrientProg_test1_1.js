function Person(gender) {
  this.gender = gender;
}

Person.prototype.sayGender = function()
{
  alert(this.gender);
};

var person1 = new Person('Male');
var genderTeller = person1.sayGender;

person1.sayGender(); // alerts 'Male'
genderTeller(); // alerts undefined
alert(genderTeller === person1.sayGender); // alerts true
alert(genderTeller === Person.prototype.sayGender); // alerts true
