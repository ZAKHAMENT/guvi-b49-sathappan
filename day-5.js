//Day-5
//1.)for the given json iterate over all for loops (for, for in, for of, forEach)

// for loop

const json = {
  "name": "guru",
  "age": 30,
  "city": "chennai"
};

console.log("Using for loop:");
const keys = Object.keys(json);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = json[key];
  console.log(key + ": " + value);
}

// for...in loop

const json = {
  "name": "guru",
  "age": 30,
  "city": "chennai"
};

console.log("\nUsing for...in loop:");
for (let key in json) {
  if (json.hasOwnProperty(key)) {
    const value = json[key];
    console.log(key + ": " + value);
  }
}

// for...of loop (works with arrays, not objects)

const json = {
  "name": "guru",
  "age": 30,
  "city": "chennai"
};

console.log("\nUsing for...of loop:");
try {
  for (let value of json) {
    console.log(value);
  }
} catch (error) {
  console.log("Error: " + error);
}

// forEach loop (works with arrays, not objects)

const json = {
  "name": "guru",
  "age": 30,
  "city": "chennai"
};

console.log("\nUsing forEach loop:");
try {
  Object.values(json).forEach(value => {
    console.log(value);
  });
} catch (error) {
  console.log("Error: " + error);
}


//2.) create your own resume in json format.

var resume = {
  "name": "Sathappan",
  "title": "Software Engineer",
  "contact": "9159053487",
  "email": "sathappanramesh288@gmail.com",
  "phone": "9159053487",
  "address": "147/7 bala Street, tambaram, tamil nadu",
  "institution": "University of ABC",
  "degree": "Bachelor of Science in Computer Science",
  "year": 2015,
  "languages": "English",
  "interests": "Traveling, singing, Playing cricket"
 
 }
 
  console.log(resume);
 
