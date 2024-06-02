import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchChallenges = () => axios.get(`${API_URL}/challenges`);
export const fetchUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);
export const createChallenge = (challenge) => axios.post(`${API_URL}/challenges`, challenge);
