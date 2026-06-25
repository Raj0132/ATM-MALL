import { useState } from 'react';
import { 
  Sun, 
  Moon, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Film, 
  Gamepad, 
  Utensils, 
  Building, 
  ShoppingBag, 
  Layers, 
  Phone, 
  Mail, 
  Award, 
  Check 
} from 'lucide-react';

const slides = [
  {
    src: "/outerview.jpg",
    title: "Grand Entrance & Main Façade",
    description: "The spectacular double-height glass front and LED visual boards, designed to present a world-class presence."
  },
  {
    src: "/back-elevation.jpg",
    title: "Rear Elevation & Premium Towers",
    description: "Showcasing the structural composition of the luxury business hotel wing integrated into the mall."
  },
  {
    src: "/interior1.png",
    title: "Main Shopping Galleria & Atrium",
    description: "Open floor plan featuring a massive glass skylight, flooding the central corridors with natural daylight."
  },
  {
    src: "/interior2.png",
    title: "Premium Brand Retail Corridors",
    description: "Designed with smooth curve outlines, polished marble paths, and premium glass storefront spacing."
  }
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [notification, setNotification] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleDownloadBrochure = () => {
    setNotification("Downloading ATM Mall Layout & Brochure Plan...");
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormValues({ fullName: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="w-full min-h-screen font-sans selection:bg-amber-400 selection:text-black">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-[100] bg-slate-900 border border-slate-800 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-pulse">
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
          <span className="text-xs font-semibold tracking-wider uppercase">{notification}</span>
        </div>
      )}

      {/* Hero Header Section */}
      <header className="relative w-full h-screen overflow-hidden">
        {/* Day/Night Render Switcher Background */}
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <img
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-in-out ${
              !isNightMode ? 'opacity-65 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            src="/mall-day.jpg"
            alt="ATM Mall Day Rendering"
          />
          <img
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-in-out ${
              isNightMode ? 'opacity-65 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            src="/mall-night.jpg"
            alt="ATM Mall Night Rendering"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/10 z-[1]" />

        {/* Floating Day/Night Control widget */}
        <div className="absolute bottom-10 right-6 md:right-12 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <span className="text-white/60 text-[10px] font-semibold uppercase tracking-widest hidden sm:inline">Perspective:</span>
          <button 
            onClick={() => setIsNightMode(false)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              !isNightMode ? 'bg-white text-black shadow-lg' : 'text-white/70 hover:text-white'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            Day
          </button>
          <button 
            onClick={() => setIsNightMode(true)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              isNightMode ? 'bg-white text-black shadow-lg' : 'text-white/70 hover:text-white'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            Night
          </button>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Navbar */}
          <nav className="w-full flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 border-b border-white/10 bg-black/10 backdrop-blur-sm">
            {/* Logo */}
            <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img src="/logo.jpg" alt="ATM Mall Logo" className="w-8 h-8 rounded-full border border-white/20" />
              <span className="text-white font-bold text-lg tracking-wider font-sans">ATM MALL</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {["Overview", "Amenities", "Walkthrough", "Connectivity", "Inquiry"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white hover:scale-110 hover:-translate-y-0.5 text-xs uppercase tracking-widest font-medium transition-all duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA action & Mobile Menu toggle */}
            <div className="flex items-center gap-5">
              <button 
                onClick={handleDownloadBrochure}
                className="hidden md:block bg-white text-black rounded-full px-5 py-2 text-xs font-bold hover:bg-neutral-200 hover:scale-105 transition-all duration-200"
              >
                Brochure
              </button>
              
              {/* Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-6 h-5 relative md:hidden z-[60] focus:outline-none"
                aria-label="Toggle Menu"
              >
                <div className="flex flex-col justify-between h-[14px] w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span
                    className={`h-[2px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                      isOpen ? 'rotate-45 translate-y-[6px] w-6' : 'w-6'
                    }`}
                  />
                  <span
                    className={`h-[2px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                      isOpen ? 'opacity-0 w-4' : 'w-4'
                    }`}
                  />
                  <span
                    className={`h-[2px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                      isOpen ? '-rotate-45 -translate-y-[6px] w-6' : 'w-6'
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>

          {/* Hero Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-semibold text-amber-400 uppercase tracking-widest mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              <Award className="w-3.5 h-3.5 animate-bounce" />
              Gujarat's Largest Upcoming Retail Landmark
            </div>
            
            <h1 className="font-sans font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.05] tracking-tight uppercase hover:scale-[1.02] transition-transform duration-500 cursor-default">
              ATM MALL
            </h1>
            
            <p className="mt-5 text-white/85 text-sm sm:text-base md:text-lg font-light max-w-2xl leading-relaxed hover:scale-[1.01] transition-transform duration-500 cursor-default">
              Designed by the legendary architect <strong className="font-semibold text-white">Hafeez Contractor</strong>. A monumental luxury lifestyle destination spread across <strong className="font-semibold text-white">12,00,000+ SQ. FT.</strong> in Chandkheda Commonwealth Zone, Ahmedabad.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#inquiry"
                className="group flex items-center gap-2 bg-white text-black rounded-full px-8 py-3.5 text-xs font-bold hover:bg-neutral-200 hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                Request Space
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
              <button 
                onClick={handleDownloadBrochure}
                className="flex items-center gap-2 bg-transparent border border-white/30 text-white rounded-full px-8 py-3.5 text-xs font-bold hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-200"
              >
                Download Brochure
              </button>
            </div>
          </main>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-black/95 backdrop-blur-2xl transition-all duration-[700ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-28 pb-12 px-8">
          {/* Mobile Links */}
          <div className="flex flex-col items-center justify-center flex-1 w-full max-w-sm mx-auto">
            {["Overview", "Amenities", "Walkthrough", "Connectivity", "Inquiry"].map((item, index) => (
              <div
                key={item}
                className="w-full border-b border-white/10 py-5 transition-all duration-[700ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                style={{
                  transform: isOpen ? 'translateY(0)' : 'translateY(2rem)',
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${150 + index * 80}ms`,
                }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-3xl font-light tracking-wide text-white block transition-all duration-300 hover:pl-4"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div
            className="w-full max-w-sm mx-auto transition-all duration-[700ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              transform: isOpen ? 'translateY(0)' : 'translateY(2rem)',
              opacity: isOpen ? 1 : 0,
              transitionDelay: '550ms',
            }}
          >
            <button
              onClick={() => {
                setIsOpen(false);
                handleDownloadBrochure();
              }}
              className="w-full bg-white text-black rounded-full py-4 text-center text-xs font-bold hover:bg-neutral-200 transition-colors duration-200"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Project Vision Overview Section */}
      <section id="overview" className="py-24 px-6 md:px-12 lg:px-20 scroll-mt-10 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texts */}
            <div className="hover:translate-x-1.5 transition-transform duration-300">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-200 origin-left inline-block">Project Vision</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-6 tracking-tight text-slate-900 leading-tight hover:scale-[1.01] transition-transform duration-300 origin-left inline-block">
                Gujarat's Luxury Retail & Business Capital
              </h2>
              <div className="space-y-6 text-slate-700 font-normal text-sm sm:text-base md:text-lg leading-relaxed">
                <p className="hover:text-slate-900 transition-colors duration-200">
                  ATM Mall is Ahmedabad's premier upcoming luxury retail, corporate, and leisure destination. Spread across <strong className="font-semibold text-slate-900">12,0,000+ sq. ft.</strong> of premium covered space, the project merges visionary aesthetics with commercial utility.
                </p>
                <p className="hover:text-slate-900 transition-colors duration-200">
                  Masterfully designed by legendary architect <strong className="font-semibold text-slate-900">Hafeez Contractor</strong>, ATM Mall features a spectacular combination of global retail storefronts, fine dining terraces, multiple multiplex theatres, a massive entertainment zone, and two integrated five-star hotels.
                </p>
                <p className="hover:text-slate-900 transition-colors duration-200">
                  Strategically located at Chandkheda, it represents a landmark hub where opportunity meets scale, promising a retail experience that Ahmedabad has never seen before.
                </p>
              </div>
            </div>
            
            {/* Visual elevation */}
            <div className="relative group hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-violet-500/20 rounded-3xl blur-2xl group-hover:scale-105 transition-transform duration-500 opacity-60" />
              <div className="relative bg-white/70 backdrop-blur-md border border-slate-200/50 p-2 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/back-elevation.jpg" 
                  alt="ATM Mall Rear Elevation" 
                  className="w-full h-auto rounded-2xl object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md border border-slate-200/50 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider block mb-0.5">Perspective Render</span>
                  <span className="text-slate-800 text-sm font-semibold">Rear Elevation & Hospitality Wing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities statistics Section */}
      <section id="amenities" className="py-24 px-6 md:px-12 lg:px-20 scroll-mt-10 bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 hover:scale-[1.01] transition-transform duration-300">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">Key Highlights</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 tracking-tight text-slate-900 leading-tight">
              Scale Meets Luxury
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base font-normal">
              Explore the key benchmarks that make ATM Mall the ultimate destination for luxury retail, entertainment, and hospitality.
            </p>
          </div>
          
          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/50 p-8 rounded-2xl hover:border-slate-350 hover:bg-white/85 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-100 border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-1.5 tracking-tight group-hover:translate-x-1 transition-transform duration-300 inline-block">1.2M+</h3>
              <h4 className="text-slate-800 font-bold text-base mb-2">Sq. Ft. Covered Area</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                Ahmedabad's most grand shopping arena designed with expansive floor designs, double-height galleries, and natural light atriums.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/50 p-8 rounded-2xl hover:border-slate-350 hover:bg-white/85 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-100 border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-1.5 tracking-tight group-hover:translate-x-1 transition-transform duration-300 inline-block">5 Screen</h3>
              <h4 className="text-slate-800 font-bold text-base mb-2">Multiplex Cinema</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                A top-tier theater experience hosting 5 premium screens with high-definition audio, visual projectors, and gourmet food bars.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/50 p-8 rounded-2xl hover:border-slate-350 hover:bg-white/85 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-100 border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-1.5 tracking-tight group-hover:translate-x-1 transition-transform duration-300 inline-block">44,000</h3>
              <h4 className="text-slate-800 font-bold text-base mb-2">Sq. Ft. Food Court</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                A massive global dining court hosting 44,000 sq. ft. of culinary options, fast food brands, desserts, and local Gujarati favorites.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/50 p-8 rounded-2xl hover:border-slate-350 hover:bg-white/85 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-100 border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                <Gamepad className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-1.5 tracking-tight group-hover:translate-x-1 transition-transform duration-300 inline-block">41,000</h3>
              <h4 className="text-slate-800 font-bold text-base mb-2">Sq. Ft. Game Zone</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                Ahmedabad's ultimate entertainment hub spread across 41,000 sq. ft., featuring arcades, trampoline parks, and digital activities.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/50 p-8 rounded-2xl hover:border-slate-350 hover:bg-white/85 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-100 border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-1.5 tracking-tight group-hover:translate-x-1 transition-transform duration-300 inline-block">2 Hotels</h3>
              <h4 className="text-slate-800 font-bold text-base mb-2">5-Star Business Hotels</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                Integrated hospitality layouts offering world-class room accommodations, banquet halls, and conference boardrooms.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/50 p-8 rounded-2xl hover:border-slate-350 hover:bg-white/85 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-100 border border-slate-200/60 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-1.5 tracking-tight group-hover:translate-x-1 transition-transform duration-300 inline-block">150+</h3>
              <h4 className="text-slate-800 font-bold text-base mb-2">Premium Brands</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                Hosting premium global and national brands to present visitors with the ultimate luxury shopping environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Walkthrough Carousel */}
      <section id="walkthrough" className="py-24 px-6 md:px-12 lg:px-20 scroll-mt-10 bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 hover:scale-[1.01] transition-transform duration-300">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">Architectural Tour</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 tracking-tight text-slate-900 leading-tight">
              Design Walkthrough
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base font-normal">
              Explore the luxurious renders and elevations of the mall structure, showing grand retail halls and exterior elevations.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative bg-white/70 backdrop-blur-md border border-slate-200/50 p-3 rounded-3xl max-w-5xl mx-auto shadow-2xl hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-500">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black group/slider">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <img 
                    src={slide.src} 
                    alt={slide.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover/slider:scale-105"
                  />
                  {/* Slider details overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                    <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                      Render {index + 1} of {slides.length}
                    </span>
                    <h3 className="text-white text-lg sm:text-2xl font-bold tracking-tight hover:translate-x-1 transition-transform duration-200">
                      {slide.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm font-light mt-1 max-w-lg hidden sm:block leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Slider Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-slate-800 border border-slate-200/60 shadow-lg flex items-center justify-center transition-all hover:scale-110 z-20 focus:outline-none"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-slate-800 border border-slate-200/60 shadow-lg flex items-center justify-center transition-all hover:scale-110 z-20 focus:outline-none"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-2.5 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    index === currentSlide ? 'w-8 bg-slate-850' : 'w-2.5 bg-slate-900/20 hover:bg-slate-900/40 hover:scale-110'
                  }`}
                  style={{
                    backgroundColor: index === currentSlide ? '#0f172a' : undefined
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity & Location Section */}
      <section id="connectivity" className="py-24 px-6 md:px-12 lg:px-20 scroll-mt-10 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Description */}
            <div className="hover:translate-x-1.5 transition-transform duration-300">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-250 origin-left inline-block">Connectivity</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-6 tracking-tight text-slate-900 leading-tight hover:scale-[1.01] transition-transform duration-300 origin-left inline-block">
                Strategically Located at City Centers
              </h2>
              <div className="space-y-6 text-slate-700 font-normal text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                <p className="hover:text-slate-900 transition-colors">
                  ATM Mall is situated at the prime <strong className="font-semibold text-slate-900">Chandkheda Commonwealth Zone, Ahmedabad</strong>—the absolute core of upcoming retail hubs and infrastructure developments.
                </p>
                <p className="hover:text-slate-900 transition-colors">
                  With immediate driving access to the Sardar Patel Ring Road, metro routes, railway corridors, and the international airport, the project yields seamless connectivity for shoppers, office occupants, and premium hotel visitors.
                </p>
              </div>
              
              {/* Address Details */}
              <div className="bg-white/60 backdrop-blur-md border border-slate-200/50 p-6 rounded-2xl flex gap-4 items-start shadow-sm hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-md transition-all duration-300">
                <MapPin className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-800 font-bold text-base sm:text-lg mb-1">Project Site Address</h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    Chandkheda Commonwealth Zone, near Sardar Patel Ring Road, Ahmedabad, Gujarat, India.
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 text-xs font-bold mt-3 group"
                  >
                    View on Google Maps
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Time list benchmarks */}
            <div className="bg-white/75 backdrop-blur-md border border-slate-200/50 p-6 sm:p-8 rounded-3xl shadow-xl relative hover:-translate-y-1.5 transition-all duration-500">
              <h3 className="text-slate-900 text-lg sm:text-xl font-bold mb-6 tracking-tight flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping" />
                Driving Time Benchmarks
              </h3>
              
              <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-200">
                {[
                  { time: "03 Mins", place: "Sardar Patel Ring Road" },
                  { time: "04 Mins", place: "Divine Child Circle" },
                  { time: "08 Mins", place: "Narendra Modi Stadium" },
                  { time: "09 Mins", place: "Ahmedabad Metro Station" },
                  { time: "09 Mins", place: "Vaishnodevi Circle" },
                  { time: "10 Mins", place: "Sabarmati Railway Station & Ashram" },
                  { time: "10 Mins", place: "Upcoming Bullet Train Station" },
                  { time: "12 Mins", place: "GIFT City Campus" },
                  { time: "15 Mins", place: "International Airport" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-start relative z-10 pl-1 hover:scale-[1.02] transition-transform duration-200">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-amber-500 shrink-0 mt-2" />
                    <div className="flex-1 flex justify-between items-center bg-[#f8fafc]/60 border border-slate-200/50 px-4 py-2.5 rounded-xl hover:bg-white hover:border-slate-350 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                      <span className="text-slate-700 text-xs sm:text-sm font-normal">{item.place}</span>
                      <span className="text-slate-800 text-xs font-bold whitespace-nowrap bg-slate-200 px-2 py-0.5 rounded-md">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Lead Form Section */}
      <section id="inquiry" className="py-24 px-6 md:px-12 lg:px-20 scroll-mt-10 bg-transparent">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 hover:scale-[1.01] transition-transform duration-300">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">Connect With Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 tracking-tight text-slate-900 leading-tight">
              Request Space Booking
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base font-normal">
              Submit your retail requirements or query below. Our investments relations team will contact you.
            </p>
          </div>

          {/* Form wrapper */}
          <div className="bg-white/70 backdrop-blur-md border border-slate-200/50 p-6 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden hover:-translate-y-1.5 transition-all duration-500">
            {formSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-slate-900 text-2xl font-bold mb-2">Inquiry Sent Successfully</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto font-normal leading-relaxed">
                  Thank you for your interest. A booking manager will follow up with details and brochure layout floorplans shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-8 text-slate-500 hover:text-slate-700 text-xs font-bold border border-slate-200 hover:border-slate-300 rounded-full px-6 py-2.5 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2 hover:scale-[1.01] transition-transform duration-200">
                    <label htmlFor="fullName" className="text-slate-700 text-[10px] font-bold uppercase tracking-wider pl-1">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="e.g., John Doe"
                      className="bg-white border border-slate-200 focus:border-slate-800 text-slate-900 rounded-xl px-4 py-3.5 text-xs focus:outline-none transition-all placeholder:text-slate-400 shadow-sm"
                      value={formValues.fullName}
                      onChange={(e) => setFormValues({ ...formValues, fullName: e.target.value })}
                    />
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col gap-2 hover:scale-[1.01] transition-transform duration-200">
                    <label htmlFor="phone" className="text-slate-700 text-[10px] font-bold uppercase tracking-wider pl-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="e.g., +91 95123 00392"
                      className="bg-white border border-slate-200 focus:border-slate-800 text-slate-900 rounded-xl px-4 py-3.5 text-xs focus:outline-none transition-all placeholder:text-slate-400 shadow-sm"
                      value={formValues.phone}
                      onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 hover:scale-[1.01] transition-transform duration-200">
                  <label htmlFor="email" className="text-slate-700 text-[10px] font-bold uppercase tracking-wider pl-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g., mail@atmmall.in"
                    className="bg-white border border-slate-200 focus:border-slate-800 text-slate-900 rounded-xl px-4 py-3.5 text-xs focus:outline-none transition-all placeholder:text-slate-400 shadow-sm"
                    value={formValues.email}
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 hover:scale-[1.01] transition-transform duration-200">
                  <label htmlFor="message" className="text-slate-700 text-[10px] font-bold uppercase tracking-wider pl-1">Requirements Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Specify details if you want information on retail space, food courts, integrated hotels, or layouts..."
                    className="bg-white border border-slate-200 focus:border-slate-800 text-slate-900 rounded-xl px-4 py-3.5 text-xs focus:outline-none resize-none transition-all placeholder:text-slate-400 shadow-sm"
                    value={formValues.message}
                    onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-850 hover:scale-[1.01] hover:shadow-lg text-white font-bold rounded-full py-4 text-center text-xs tracking-wider uppercase transition-all duration-200 shadow-lg"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 px-6 md:px-12 lg:px-20 text-slate-350 border-t border-slate-850">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1 */}
          <div className="hover:translate-y-[-2px] transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="ATM Mall" className="w-8 h-8 rounded-full border border-white/10 shadow" />
              <span className="text-white font-extrabold text-lg tracking-wider">ATM MALL</span>
            </div>
            <p className="text-slate-400 text-xs font-light leading-relaxed mb-6">
              Gujarat's largest upcoming luxury retail and business landmark, designed by architect Hafeez Contractor.
            </p>
            <div className="text-slate-500 text-[10px] font-light">
              © 2026 ATM ILYF LLP. All rights reserved.
            </div>
          </div>
          
          {/* Col 2 */}
          <div className="hover:translate-y-[-2px] transition-transform duration-300">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-5">Quick Navigation</h4>
            <ul className="space-y-3">
              {["Overview", "Amenities", "Walkthrough", "Connectivity", "Inquiry"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white text-xs font-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Col 3 */}
          <div className="hover:translate-y-[-2px] transition-transform duration-300">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-5">Contact Details</h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-slate-550" />
                <a href="tel:+919512300392" className="text-slate-400 hover:text-white text-xs font-light transition-colors">
                  +91 95123 00392
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-slate-550" />
                <a href="tel:+919512300397" className="text-slate-400 hover:text-white text-xs font-light transition-colors">
                  +91 95123 00397
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-slate-550" />
                <a href="mailto:contact@atmmall.in" className="text-slate-400 hover:text-white text-xs font-light transition-colors">
                  contact@atmmall.in
                </a>
              </li>
            </ul>
          </div>
          
          {/* Col 4 */}
          <div className="hover:translate-y-[-2px] transition-transform duration-300">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-5">Project Site</h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
              Chandkheda Commonwealth Zone, near Sardar Patel Ring Road, Ahmedabad, Gujarat, India.
            </p>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
              Bookings Open
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
