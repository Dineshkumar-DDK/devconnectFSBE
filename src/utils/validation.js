const validator = require("validator")

const validateSignUpData = (data) => {
    let { firstName, lastName, age, emailId,password } = data;
    console.log("sign up is valid ..",firstName)
    if (!firstName || !emailId || !password) {
        throw new Error("Missing fields")
    }
    if (!validator.isEmail(emailId)) {
        console.log("sign up is valid .. 2")
        throw new Error("Invalid email")
    }
    if (!validator?.isStrongPassword(password)) {
        console.log("sign up is valid .. 3")
        throw new Error("Weak password")
    }

    return true
}

module.exports = { validateSignUpData }