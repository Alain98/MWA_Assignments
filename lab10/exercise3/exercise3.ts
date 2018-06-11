class Person{
   private _firstName: string = "";

   get firstName(){
      return this._firstName;
   }

   set firstName(value: string){
      this._firstName = value.toUpperCase();
   }
}
let person: Person = new Person();

person.firstName = "Asaad";

console.log(person.firstName);