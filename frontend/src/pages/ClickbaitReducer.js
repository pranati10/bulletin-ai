import React, { useState } from 'react';
import { Target, AlertTriangle, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';

const ClickbaitReducer = () => {
  const [inputHeadline, setInputHeadline] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const clickbaitExamples = [
    "You Won't Believe What This Celebrity Did Next!",
    "Doctors Hate This One Simple Trick That Will Shock You",
    "This Amazing Life Hack Will Change Everything You Know",
    "What Happened Next Will Blow Your Mind",
    "The Secret They Don't Want You to Know About"
  ];

  const handleReduce = () => {
    if (!inputHeadline.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setResult({
        original: inputHeadline,
        suggestions: [
          inputHeadline.replace(/You Won't Believe|Will Shock You|Will Blow Your Mind|This Amazing|The Secret They Don't Want You to Know/gi, '').replace(/!/g, '.').trim() || 'Celebrity Takes Action in Recent Development',
          'New Development Reported in Recent News',
          'Recent Event Gains Public Attention'
        ],
        clarityScore: Math.floor(Math.random() * 30) + 70,
        clickbaitScore: Math.floor(Math.random() * 40) + 60,
        toneNotes: ['Sensationalized', 'Vague', 'Emotional manipulation'],
        improvements: [
          'Remove emotional hooks',
          'Add specific details',
          'Use neutral language',
          'Include factual information'
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleUseSample = (headline) => {
    setInputHeadline(headline);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Target className="h-10 w-10 mr-3 text-primary" />
            Clickbait Reducer
          </h1>
          <p className="text-lg text-muted-foreground">
            Transform sensationalized headlines into clear, factual alternatives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Enter Headline to Improve</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Enter a clickbait headline..."
                    value={inputHeadline}
                    onChange={(e) => setInputHeadline(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-sm text-muted-foreground">
                    {inputHeadline.length}/200 characters
                  </p>
                </div>

                <Button 
                  onClick={handleReduce}
                  disabled={!inputHeadline.trim() || isLoading}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Reducing Clickbait...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Reduce Clickbait
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Clickbait Examples */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                  Common Clickbait Examples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {clickbaitExamples.map((example, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 px-4 text-sm border-orange-200 hover:border-orange-300"
                      onClick={() => handleUseSample(example)}
                    >
                      {example}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What is Clickbait */}
            <Card>
              <CardHeader>
                <CardTitle>What Makes Headlines Clickbait?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span><strong>Vague promises:</strong> "You won't believe what happened"</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span><strong>Emotional manipulation:</strong> "This will shock you"</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span><strong>Withholding information:</strong> "The secret they don't want you to know"</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span><strong>Exaggerated claims:</strong> "This amazing trick will change everything"</span>
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
                    <CardTitle>Improved Headlines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-600">Original (Clickbait):</h4>
                      <div className="p-3 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-sm">{result.original}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">Improved Versions:</h4>
                      <div className="space-y-2">
                        {result.suggestions.map((suggestion, index) => (
                          <div key={index} className="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                            <div className="flex items-start justify-between">
                              <p className="text-sm flex-1">{suggestion}</p>
                              <CheckCircle className="h-4 w-4 text-green-600 ml-2 mt-0.5" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Analysis Scores</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Clarity Score</span>
                        <span className="font-medium">{result.clarityScore}/100</span>
                      </div>
                      <Progress value={result.clarityScore} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        How clear and informative the headline is
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Clickbait Detection</span>
                        <span className="font-medium text-orange-600">{result.clickbaitScore}/100</span>
                      </div>
                      <Progress value={result.clickbaitScore} className="h-2 bg-orange-100" />
                      <p className="text-xs text-muted-foreground mt-1">
                        Level of clickbait elements detected
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tone Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Issues Detected:</h4>
                        <div className="flex flex-wrap gap-2">
                          {result.toneNotes.map((note, index) => (
                            <Badge key={index} variant="destructive" className="text-xs">
                              {note}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Improvements Made:</h4>
                        <ul className="space-y-1">
                          {result.improvements.map((improvement, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Copy Best Version
                  </Button>
                  <Button variant="outline" size="sm">
                    Save Results
                  </Button>
                  <Button variant="outline" size="sm">
                    Share
                  </Button>
                </div>
              </>
            ) : (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <Target className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Ready to Reduce Clickbait</h3>
                  <p className="text-muted-foreground mb-4">
                    Enter a clickbait headline to get neutral, factual alternatives with analysis
                  </p>
                  {isLoading && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                      <span>Analyzing and improving headline...</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Best Practices */}
            <Card>
              <CardHeader>
                <CardTitle>Good Headline Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>Be specific:</strong> Include key facts and details</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>Stay neutral:</strong> Avoid emotional manipulation</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>Inform, don't tease:</strong> Give readers real information</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>Use clear language:</strong> Avoid vague promises</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickbaitReducer;