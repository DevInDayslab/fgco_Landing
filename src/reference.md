import React, { useState, useEffect, useRef } from 'react';
import { 
  Crown, Shield, Globe, Award, Car, Newspaper, Cpu, 
  Users, Upload, ChevronRight, Menu, X, PlayCircle,
  Briefcase, LineChart, Search, CheckCircle, Star,
  Lock, Activity, FileText, Camera, LayoutDashboard,
  LogOut, Settings, Bell, DollarSign, Image as ImageIcon,
  MessageSquare, Sparkles, Send, Loader2,
  Smartphone, Tablet, Monitor, ChevronDown
} from 'lucide-react';

// --- API Configuration ---
const apiKey = ""; // Canvas injects this automatically

// --- SIMULATOR WRAPPER (PROTOTYPE ROUTER) ---
export default function App() {
  const [device, setDevice] = useState('desktop');
  const [activeTab, setActiveTab] = useState('home');
  const containerRef = useRef(null);

  // Scroll to top of simulator frame on tab change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const getDeviceStyles = () => {
    switch(device) {
      case 'mobile': return { width: '375px', height: '812px', borderRadius: '36px', borderWidth: '12px', borderColor: '#1f2937' };
      case 'tablet': return { width: '768px', height: '1024px', borderRadius: '24px', borderWidth: '12px', borderColor: '#1f2937' };
      default: return { width: '100%', height: '100%', borderRadius: '0', borderWidth: '0' };
    }
  };

  return (
    <div className="h-screen w-screen bg-neutral-900 flex flex-col font-sans text-white overflow-hidden">
      {/* Simulator Toolbar (Prototype Router) */}
      <div className="h-16 bg-[#0f172a] border-b border-neutral-700 flex items-center justify-between px-6 z-50 flex-shrink-0 shadow-xl">
        <div className="flex items-center space-x-2 sm:space-x-6">
          <div className="font-bold text-amber-500 flex items-center tracking-wide text-sm sm:text-lg">
            <LayoutDashboard className="w-5 h-5 mr-2 text-amber-400" /> <span className="hidden sm:inline">UI/UX PROTOTYPE ROUTER</span>
          </div>
          <div className="h-6 w-px bg-neutral-700 hidden sm:block"></div>

          <div className="relative group flex items-center bg-[#1e293b] rounded-lg border border-neutral-600 px-3 py-1.5 hover:border-amber-500 transition-colors">
            <span className="text-gray-400 text-xs mr-3 uppercase tracking-wider font-semibold hidden sm:inline">Active Screen:</span>
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="bg-transparent text-sm focus:outline-none font-medium text-amber-400 cursor-pointer appearance-none pr-6"
            >
              <option value="home">1. Home Screen</option>
              <option value="about">2. About Us</option>
              <option value="media">3. Media Wing</option>
              <option value="technology">4. Technology (InViGIL)</option>
              <option value="operations">5. Operations</option>
              <option value="awards">6. Awards Hub</option>
              <option value="nominate">7. Nomination Form</option>
              <option value="sponsorship">8. Sponsorship Form</option>
              <option value="dashboard">9. Admin Dashboard</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 text-amber-400 pointer-events-none" />
          </div>
        </div>
        <div className="flex bg-neutral-950 rounded-lg p-1 border border-neutral-700 shadow-inner">
          <button 
            onClick={() => setDevice('mobile')} 
            className={`p-2 rounded-md transition-all ${device === 'mobile' ? 'bg-neutral-800 text-amber-400 shadow-sm scale-105' : 'text-neutral-500 hover:text-white'}`}
            title="Mobile View (375x812)"
          >
            <Smartphone size={18} />
          </button>
          <button 
            onClick={() => setDevice('tablet')} 
            className={`p-2 rounded-md transition-all mx-1 ${device === 'tablet' ? 'bg-neutral-800 text-amber-400 shadow-sm scale-105' : 'text-neutral-500 hover:text-white'}`}
            title="Tablet View (768x1024)"
          >
            <Tablet size={18} />
          </button>
          <button 
            onClick={() => setDevice('desktop')} 
            className={`p-2 rounded-md transition-all ${device === 'desktop' ? 'bg-neutral-800 text-amber-400 shadow-sm scale-105' : 'text-neutral-500 hover:text-white'}`}
            title="Desktop View (Full Screen)"
          >
            <Monitor size={18} />
          </button>
        </div>
      </div>

      {/* Simulator Stage */}
      <div className="flex-grow flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-neutral-950 overflow-hidden p-0 sm:p-6 lg:p-8">
        <div 
          ref={containerRef}
          style={{ ...getDeviceStyles(), transform: 'translateZ(0)' }} 
          className="bg-[#060b14] overflow-y-auto overflow-x-hidden transition-all duration-500 ease-in-out relative shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col sm:outline sm:outline-1 sm:outline-neutral-800"
        >
          <MainApp activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}

