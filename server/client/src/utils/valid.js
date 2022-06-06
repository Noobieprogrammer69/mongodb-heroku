const valid = ({userName, fullName, email, password, confirmPassword}) => {
    const err = {}

    if(!fullName) {
        err.fullName = 'Please add your Fullname'
    } else if (fullName.length > 30) {
        err.fullName = "Fullname should be less than 30 Characters"
    }
    if(!userName) {
        err.userName = 'Please add your Username'
    } else if (userName.length > 30) {
        err.userName = "Username should be less than 30 Characters"
    }

    if(!email){
        err.email = "please add your email"
    }else if(!validateEmail(email)){
        err.email = "Invalid Email format"
    }

    if(!password) {
        err.password = 'Please add your Password and dont forget about them.'
    } else if (password.length < 3) {
        err.password = "Password should be greater than 3 characters"
    }

    if(password !== confirmPassword) {
        err.confirmPassword = "Password should be match"
    }

    return {
        errMsg:err,
        errLength: Object.keys(err).length
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default valid;