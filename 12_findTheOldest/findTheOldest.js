const findTheOldest = function(people) {
    people.sort(ageSort);
    return people.at(-1);

    function ageSort(yearsA, yearsB){   
        const yearADeath = typeof yearsA['yearOfDeath'] !== 'undefined' ? yearsA['yearOfDeath'] : (new Date().getFullYear());
        const yearBDeath = typeof yearsB['yearOfDeath'] !== 'undefined' ? yearsB['yearOfDeath'] : (new Date().getFullYear());

        if(yearADeath - yearsA['yearOfBirth'] < yearBDeath - yearsB['yearOfBirth']) return -1
        if(yearADeath - yearsA['yearOfBirth'] > yearBDeath - yearsB['yearOfBirth']) return 1
        if(yearADeath - yearsA['yearOfBirth'] === yearBDeath - yearsB['yearOfBirth']) return -1
    }

};

// Do not edit below this line
module.exports = findTheOldest;