// --- MAIN APPLICATION COMPONENT ---
function MainApp({ activeTab, setActiveTab }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on tab change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeTab]);

  return (
    <div className="min-h-full bg-[#060b14] text-gray-200 font-sans selection:bg-amber-500 selection:text-white flex flex-col relative">
      {/* Top Navigation */}
      {activeTab !== 'dashboard' && (
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}

      {/* Main Content Area Routing */}
      <main className={`flex-grow ${activeTab === 'dashboard' ? '' : 'pt-20'}`}>
        {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <AboutView />}
        {activeTab === 'media' && <MediaView />}
        {activeTab === 'technology' && <TechnologyView />}
        {activeTab === 'operations' && <OperationsView />}
        {activeTab === 'awards' && <AwardsView setActiveTab={setActiveTab} />}
        {activeTab === 'nominate' && <NominationForm setActiveTab={setActiveTab} />}
        {activeTab === 'sponsorship' && <SponsorshipForm setActiveTab={setActiveTab} />}
        {activeTab === 'dashboard' && <DashboardView setActiveTab={setActiveTab} />}
      </main>

      {/* Footer */}
      {activeTab !== 'dashboard' && <Footer setActiveTab={setActiveTab} />}
      
      {/* ViERA AI Assistant */}
      <VieraAssistant />
    </div>
  );
}

// --- NAVIGATION COMPONENT ---
function Navbar({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'media', label: 'Media Wing' },
    { id: 'technology', label: 'Technology' },
    { id: 'operations', label: 'Operations' },
    { id: 'awards', label: 'HIT ViERA Awards' },
  ];

  return (
    <nav className="absolute w-full z-40 bg-[#060b14]/90 backdrop-blur-md border-b border-amber-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
            <Globe className="h-10 w-10 text-amber-500" />
            <div className="ml-3 flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 tracking-wider">
                FG MEDIA
              </span>
              <span className="text-[0.60rem] md:text-[0.65rem] uppercase tracking-[0.2em] text-amber-500/70">
                Excellence • Vision • Future
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 border-b-2 ${
                  activeTab === link.id 
                    ? 'border-amber-500 text-amber-400' 
                    : 'border-transparent text-gray-300 hover:text-amber-300 hover:border-amber-500/50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => setActiveTab('dashboard')}
              className="ml-4 px-5 py-2 rounded bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-sm font-bold shadow-[0_0_15px_rgba(217,119,6,0.4)] hover:shadow-[0_0_25px_rgba(217,119,6,0.6)] transition-all"
            >
              Dashboard
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-amber-500">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1122] border-b border-amber-500/20 px-2 pt-2 pb-3 space-y-1 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`block w-full text-left px-3 py-3 text-base font-medium ${
                activeTab === link.id ? 'text-amber-400 bg-[#111a33]' : 'text-gray-300 hover:text-amber-300'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => setActiveTab('dashboard')}
            className="block w-full text-left px-3 py-3 text-base font-medium text-amber-500 bg-amber-900/10"
          >
            Awards Dashboard
          </button>
        </div>
      )}
    </nav>
  );
}

