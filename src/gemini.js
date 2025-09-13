import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyAJSxO_k0E4ZEzP7NPpRpLZmMxqQV1wQtM"; // replace with your real key
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 20,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",
  generationConfig,
  });

  const result = await model.generateContent(prompt);

  //console.log(result.response.text());
  return result.response.text();
}

export default run;
