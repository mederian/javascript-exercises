const findTheOldest = function(people) {
    // for every people in people. subtract death from birthyear. But if has no death year, used current year

    people.sort(ageSort);


    console.log(people);

    return people.at(-1);

    function ageSort(yearsA, yearsB){
        
        const yearADeath = typeof yearsA['yearOfDeath'] !== 'undefined' ? yearsA['yearOfDeath'] : (new Date().getFullYear());
        const yearBDeath = typeof yearsB['yearOfDeath'] !== 'undefined' ? yearsB['yearOfDeath'] : (new Date().getFullYear());
        console.log(yearsA, yearsB);
        console.log(yearADeath, yearBDeath);

        if(yearADeath - yearsA['yearOfBirth'] < yearBDeath - yearsB['yearOfBirth']) return -1
        if(yearADeath - yearsA['yearOfBirth'] > yearBDeath - yearsB['yearOfBirth']) return 1
        if(yearADeath - yearsA['yearOfBirth'] === yearBDeath - yearsB['yearOfBirth']) return -1
    }

};

// Do not edit below this line
module.exports = findTheOldest;
