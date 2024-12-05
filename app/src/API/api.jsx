import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getData = async (pageNumber) => {
  try {
    const { data } = await api.get(`/posts?_start=${pageNumber}&_limit=5`);
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getDataId = async (id) => {
  try {
    const { data } = await api.get(`/posts/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    throw error;
  }
};

export const deleteData = (id) => {
  return api.delete(`/posts/${id}`);
};
