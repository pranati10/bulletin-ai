import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, BarChart3, Cloud } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import ArticleDetail from '../components/ArticleDetail';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockArticles, mockTrending, mockCategoryCounts } from '../mockData';

const Home = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredArticles = mockArticles.filter(article => article.isFeature);
  const regularArticles = mockArticles.filter(article => !article.isFeature);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Featured Carousel */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-primary" />
              Featured Stories
            </h2>
            
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
              <div className="relative h-96">
                {featuredArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="bg-white/90 text-black">
                          {article.source}
                        </Badge>
                        <Badge variant="outline" className="border-white/30 text-white">
                          {article.category}
                        </Badge>
                      </div>
                      <h3 className="text-3xl font-bold mb-3 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-lg text-white/90 mb-4 leading-relaxed">
                        {article.snippet}
                      </p>
                      <Button 
                        onClick={() => setSelectedArticle(article)}
                        className="bg-white text-black hover:bg-white/90"
                      >
                        Open Summary
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {featuredArticles.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Article Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Latest News</h2>
              <Button variant="outline">Load More</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onOpenDetail={setSelectedArticle}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Trending Today */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Trending Today
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockTrending.map((trend, index) => (
                <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium leading-tight">{trend}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* By Category */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                By Category
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(mockCategoryCounts).map(([category, count]) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{category}</span>
                  <Badge variant="secondary" className="text-xs">
                    {count}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weather Widget */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Cloud className="h-5 w-5 mr-2 text-primary" />
                Today's Weather
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">72°F</div>
                <div className="text-muted-foreground mb-2">Partly Cloudy</div>
                <div className="text-sm text-muted-foreground">New York, NY</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Article Detail Drawer */}
      {selectedArticle && (
        <ArticleDetail
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
};

export default Home;