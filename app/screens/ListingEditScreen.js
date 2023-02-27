import React, { useState } from 'react';
import { Image, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from "../components/forms";
import CategoryPickerItem from '../components/CategoryPickerItem';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().min(1).max(10000).required().label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, 'Please select at least one image')
})

const categories = [
    {
        label: 'Furniture',
        value: 1,
        backgroundColor: '#ef6363',
        icon: 'table-furniture'
    },
    {
        label: 'Cars',
        value: 2,
        backgroundColor: '#e47f21',
        icon: 'car'
    },
    {
        label: 'Cameras',
        value: 3,
        backgroundColor: '#eabf11',
        icon: 'camera'
    },
    {
        label: 'Games',
        value: 4,
        backgroundColor: '#23ea11',
        icon: 'cards-outline'
    },
    {
        label: 'Clothing',
        value: 5,
        backgroundColor: '#11eae6',
        icon: 'shoe-sneaker'
    },
    {
        label: 'Sports',
        value: 6,
        backgroundColor: '#7495f9',
        icon: 'basketball'
    },
    {
        label: 'Movies & Music',
        value: 7,
        backgroundColor: '#923eec',
        icon: 'headphones'
    },
    {
        label: 'Books',
        value: 8,
        backgroundColor: '#dd3eec',
        icon: 'book-open-outline'
    },
    {
        label: 'Other',
        value: 9,
        backgroundColor: '#ccc',
        icon: 'projector-screen-variant-outline'
    }
];

function ListingEditScreen(props) {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    async function handleSubmit(listing, { resetForm }) {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListings(
            { ...listing, location },
            progress => setProgress(progress));

        if (!result.ok) {
            setUploadVisible(false);
            return alert('Could not save the listing.');
        }

        resetForm();
    }

    return (
        <Screen style={styles.container}>
            <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
            <AppForm
                initialValues={{ 
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: []

                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppFormImagePicker name="images" />
                <AppFormField 
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField 
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    keyboardType='numeric'
                    width={120}
                />
                <AppFormPicker 
                    items={categories}
                    name="category"
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                    width="50%"
                    numberOfColumns={3}
                />
                <AppFormField 
                    multiline
                    numberOfLines={3}
                    maxLength={255}
                    name="description"
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default ListingEditScreen;