import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: '서비스',
      links: [
        { name: '이용약관', href: '/terms' },
        { name: '개인정보처리방침', href: '/privacy' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-start">
          {/* Company info */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
                머니또
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                지도 기반의 혁신적인 리워드 플랫폼으로 일상에 재미와 혜택을 더합니다.
                귀여운 펫과 함께 특별한 모험을 시작해보세요.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={16} />
                  <span className="text-sm">univerfirm@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={16} />
                  <span className="text-sm">1644-0815</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={16} />
                  <span className="text-sm">서울시 남부순환로347길 28</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <span className="text-xs">📄</span>
                  </div>
                  <span className="text-sm">통신판매업신고번호: 제 2024-서울동대문-0106 호</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-end"
            >
              <div className="text-left">
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} 머니또. All rights reserved.
            </div>
            
            {/* Social links placeholder */}
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5 bg-current rounded"></div>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <div className="w-5 h-5 bg-current rounded"></div>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5 bg-current rounded"></div>
              </button>
            </div>
          </div>
          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;