import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ name, items, numberOfColumns, PickerItemComponent, width, ...otherProps }) {
    const { setFieldValue, errors, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker 
                {...otherProps}
                numberOfColumns={numberOfColumns}
                PickerItemComponent={PickerItemComponent}
                width={width}
                items={items}
                onSelectItem={item => setFieldValue(name, item)}
                selectedItems={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;