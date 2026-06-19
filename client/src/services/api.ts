import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const processNews = async () => {
    const response = await api.post(
        "/process-news"
    );

    return response.data;
};

export default api;