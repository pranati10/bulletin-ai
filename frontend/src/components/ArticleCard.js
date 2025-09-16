import React from 'react';
import { Clock, Bookmark, Share2, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

const ArticleCard = ({ article, onOpenDetail, className = '' }) => {
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
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-black">
              {article.source}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge className={getSentimentColor(article.sentiment)}>
              {getSentimentEmoji(article.sentiment)}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline">{article.category}</Badge>
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock className="h-3 w-3 mr-1" />
            {article.timestamp}
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {article.snippet}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {article.keyFacts?.slice(0, 3).map((fact, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {fact}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex items-center justify-between w-full">
          <Button 
            variant="default" 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail?.(article);
            }}
            className="flex-1 mr-2"
          >
            Read Summary
          </Button>
          
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;