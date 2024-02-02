import * as yup from 'yup';

// Error messages for password validation
const errorPassword = {
    min: 'Mật khẩu tối tiểu 8 kí tự.',
    max: 'Mật khẩu tối đa không vượt quá 50 kí tự',
};

// Function to generate an error message for empty fields
const handleEmptyText = (name) => {
    return `${name} không được rỗng`;
};

// Regular expression for phone number validation
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

// Defining the validation schema using yup
const yupObjectDataField = yup.object().shape({
    email: yup.string().email('Email không hợp lệ!').required(handleEmptyText('Email')),
    password: yup.string().min(8, errorPassword.min).max(50, errorPassword.max).required(handleEmptyText('Mật khẩu')),
    confirmPassword: yup.string().min(8, errorPassword.min).max(50, errorPassword.max).required(handleEmptyText('Nhập lại mật khẩu')),
    fullName: yup.string().max(50, 'Tên không được vượt quá 50 ký tự').required(handleEmptyText('Họ & tên')),
    numberPhone: yup.string().matches(phoneRegExp, 'Số điện thoại không hợp lệ').required(handleEmptyText('Số điện thoại')),
    birthDay: yup.date().nullable().min(new Date(1900, 0, 1), 'Ngày sinh không vượt quá năm 1900!').max(new Date(), 'Ngày sinh không đến từ tương lai!').required(handleEmptyText('Ngày sinh nhật')),
    address: yup.string().max(1000, 'Địa chỉ không được vượt quá 1000 ký tự').required(handleEmptyText('Địa chỉ')),
});

// Function to handle form validation for the registration form
export const handleValidateFormRegister = async (data) => {
    // Defining the validation schema using yup
    const yupObjectData = yup.object().shape({
        email: yup.string().email('Email không hợp lệ!').required(handleEmptyText('Email')),
        password: yup.string().min(8, errorPassword.min).max(50, errorPassword.max).required(handleEmptyText('Mật khẩu')),
        confirmPassword: yup.string().oneOf([data.password], 'Mật khẩu nhập lại không chính xác.').min(8, errorPassword.min).max(50, errorPassword.max).required(handleEmptyText('Nhập lại mật khẩu')),
        fullName: yup.string().max(50, 'Tên không được vượt quá 50 ký tự').required(handleEmptyText('Họ & tên')),
        numberPhone: yup.string().matches(phoneRegExp, 'Số điện thoại không hợp lệ').required(handleEmptyText('Số điện thoại')),
        birthDay: yup.date().nullable().min(new Date(1900, 0, 1), 'Ngày sinh không vượt quá năm 1900!').max(new Date(), 'Ngày sinh không đến từ tương lai!').required(handleEmptyText('Ngày sinh nhật')),
        address: yup.string().max(1000, 'Địa chỉ không được vượt quá 1000 ký tự').required(handleEmptyText('Địa chỉ')),
    });
    // Validating the data against the schema
    const res = await yupObjectData.validate(data, { abortEarly: false }).then(() => {
        return {
            status: true,    // Validation status (true: data is valid)
            objError: {},    // Empty object for errors (no errors)
        };
    }).catch((err) => {
        // Handling validation errors and populating the objError object with error messages
        let objError = {};

        err.inner.forEach((error) => {
            objError[error.path] = error.message;
        });

        return {
            status: false,    // Validation status (false: data is invalid)
            objError: objError,    // Object containing error messages for each field
        };
    });

    return res; // Returning the validation result object
};


export const handleValidateFieldSignUp = async (fieldName, value) => {
    const fieldSchema = yupObjectDataField.fields[fieldName];
    try {
        await fieldSchema.validateSync(value)
        
        return {
            status: true,
            objError: {
                [fieldName]: ''
            },
        }
    } catch (err) {
        let objError = {};

        objError[fieldName] = err.message

        return {
            status: false,
            objError: objError,
        }
    }
    
}