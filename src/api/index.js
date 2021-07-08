import axios from 'axios';

// const url = 'https://mern-memories-api-server.herokuapp.com/posts';
// const url = 'http://localhost/5000/posts';
// const API = axios.create({ baseURL: 'http://localhost:5000' });
const API = axios.create({
  baseURL: 'https://mern-memories-api-server.herokuapp.com',
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get('/posts');

export const createPost = (newPost) => API.post('/posts', newPost);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signin = (formData) => API.post('/users/signin', formData);
export const signup = (formData) => API.post('/users/signup', formData);
