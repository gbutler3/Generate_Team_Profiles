// The other three classes will extend `Employee`.
const Employee = require("../lib/Employee")

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username
// * `getGithub()`
// * `getRole()`&mdash;overridden to return `'Engineer'`

// describe("Engineer class", () => {
//     describe("Engineer insantiation", () =>{
//         it("Should create new Engineer class", () => {
//             const eng = new Engineer("Grace", 0, "example@example.com");
//             expect(eng instanceof Engineer).toEqual(true);
//         });

//         it("Should return Employee as Role", () => {
//             const eng = new Employee("Grace", 0, "example@example.com");
//             expect(eng.getRole()).toEqual(true);
//         });

//     });
// });