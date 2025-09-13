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