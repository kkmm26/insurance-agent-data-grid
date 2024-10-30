import axios from 'axios';
import { Policy } from '@/data';
const BASE_URL = "https://insurance-backend-el66.onrender.com/api";


export const policyApi = {
    getPolicies: async () => {
        const { data } = await axios.get(`${BASE_URL}/policies`);
        return data;
    },

   

    createPolicy: async (policy: Policy) => {
        const { data } = await axios.post(`${BASE_URL}/policies`, policy);
        return data;
    },

    updatePolicy: async (id: string, policy: Policy) => {
        const { data } = await axios.put(`${BASE_URL}/policies/${id}`, policy);
        return data;
    },

    deletePolicy: async (id: string) => {
        const { data } = await axios.delete(`${BASE_URL}/policies/${id}`);
        return data;
    },
};
