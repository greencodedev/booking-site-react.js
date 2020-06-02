const cars = [
  {
  name: 'Van',
  min: 7,
  max: 9
},
{
  name: 'Minivan',
  min: 4,
  max: 6
},
{
  name: 'Sedan',
  min: 1,
  max: 3
}
]

export const getCarsFromPassengerNumber = (passengerNumber) => {
  let totalCars = [];
  if (passengerNumber <= 0) {
    return 'Please select passenger number'
  }
  else if (passengerNumber < 10) {
    totalCars = [`1x ${cars.find(car => {
        return passengerNumber >= car.min && passengerNumber <= car.max
      }).name}`]
  } else {
    let totalPassengerLeft = passengerNumber;
    while (totalPassengerLeft > 0) {
      for (let currentCar of cars) {
        const howManyCars = Math.floor(totalPassengerLeft / currentCar.max);
        if (howManyCars > 0) {
          totalCars.push(`x${howManyCars} ${currentCar.name}`)
        }
        else if (howManyCars === 0 && (totalPassengerLeft >= currentCar.min && totalPassengerLeft <= currentCar.max)) {
          totalCars.push(`x${howManyCars + 1} ${currentCar.name}`)
        }
        totalPassengerLeft = totalPassengerLeft < 10 ? 0 : totalPassengerLeft % currentCar.max;
      }
      totalPassengerLeft = 0
    }
  }
  return totalCars.join(', ')
}
