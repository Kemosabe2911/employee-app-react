import * as yup from 'yup';

const createDepartmentSchema = yup.object({

    name: yup.string().required('Name is a required field '),
    department_room: yup.string().required('Department Room is a required field'),
    department_code: yup.string().required('Department Code is arequired field'),
    website: yup.string().required('Website is a required field')
});

export default createDepartmentSchema;