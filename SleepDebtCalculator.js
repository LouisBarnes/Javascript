const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 8;
  } else if (day === 'Wednesday') {
    return 8;
  } else if (day === 'Thursday') {
    return 8;
  } else if (day === 'Friday') {
    return 8;
  } else if (day === 'Saturday') {
    return 8;
  } else if (day === 'Sunday') {
    return 8;
  };
  
};
const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours*7;
};

console.log(getIdealSleepHours());
console.log(getActualSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You had an optimal sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You were asleep more than you needed to be.');
  } else {
    console.log('You need more sleep, maybe you should take a nap.');
  }
};
calculateSleepDebt();
