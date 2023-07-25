import * as yup from 'yup'

const errorPassword = {
    min: 'Mật khẩu tối tiểu 8 kí tự.',
    max: 'Mật khẩu tối đa không vượt quá 50 kí tự'
}

const handleEmptyText = (name) => {
    return `${name} không được rỗng`
}

export const handleValidateFormLogin = async (data) => {
    const yupObjectData = yup.object().shape({
        email: yup.string().email('Email không hợp lệ!').required(handleEmptyText('Email')),
        password: yup.string().min(8, errorPassword.min).max(50, errorPassword.max).required(handleEmptyText('Mật khẩu')),
    })

    const res = await yupObjectData.validate(data, { abortEarly: false }).then(() => {
        return {
            status: true,
            objError: {},
        }
    }).catch((err) => {
        let objError = {};

        err.inner.forEach((error) => {
            objError[error.path] = error.message
        });

        return {
            status: false,
            objError: objError,
        }
    })
    
    return res;
}