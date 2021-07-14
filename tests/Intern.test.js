// The other three classes will extend `Employee`.
const Intern = require("../lib/Intern")

describe("Intern class", () => {
    describe("Intern insantiation", () =>{
        it("Should create new Intern class", () => {
            const obj = new Intern("Grace", 0, "example@example.com", "TWU");
            expect(obj instanceof Intern).toEqual(true);
        });

        it("Should return TWU as school ", () => {
            const obj = new Intern("Grace", 0, "example@example.com", "TWU");
            expect(obj.getSchool()).toEqual("TWU");
        });

        it("Should return Intern as Role ", () => {
            const obj = new Intern("Grace", 0, "example@example.com", "TWU");
            expect(obj.getRole()).toEqual("Intern");
        });

    });
});