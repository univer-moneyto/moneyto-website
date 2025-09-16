import { motion } from 'framer-motion';

// Import brand images
import brand01 from '../assets/brand01.png';
import brand02 from '../assets/brand02.png';
import brand03 from '../assets/brand03.png';
import brand04 from '../assets/brand04.png';
import brand05 from '../assets/brand05.png';
import brand06 from '../assets/brand06.png';
import brand07 from '../assets/brand07.png';
import brand08 from '../assets/brand08.png';
import brand09 from '../assets/brand09.png';
import brand10 from '../assets/brand10.png';
import brand11 from '../assets/brand11.png';
import brand12 from '../assets/brand12.png';
import brand13 from '../assets/brand13.png';
import brand14 from '../assets/brand14.png';
import brand15 from '../assets/brand15.png';
import brand16 from '../assets/brand16.png';
import brand17 from '../assets/brand17.png';
import brand18 from '../assets/brand18.png';
import brand19 from '../assets/brand19.png';
import brand20 from '../assets/brand20.png';
import brand21 from '../assets/brand21.png';
import brand22 from '../assets/brand22.png';
import brand23 from '../assets/brand23.png';
import brand24 from '../assets/brand24.png';
import brand25 from '../assets/brand25.png';
import brand26 from '../assets/brand26.png';
import brand27 from '../assets/brand27.png';
import brand28 from '../assets/brand28.png';
import brand29 from '../assets/brand29.png';
import brand30 from '../assets/brand30.png';
import brand31 from '../assets/brand31.png';
import brand32 from '../assets/brand32.png';
import brand33 from '../assets/brand33.png';
import brand34 from '../assets/brand34.png';
import brand35 from '../assets/brand35.png';
import brand36 from '../assets/brand36.png';
import brand37 from '../assets/brand37.png';
import brand38 from '../assets/brand38.png';

const GiftCardSection = () => {
  // 브랜드 이미지 배열
  const brandImages = [
    brand01, brand02, brand03, brand04, brand05, brand06, brand07, brand08,
    brand09, brand10, brand11, brand12, brand13, brand14, brand15, brand16,
    brand17, brand18, brand19, brand20, brand21, brand22, brand23, brand24,
    brand25, brand26, brand27, brand28, brand29, brand30, brand31, brand32,
    brand33, brand34, brand35, brand36, brand37, brand38
  ];

  return (
    <section className="h-screen flex items-center relative overflow-hidden scroll-section" style={{ 
      background: 'white'
    }}>

      <div className="w-full relative z-10">
        {/* 텍스트 섹션 */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#333333", lineHeight: "1.3" }}>
                펫이 모아준 포인트로
                <br />
                <span className="gradient-text shimmer">마음껏 소확행</span>
              </h2>
              
              <p className="text-lg md:text-xl mb-12" style={{ color: "#666666", lineHeight: "1.6" }}>
                다양한 브랜드의 상품을 만나보세요!
              </p>
            </motion.div>
          </div>
        </div>

        {/* 브랜드 로고 무한 스크롤 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 w-full"
        >
          
          {/* 브랜드 로고 스크롤 컨테이너 */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-scroll">
                {/* 첫 번째 세트 */}
                {brandImages.map((brandImage, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-48 h-32 bg-transparent rounded-xl flex items-center justify-center transition-all duration-300 p-4"
                  >
                    <img 
                      src={brandImage}
                      alt={`Brand ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
                {/* 두 번째 세트 (무한 스크롤을 위한 복사본) */}
                {brandImages.map((brandImage, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-48 h-32 bg-transparent rounded-xl flex items-center justify-center transition-all duration-300 p-4"
                  >
                    <img 
                      src={brandImage}
                      alt={`Brand ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default GiftCardSection;