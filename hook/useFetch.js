import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const rapidApiKey = "479f71b094msh590611df11313ebp1e80bbjsn612b832d928e"
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log({query: query})

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        // url: `https://jsearch.p.rapidapi.com/search`,

        headers: {
            'X-RapidAPI-Key': '479f71b094msh590611df11313ebp1e80bbjsn612b832d928e',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',

        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
