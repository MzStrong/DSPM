const apiUrl = "http://localhost:3000";
import { LoginDataInterface } from "../interfaces/ILogin";
import axios from "axios";

// Login
export async function loginAdmin(loginData: LoginDataInterface) {
    try {
        const response = await axios.post(`${apiUrl}/api/login`, loginData);
        return response.data;
    } catch (err: any) {
        throw err.response.data.error;
    }
}

// เก็บ token, email ใน Session storage
export async function authenticate(response: any, next: any) {
    if (window !== undefined) {
        sessionStorage.setItem("token", response.token)
        sessionStorage.setItem("email", response.email)
    }
    next()
}

// Get Token ที่เก็บไว้ใน Browser
export function getToken() {
    if (window !== undefined) {
        const token = sessionStorage.getItem("token");
        if (token !== null) {
            return token;
        }
    }
}

// Get Token ที่เก็บไว้ใน Browser
export function getEmail() {
    if (window !== undefined) {
        const email = sessionStorage.getItem("email");
        if (email !== null) {
            return email;
        }
    }
}

// // Get All Form
// async function getAdmin() {
//     const requestOptions = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };

//     try {
//         const response = await fetch(`${apiUrl}/api/getadmins`, requestOptions);
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }

//         const res = await response.json();
//         // console.log(res);
//         return res;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// }
