const cars = [
    {id: 1, make: 'Toyota', model: 'Camry', year: 2022, color: 'White'},
    {id: 2, make: 'Ford', model: 'Mustang', year: 2021, color: 'Red'},
    {id: 3, make: 'BMW', model: '3 Series', year: 2023, color: 'Black'},
    {id: 4, make: 'Audi', model: 'Q5', year: 2020, color: 'Silver'},
    {id: 5, make: 'Honda', model: 'Civic', year: 2019, color: 'Blue'},
];

function getCars() {
    return cars;
}

function getCarInformation(id) {
    const car = cars.find(gc => gc.id === id);
    if (car) {
        return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}.`;
    } else {
        return `Car doesn't exist`;
    }
}

function getCarAge(id) {
    const car = cars.find(gc => gc.id === id);
    if (car) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - car.year;
        return `Car is ${carAge} years old.`;
    } else {
        return `Car doesn't exist`;
    }
}

module.exports = {
    getCars,
    getCarInformation,
    getCarAge
};