import { useFormikContext } from 'formik';
import React from 'react';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function AppFormImagePicker({ name }) {
    const { setFieldValue, errors, touched, values } = useFormikContext();
    const imageUris = values[name]
    
    function handleAdd(uri) {
		setFieldValue(name, [...imageUris, uri])
	}
	
	function handleRemove(uri) {
		setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri))
	}

    return (
        <>
            <ImageInputList 
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormImagePicker;