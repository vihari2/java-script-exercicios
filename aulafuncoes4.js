const calculAge = function (birthYear) {
  const age = 2022 - birthYear;
  return age;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calculAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(
      `${firstName} has ${age} years old and retires in ${retirement} years.`
    );
    return retirement;
  } else {
    console.log(`${firstName} has ${age} years old and has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1950, "Maria"));
