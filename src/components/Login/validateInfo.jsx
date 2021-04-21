export const validateInfo = (values) => {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "Username required";
    }

    if (!values.email) {
        errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = "Password required";
    } else if (values.password.length < 8) {
        errors.password = "Password needs to be at least 8 characters or more";
    }

    if (!values.password2) {
        errors.password2 = "Password is required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "Password  do not match";
    }

    return errors;
};
