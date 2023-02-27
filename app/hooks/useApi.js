import { useState } from 'react';

export default useApi = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function request(apiFunc) {
        setLoading(true);
        const response = await apiFunc();
        console.log(response);
        setLoading(false);

        if (!response.ok) return setError(true);

        setError(false);
        setData(response.data);
    }

    return {
        data,
        error,
        loading,
        request
    };
};

