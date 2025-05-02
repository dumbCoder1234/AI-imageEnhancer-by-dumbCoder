import axios from "axios";

const API_KEY = "USE YOUR OWN KEY FOR FREE FROM PICWISH (50 CREDITS)";
const BASE_URL = "https://techhk.aoscdn.com";

export const enhancedImgApi = async (file) => {
    try {
        const taskId = await uploadImg(file);
        const fetchImg = await pollForEnhancedImg(taskId);
        return fetchImg;

    }
    catch (error) {
        console.log(error);

    }
}

const uploadImg = async (file) => {

    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-type": "multipart/form-data",
            "X-API-Key": API_KEY
        }
    })

    if (!data) {
        throw new Error("Failed to upload image");
    }

    const taskId = data.data.task_id;

    return taskId;
}


const enhancedImg = async (taskId) => {

    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-Key": API_KEY
        }
    })

    return data.data;
}


const pollForEnhancedImg = async (taskId, retries = 0) => {
    const result = await enhancedImg(taskId);

    if (result.state == 4) {

        if (retries >= 10) {
            throw new Error("Failed to fetch image");
        }

        await new Promise((resolve) => setTimeout(resolve, 2000));
        return pollForEnhancedImg(taskId, retries + 1);
    }

    return result;
}
