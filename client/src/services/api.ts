import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const processNews = async (
    source: string
) => {

    const response = await api.post(
        "/process-news",
        {
            source: source
        }
    );

    return response.data;
};

export default api;