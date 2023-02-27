import { useFormikContext } from 'formik';
import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
    const { setFieldTouched, setFieldValue, handleChange, errors, touched, values } = useFormikContext();
    return (
        <>
            <AppTextInput 
                {...otherProps}
                width={width}
                onChangeText={text => setFieldValue(name, text)}
                onBlur={() => setFieldTouched(name)}
                value={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;