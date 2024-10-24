import { GoogleGenerativeAI } from "@google/generative-ai";

const fetchStory = async (creature, habitat) => {
    try {
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Generate a story about a ${creature} living in the ${habitat} in 50 words`;

        const result = await model.generateContent(prompt);
        return result.response.text();
        
    } catch (err) {
        console.log('an error occurred', err);
        return '';
    }

};


export default fetchStory;
