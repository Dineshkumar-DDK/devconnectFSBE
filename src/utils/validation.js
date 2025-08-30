const validator = require("validator")

const validateSignUpData = (data) => {
    let { firstName, lastName, age, emailId,password } = data;
    if (!firstName || !emailId || !password) {
        throw new Error("Missing fields")
    }
    if (!validator.isEmail(emailId)) {
        throw new Error("Invalid email")
    }
    if (!validator?.isStrongPassword(password)) {
        throw new Error("Weak password")
    }


}

module.exports = { validateSignUpData }