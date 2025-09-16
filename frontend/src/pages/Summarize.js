import React, { useState } from 'react';
import { Link2, FileText, Clock, Target, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Summarize = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const { toast } = useToast();

  const handleSummarize = () => {
    toast({
      title: "Demo Only",
      description: "URL summarization is not available in this prototype.",
      variant: "default"
    });
  };

  const handleTrySample = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSummary({
        title: 'Breakthrough in Quantum Computing Achieves 99.9% Error Correction',
        keyPoints: [
          'MIT researchers developed new quantum error correction system',
          'Achieved unprecedented 99.9% accuracy in quantum computations',
          'Uses topological qubits for enhanced stability',
          'Could accelerate practical quantum computing by 5-10 years',
          'Major implications for cryptography and drug discovery'
        ],
        readingTime: '3 min read',
        confidence: 92,
        source: 'TechCrunch',
        wordCount: 750
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Article Summarizer</h1>
          <p className="text-lg text-muted-foreground">
            Get key insights from any article in seconds with AI-powered summarization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Link2 className="h-5 w-5 mr-2" />
                  Enter Article URL
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input
                    placeholder="https://example.com/article"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-sm text-muted-foreground">
                    Paste any article URL to get an instant summary
                  </p>
                </div>

                <Button 
                  onClick={handleSummarize}
                  disabled={!url || isLoading}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Summarizing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Summarize Article
                    </>
                  )}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-muted-foreground/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-muted-foreground">or</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  onClick={handleTrySample}
                  className="w-full"
                  size="lg"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Try with Sample Article
                </Button>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Key Points Extraction</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatically identifies and highlights the most important information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Reading Time Estimate</h4>
                      <p className="text-sm text-muted-foreground">
                        Get accurate reading time for both original and summary
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Confidence Score</h4>
                      <p className="text-sm text-muted-foreground">
                        AI confidence rating for summary accuracy and completeness
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            {summary ? (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Summary Results
                      <Badge variant="secondary">
                        {summary.confidence}% Confidence
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{summary.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {summary.readingTime}
                        </span>
                        <span>{summary.wordCount} words</span>
                        <Badge variant="outline">{summary.source}</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Key Points:</h4>
                      <ul className="space-y-2">
                        {summary.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                              {index + 1}
                            </span>
                            <span className="text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-2 pt-4">
                      <Button variant="outline" size="sm">
                        Copy Summary
                      </Button>
                      <Button variant="outline" size="sm">
                        Save to Library
                      </Button>
                      <Button variant="outline" size="sm">
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No summary yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Enter an article URL or try our sample to see AI summarization in action
                  </p>
                  {isLoading && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                      <span>Processing article...</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Tips for Best Results</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Use articles from reputable news sources</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Longer articles (500+ words) produce better summaries</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>News articles work better than opinion pieces</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Ensure the URL is publicly accessible</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summarize;