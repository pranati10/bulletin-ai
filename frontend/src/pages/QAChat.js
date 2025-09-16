import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, RotateCcw, MessageCircle, Bot, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import { mockChatMessages, mockPrompts } from '../mockData';

const QAChat = () => {
  const [messages, setMessages] = useState(mockChatMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [useArticleContext, setUseArticleContext] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateMockResponse(inputMessage),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateMockResponse = (question) => {
    const responses = [
      "Based on the recent news analysis, this topic involves multiple stakeholders with varying perspectives. The key factors to consider include economic implications, technological advancements, and social impact.",
      "From the articles I've analyzed, there are several important developments to note. The timeline shows a progression of events over the past few months, with significant milestones achieved in recent weeks.",
      "The data suggests that this trend is likely to continue, supported by evidence from multiple reliable sources. Industry experts predict continued growth in this sector over the next 2-3 years.",
      "This is a complex issue with both benefits and challenges. While there are clear advantages in terms of innovation and efficiency, some concerns have been raised about implementation and long-term effects.",
      "Looking at the current information available, the main conflict appears to be between traditional approaches and newer methodologies. Both sides present valid arguments backed by research and real-world examples."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handlePromptClick = (prompt) => {
    setInputMessage(prompt);
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <MessageCircle className="h-10 w-10 mr-3 text-primary" />
            QA Chat
          </h1>
          <p className="text-lg text-muted-foreground">
            Ask questions about articles and get intelligent responses from AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="flex-shrink-0 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Bot className="h-5 w-5 mr-2 text-primary" />
                    AI Assistant
                  </CardTitle>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={useArticleContext}
                        onCheckedChange={setUseArticleContext}
                        id="article-context"
                      />
                      <label htmlFor="article-context" className="text-sm">
                        Use Article Context
                      </label>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleClearChat}>
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Clear Chat
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-hidden p-0">
                {/* Messages */}
                <div className="h-full overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <MessageCircle className="h-16 w-16 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Start a Conversation</h3>
                      <p className="text-muted-foreground mb-6">
                        Ask questions about articles, trends, or request analysis
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {mockPrompts.slice(0, 3).map((prompt, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handlePromptClick(prompt)}
                          >
                            {prompt}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex items-start space-x-3 ${
                            message.type === 'user' ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          {message.type === 'ai' && (
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                              <Bot className="h-4 w-4 text-primary-foreground" />
                            </div>
                          )}
                          
                          <div className={`max-w-[80%] ${message.type === 'user' ? 'order-1' : ''}`}>
                            <div
                              className={`p-3 rounded-lg ${
                                message.type === 'user'
                                  ? 'bg-primary text-primary-foreground ml-auto'
                                  : 'bg-muted'
                              }`}
                            >
                              <p className="text-sm leading-relaxed">{message.content}</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 px-3">
                              {message.timestamp}
                            </p>
                          </div>

                          {message.type === 'user' && (
                            <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center order-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Bot className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <div className="bg-muted p-3 rounded-lg">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t p-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Ask a question about the articles..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="pr-12"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                        disabled
                      >
                        <Mic className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>

                  {useArticleContext && (
                    <div className="mt-2">
                      <Badge variant="secondary" className="text-xs">
                        Using context from recent articles
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Example Prompts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-left h-auto py-2 px-3 text-xs"
                      onClick={() => handlePromptClick(prompt)}
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Article Context</h4>
                    <p className="text-muted-foreground text-xs">
                      AI can reference recent articles for informed responses
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Multi-turn Chat</h4>
                    <p className="text-muted-foreground text-xs">
                      Ask follow-up questions and build on previous answers
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Smart Analysis</h4>
                    <p className="text-muted-foreground text-xs">
                      Get insights on trends, conflicts, and implications
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <p>• Ask specific questions for better responses</p>
                  <p>• Use "Compare..." to analyze multiple topics</p>
                  <p>• Try "Explain the timeline of..." for chronology</p>
                  <p>• Ask "What are the implications of..." for analysis</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAChat;