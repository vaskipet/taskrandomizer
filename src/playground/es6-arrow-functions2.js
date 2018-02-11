const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
  return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply())


const user = {
  name: 'Petteri',
  cities: ['Helsinki', 'Kerava', 'Tuusula'],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => {
      return city;
    })
    return cityMessages;
  }
}

console.log(user.printPlacesLived());