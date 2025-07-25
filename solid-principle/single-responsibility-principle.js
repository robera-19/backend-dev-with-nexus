// // SRP
// // there should never be more than one reason for a class to change
// // Bad Implementation!!!
// // class Employee {
// //     function calculateSalary() {

// //     }

// //     function printReport() {

// //     }

// //     function SomeOtherTask() {

// //     }
// // }

// better implementation!!!
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
class ReportPrinter {
    printReport(employee) {
        console.log(`Printing ${employee.name}`);
    }
}

const employee = new Employee("Nexus", 2000);
const reportPrinter = new ReportPrinter();
reportPrinter.printReport(employee);
// //
