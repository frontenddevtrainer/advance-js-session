const API_CONFIG = Object.freeze({
    baseURL : "https://example.com/api"
})

API_CONFIG.baseURL = "https:edureka.com/api"

console.log(API_CONFIG);

// DB
const person = {
  name: "Praveen",
  age: 20,
  city: "Delhi",
  address: {
    zone: "East Delhi",
    postoffice: {
        name: "XYZ"
    }
  },
  phone : ["44324243243", "435365346546"]
};

person.address.zone = "South Delhi"

console.log(person);


// const people = [];
// people.push("Praveen")
// people.push("Amit");
// console.log(people)
