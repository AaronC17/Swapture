const formatDate = (date) => new Date(date).toLocaleDateString();

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export { formatDate, validateEmail };
