let raceNumber = Math.floor(Math.random() * 1000);
var earlyApp = true;
var appAge = 18;

if (earlyApp === true && appAge > 18) {
  raceNumber += 1000;
} 
if (earlyApp === true && appAge > 18) {
  console.log(`Race number ${raceNumber} will race at 9:30am. `)
} else if (appAge > 18) {
  console.log(`Late adults run at 11:00 am`)
} else if (appAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration)`)
} else {
  console.log('Please see the registration desk')
}
