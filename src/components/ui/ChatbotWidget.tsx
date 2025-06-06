import React, { useState } from 'react';
import { MessageCircle, X, Send, ChevronUp, ChevronDown } from 'lucide-react';
import Button from './Button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your BeachRecs assistant. How can I help you find your perfect beach today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleToggle = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      let responseText = '';
      
      if (inputText.toLowerCase().includes('beach') && inputText.toLowerCase().includes('goa')) {
        responseText = "Goa has some amazing beaches! I'd recommend Palolem Beach for its crescent shape and relaxed vibe, or Baga Beach if you're looking for more activities and nightlife.";
      } else if (inputText.toLowerCase().includes('safe')) {
        responseText = "Safety is important! Radhanagar Beach in Andaman has a 5/5 safety rating with lifeguards and clear waters. Marina Beach in Chennai currently has yellow warning flags - moderate caution advised.";
      } else if (inputText.toLowerCase().includes('family')) {
        responseText = "For family-friendly beaches, I recommend Kovalam Beach in Kerala. It has good facilities, lifeguards, and gentler waves that are suitable for children.";
      } else {
        responseText = "I'd be happy to help you find the perfect beach! Could you tell me what activities you're interested in or which part of India you're planning to visit?";
      }
      
      const botMessage: Message = {
        id: Date.now().toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Closed/Minimized State */}
      {isMinimized && (
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-all"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Open State */}
      {!isMinimized && (
        <div className="bg-white rounded-lg shadow-xl w-80 md:w-96 flex flex-col max-h-[500px] border border-gray-200">
          {/* Header */}
          <div className="bg-primary-500 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-medium">Beach Assistant</h3>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={handleMinimize} className="p-1 hover:bg-primary-600 rounded">
                {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </button>
              <button onClick={() => setIsMinimized(true)} className="p-1 hover:bg-primary-600 rounded">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {isOpen && (
            <>
              <div className="p-4 overflow-y-auto flex-1 max-h-80">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-3 max-w-[85%] ${
                      message.sender === 'user' ? 'ml-auto' : 'mr-auto'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary-500 text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                    <div
                      className={`text-xs text-gray-500 mt-1 ${
                        message.sender === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t p-3 flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about beaches..."
                  className="flex-1 py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  type="button"
                  icon={<Send className="h-4 w-4" />}
                >
                  Send
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;