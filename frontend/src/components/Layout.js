import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, Bell, User, Moon, Sun, Filter, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useTheme } from '../contexts/ThemeContext';
import { mockCategories, mockSources } from '../mockData';

const Layout = ({ children }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { path: '/', label: 'Home' },
    { path: '/summarize', label: 'Summarize' },
    { path: '/eli5', label: 'ELI5' },
    { path: '/sentiment', label: 'Sentiment' },
    { path: '/clickbait-reducer', label: 'Clickbait Reducer' },
    { path: '/qa-chat', label: 'QA Chat' }
  ];

  const handleResetFilters = () => {
    setSelectedCategory('');
    setSelectedSource('');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  B
                </div>
                <span className="font-bold text-xl text-foreground">Bulletin AI</span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search news, topics, or sources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted/50"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Navigation */}
      <nav className="border-b bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className={`whitespace-nowrap py-3 text-sm font-medium transition-colors hover:text-foreground/80 ${
                  location.pathname === tab.path
                    ? 'text-foreground border-b-2 border-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Filters Bar - Only show on Home page */}
      {location.pathname === '/' && (
        <div className="border-b bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center space-x-4 overflow-x-auto">
              <div className="flex items-center space-x-2 mr-4">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              
              {/* Category Chips */}
              <div className="flex items-center space-x-2">
                {mockCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Source Dropdown */}
              <Select value={selectedSource} onValueChange={setSelectedSource}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  {mockSources.map((source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Latest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                </SelectContent>
              </Select>

              {/* Reset Filters */}
              <Button variant="ghost" size="sm" onClick={handleResetFilters}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                B
              </div>
              <span className="font-semibold">Bulletin AI</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link to="#" className="hover:text-foreground transition-colors">About</Link>
              <Link to="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-foreground transition-colors">Contact</Link>
              <span>Made for Thesis Prototype</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;