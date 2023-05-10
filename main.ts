let studentList = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }

];
let numberOfMale = 0;
let totalScoreOfMale = 0;
let numberOfFemale = 0;
let totalScoreOfFemale = 0;
for (const studentListElement of studentList) {
    if (studentListElement.gender === 'male') {
        numberOfMale++;
        totalScoreOfMale += studentListElement.point;
    } else {
        numberOfFemale++;
        totalScoreOfFemale += studentListElement.point;
    }
}
let result = [
    {
        gender: 'Male',
        equalScore: totalScoreOfMale / numberOfMale
    },
    {
        gender: 'Female',
        equalScore: totalScoreOfFemale / numberOfFemale
    }
]
console.table(result)