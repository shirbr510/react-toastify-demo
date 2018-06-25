import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastify.scss';

const error=(message)=>toast(message, {type:"error", className:"custom-error-toast"})

const success=(message)=>toast(message, {type:"success", className:"custom-success-toast"})

const info=(message)=>toast(message, {type:"info", className:"custom-info-toast"})

const CustomToastContainer = props =>{
    return (
        <ToastContainer
            position="top-center"
            autoClose={5000}
            newestOnTop
            draggable
            closeOnClick
            rtl = {false}
            pauseOnVisibilityChange = {false}
            pauseOnHover
            className="custom-toast-container"
            />
    )
}

export {
    error,
    success,
    info,
    CustomToastContainer as ToastContainer
}
