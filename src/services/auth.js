import axios from 'axios';
const baseUrl = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1';

//function for user login
export async function loginUser(formData) {
    const response = await axios.post(`${baseUrl}/login`, formData);
    localStorage.setItem('user_account_status', response.data.verification_status)
    return response.data.verification_status;
}

//function to get all data to be rendered on the Dashboard
export async function getAllDashboardData() {
    const response = await axios.get(`${baseUrl}/welcome`);
    return response.data;
}

//function to get all data to be rendered on Schedule page
export async function getScheduleData() {
    const response = await axios.get(`${baseUrl}/patients`);
    return response.data;
}