import React, { createContext, useState } from 'react';
import run from '../gemini';

export const dataContext = createContext();

function UserContext({ children }) {
  const [speaking, setSpeaking] = useState(false);
  const [prompt, setPrompt] = useState('listening...');
  const [response, setResponse] = useState(false);

  // 🔊 Text-to-Speech function
  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = 'hi-GB'; // You can change to "en-US" if needed
    window.speechSynthesis.speak(text_speak);
  }

  // 🤖 AI Response
  async function aiResponse(prompt) {
    let text = await run(prompt);

    // Clean unwanted characters and replace "google" with "Sant"
    let newText = text
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/google/gi, 'Sant');

    setPrompt(newText);
    speak(newText);
    setResponse(true);

    setTimeout(() => {
      setSpeaking(false);
    }, 5000);
  }

  // 🎙️ Speech Recognition
  let speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new speechRecognition();

  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript;
    setPrompt(transcript);

    // ✅ Call toLowerCase() properly
    takeCommand(transcript.toLowerCase());
  };

  // 🎯 Handle voice commands
  function takeCommand(command) {
    if (typeof command !== 'string') return; // safety check

    if (command.includes('open') && command.includes('youtube')) {
      window.open('https://www.youtube.com/', '_blank');
      speak('Opening YouTube...');
      setResponse(true);
      setPrompt('Opening YouTube...');
    } else if (command.includes('open') && command.includes('google')) {
      window.open('https://www.google.com/', '_blank');
      speak('Opening Google...');
      setResponse(true);
      setPrompt('Opening Google...');
    } else if (command.includes('open') && command.includes('chatgpt')) {
      window.open('https://chatgpt.com/', '_blank');
      speak('Opening ChatGPT...');
      setResponse(true);
      setPrompt('Opening ChatGPT...');
    } else if (command.includes('time')) {
      let time = new Date().toLocaleString(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
      speak(time);
      setResponse(true);
      setPrompt(time);
      setTimeout(() => {
      setSpeaking(false);
    }, 5000);
    } else if (command.includes('date')) {
      let date = new Date().toLocaleString(undefined, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
      speak(date);
      setResponse(true);
      setPrompt(date);
      setTimeout(() => {
      setSpeaking(false);
    }, 5000);
    } else {
      aiResponse(command);
    }

    // Auto reset speaking after 5s
    setTimeout(() => {
      setSpeaking(false);
    }, 5000);
  }

  // Context values
  let value = {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    response,
    setResponse,
  };

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;
