import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const index = useRef(0);

  useEffect(() => {
    if (isTyping && index.current < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((current) => current + text.charAt(index.current));
        index.current += 1;
      }, 20); // Adjust speed here (lower = faster)

      return () => clearTimeout(timeoutId);
    } else if (index.current >= text.length) {
      setIsTyping(false);
    }
  }, [displayedText, isTyping, text]);

  return (
    <pre className='whitespace-pre-wrap font-mono text-sm break-words text-gray-800'>
      {displayedText}
      {isTyping && <span className='animate-pulse'>▊</span>}
    </pre>
  );
};

const PromptInput = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: import.meta.env.VITE_PROMPT_MODEL,
          messages: updatedMessages,
          max_tokens: 200,
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
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: aiResponse },
      ]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Error fetching response" },
      ]);
      setIsLoading(false);
    }
  }

  return (
    <div className='w-full max-w-4xl mx-auto flex flex-col h-[80vh]'>
      <div className='flex-1 overflow-y-auto mb-4 p-4 rounded-lg bg-gray-50/50 backdrop-blur-sm border-2 border-violet-100 font-mono'>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block max-w-[90%] px-4 py-2 rounded-lg text-left ${
                message.role === "user"
                  ? "bg-violet-500 text-white ml-auto"
                  : "bg-white border-2 border-violet-200"
              }`}
            >
              {message.role === "user" ? (
                <pre className='whitespace-pre-wrap font-mono text-sm break-words text-white'>
                  {message.content}
                </pre>
              ) : (
                <TypewriterText text={message.content} />
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className='flex items-center space-x-2 text-gray-500'>
            <div className='flex space-x-1'>
              <div
                className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className='relative group'>
        <input
          onChange={(e) => setInput(e.target.value)}
          type='text'
          value={input}
          disabled={isLoading}
          placeholder={
            isLoading ? "Waiting for response..." : "Ask opp anything..."
          }
          className='w-full py-4 px-6 bg-white/90 backdrop-blur-sm 
          border-2 border-violet-200 rounded-2xl
          text-lg font-mono tracking-wide
          placeholder:text-center placeholder:text-gray-400 placeholder:font-mono
          focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-200
          shadow-[0_0_15px_rgba(139,92,246,0.1)] 
          hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]
          transition-all duration-300 ease-out
          disabled:opacity-50 disabled:cursor-not-allowed
          dark:bg-gray-900/90 dark:text-gray-100 dark:border-violet-900/50
          dark:placeholder:text-gray-500'
        />
        <div className='flex flex-row content-center mt-2'>
          <button
            type='button'
            disabled={isLoading}
            className='flex flex-row items-center justify-center gap-2 
            w-32 px-4 py-2 hover:bg-violet-200/90 hover:text-violet-900
            bg-white/90 border-tl-0
            border-2 border-violet-200 rounded-lg
            transition-colors duration-300
            disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              />
            </svg>
            <span>Save</span>
          </button>
          <button
            type='submit'
            disabled={isLoading}
            className='relative ml-auto items-center justify-center gap-2 
            w-32 px-4 py-2 hover:bg-violet-200/90 hover:text-violet-900
            bg-white/90 border-tl-0
            border-2 border-violet-200 rounded-lg
            transition-colors duration-300
            disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PromptInput;
