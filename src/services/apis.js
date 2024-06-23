const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
console.log("import.meta.env", import.meta.env);  // Debugging line

console.log("BASE_URL", BASE_URL)

export const categories = {
  CATEGORIES_API: `${BASE_URL}/course/showAllCategories`,
};


// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}