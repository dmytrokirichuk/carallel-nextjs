"use client";

//@components
import { ToastContainer } from "react-toastify";

/**
 * Returns the wrapper for ToastContainer with global styles applied
 * @returns JSX.Element
 */
const ToastWrapper = () => (
  <ToastContainer hideProgressBar={true} autoClose={2000} />
);

export default ToastWrapper;
