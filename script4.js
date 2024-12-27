import { GoogleGenerativeAI } from "https://cdn.jsdelivr.net/npm/@google/generative-ai/+esm";

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultDiv = document.getElementById('result');

// Replace with your actual Gemini API key
const API_KEY = 'AIzaSyC0nu4T4c9b1OLQwR4FLNjVgzPKZchTrwg';

// Initialize the Gemini model 
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({model: "gemini-pro"})
searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    resultDiv.textContent = 'Loading...';
    try {
        const result = await model.generateContent(query);
        const response = await result.response;
        const text = response.text();
        resultDiv.textContent = text;
    } catch(error) {
         console.error('Error fetching data:', error);
         resultDiv.textContent = 'An error occurred. Please try again later.';
    }
});

