type creditCardNumber = string | number

const manager : Employee = {
  name : "John"
}


// enum Roles {
//   softwareDeveloper = "SoftwareDeveloper",
//   srSoftwareDeveloper = "SrSoftwareDeveloper",
//   manager = "Manager"
// }

// interface IEmployee {
//   name: string, 
//   role: Roles
// }

// const softwareDev: IEmployee = {
//   name: "John",
//   role : Roles.softwareDeveloper
// }

// function checkEmployee(role: Roles){
//   return false;
// }


checkEmployee(Roles.softwareDeveloper)



// interface IPerson {
//   name: string;
//   age: number;
//   city?: string;
//   sayHello(name: string): string;
// }

// interface IManager  {
//   isManager: boolean;
// }

// interface IManagerExt extends IPerson, IManager {

// }

// const techManager: IManagerExt = {
//   name: "John",
//   age: 25,
//   sayHello: function (name) {
//     return name;
//   },
//   isManager: true,
// };

// class Person implements IPerson, IManager {
//   sayHello(name: string): string {
//       return `Hi ${name}`
//   }
//   age = 23;
//   name = "Praveen";
//   isManager = false;
// }

// const manager = new Person()

// console.log(manager.age);

// const person: Person = {
//   name: "praveen",
//   age: 32,
// };

// const people: Person[] = [person]

// people[0].city

// const message: string = "hello world";
// const age: number = 54;
// const isAdminUser: boolean = false;
// const isSuperUser: boolean = true;
// const userCity: string | null = "DEL";

// function userCountry(countryCode: string): Promise<string> {
//   return Promise.resolve(countryCode.toLowerCase());
// }
