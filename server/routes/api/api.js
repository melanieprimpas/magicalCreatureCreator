import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config({ path: '../.env', debug: true });
//console.log(process.env.API_KEY, "line 4")

const fetchStory = async (creatureName, habitat) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Generate a story about a ${creatureName} living in the ${habitat} in 50 words`;

        const result = await model.generateContent(prompt);
        return result.response.text();
        
    } catch (err) {
        console.log('an error occurred', err);
        return '';
    }

};


export default fetchStory;
