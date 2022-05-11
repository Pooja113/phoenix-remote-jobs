import axios from 'axios'

const url = 'http://localhost:5000/joblist'

export const fetchPosts = async () => await axios.get(url)
export const createPosts = async (newPost) => axios.post(url , newPost)