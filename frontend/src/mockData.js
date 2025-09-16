// Mock data for Bulletin AI
export const mockArticles = [
  {
    id: '1',
    title: 'Breakthrough in Quantum Computing Achieves 99.9% Error Correction',
    snippet: 'Scientists at MIT have developed a new quantum error correction system that brings practical quantum computing closer to reality.',
    source: 'TechCrunch',
    category: 'Tech',
    timestamp: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop',
    sentiment: 'positive',
    isFeature: true,
    summary: [
      'MIT researchers achieved 99.9% quantum error correction accuracy',
      'New system uses topological qubits for enhanced stability',
      'Breakthrough could accelerate practical quantum computing applications',
      'Industry experts predict commercial applications within 5 years'
    ],
    eli5: 'Imagine you\'re trying to solve a really hard math problem, but every time you write something down, there\'s a chance your pencil might make a mistake. Quantum computers have this problem too - they\'re super powerful but make lots of tiny mistakes. Scientists just figured out how to catch almost all these mistakes, like having a really good eraser that fixes errors before they become big problems.',
    keyFacts: ['MIT', 'Quantum Computing', '99.9% accuracy', '2024'],
    clickbaitReduced: 'MIT Researchers Improve Quantum Error Correction to 99.9% Accuracy'
  },
  {
    id: '2',
    title: 'Global Climate Summit Reaches Historic Agreement on Carbon Reduction',
    snippet: 'World leaders commit to ambitious 2030 targets as climate negotiations conclude in Geneva.',
    source: 'Reuters',
    category: 'World',
    timestamp: '4 hours ago',
    image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e4?w=600&h=300&fit=crop',
    sentiment: 'positive',
    isFeature: true,
    summary: [
      '195 countries agree to reduce carbon emissions by 65% by 2030',
      '$2 trillion climate fund established for developing nations',
      'Binding enforcement mechanisms included in agreement',
      'Renewable energy transition accelerated globally'
    ],
    eli5: 'All the world\'s countries got together and made a really important promise - like when your whole class agrees to keep the playground clean. They promised to pollute much less and help make the air cleaner for everyone.',
    keyFacts: ['195 countries', 'Geneva', '65% reduction', '$2 trillion'],
    clickbaitReduced: '195 Countries Agree to 65% Carbon Emission Reduction by 2030'
  },
  {
    id: '3',
    title: 'SpaceX Launches First Commercial Space Station Module',
    snippet: 'Private space station development accelerates as SpaceX delivers critical habitat module to orbit.',
    source: 'Space News',
    category: 'Science',
    timestamp: '6 hours ago',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=300&fit=crop',
    sentiment: 'positive',
    isFeature: false,
    summary: [
      'Successfully deployed 20-ton habitat module in low Earth orbit',
      'Module designed to house 4 astronauts for 6-month missions',
      'Represents major milestone in commercial space development',
      'Partnership with NASA for future missions confirmed'
    ],
    eli5: 'SpaceX just sent up a new room for astronauts to live in while they\'re in space - like building a new bedroom in a house that\'s floating way up in the sky!',
    keyFacts: ['SpaceX', '20-ton module', '4 astronauts', 'NASA partnership'],
    clickbaitReduced: 'SpaceX Successfully Deploys Commercial Space Station Habitat Module'
  },
  {
    id: '4',
    title: 'AI Model Predicts Natural Disasters 7 Days in Advance',
    snippet: 'New machine learning system shows 94% accuracy in predicting earthquakes, floods, and hurricanes.',
    source: 'Nature',
    category: 'Science',
    timestamp: '8 hours ago',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=300&fit=crop',
    sentiment: 'positive',
    isFeature: false,
    summary: [
      'AI system analyzes satellite data, seismic patterns, and weather models',
      '94% accuracy rate in 7-day disaster prediction window',
      'Successfully predicted recent earthquake in Japan 5 days early',
      'Emergency response teams report 40% faster deployment times'
    ],
    eli5: 'Scientists taught a computer to look at lots of clues from space and underground to guess when bad weather or earthquakes might happen - kind of like how you might look at dark clouds to know it\'s going to rain!',
    keyFacts: ['94% accuracy', '7 days advance', 'Satellite data', 'Japan earthquake'],
    clickbaitReduced: 'New AI System Achieves 94% Accuracy in 7-Day Natural Disaster Prediction'
  },
  {
    id: '5',
    title: 'Major Cryptocurrency Exchange Suffers $400M Security Breach',
    snippet: 'FTX successor platform reports significant hack affecting user funds and market confidence.',
    source: 'CoinDesk',
    category: 'Business',
    timestamp: '1 day ago',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop',
    sentiment: 'negative',
    isFeature: false,
    summary: [
      '$400 million in cryptocurrency stolen from user wallets',
      'Platform immediately suspended all trading and withdrawals',
      'Security firm traces funds to North Korean hacking group',
      'Users advised to change passwords and enable 2FA immediately'
    ],
    eli5: 'Bad people figured out how to break into a digital bank where people keep their computer money, and they stole a lot of it. Now everyone is trying to make their digital banks safer.',
    keyFacts: ['$400 million', 'User wallets', 'North Korean hackers', 'Trading suspended'],
    clickbaitReduced: 'Cryptocurrency Exchange Reports $400M Security Breach, Trading Suspended'
  },
  {
    id: '6',
    title: 'Olympic Games 2028 Unveils Revolutionary Stadium Design',
    snippet: 'Los Angeles reveals eco-friendly venue that can transform for multiple sports using AI-powered systems.',
    source: 'ESPN',
    category: 'Sports',
    timestamp: '1 day ago',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=300&fit=crop',
    sentiment: 'positive',
    isFeature: false,
    summary: [
      'Stadium powered entirely by renewable energy sources',
      'AI system reconfigures seating and field layout in 2 hours',
      'Zero-waste design with 100% recyclable materials',
      'Expected to host 15 different Olympic sports'
    ],
    eli5: 'They\'re building a super cool stadium that can change its shape like a transformer toy, and it only uses clean energy from the sun and wind!',
    keyFacts: ['Los Angeles', '2028 Olympics', 'AI-powered', '15 sports'],
    clickbaitReduced: 'LA 2028 Olympics Stadium Features AI-Powered Reconfigurable Design'
  },
  {
    id: '7',
    title: 'Netflix Announces Interactive AI Movies Coming 2025',
    snippet: 'Streaming giant partners with OpenAI to create personalized, viewer-controlled cinematic experiences.',
    source: 'Variety',
    category: 'Entertainment',
    timestamp: '2 days ago',
    image: 'https://images.unsplash.com/photo-1489599003315-c46e04d6e394?w=600&h=300&fit=crop',
    sentiment: 'neutral',
    isFeature: false,
    summary: [
      'AI generates unique storylines based on viewer preferences',
      'Viewers can influence plot decisions through voice commands',
      'Initial launch with 5 interactive movies across genres',
      'Technology aims to revolutionize passive entertainment consumption'
    ],
    eli5: 'Netflix is making movies where you can talk to the screen and help decide what happens next in the story - like being the director of your own movie!',
    keyFacts: ['Netflix', 'OpenAI partnership', '2025 launch', '5 movies'],
    clickbaitReduced: 'Netflix Partners with OpenAI for Interactive AI-Generated Movies in 2025'
  },
  {
    id: '8',
    title: 'Breakthrough Gene Therapy Reverses Blindness in Clinical Trial',
    snippet: 'Revolutionary treatment restores sight to 8 out of 10 patients with inherited blindness conditions.',
    source: 'Medical News Today',
    category: 'Science',
    timestamp: '2 days ago',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop',
    sentiment: 'positive',
    isFeature: false,
    summary: [
      '80% success rate in restoring vision to blind patients',
      'Treatment targets genetic mutations causing inherited blindness',
      'Patients report significant improvement in daily activities',
      'FDA fast-track approval expected within 18 months'
    ],
    eli5: 'Doctors found a way to fix broken parts in people\'s eyes using special medicine, helping people who couldn\'t see to see again - like fixing a broken camera!',
    keyFacts: ['80% success rate', 'Gene therapy', 'Inherited blindness', 'FDA approval'],
    clickbaitReduced: 'Gene Therapy Shows 80% Success Rate in Reversing Inherited Blindness'
  }
];

