interface IPerson {
  name: string;
  age: number;
  city?: string | null;
  sayHello(name: string) : string
}

interface IManager {
    isManager: boolean
}

class Person implements IPerson, IManager {
  sayHello(name: string): string {
      return `Hi ${name}`
  }
  age = 23;
  name = "Praveen";
  city = "DEL";
  isManager = false;
}

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
