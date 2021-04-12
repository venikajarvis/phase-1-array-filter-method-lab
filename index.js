// Code your solution here

function findMatching(drivers, driverName) {
const result = drivers.filter(driver => driver === driverName || driver === driverName.toUpperCase() || driver === driverName.toLowerCase());
return(result);
}

// a function has 2 arguements; 1st === the array of driver names & 2nd === 2 letters
// if 2nd arguement's 2 letters are the 1st 2 letters of an element in the array of driver names,
// the full names (which are the elements in the driver's array) will be returned

// create a function w/ 2 arguements; 1st === the array of driver names & 2nd === 2 letters entered to search for names
// return the driver names of those who's first 2 letters in their name match the 2nd argument provided in the function
    // [0][1] needed to make sure only the 2 letters entered are only matched w/ the names of 


    function fuzzyMatch(drivers, beginningOfDriversName) {
    return drivers.filter(function(el) {
        return el
            .toLowerCase()
            .slice(0,2)
            .indexOf(beginningOfDriversName.toLowerCase()) !== -1
    })
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


// create function w/ 2 arguements: 1st is driver's array 2nd is string of driver's name
function matchName(drivers, driversFirstName) {
// search through the object's array
    return drivers.filter(driver => driver.name === driversFirstName)
// return all objects where name === driversFirstName as an array of drivers
}

console.log(matchName(drivers,"Sally"));
