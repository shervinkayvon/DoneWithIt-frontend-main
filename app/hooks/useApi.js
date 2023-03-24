import { useState } from 'react';

export default useApi = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (apiFunc, ...args) => {
        try {
            setLoading(true);
            const response = await apiFunc(...args);
            setLoading(false);

            setError(!response.ok);
            setData(response.data);
            return response;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return {
        data,
        error,
        loading,
        request
    };
};

