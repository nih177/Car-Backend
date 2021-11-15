export var VALIDATE_EMAIL = async function (value) {    
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value)
}

export var VALIDATE_PHONE_NUMBER = async function (value) {
    return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.\/0-9]*$/.test(value)
}

export var VALIDATE_ALPHA = async function (value) {
    return  /^[a-z]*/gi.test(value)
}

export var VALIDATE_BLOOD_GROUP = async function (value) {
    return /^[a-zA-Z+-]*/.test(value)
}

export var VALIDATE_ALPHA_NUMERIC = async function (value) {
    return  /^[a-z0-9]*/gi.test(value)
}

export var VALIDATE_YEAR = async function (value) {
    return /^[1-9][0-9]{3}$/.test(value)
}

export var VALIDATE_NUMERIC = async function (value) {
    return /^[1-9]*$/.test(value)
}

export var VALIDATE_PASSWORD = async function (value) {
    return /^[ A-Za-z0-9_@./#&+-]*$/.test(value)
}

export var VALIDATE_CITY = async function (value) {
    return  /^[a-z0-9]*/gi.test(value)
}

export var VALIDATE_STATE = async function (value) {
    return  /^[a-z0-9]*/gi.test(value)
}