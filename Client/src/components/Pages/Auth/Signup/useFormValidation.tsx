// import { useState } from "react";

// export const useFormValidation = () => {
//   const [isEmailValid, setIsEmailValid] = useState(false);
//   const [isPasswordValid, setIsPasswordValid] = useState(false);
//   const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const validateEmail = (email: string) => {
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return regex.test(email);
//   };

//   const validatePassword = (password: string) => {
//     return password.length >= 6;
//   };

//   return {
//     isEmailValid,
//     isPasswordValid,
//     isConfirmPasswordValid,

//     isFormSubmitted,
//     setIsEmailValid,
//     setIsPasswordValid,
//     setIsConfirmPasswordValid,

//     setIsFormSubmitted,
//     validateEmail,
//     validatePassword,
//   };
// };
