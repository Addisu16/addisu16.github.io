/* comment out the import assert line when running in the browser */
import assert from "node:assert/strict"; 

import {user,askPassword,user2,askPassword2} from"./passwords.js";


/* modify the book functions (in the Function binding section tasks) to return values instead of displaying alerts, and to take the passwords as parameters rather than prompting for them.  
Then write the additional mocha tests to use call and apply instead of bind.
*/
describe("fix function that loses 'this'", function () {

    it("tests rockstar", function () {
        assert.strictEqual(askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "rockstar"), "John logged in");
    });
    
    it("tests wrong password", function () {
        assert.strictEqual(askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "1234"), "John failed to log in");
    });
 
});
describe("fix function with 'call", function () {

  it("tests rockstar", function () {
      assert.strictEqual(askPassword(function(){return user.loginOk.call(user)}, function(){return user.loginFail.call(user)}, "rockstar"), "John logged in");
  });
  
  it("tests wrong password", function () {
      assert.strictEqual(askPassword(function(){return user.loginOk.call(user)}, function(){return user.loginFail.call(user)}, "1234"), "John failed to log in");
  });

});

 describe("Partial application for login", function () {

    it("tests rockstar", function () {
        assert.strictEqual(askPassword2(() => user.loginOk(true), () => user.loginOk(false), "rockstar"), "John logged in");
    });

    it("tests wrong password", function () {
        assert.strictEqual(askPassword2(() => user.loginFail(true), () => user.loginFail(false), "1234"), "John failed to log in");
    });
});

