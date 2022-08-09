import * as yup from 'yup';

const signupSchema = yup.object({
    email: yup.string().email('Not a valid e-mail id').required('E-mail is required'),
    first_name: yup.string().required('Name is required'),
    last_name: yup.string().required('Last Name is required'),
    password: yup.string().max(15, 'Atmost 15 characters').min(8, 'Atleast 8 characters')
        .required('Enter your password'),
    confirm_p: yup.string()
        .oneOf([yup.ref('password'), null], 'Password must match')
});

export default signupSchema;