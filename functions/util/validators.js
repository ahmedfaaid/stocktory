const isEmpty = string => {
    if (string.trim() === '') return true
    else return false
}

const isEmail = email => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (email.match(regEx)) return true
    else return false
}

exports.validateSignupData = data => {
    let errors = {}

    if (isEmpty(data.email)) {
        errors.email = 'Must not be empty'
    } else if (!isEmail(data.email)) {
        errors.email = 'Must be a valid email address'
    }

    if (isEmpty(data.password)) errors.password = 'Must not be empty'
    if (data.password !== data.confirmPassword)
        errors.confirmPassword = 'Passwords must match'

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.validateLoginData = data => {
    let errors = {}

    if (isEmpty(data.email)) errors.email = 'Must not be empty'
    if (isEmpty(data.password)) errors.password = 'Must not be empty'

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.reduceProductDetails = data => {
    let productDetails = {}

    if (data.name && !isEmpty(data.name.trim())) productDetails.productName = data.name
    if (data.description && !isEmpty(data.description.trim())) productDetails.description = data.description
    if (data.price && !isEmpty(data.price.trim())) productDetails.price = data.price
    if (data.quantity && !isEmpty(data.quantity.trim())) productDetails.quantity = data.quantity
    
    return productDetails
}
