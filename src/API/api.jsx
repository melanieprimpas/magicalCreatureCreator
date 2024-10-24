import { GoogleGenerativeAI } from "@google/generative-ai";

const fetchStory = async () => {
    try {
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "Generate a story about a pegasus in 50 words";

        const result = await model.generateContent(prompt);
        return result.response.text();
        
    } catch (err) {
        console.log('an error occurred', err);
        return '';
    }

};


export default fetchStory;
/*import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import '../App.css';

const API = () => {
    const [story, setStory] = useState('');

    useEffect(() => {
        const fetchStory = async () => {
            const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = "Generate a story about a pegasus in 50 words";

            const result = await model.generateContent(prompt);
            setStory(result.response.text());
        };

        fetchStory();
    }, []);
    return (
      <div>
          <h1>Generated Story</h1>
          <p>{story}</p>
      </div>
  );
};

export default API;*/