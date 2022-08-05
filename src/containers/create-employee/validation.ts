import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required('Employee Name is a required field'),
    username: yup.string().required('User Name is a required field'),
    age: yup.number().max(99, 'Enter a valid age').min(18, 'Enter a valid age')
        .required().typeError('Age is a required field'),
    street: yup.string().required('Street is a required field'),
    city: yup.string().required('City is a required field'),
    state: yup.string().required('State is a required field '),
    email: yup.string().email('Not a valid e-mail id').required('E-mail is a required field'),
    role_id: yup.number().required().typeError('Role is a required field '),
    department_id: yup.number()
        .required().typeError('Department is a required field '),
});

export default schema;