export const mockCategories = ['World', 'Tech', 'Sports', 'Business', 'Science', 'Entertainment'];

export const mockSources = ['Reuters', 'TechCrunch', 'ESPN', 'Nature', 'CoinDesk', 'Variety', 'Space News', 'Medical News Today'];

export const mockTrending = [
  'Quantum Computing Breakthrough',
  'Climate Summit Agreement',
  'SpaceX Space Station',
  'AI Disaster Prediction',
  'Crypto Exchange Hack'
];

export const mockCategoryCounts = {
  'World': 45,
  'Tech': 32,
  'Science': 28,
  'Business': 24,
  'Sports': 19,
  'Entertainment': 15
};

export const mockChatMessages = [
  {
    id: '1',
    type: 'user',
    content: 'Can you explain the quantum computing breakthrough?',
    timestamp: '10:30 AM'
  },
  {
    id: '2',
    type: 'ai',
    content: 'The MIT breakthrough achieved 99.9% error correction in quantum computing, which is crucial because quantum computers are extremely sensitive to environmental interference. This advancement brings us much closer to practical, large-scale quantum computing applications.',
    timestamp: '10:31 AM'
  }
];

export const mockPrompts = [
  "What's the main conflict?",
  "Who benefits from this?",
  "What's the timeline?",
  "What are the implications?",
  "How reliable is this source?"
];