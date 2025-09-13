// Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any; // Index signature for additional properties
}

// Example usage
const teacher3: Teacher = {
    firstName: 'Ismail',
    fullTimeEmployee: false,
    lastName: 'Mensah',
    location: 'Ghana',
    contract: false,
};

console.log(teacher3);

// Directors Interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Example usage
const director1: Directors = {
    firstName: 'Samuel',
    lastName: 'Arhin',
    location: 'Accra',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);