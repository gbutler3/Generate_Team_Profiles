const Employee = require("../lib/Employee")

describe("Employee class", () => {
    describe("Employee insantiation", () =>{
        it("Should create new Employee class", () => {
            const obj = new Employee("Grace", 0, "example@example.com");

            expect(obj instanceof Employee).toEqual(true);
        });

        it("Should return Employee as a role", () => {
            const obj = new Employee("Grace", 0, "example@example.com");

            expect(obj.getRole()).toEqual("Employee");
        });

        it("It should return Grace as a Name", () => {
            const obj = new Employee("Grace", 0, "example@example.com");

            expect(obj.getName()).toEqual("Grace");
        });

        it("It should return example@example.com as a email", () => {
            const obj = new Employee("Grace", 0, "example@example.com");

            expect(obj.getEmail()).toEqual("example@example.com");
        });
    
    });
    
});