class School {
    constructor(name, level, numberStudent){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberStudent;
    }

    get name(){
        return this._name;
    }    

    get level(){
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set numberOfStudents(number){
        if(typeof number === 'number'){
            this._numberOfStudents = number;
        }
        else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
        
    }

    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubstitudeTeacher(substitudeTeacher){
        let index = Math.floor(substitudeTeacher.length * Math.random());
        return substitudeTeacher[index];
    }

}

class Primary extends School {
    constructor(name, numberStudent, pickupPolicy){
        super(name, 'primary', numberStudent);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }

    set pickupPolicy(policy){
        this._pickupPolicy = policy;
    }
}


class Middle extends School {
    constructor(name, numberStudent){
        super(name, 'middle', numberStudent);
    }
}

class High extends School {
    constructor(name, numberStudent, sportsTeams){
        super(name, 'high', numberStudent);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){
        console.log(`${this._sportsTeams}`);
    }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
console.log(School.pickSubstitudeTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith =  new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;