// --- HOME VIEW ---
function HomeView({ setActiveTab }) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#02050a] via-[#0b162c] to-[#040812] z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] z-0" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(251,191,36,0.15)]">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs sm:text-sm font-medium uppercase tracking-widest">A Legacy of Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Recognising Excellence. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600">
              Celebrating Vision.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Empowering India through world-class Media, groundbreaking Virtual Intelligence (InViGIL), and National Recognition.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => setActiveTab('technology')}
              className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-bold tracking-wide hover:from-blue-600 hover:to-indigo-700 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center"
            >
              <Cpu className="mr-2" size={20} /> Discover InViGIL
            </button>
            <button 
              onClick={() => setActiveTab('awards')}
              className="w-full sm:w-auto px-8 py-4 rounded border border-amber-500 text-amber-500 font-bold tracking-wide hover:bg-amber-500/10 transition-all flex items-center justify-center"
            >
              <Award className="mr-2" size={20} /> HIT ViERA Awards
            </button>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-[#0a1122] border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">The FG Media Group Ecosystem</h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <EcosystemCard 
              icon={<Newspaper />} title="Media Wing" 
              desc="National News Weeklies including HIT NEWS, Happy India Times, AP MEDIA & Kurukshetra."
              onClick={() => setActiveTab('media')}
            />
            <EcosystemCard 
              icon={<Cpu />} title="Technology" 
              desc="InViGIL - The World's First Virtual Commerce Platform powered by ViERA."
              onClick={() => setActiveTab('technology')}
            />
            <EcosystemCard 
              icon={<Award />} title="Excellence Awards" 
              desc="HIT ViERA National Awards recognizing extraordinary individuals & institutions."
              onClick={() => setActiveTab('awards')}
            />
            <EcosystemCard 
              icon={<Shield />} title="Special Operations" 
              desc="Automobiles, Supply Chain, Investigations, and hyper-secure E-commerce."
              onClick={() => setActiveTab('operations')}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function EcosystemCard({ icon, title, desc, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-[#111a33] border border-gray-800 p-8 rounded-xl cursor-pointer group hover:border-amber-500/50 hover:bg-[#152140] transition-all duration-500 shadow-lg hover:shadow-[0_10px_30px_rgba(251,191,36,0.1)]"
    >
      <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-500">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 font-serif">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center text-amber-500 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
        Explore <ChevronRight size={16} className="ml-1" />
      </div>
    </div>
  );
}

// --- ABOUT VIEW ---
function AboutView() {
  return (
    <div className="pt-10 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">About FG Media Group</h1>
          <p className="text-xl text-amber-500 font-medium">Recognising Excellence. Creating Legends. Inspiring India.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-6 border-l-4 border-amber-500 pl-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              To create a globally recognized ecosystem of positivity, competitiveness, and excellence that inspires future generations. We are committed to identifying India's finest achievers, celebrating their accomplishments, and inspiring a new generation of visionary leaders who will represent India with distinction on the global stage.
            </p>
            
            <h2 className="text-3xl font-serif font-bold text-white mb-6 border-l-4 border-amber-500 pl-4 mt-12">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To provoke and encourage the best in society by recognizing extraordinary individuals who drive human progress across Science, Technology, Agriculture, Innovations, Arts, Sports, and Social Work.
            </p>
          </div>

          <div className="relative mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-2xl transform rotate-3"></div>
            <div className="bg-[#0f172a] border border-gray-800 p-10 rounded-2xl relative z-10 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mb-6 border-4 border-amber-500 overflow-hidden shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                  <Users size={48} className="text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif mb-2">Ramesh Babu Pasupuleti</h3>
                <p className="text-amber-500 font-medium mb-6 uppercase tracking-wider text-sm">Editor-in-Chief | Publisher | CEO</p>
                
                <p className="text-gray-400 italic text-sm leading-relaxed relative px-6">
                  <span className="text-4xl text-gray-600 absolute -top-4 left-0 font-serif">"</span>
                  An award is a form of gratification that can either affect the recipient in a short or long term... we hope that they can be motivated to continue to make progress. Recognizing hard work and sacrifice is the defining line that separates the best from the good.
                  <span className="text-4xl text-gray-600 absolute -bottom-6 right-2 font-serif">"</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- MEDIA VIEW ---
function MediaView() {
  const magazines = [
    { title: 'HIT NEWS', type: 'National English News Weekly', focus: 'Science, Technology, Culture, and Indian Heritage.' },
    { title: 'Happy India Times', type: 'Telugu Special Edition', focus: 'Positivity, creativity, and explosive entrepreneurship.' },
    { title: 'AP MEDIA', type: 'Regional News Network', focus: 'In-depth regional coverage and civic issues.' },
    { title: 'Kurukshetra', type: 'Kannada Special Edition', focus: 'Empowering and connecting Kannada-speaking communities worldwide.' }
  ];

  return (
    <div className="pt-10 pb-24 animate-fade-in bg-[#0a1122]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Newspaper className="w-16 h-16 text-amber-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">FG Media Publications</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Empowering communities through quality journalism. A global premium initiative of FG Media Group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {magazines.map((mag, idx) => (
            <div key={idx} className="bg-[#111a33] border border-gray-700 p-1 rounded-xl group hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all flex flex-col">
              <div className="h-48 bg-[#0b1221] rounded-t-lg flex flex-col items-center justify-center p-6 border-b border-gray-800 relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
                <h2 className={`text-2xl font-black text-white relative z-10 text-center ${mag.title === 'HIT NEWS' ? 'text-red-500' : ''}`}>
                  {mag.title}
                </h2>
                <div className="mt-4 text-xs font-bold px-3 py-1 bg-gray-800 text-amber-500 rounded-full">EST. 2024</div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-amber-400 mb-3">{mag.type}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{mag.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- TECHNOLOGY VIEW (InViGIL) ---
function TechnologyView() {
  return (
    <div className="pt-10 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* InViGIL Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -z-10"></div>
          <Cpu className="w-20 h-20 text-blue-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 tracking-tight mb-4">
            InViGIL
          </h1>
          <p className="text-xl md:text-2xl font-serif text-amber-500 mb-6 font-bold tracking-widest uppercase">
            Intelligence Beyond Vision
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Powered by <span className="font-bold text-white">ViERA</span> (Virtual Intelligence Enabled Real Actor). 
            The World's First Virtual Commerce Platform directly connecting creators to consumers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-[#0a1122] border border-blue-900/50 p-8 rounded-2xl hover:bg-[#0f172a] transition-colors relative overflow-hidden group">
            <Globe className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3">Global Talent Capital</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A dynamic platform for all age groups to showcase talent. Entrepreneurs and businesses can display products virtually to local and global users.
            </p>
          </div>
          
          <div className="bg-[#0a1122] border border-blue-900/50 p-8 rounded-2xl hover:bg-[#0f172a] transition-colors relative overflow-hidden group">
            <Lock className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3">Unprecedented Security</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              End-to-End Encryption, Advanced Face Recognition, and Proactive Crime Detection ensuring InViGIL remains a hyper-secure ecosystem.
            </p>
          </div>
          
          <div className="bg-[#0a1122] border border-blue-900/50 p-8 rounded-2xl hover:bg-[#0f172a] transition-colors relative overflow-hidden group">
            <Users className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3">Virtual Commerce</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reducing middlemen interventions. See, test, engage, and buy in real-time. Direct buyer-to-seller connections spanning global talent and business.
            </p>
          </div>
        </div>

        {/* IPS & Cyber Commandos */}
        <div className="bg-gradient-to-br from-[#0a152e] to-[#040812] border border-blue-800/30 rounded-3xl p-8 md:p-16 shadow-[0_0_40px_rgba(30,58,138,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-900/30 text-blue-400 text-sm font-bold mb-6">
                <Shield size={16} /> <span>SECURITY & INNOVATION</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-8">Innovations for Progress of the Society (IPS)</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/30">
                      <Globe className="text-amber-500" size={24} />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-white mb-2">Empowering Rural Entrepreneurs</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Farmers digitally empowered to auction crops globally right from their farmland. Just take a video, make an InViGIL post, and connect with global buyers directly.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/30">
                      <Shield className="text-blue-500" size={24} />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-white mb-2">Cyber Commandos</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      A dedicated security program actively preventing fraudulent activities, online cheating, and cyberbullying. Commandos help users utilize InViGIL effectively and safely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center mt-10 lg:mt-0">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#0b1221] rounded-full border border-blue-800/50 flex items-center justify-center p-8 relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-[spin_60s_linear_infinite]"></div>
                <div className="text-center relative z-10">
                  <Activity className="w-20 h-20 md:w-24 md:h-24 text-blue-500 mx-auto mb-4 md:mb-6 opacity-90 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase mb-2">ViERA</h3>
                  <p className="text-blue-400 text-xs md:text-sm font-medium">Virtual Intelligence Enabled Real Actor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- OPERATIONS VIEW (Automobiles, Supply Chain, etc) ---
function OperationsView() {
  const wings = [
    { icon: <Car />, title: 'Automobile Wing', desc: 'Next-generation automotive tech integration, fleet tracking, and virtual showrooms via InViGIL.' },
    { icon: <Briefcase />, title: 'Supply Chain', desc: 'Transparent logistics, direct farmer-to-buyer agricultural supply, and encrypted ledger systems.' },
    { icon: <Search />, title: 'Investigations', desc: 'Cyber Commandos unit focusing on proactive crime detection, fraud prevention, and cyber security.' },
    { icon: <ImageIcon />, title: 'E-Commerce', desc: 'Hyper-secure, middleman-free Virtual Commerce enabling real-time test, engage, and buy.' }
  ];

  return (
    <div className="pt-10 pb-24 animate-fade-in bg-[#060b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Specialized Operations</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">Expanding the boundaries of industry through technology and innovation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wings.map((wing, idx) => (
            <div key={idx} className="bg-gradient-to-r from-[#0a1122] to-[#0f172a] border border-gray-800 p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:space-x-6 hover:border-amber-500/30 transition-all group">
              <div className="w-16 h-16 bg-[#152140] rounded-xl flex items-center justify-center text-amber-500 flex-shrink-0 shadow-inner mb-4 sm:mb-0 group-hover:bg-amber-500/10 transition-colors">
                {React.cloneElement(wing.icon, { size: 32 })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{wing.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{wing.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- AWARDS VIEW ---
function AwardsView({ setActiveTab }) {
  return (
    <div className="pt-10 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-64 bg-amber-500/10 rounded-full blur-[100px] -z-10"></div>
          <Award className="w-20 h-20 text-amber-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-amber-600 mb-6 pb-2 leading-tight">
            HIT ViERA National Awards 2026
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium mb-8">
            Honouring Excellence. Empowering Leaders. Inspiring Generations.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setActiveTab('nominate')}
              className="px-8 py-4 rounded bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold tracking-wide hover:from-amber-500 hover:to-yellow-500 transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)]"
            >
              Submit Nomination
            </button>
            <button 
              onClick={() => setActiveTab('sponsorship')}
              className="px-8 py-4 rounded bg-[#111a33] border border-amber-500/50 text-amber-400 font-bold tracking-wide hover:bg-[#1a264a] transition-all"
            >
              Sponsorship Opportunities
            </button>
          </div>
        </div>

        {/* Categories */}
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-white mb-12 border-b border-gray-800 pb-4">The VIERA Signature National Awards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Grand Winner */}
          <div className="bg-gradient-to-b from-[#1a1505] to-[#0a0802] border border-amber-500/40 p-1 rounded-2xl relative shadow-[0_0_30px_rgba(251,191,36,0.15)] transform md:-translate-y-4 flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
              Highest Honour
            </div>
            <div className="bg-[#0f0c05] h-full rounded-xl p-8 text-center flex flex-col">
              <Crown className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-amber-500 mb-2 font-serif">VIERA Champion of India</h3>
              <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-amber-900/50">National Grand Winner</p>
              <div className="text-3xl md:text-4xl font-bold text-white mb-6">₹5,00,000</div>
              <ul className="text-sm text-gray-300 space-y-3 text-left flex-grow">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" /> <span>Grand Crystal Trophy & Gold Medal</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" /> <span>₹5,00,000 Corporate Sponsorship</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" /> <span>Lifetime Recognition in Hall of Excellence</span></li>
              </ul>
            </div>
          </div>
          
          {/* Excellence */}
          <div className="bg-[#0f121a] border border-gray-700 p-8 rounded-2xl text-center flex flex-col hover:border-amber-500/50 transition-colors mt-8 md:mt-0">
            <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-200 mb-2 font-serif">VIERA Pride of India</h3>
            <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-gray-800">National Excellence Award</p>
            <div className="text-3xl font-bold text-white mb-6">₹3,00,000</div>
            <ul className="text-sm text-gray-400 space-y-3 text-left flex-grow">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" /> <span>Premium Trophy & Gold Medal</span></li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" /> <span>₹5,00,000 Corporate Sponsorship</span></li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" /> <span>National Media Promotion</span></li>
            </ul>
          </div>
          
          {/* Chakra */}
          <div className="bg-[#0f121a] border border-gray-700 p-8 rounded-2xl text-center flex flex-col hover:border-amber-500/50 transition-colors mt-8 md:mt-0">
            <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-200 mb-2 font-serif">VIERA Chakra Award</h3>
            <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-gray-800">Two National Winners</p>
            <div className="text-3xl font-bold text-white mb-6">₹1,00,000</div>
            <ul className="text-sm text-gray-400 space-y-3 text-left flex-grow">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /> <span>Premium Trophy & Medal</span></li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /> <span>₹5,00,000 Corporate Sponsorship</span></li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /> <span>National Recognition on FG Media</span></li>
            </ul>
          </div>
        </div>

        {/* More Categories Grid */}
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-white mb-10 border-b border-gray-800 pb-4">VIERA Excellence Awards 2026</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-sm">
          {['Power Star Award', 'Best Entrepreneur', 'AI & VI Excellence', 'Digital Leadership', 'Business Icon', 'Industrial Excellence', 'Women Leadership', 'Youth Icon', 'Healthcare Excellence', 'Traditional Heritage', 'Media Excellence', 'Lifetime Achievement'].map((cat, i) => (
            <div key={i} className="bg-[#111622] p-4 rounded-lg border border-gray-800 text-gray-300 text-center font-medium hover:text-amber-400 hover:border-amber-900 transition-colors cursor-default">
              VIERA {cat}
            </div>
          ))}
        </div>

        {/* Selection Process */}
        <div className="bg-gradient-to-r from-[#111a33] to-[#0a1122] p-6 md:p-10 rounded-3xl border border-blue-900/30 overflow-hidden">
          <h2 className="text-2xl font-bold text-white mb-8 font-serif text-center md:text-left">The Crucible: Transparent Selection</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-10"></div>
            {['Nomination', 'Research', 'Verification', 'Public Survey', 'Expert Review', 'Grand Jury', 'National Winners'].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center bg-[#111a33] px-4 py-2 rounded-lg z-10 w-full md:w-auto text-center border md:border-none border-gray-800">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold mb-2 shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                  {idx + 1}
                </div>
                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">{step}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// --- NOMINATION FORM VIEW ---
function NominationForm({ setActiveTab }) {
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setActiveTab('awards');
    }, 4000);
  };

  const generateSummary = async () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);
    
    try {
      // Use Canvas provided API key globally
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
      
      const payload = {
        contents: [{ parts: [{ text: `Draft an executive summary based on these notes: ${aiPrompt}` }] }],
        systemInstruction: {
          parts: [{ text: "You are an expert PR assistant for the prestigious HIT ViERA Awards. Take the user's brief notes and write a compelling, highly professional executive summary justifying their nomination. Keep it under 100 words. Do not include introductory phrases, just output the summary text." }]
        }
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        setSummary(data.candidates[0].content.parts[0].text.trim());
      }
    } catch (error) {
      console.error("Error generating summary:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-20 pb-40 flex flex-col items-center justify-center animate-fade-in text-center px-4">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Nomination Submitted Successfully</h2>
        <p className="text-gray-400 max-w-md">Thank you for your submission. The National Jury will review the profile. You will be contacted at the provided email.</p>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-24 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <button onClick={() => setActiveTab('awards')} className="text-amber-500 text-sm font-medium mb-6 hover:underline flex items-center">
          &larr; Back to Awards
        </button>

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">HIT Awards & Special Edition</h1>
            <p className="text-amber-500 font-medium text-sm md:text-base">Official Comprehensive Nomination Portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Sec 1 */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center pb-2 border-b border-gray-800">
                <span className="bg-amber-500 text-black w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                Nominator Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                  <input required type="text" className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Organization/Affiliation</label>
                  <input type="text" className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Company Inc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                  <input required type="email" className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp Number *</label>
                  <input required type="tel" className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>
            </section>

            {/* Sec 2 */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center pb-2 border-b border-gray-800">
                <span className="bg-amber-500 text-black w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                Nominee Details
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">Type of Nomination *</label>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {['Individual', 'Company / Org', 'Startup', 'Gov Official'].map((type, i) => (
                      <label key={i} className="flex items-center space-x-2 cursor-pointer bg-[#111a33] px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-700 hover:border-amber-500 transition-colors flex-grow md:flex-grow-0 justify-center">
                        <input type="radio" name="nomineeType" required className="accent-amber-500 w-4 h-4" />
                        <span className="text-xs md:text-sm text-gray-300">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Nominee Name *</label>
                    <input required type="text" className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Category *</label>
                    <select required className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 appearance-none">
                      <option value="">Select Category...</option>
                      <option>Remarkable Achievements</option>
                      <option>Startup Ideas & Innovation</option>
                      <option>Academic Excellence</option>
                      <option>Social Impact & Community Service</option>
                      <option>Excellence in Governance</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Sec 3 */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center pb-2 border-b border-gray-800">
                <span className="bg-amber-500 text-black w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                Justification & Attachments
              </h3>
              
              <div className="space-y-6">
                
                {/* AI Assistant Box */}
                <div className="bg-[#152140] border border-blue-900/50 rounded-xl p-4 md:p-6 relative overflow-hidden shadow-inner">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-600"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h4 className="text-base md:text-lg font-bold text-white flex items-center mb-2 sm:mb-0">
                      <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                      ViERA Nomination Co-Pilot
                    </h4>
                    <span className="text-[10px] md:text-xs font-semibold bg-blue-900/50 text-blue-300 px-2 py-1 rounded w-max">AI Assisted Draft</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 mb-4">Provide a few bullet points about the nominee's achievements, and ViERA will craft a professional pitch for you.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="text" 
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="E.g., 10 yrs in tech, built 3 startups, focuses on rural education..."
                      className="flex-grow bg-[#0a1122] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                    <button 
                      type="button"
                      onClick={generateSummary}
                      disabled={isGenerating || !aiPrompt.trim()}
                      className="px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:opacity-50 text-white rounded-lg font-medium transition-colors flex items-center justify-center min-w-[140px] text-sm"
                    >
                      {isGenerating ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
                      {isGenerating ? 'Generating...' : 'Draft Summary'}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Executive Summary (Max 100 words) *</label>
                  <textarea 
                    required 
                    rows="4" 
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 resize-none text-sm md:text-base leading-relaxed" 
                    placeholder="Briefly summarize why this nominee is being recommended..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-dashed border-gray-600 rounded-xl p-6 text-center hover:border-amber-500 bg-[#111a33]/50 transition-colors cursor-pointer group">
                    <ImageIcon className="w-8 h-8 text-gray-500 mx-auto mb-3 group-hover:text-amber-500 transition-colors" />
                    <p className="text-sm text-gray-300 font-medium mb-1">Profile Photo / Logo *</p>
                    <p className="text-xs text-gray-500 mb-4">JPG, PNG up to 5MB</p>
                    <input type="file" required className="text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-500/10 file:text-amber-500 hover:file:bg-amber-500/20 w-full" />
                  </div>
                  <div className="border border-dashed border-gray-600 rounded-xl p-6 text-center hover:border-blue-500 bg-[#111a33]/50 transition-colors cursor-pointer group">
                    <FileText className="w-8 h-8 text-gray-500 mx-auto mb-3 group-hover:text-blue-500 transition-colors" />
                    <p className="text-sm text-gray-300 font-medium mb-1">Supporting Documents</p>
                    <p className="text-xs text-gray-500 mb-4">PDF, DOCX up to 10MB</p>
                    <input type="file" className="text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500/10 file:text-blue-500 hover:file:bg-blue-500/20 w-full" />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <label className="flex items-start space-x-3 cursor-pointer bg-amber-500/5 p-4 rounded-lg border border-amber-500/20">
                <input type="checkbox" required className="mt-1 accent-amber-500 w-5 h-5 flex-shrink-0" />
                <span className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  I confirm that the information provided is accurate and authentic. I grant FG MEDIA GROUP the rights to utilize the submitted details and media for publication and the HIT Awards consideration process.
                </span>
              </label>
            </section>

            <button type="submit" className="w-full py-4 rounded-lg bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(217,119,6,0.5)] transition-all">
              Submit Nomination Officially
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// --- SPONSORSHIP FORM VIEW ---
function SponsorshipForm({ setActiveTab }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);

  const tiers = [
    { name: 'Platinum Grand Sponsor', amount: '₹20,00,000', color: 'from-gray-300 to-gray-100', text: 'text-gray-800' },
    { name: 'Gold Sponsor', amount: '₹10,00,000', color: 'from-yellow-500 to-amber-300', text: 'text-black' },
    { name: 'Silver Sponsor', amount: '₹5,00,000', color: 'from-slate-400 to-slate-200', text: 'text-slate-900' },
    { name: 'Bronze Sponsor', amount: '₹1,00,000', color: 'from-amber-700 to-amber-600', text: 'text-white' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setActiveTab('awards');
    }, 4000);
  };

  if (submitted) {
    return (
      <div className="pt-20 pb-40 flex flex-col items-center justify-center animate-fade-in text-center px-4">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Sponsorship Application Received</h2>
        <p className="text-gray-400 max-w-md">Our corporate relations team will contact you shortly to process your premium sponsorship.</p>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-24 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <button onClick={() => setActiveTab('awards')} className="text-amber-500 text-sm font-medium mb-6 hover:underline flex items-center">
          &larr; Back to Awards
        </button>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Corporate Sponsorship</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Partner with the World's Real Super App "InViGIL" Launch and the prestigious HIT Awards. 
            Unlock a New World with Plenty of Opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Tiers / Info */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Select Tier</h3>
            
            {tiers.map((tier, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedTier(tier.name)}
                className={`p-1 rounded-xl cursor-pointer transition-all ${selectedTier === tier.name ? 'bg-gradient-to-r from-amber-500 to-yellow-400 scale-105 shadow-[0_0_20px_rgba(251,191,36,0.3)]' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                <div className="bg-[#0f172a] h-full w-full rounded-lg p-5 flex flex-col items-center text-center">
                  <h4 className="text-lg font-bold text-gray-200 mb-1">{tier.name}</h4>
                  <p className={`text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r ${tier.color}`}>{tier.amount}</p>
                </div>
              </div>
            ))}

            <div className="bg-blue-900/20 border border-blue-800/50 rounded-xl p-6 mt-8">
              <h4 className="font-bold text-blue-400 mb-3 flex items-center"><Star size={16} className="mr-2"/> Sponsorship Benefits</h4>
              <ul className="text-xs text-gray-300 space-y-2">
                <li>• Sponsorship Coverage on all branding</li>
                <li>• Electronic Media Coverage</li>
                <li>• 1 Year unlimited free usage of InViGIL App</li>
                <li>• 1 Year complete Promotion & Advertising</li>
                <li>• Assured business leads</li>
                <li>• Free Unlimited Video Conferences</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-[#0f172a] border border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-8">Registration Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company Name *</label>
                  <input required type="text" className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Contact Person *</label>
                  <input required type="text" className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Official Email *</label>
                  <input required type="email" className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number *</label>
                  <input required type="tel" className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Selected Sponsorship Tier *</label>
                <input 
                  required 
                  readOnly
                  type="text" 
                  value={selectedTier || 'Please select a tier from the left...'}
                  className={`w-full border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${selectedTier ? 'bg-amber-900/20 border-amber-500 text-amber-400 font-bold' : 'bg-[#111a33] border-gray-700 text-gray-500 text-sm'}`} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Corporate Profile / Message</label>
                <textarea rows="3" className="w-full bg-[#111a33] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 resize-none"></textarea>
              </div>
              
              <button type="submit" disabled={!selectedTier} className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${selectedTier ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-[0_0_20px_rgba(217,119,6,0.5)]' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}>
                Proceed to Partner
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- DASHBOARD VIEW (Awards Admin) ---
function DashboardView({ setActiveTab }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="absolute inset-0 bg-[#02050a] flex flex-col md:flex-row animate-fade-in font-sans z-50">
      
      {/* Mobile Top Bar for Dashboard */}
      <div className="md:hidden h-16 bg-[#060b14] border-b border-gray-800 flex items-center justify-between px-4 z-40">
        <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
          <Crown className="text-amber-500 mr-2" size={20} />
          <span className="font-serif font-bold text-white text-base tracking-wider">ViERA ADMIN</span>
        </div>
        <button onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} className="text-amber-500">
          {isMobileSidebarOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${isMobileSidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-[#0a0f1c] border-b md:border-b-0 md:border-r border-gray-800 flex flex-col md:min-h-full z-30 relative`}>
        <div className="hidden md:flex h-20 items-center justify-between px-6 border-b border-gray-800 bg-[#060b14]">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
            <Crown className="text-amber-500 mr-2" size={24} />
            <span className="font-serif font-bold text-white text-lg tracking-wider">ViERA ADMIN</span>
          </div>
        </div>
        <div className="p-4 flex-grow space-y-2">
          <DashboardNav icon={<LayoutDashboard size={18}/>} label="Overview" active />
          <DashboardNav icon={<Users size={18}/>} label="Nominations" badge="142" />
          <DashboardNav icon={<DollarSign size={18}/>} label="Sponsorships" />
          <DashboardNav icon={<Award size={18}/>} label="Jury Selection" />
          <DashboardNav icon={<BarChart size={18}/>} label="Analytics" />
          <DashboardNav icon={<Settings size={18}/>} label="Settings" />
        </div>
        <div className="p-4 border-t border-gray-800">
          <button onClick={() => setActiveTab('home')} className="flex items-center text-gray-400 hover:text-white w-full px-4 py-2 transition-colors">
            <LogOut size={18} className="mr-3" /> Exit Dashboard
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col h-[calc(100vh-64px)] md:h-full overflow-hidden">
        
        {/* Top Header (Desktop) */}
        <header className="hidden md:flex h-20 border-b border-gray-800 bg-[#060b14] items-center justify-between px-8">
          <h2 className="text-xl font-bold text-white">Dashboard Overview</h2>
          <div className="flex items-center space-x-6">
            <div className="relative cursor-pointer text-gray-400 hover:text-amber-500">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#060b14]"></span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold mr-3">
                RP
              </div>
              <span className="text-sm font-medium text-gray-200">Ramesh Babu P.</span>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-grow p-4 md:p-8 overflow-y-auto bg-[#040812]">
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <StatCard title="Total Nominations" value="1,248" change="+12%" icon={<Users className="text-blue-500"/>} />
            <StatCard title="Pending Review" value="342" change="-5%" icon={<Activity className="text-amber-500"/>} />
            <StatCard title="Sponsorship Funds" value="₹1.4 Cr" change="+20%" icon={<DollarSign className="text-green-500"/>} />
            <StatCard title="Confirmed Juries" value="24" change="0%" icon={<Award className="text-purple-500"/>} />
          </div>

          {/* Table Section */}
          <div className="bg-[#0a0f1c] border border-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="px-4 md:px-6 py-4 md:py-5 border-b border-gray-800 flex justify-between items-center bg-[#0d1425]">
              <h3 className="text-base md:text-lg font-bold text-white">Recent Nominations</h3>
              <button className="text-xs md:text-sm bg-[#111a33] hover:bg-[#1a264a] border border-gray-700 px-3 md:px-4 py-2 rounded text-gray-300 transition-colors">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#060b14] text-xs uppercase tracking-wider text-gray-500 border-b border-gray-800">
                    <th className="px-4 md:px-6 py-3 md:py-4 font-medium">Nominee</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 font-medium">Category</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 font-medium">Type</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 font-medium">Status</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-800">
                  <TableRow name="Dr. A. Sharma" cat="Healthcare Excellence" type="Individual" status="Reviewing" date="Aug 4, 2026" />
                  <TableRow name="TechVision AI" cat="Startup Ideas" type="Startup" status="Shortlisted" date="Aug 3, 2026" />
                  <TableRow name="Ministry of Earth" cat="Climate Leadership" type="Gov Dept" status="Pending" date="Aug 2, 2026" />
                  <TableRow name="S. Reddy" cat="Business Icon" type="Individual" status="Shortlisted" date="Aug 1, 2026" />
                  <TableRow name="Global Agri Corp" cat="Agricultural Excellence" type="Company" status="Rejected" date="Jul 29, 2026" />
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function DashboardNav({ icon, label, active, badge }) {
  return (
    <button className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${active ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'text-gray-400 hover:bg-[#111a33] hover:text-gray-200'}`}>
      <div className="flex items-center">
        {icon}
        <span className="ml-3 font-medium text-sm">{label}</span>
      </div>
      {badge && <span className="bg-amber-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">{badge}</span>}
    </button>
  );
}

function StatCard({ title, value, change, icon }) {
  const isPositive = change.startsWith('+');
  const isNeutral = change === '0%';
  return (
    <div className="bg-[#0a0f1c] border border-gray-800 p-5 md:p-6 rounded-xl relative overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-400 text-xs md:text-sm font-medium mb-1">{title}</p>
          <h4 className="text-2xl md:text-3xl font-bold text-white">{value}</h4>
        </div>
        <div className="p-2 md:p-3 bg-[#111a33] rounded-lg border border-gray-800">
          {icon}
        </div>
      </div>
      <div className="flex items-center">
        <span className={`text-[10px] md:text-xs font-bold ${isPositive ? 'text-green-500' : isNeutral ? 'text-gray-500' : 'text-red-500'}`}>
          {change}
        </span>
        <span className="text-[10px] md:text-xs text-gray-500 ml-2">vs last month</span>
      </div>
    </div>
  );
}

function TableRow({ name, cat, type, status, date }) {
  const statusColors = {
    'Shortlisted': 'bg-green-500/10 text-green-500 border-green-500/20',
    'Reviewing': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Pending': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    'Rejected': 'bg-red-500/10 text-red-500 border-red-500/20',
  };
  
  return (
    <tr className="hover:bg-[#111a33]/50 transition-colors">
      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
        <div className="font-medium text-gray-200">{name}</div>
      </td>
      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-gray-400 text-xs md:text-sm">{cat}</td>
      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-gray-400 text-xs md:text-sm">{type}</td>
      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
        <span className={`px-2 md:px-3 py-1 inline-flex text-[10px] md:text-xs leading-5 font-semibold rounded-full border ${statusColors[status]}`}>
          {status}
        </span>
      </td>
      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-gray-500 text-[10px] md:text-xs">{date}</td>
    </tr>
  );
}

function BarChart(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
}

// --- FOOTER COMPONENT ---
function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#03060b] border-t border-amber-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-amber-500" />
              <span className="ml-3 text-xl font-serif font-bold text-white tracking-widest">FG MEDIA GROUP</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              A premium global initiative empowering communities through quality journalism, groundbreaking Virtual Intelligence (InViGIL), and national recognition of excellence.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-[#111a33] flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-[#1a264a] cursor-pointer transition-colors">
                  <span className="text-xs">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-amber-500 transition-colors">Home</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-amber-500 transition-colors">About Us</button></li>
              <li><button onClick={() => setActiveTab('media')} className="hover:text-amber-500 transition-colors">Media Publications</button></li>
              <li><button onClick={() => setActiveTab('technology')} className="hover:text-amber-500 transition-colors">InViGIL Technology</button></li>
              <li><button onClick={() => setActiveTab('awards')} className="hover:text-amber-500 transition-colors">HIT ViERA Awards</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>WhatsApp: +91 7382098888</li>
              <li>Email: ceo@fgco.in</li>
              <li>Email: hitawards@fgco.in</li>
              <li>Bengaluru, Karnataka, INDIA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2026 FG Media and Safety Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0 flex flex-wrap gap-4">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- VIERA AI ASSISTANT COMPONENT ---
function VieraAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: 'Greetings! I am ViERA, the Virtual Intelligence Enabled Real Actor. How may I assist you with FG Media Group, InViGIL, or the HIT Awards today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Setup for Canvas execution environment
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

      // Format history for Gemini API
      const formattedHistory = messages.map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));
      formattedHistory.push({ role: 'user', parts: [{ text: userMessage }] });

      const payload = {
        contents: formattedHistory,
        systemInstruction: {
          parts: [{ text: "You are ViERA (Virtual Intelligence Enabled Real Actor), the official AI assistant for FG Media Group and the HIT Awards. You are professional, highly intelligent, and speak with a touch of royal elegance. Your goal is to help users navigate the portal, understand InViGIL (the world's first Virtual Commerce Platform), learn about FG Media publications (HIT NEWS, Happy India Times, AP MEDIA, Kurukshetra), and guide them through the HIT Awards nomination process. Keep your answers concise, informative, and beautifully formatted." }]
        }
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.candidates && data.candidates.length > 0) {
        const botReply = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { role: 'model', text: botReply }]);
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("ViERA Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Apologies, I am experiencing a temporary interference in my neural network. Please try again momentarily." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-3 md:p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-110 transition-transform z-50 flex items-center justify-center group ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Activity className="w-6 h-6 group-hover:animate-pulse" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
        </span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[380px] h-[60vh] sm:h-[500px] max-h-[80vh] bg-[#0a1122] border sm:border-blue-900/50 rounded-t-2xl sm:rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-full sm:translate-y-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="h-14 md:h-16 bg-gradient-to-r from-[#0d162d] to-[#152345] border-b border-blue-900/50 flex items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#060b14] border border-blue-500/50 flex items-center justify-center">
              <Activity className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-white tracking-wide flex items-center text-sm md:text-base">
                ViERA <Sparkles className="w-3 h-3 text-amber-400 ml-1" />
              </h3>
              <p className="text-[9px] md:text-[10px] text-blue-300 uppercase tracking-widest">Virtual Intelligence</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-2">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-black/20 mix-blend-overlay custom-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-amber-600/20 border border-amber-500/30 text-amber-100 rounded-tr-sm' 
                  : 'bg-[#152140] border border-blue-800/40 text-gray-200 rounded-tl-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#152140] border border-blue-800/40 text-blue-400 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-xs">Processing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-3 bg-[#0d162d] border-t border-blue-900/50 flex items-center space-x-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask ViERA..."
            className="flex-grow bg-[#060b14] border border-gray-700 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button 
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 transition-colors"
          >
            <Send size={16} className="ml-1" />
          </button>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(59, 130, 246, 0.5); }
      `}} />
    </>
  );
}



