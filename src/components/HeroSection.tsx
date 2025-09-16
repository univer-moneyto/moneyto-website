import { motion } from 'framer-motion';
import homeNbImage from '../assets/home_nb.png';

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex items-center relative overflow-hidden scroll-section" style={{ 
      background: `linear-gradient(180deg, 
        rgba(135, 206, 250, 0.6) 0%, 
        rgba(176, 224, 230, 0.5) 20%, 
        rgba(255, 255, 255, 0.9) 40%, 
        rgba(255, 255, 255, 1) 60%, 
        rgba(245, 245, 220, 0.3) 80%, 
        rgba(255, 255, 255, 1) 100%)`
    }}>
      {/* Sky and Mountain Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sky gradient with clouds */}
        <div className="absolute inset-0" style={{ 
          background: `linear-gradient(180deg, 
            rgba(135, 206, 250, 0.4) 0%, 
            rgba(176, 224, 230, 0.3) 30%, 
            rgba(255, 255, 255, 0.8) 60%, 
            transparent 100%)`
        }}></div>
        
        {/* Cloud shapes */}
        <div className="absolute top-10 left-1/4 w-32 h-16 opacity-30">
          <div className="absolute inset-0 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-2 left-4 w-20 h-12 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-1 right-2 w-16 h-10 bg-white rounded-full blur-sm"></div>
        </div>
        
        <div className="absolute top-20 right-1/3 w-28 h-14 opacity-25">
          <div className="absolute inset-0 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-1 left-3 w-18 h-10 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-2 right-1 w-14 h-8 bg-white rounded-full blur-sm"></div>
        </div>
        
        <div className="absolute top-32 left-1/2 w-24 h-12 opacity-20">
          <div className="absolute inset-0 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-1 left-2 w-16 h-8 bg-white rounded-full blur-sm"></div>
        </div>
        
        {/* Mountain silhouettes - multiple layers */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* Distant mountains */}
          <svg width="100%" height="300" viewBox="0 0 1200 300" preserveAspectRatio="none" className="absolute bottom-0">
            <path d="M0,300 L0,180 L150,120 L300,160 L450,100 L600,140 L750,80 L900,120 L1050,60 L1200,100 L1200,300 Z" 
                  fill="rgba(173, 216, 230, 0.15)"/>
          </svg>
          
          {/* Middle mountains */}
          <svg width="100%" height="280" viewBox="0 0 1200 280" preserveAspectRatio="none" className="absolute bottom-0">
            <path d="M0,280 L0,200 L100,140 L250,180 L400,120 L550,160 L700,100 L850,140 L1000,80 L1200,120 L1200,280 Z" 
                  fill="rgba(176, 196, 222, 0.2)"/>
          </svg>
          
          {/* Near mountains */}
          <svg width="100%" height="250" viewBox="0 0 1200 250" preserveAspectRatio="none" className="absolute bottom-0">
            <path d="M0,250 L0,220 L80,160 L200,200 L350,140 L500,180 L650,120 L800,160 L950,100 L1200,140 L1200,250 Z" 
                  fill="rgba(169, 169, 169, 0.25)"/>
          </svg>
          
          {/* Foreground hills */}
          <svg width="100%" height="180" viewBox="0 0 1200 180" preserveAspectRatio="none" className="absolute bottom-0">
            <path d="M0,180 L0,160 L120,140 L280,150 L440,130 L600,145 L760,125 L920,140 L1080,120 L1200,135 L1200,180 Z" 
                  fill="rgba(152, 251, 152, 0.3)"/>
          </svg>
        </div>
        
        {/* Sun/light source */}
        <div className="absolute top-16 right-20 w-20 h-20 opacity-20">
          <div className="w-full h-full bg-yellow-200 rounded-full blur-xl"></div>
          <div className="absolute top-2 left-2 w-16 h-16 bg-yellow-100 rounded-full blur-lg"></div>
        </div>
        
        {/* Light rays */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <div className="absolute top-20 right-20 w-1 h-32 bg-yellow-200 blur-sm rotate-12"></div>
          <div className="absolute top-16 right-24 w-1 h-28 bg-yellow-200 blur-sm rotate-45"></div>
          <div className="absolute top-24 right-16 w-1 h-24 bg-yellow-200 blur-sm -rotate-12"></div>
          <div className="absolute top-12 right-32 w-1 h-20 bg-yellow-200 blur-sm rotate-75"></div>
        </div>
        
        {/* Atmospheric particles */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-20 w-2 h-2 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-60 right-32 w-1 h-1 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-80 left-1/3 w-1 h-1 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-100 right-1/4 w-2 h-2 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-120 left-2/3 w-1 h-1 bg-white rounded-full blur-sm"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center w-full">
          {/* Left side - Text content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ lineHeight: '1.2', fontFamily: "'Fredoka', 'LINESeedKR', sans-serif" }}>
                <span style={{ color: '#404C5D' }}>지도 위 작은 모험</span>
                <br />
                <span className="gradient-text shimmer">
                  펫과 함께 떠나는 머니또
                </span>
              </h1>
              

              <div className="mt-12 flex flex-wrap gap-4">
                {/* App Store Button */}
                <motion.a
                  href="https://apps.apple.com/kr/app/%EB%A8%B8%EB%8B%88%EB%98%90-%ED%8E%AB%EC%9D%B4-%EB%8F%88-%EB%B2%84%EB%8A%94-%EC%95%B1%ED%85%8C%ED%81%AC/id6503728318"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-modern text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 hover:opacity-80"
                  style={{ backgroundColor: '#404C5D' }}
                >
                  <div className="flex items-center justify-center w-8 h-8">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-base font-semibold leading-tight">App Store</div>
                  </div>
                </motion.a>

                {/* Google Play Button */}
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.univer.catchit&hl=ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-modern text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 hover:opacity-80"
                  style={{ backgroundColor: '#404C5D' }}
                >
                  <div className="flex items-center justify-center w-8 h-8">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-base font-semibold leading-tight">Google Play</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right side - Home Image */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative flex justify-center"
            >
              <motion.div 
                className="relative"
                animate={{ 
                  y: [-5, 5, -5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={homeNbImage} 
                  alt="머니또 App Screenshot" 
                  className="w-full max-w-xl h-auto object-contain"
                  style={{ 
                    filter: 'drop-shadow(0 12px 25px rgba(0, 0, 0, 0.15))'
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        {/* Wave separator */}
        <svg className="absolute bottom-0 w-full h-20" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60L48,50C96,40,192,20,288,26.7C384,33,480,67,576,76.7C672,87,768,73,864,60C960,47,1056,33,1152,33.3C1200,33,1200,67,1200,100L1200,120L0,120Z" 
                fill="rgba(42, 204, 200, 0.15)"></path>
          <path d="M0,40L48,46.7C96,53,192,67,288,66.7C384,67,480,53,576,50C672,47,768,53,864,56.7C960,60,1056,60,1152,53.3C1200,47,1200,33,1200,80L1200,120L0,120Z" 
                fill="rgba(42, 204, 200, 0.08)"></path>
        </svg>
        
        {/* Subtle gradient overlay */}
        <div className="absolute bottom-0 w-full h-16" style={{ 
          background: 'linear-gradient(to bottom, rgba(42, 204, 200, 0.05), rgba(42, 204, 200, 0.02))' 
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;