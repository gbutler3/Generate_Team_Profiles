const Engineer = require("../lib/Engineer")

describe("Engineer class", () => {
    describe("Engineer insantiation", () =>{
        it("Should create new Engineer class", () => {
            const obj = new Engineer("Grace", 0, "example@example.com", "GitHubName");
            expect(obj instanceof Engineer).toEqual(true);
        });

        it("Should return gbutler3 as Github Name ", () => {
            const obj = new Engineer("Grace", 0, "example@example.com", "gbutler3");
            expect(obj.getGithub()).toEqual("gbutler3");
        });

        it("Should return Engineer as Role ", () => {
            const obj = new Engineer("Grace", 0, "example@example.com", "gbutler3");
            expect(obj.getRole()).toEqual("Engineer");
        });

    });
});