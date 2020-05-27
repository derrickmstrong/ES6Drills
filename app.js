let favMovies = (name, movie = 'The Room') =>
  console.log(`My name is ${name} and my favorite movie is ${movie}`);
favMovies('Derrick', 'Home Alone');

let getFirstName = (fullname) => {
  let fname = fullname.split(' ')[0];
  console.log(fname);
};
let getFirstNameConcise = (fullname) => console.log(fullname.split(' ')[0]);
getFirstName('Derrick Strong');
getFirstNameConcise('Malone Strong');

let obj = (x, y) => {
  return {
    exponent: x ^ y,
    product: x * y,
  };
};
let result = obj(3, 2);
console.log(result);

let bio = (name, location, favFood) =>
console.log(`${name} ${location} ${favFood}`);

bio('Derrick', 'Bham', 'pizza');
let arr = ['Malone', 'Cols', 'Chicken']
bio(...arr)

const name = 'Derrick'
let pizza = (topping) => {
    let newName = [...topping]
    console.log(newName)

    for (let i = 0; i < newName.length; i++) {
        const cookies = newName[i];
        console.log(cookies);
    }
}

pizza(name)