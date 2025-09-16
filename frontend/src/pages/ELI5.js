import React, { useState } from 'react';
import { Lightbulb, BookOpen, Sparkles, Brain, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const ELI5 = () => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const sampleTopics = [
    'Quantum computing and its applications',
    'How blockchain technology works',
    'Climate change and global warming',
    'Artificial intelligence and machine learning',
    'Gene therapy and genetic engineering'
  ];

  const handleExplain = () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setResult({
        explanation: "Imagine you have a super powerful calculator that can solve really, really hard math problems. But instead of just adding and subtracting like a normal calculator, this one works in a very special way - it uses tiny particles that can be in multiple places at the same time! It's like having a coin that's spinning in the air and is both heads AND tails until it lands. Scientists use these special 'spinning coins' to solve problems that would take regular computers thousands of years to figure out, like finding new medicines or keeping our online information safe.",
        analogy: "Think of it like having a magical library where you can read all the books at the same time instead of one by one. While a regular person (computer) would need to read each book individually to find the answer, this magical library (quantum computer) can look through all the books simultaneously and give you the answer much faster!",
        definitions: [
          { term: 'Quantum', definition: 'Very tiny particles that behave in strange ways' },
          { term: 'Superposition', definition: 'Being in multiple states at once, like a spinning coin' },
          { term: 'Qubits', definition: 'Special building blocks that can store more information' },
          { term: 'Algorithm', definition: 'Step-by-step instructions for solving a problem' }
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleUseSample = (topic) => {
    setInputText(topic);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Brain className="h-10 w-10 mr-3 text-primary" />
            Explain Like I'm 5
          </h1>
          <p className="text-lg text-muted-foreground">
            Turn complex topics into simple, easy-to-understand explanations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Enter Your Topic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea
                    placeholder="Paste text or describe a complex topic you'd like explained simply..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    rows={6}
                    className="resize-none"
                  />
                  <p className="text-sm text-muted-foreground">
                    {inputText.length}/1000 characters
                  </p>
                </div>

                <Button 
                  onClick={handleExplain}
                  disabled={!inputText.trim() || isLoading}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Explaining...
                    </>
                  ) : (
                    <>
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Explain Like I'm 5
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Sample Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Try These Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {sampleTopics.map((topic, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 px-4"
                      onClick={() => handleUseSample(topic)}
                    >
                      {topic}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How it Works */}
            <Card>
              <CardHeader>
                <CardTitle>How ELI5 Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Simple Language</h4>
                      <p className="text-sm text-muted-foreground">
                        Converts complex jargon into everyday words
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Analogies & Examples</h4>
                      <p className="text-sm text-muted-foreground">
                        Uses familiar concepts to explain new ideas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Key Definitions</h4>
                      <p className="text-sm text-muted-foreground">
                        Breaks down important terms in simple language
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            {result ? (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lightbulb className="h-5 w-5 mr-2" />
                      Simple Explanation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed">{result.explanation}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Analogy Box</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <p className="leading-relaxed">{result.analogy}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {result.definitions.map((def, index) => (
                        <div key={index} className="flex flex-col space-y-1">
                          <Badge variant="secondary" className="self-start">
                            {def.term}
                          </Badge>
                          <p className="text-sm text-muted-foreground pl-2">
                            {def.definition}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Copy Explanation
                  </Button>
                  <Button variant="outline" size="sm">
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    Share
                  </Button>
                </div>
              </>
            ) : (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <Brain className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Ready to Explain!</h3>
                  <p className="text-muted-foreground mb-4">
                    Enter a complex topic and we'll break it down into simple, easy-to-understand language
                  </p>
                  {isLoading && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                      <span>Creating simple explanation...</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ELI5;