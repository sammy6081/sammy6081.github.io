var person = {
    name: 'jack',
    yearOfBirth: 1990,
    job: 'secret agent'
}

function Person(pName, pYearOfBirth, pJob){
    this.name = pName;
    this.yearOfBirth = pYearOfBirth;
    this.job = pJob;

    // this.calculateAge = 
}

Person.prototype.calculateAge = function(){
    console.log('For => '+this.name, 2022 - this.yearOfBirth);
}
Person.prototype.lastName= "Oluwagbemileke"

Person.prototype.updateYearOfBirth = function(birthYear){
    this.yearOfBirth = birthYear
}

var sam = new Person('Samuel', 1992, 'Chemist')
sam.calculateAge();
console.log(sam.lastName)
sam.updateYearOfBirth(1960)
sam.calculateAge();


var john = new Person('John', 1994, 'Pilot')
john.calculateAge();
console.log(john.lastName)

var dele = new Person('Dele', 1999, 'Pilot')
dele.calculateAge();
dele.updateYearOfBirth(1998);
dele.calculateAge();