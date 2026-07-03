import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const processNews = async (
    source: string,
    keyword: string
) => {

    const response = await api.post(
        "/process-news",
        {
            source: source,
            keyword: keyword
        }
    );

    return response.data;
};

export default api;