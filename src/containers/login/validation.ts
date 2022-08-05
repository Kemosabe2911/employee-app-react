import * as yup from 'yup';

const loginSchema = yup.object({
    email: yup.string().email('Not a valid e-mail id').required('Enter your e-mail'),
    password: yup.string()
        .required('Enter your password')
});

export default loginSchema;