import emailjs from '@emailjs/browser'

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
}

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

// Send email function
export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Your Name', // Replace with your name
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )

    return {
      success: true,
      message: 'Email sent successfully!',
      data: response
    }
  } catch (error) {
    console.error('Email sending error:', error)
    return {
      success: false,
      message: 'Failed to send email. Please try again.',
      error: error.message || 'Unknown error'
    }
  }
}

// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate form data
export const validateForm = (formData) => {
  const errors = {}

  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long'
  }

  // Email validation
  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}