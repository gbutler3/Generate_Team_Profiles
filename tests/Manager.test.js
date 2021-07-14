const Manager = require("../lib/Manager")

describe("Manager class", () => {
    describe("Manager instantiation", () =>{
        it("Should create new Manager class", () => {
            const obj = new Manager("Grace", 0, "example@example.com", "012-345-6789");
            expect(obj instanceof Manager).toEqual(true);
        });

        it("It should return 012-345-6789 as a office number", () => {
            const obj = new Manager("Grace", 0, "example@example.com", "012-345-6789");
            expect(obj.getOfficeNumber()).toEqual("012-345-6789");
        });

        it("Should return Manager as a role", () => {
            const obj = new Manager("Grace", 0, "example@example.com", "012-345-6789");
            expect(obj.getRole()).toEqual("Manager");
        });

    });
});