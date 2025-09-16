import React, { useState } from 'react';
import { Heart, Frown, Meh, Smile, BarChart3, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';

const Sentiment = () => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const sampleTexts = [
    "I'm absolutely thrilled about the new breakthrough in renewable energy technology!",
    "The economic situation is causing concern among investors and analysts.",
    "The weather today is okay, nothing particularly exciting happening.",
    "This new restaurant exceeded all my expectations - amazing food and service!",
    "Traffic was delayed due to construction, but the detour route worked fine."
  ];

  const handleAnalyze = () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      const sentiment = Math.random() > 0.5 ? 'positive' : Math.random() > 0.3 ? 'neutral' : 'negative';
      setResult({
        sentiment: sentiment,
        score: sentiment === 'positive' ? 0.8 : sentiment === 'negative' ? -0.6 : 0.1,
        confidence: Math.floor(Math.random() * 20) + 80,
        breakdown: {
          positive: sentiment === 'positive' ? 75 : sentiment === 'negative' ? 15 : 35,
          neutral: sentiment === 'positive' ? 20 : sentiment === 'negative' ? 25 : 55,
          negative: sentiment === 'positive' ? 5 : sentiment === 'negative' ? 60 : 10
        },
        explanation: sentiment === 'positive' 
          ? "The text contains predominantly positive language with words expressing enthusiasm, satisfaction, and optimism."
          : sentiment === 'negative'
          ? "The text exhibits negative sentiment through words expressing concern, disappointment, or criticism."
          : "The text maintains a neutral tone with balanced or factual language without strong emotional indicators.",
        keyWords: sentiment === 'positive' 
          ? ['thrilled', 'breakthrough', 'amazing', 'exceeded']
          : sentiment === 'negative'
          ? ['concern', 'delayed', 'problem', 'issue']
          : ['okay', 'fine', 'standard', 'regular']
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleUseSample = (text) => {
    setInputText(text);
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return <Smile className="h-8 w-8 text-green-600" />;
      case 'negative':
        return <Frown className="h-8 w-8 text-red-600" />;
      default:
        return <Meh className="h-8 w-8 text-yellow-600" />;
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'negative':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Heart className="h-10 w-10 mr-3 text-primary" />
            Sentiment Analysis
          </h1>
          <p className="text-lg text-muted-foreground">
            Analyze the emotional tone and sentiment of any text with AI precision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Enter Text to Analyze</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea
                    placeholder="Paste text here to analyze its sentiment and emotional tone..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    rows={8}
                    className="resize-none"
                  />
                  <p className="text-sm text-muted-foreground">
                    {inputText.length}/2000 characters
                  </p>
                </div>

                <Button 
                  onClick={handleAnalyze}
                  disabled={!inputText.trim() || isLoading}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Analyze Sentiment
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Sample Texts */}
            <Card>
              <CardHeader>
                <CardTitle>Try These Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {sampleTexts.map((text, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 px-4 text-sm"
                      onClick={() => handleUseSample(text)}
                    >
                      <span className="line-clamp-2">{text}</span>
                    </Button>
                  ))}
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
                    <CardTitle className="flex items-center justify-between">
                      Sentiment Result
                      <Badge variant="secondary">
                        {result.confidence}% Confidence
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="text-center">
                        {getSentimentIcon(result.sentiment)}
                        <div className="mt-2">
                          <Badge className={getSentimentColor(result.sentiment)}>
                            {result.sentiment.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold mb-2">
                          {result.score > 0 ? '+' : ''}{result.score.toFixed(1)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Sentiment Score (-1 to +1)
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {result.explanation}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Sentiment Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            Positive
                          </span>
                          <span className="font-medium">{result.breakdown.positive}%</span>
                        </div>
                        <Progress value={result.breakdown.positive} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="flex items-center">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                            Neutral
                          </span>
                          <span className="font-medium">{result.breakdown.neutral}%</span>
                        </div>
                        <Progress value={result.breakdown.neutral} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            Negative
                          </span>
                          <span className="font-medium">{result.breakdown.negative}%</span>
                        </div>
                        <Progress value={result.breakdown.negative} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Sentiment Words</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {result.keyWords.map((word, index) => (
                        <Badge key={index} variant="outline" className={getSentimentColor(result.sentiment)}>
                          {word}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      These words contributed most to the overall sentiment score
                    </p>
                  </CardContent>
                </Card>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Export Results
                  </Button>
                  <Button variant="outline" size="sm">
                    Save Analysis
                  </Button>
                  <Button variant="outline" size="sm">
                    Share
                  </Button>
                </div>
              </>
            ) : (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <Heart className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Ready to Analyze</h3>
                  <p className="text-muted-foreground mb-4">
                    Enter some text to get detailed sentiment analysis with confidence scores and breakdowns
                  </p>
                  {isLoading && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                      <span>Analyzing sentiment...</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>About Sentiment Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>Positive:</strong> Expresses joy, satisfaction, enthusiasm, or approval
                  </p>
                  <p>
                    <strong>Neutral:</strong> Factual, balanced, or objective without strong emotions
                  </p>
                  <p>
                    <strong>Negative:</strong> Shows concern, disappointment, criticism, or dissatisfaction
                  </p>
                  <p className="text-muted-foreground">
                    The sentiment score ranges from -1 (very negative) to +1 (very positive), with 0 being neutral.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;