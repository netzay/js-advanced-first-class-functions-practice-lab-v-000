// Code your solution in this file!
const logDriverNames = function (drivers) {

  drivers.forEach(function (driver) {
  console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, location){
    drivers.forEach(function (driver) {
      if (location === driver.hometown){
        console.log(driver.name);
      }
    });
};

const driversByRevenue = function(drivers){
    const newDrivers = []  
    drivers.revenue.sort(function (a, b) {
  return a.localeCompare(b);
});
   
  drivers.forEach(function (driver) {
    newDrivers.push(driver.revenue.sort);
  });
    return newDrivers;
}
