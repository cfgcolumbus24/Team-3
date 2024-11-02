import React, { useState } from "react";
import axios from "axios";

const PromptInput = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    
    const updatedMessages = [...messages, { role: "user", content: input }];
    
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: import.meta.env.VITE_PROMPT_MODEL,
          messages: updatedMessages,
          max_tokens: 100,
          temperature: 0.5,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PROMPT_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;
      setMessages([...updatedMessages, { role: "assistant", content: aiResponse }]);
      setInput("");
      return aiResponse;
    } catch (error) {
      console.error("Error fetching response:", error);
      return "Error fetching response";
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto relative group">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Ask opp anything..."
          className="w-full py-4 px-6 bg-white/90 backdrop-blur-sm 
          border-2 border-violet-200 rounded-2xl
          text-lg font-mono tracking-wide
          placeholder:text-center placeholder:text-gray-400 placeholder:font-mono
          focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-200
          shadow-[0_0_15px_rgba(139,92,246,0.1)] 
          hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]
          transition-all duration-300 ease-out
          dark:bg-gray-900/90 dark:text-gray-100 dark:border-violet-900/50
          dark:placeholder:text-gray-500"
        />
        <div className="flex flex-row content-center mt-2">
          <button
            type="button"
            className="flex flex-row items-center justify-center gap-2 
            w-32 px-4 py-2 hover:bg-violet-200/90 hover:text-violet-900
            bg-white/90 border-tl-0
            border-2 border-violet-200 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>Save</span>
          </button>
          <button
            type="submit"
            className="relative ml-auto items-center justify-center gap-2 
            w-32 px-4 py-2 hover:bg-violet-200/90 hover:text-violet-900
            bg-white/90 border-tl-0
            border-2 border-violet-200 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PromptInput;
