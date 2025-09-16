import React, { useState } from 'react';
import { X, Copy, Bookmark, Share2, Play, Pause, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { useToast } from '../hooks/use-toast';

const ArticleDetail = ({ article, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playProgress, setPlayProgress] = useState(0);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(article.summary.join('\n'));
    toast({
      title: "Copied to clipboard",
      description: "Article summary has been copied to your clipboard.",
    });
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate audio progress
      const interval = setInterval(() => {
        setPlayProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
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

  const getSentimentEmoji = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return '😀';
      case 'negative':
        return '☹️';
      default:
        return '😐';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <Badge variant="secondary">{article.source}</Badge>
            <Badge variant="outline">{article.category}</Badge>
            <span className="text-sm text-muted-foreground">{article.timestamp}</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 140px)' }}>
          <div className="p-6">
            {/* Article Header */}
            <div className="mb-6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h1 className="text-3xl font-bold mb-3 leading-tight">{article.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{article.snippet}</p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="eli5">ELI5</TabsTrigger>
                <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
                <TabsTrigger value="clickbait">Clickbait</TabsTrigger>
                <TabsTrigger value="audio">Audio</TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {article.summary.map((point, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="eli5" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Explain Like I'm 5</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed mb-4">{article.eli5}</p>
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Simple Analogy:</h4>
                      <p className="text-muted-foreground">Think of it like building with LEGO blocks - scientists found a way to make sure all the blocks fit together perfectly!</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sentiment" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sentiment Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-6xl">{getSentimentEmoji(article.sentiment)}</div>
                      <div>
                        <Badge className={getSentimentColor(article.sentiment)}>
                          {article.sentiment.toUpperCase()}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          This article conveys a {article.sentiment} tone based on the language used and context provided.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">65%</div>
                        <div className="text-sm text-muted-foreground">Positive</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600">25%</div>
                        <div className="text-sm text-muted-foreground">Neutral</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">10%</div>
                        <div className="text-sm text-muted-foreground">Negative</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="clickbait" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Clickbait Reducer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Original Headline:</h4>
                        <p className="text-muted-foreground p-3 bg-muted rounded-lg">{article.title}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Neutral Version:</h4>
                        <p className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                          {article.clickbaitReduced}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Badge variant="outline">Factual</Badge>
                        <Badge variant="outline">Clear</Badge>
                        <Badge variant="outline">Unbiased</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="audio" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Volume2 className="h-5 w-5 mr-2" />
                      Read Aloud
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 mb-4">
                      <Button onClick={togglePlayback} size="lg">
                        {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                        {isPlaying ? 'Pause' : 'Play'}
                      </Button>
                      <div className="flex-1">
                        <Progress value={playProgress} className="w-full" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {Math.round(playProgress)}%
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      AI-generated audio will read the article summary aloud. This is a demo feature.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Key Facts */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Key Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {article.keyFacts.map((fact, index) => (
                    <Badge key={index} variant="secondary">
                      {fact}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t bg-muted/30">
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={handleCopy}>
              <Copy className="h-4 w-4 mr-2" />
              Copy Summary
            </Button>
            <Button variant="outline">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;