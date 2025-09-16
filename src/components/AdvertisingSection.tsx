import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Building, Users, Target, TrendingUp } from 'lucide-react';
import emailjs from '@emailjs/browser';

const AdvertisingSection = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // EmailJS 초기화를 컴포넌트 마운트 시 한번만 수행
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    console.log('AdvertisingSection EmailJS Environment Check:', {
      publicKey: publicKey ? `${publicKey.substring(0, 5)}...` : 'missing',
      serviceId: serviceId || 'missing',
      templateId: templateId || 'missing'
    });
    
    if (publicKey) {
      try {
        emailjs.init({
          publicKey: publicKey,
          blockHeadless: true,
          blockList: {
            list: [],
            watchVariable: 'userAgent'
          },
          limitRate: {
            throttle: 2000
          }
        });
        console.log('AdvertisingSection EmailJS initialized successfully with advanced options');
      } catch (initError) {
        console.error('AdvertisingSection EmailJS initialization failed:', initError);
        emailjs.init(publicKey);
        console.log('AdvertisingSection EmailJS initialized with basic config as fallback');
      }
    } else {
      console.error('AdvertisingSection EmailJS public key not found - check environment variables');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 환경변수 확인
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log('EmailJS Config:', { serviceId, templateId, publicKey: publicKey ? 'exists' : 'missing' });

      if (!serviceId || !templateId || !publicKey) {
        console.error('Missing EmailJS configuration');
        alert('이메일 설정에 문제가 있습니다. 관리자에게 문의하세요.');
        return;
      }

      // 폼 데이터 검증
      if (!formData.company.trim() || !formData.name.trim() || !formData.email.trim()) {
        alert('필수 항목을 모두 입력해주세요.');
        return;
      }

      // 이메일 형식 검증
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert('올바른 이메일 주소를 입력해주세요.');
        return;
      }

      console.log('Sending email with data:', formData);

      // 템플릿 매개변수 정확히 설정 - 다양한 EmailJS 템플릿 형식에 대응
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        budget: formData.budget,
        message: formData.message,
        user_message: formData.message,
        subject: `[머니또] 광고 문의 - ${formData.company}`,
        to_name: '머니또 팀',
        reply_to: formData.email,
        // 추가 표준 필드들
        name: formData.name,
        email: formData.email,
        inquiry_type: '광고 문의',
        timestamp: new Date().toLocaleString('ko-KR')
      };

      console.log('Template params:', templateParams);

      // 재시도 로직이 포함된 이메일 전송 함수
      const sendEmailWithRetry = async (maxRetries = 3) => {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
          try {
            console.log(`Advertising email sending attempt ${attempt}/${maxRetries}`);
            
            const timeoutPromise = new Promise((_, reject) => {
              setTimeout(() => reject(new Error('요청 시간이 초과되었습니다')), 15000);
            });

            const sendPromise = emailjs.send(
              serviceId,
              templateId,
              templateParams
            );

            const result = await Promise.race([sendPromise, timeoutPromise]);
            console.log(`Advertising email sent successfully on attempt ${attempt}:`, result);
            return result;
            
          } catch (error) {
            console.error(`Advertising email sending attempt ${attempt} failed:`, error);
            
            if (attempt === maxRetries) {
              throw error;
            }
            
            const delay = attempt * 2000;
            console.log(`Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
          }
        }
      };

      const result = await sendEmailWithRetry() as { status: number; text: string };

      console.log('EmailJS result:', result);

      if (result && result.status === 200) {
        alert('광고 문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        setFormData({
          company: '',
          name: '',
          email: '',
          phone: '',
          budget: '',
          message: ''
        });
      } else {
        throw new Error(`Unexpected status: ${result?.status || 'unknown'}`);
      }
    } catch (error) {
      console.error('Advertising email sending failed:', error);
      
      let errorMessage = '광고 문의 전송 중 오류가 발생했습니다.';
      
      if (error instanceof Error) {
        console.error('Error details:', error.message);
        
        // 구체적인 에러 메시지 제공
        if (error.message.includes('요청 시간이 초과')) {
          errorMessage = '요청 시간이 초과되었습니다. 인터넷 연결을 확인하고 다시 시도해주세요.';
        } else if (error.message.includes('Network Error') || error.message.includes('Failed to fetch')) {
          errorMessage = '네트워크 연결에 문제가 있습니다. 인터넷 연결을 확인하고 다시 시도해주세요.';
        } else if (error.message.includes('400') || error.message.includes('Bad Request')) {
          errorMessage = '입력한 정보에 문제가 있습니다. 모든 필드를 올바르게 입력했는지 확인해주세요.';
        } else if (error.message.includes('401') || error.message.includes('Unauthorized')) {
          errorMessage = '인증에 문제가 있습니다. 관리자에게 문의해주세요.';
        } else if (error.message.includes('403') || error.message.includes('Forbidden')) {
          errorMessage = '접근 권한이 없습니다. 관리자에게 문의해주세요.';
        } else if (error.message.includes('500') || error.message.includes('Internal Server Error')) {
          errorMessage = '서버에 일시적인 문제가 있습니다. 잠시 후 다시 시도해주세요.';
        }
      }
      
      alert(errorMessage + ' 문제가 지속되면 직접 이메일(univerfirm@gmail.com) 또는 전화(1644-0815)로 연락주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const advantages = [
    {
      icon: Users,
      title: '50K+ 활성 사용자',
      description: '젊은 층을 중심으로 한 높은 참여도의 사용자층'
    },
    {
      icon: Target,
      title: '정확한 타겟팅',
      description: '위치 기반 데이터를 활용한 정밀한 광고 타겟팅'
    },
    {
      icon: TrendingUp,
      title: '높은 전환율',
      description: '게임화된 리워드 시스템으로 높은 광고 참여율'
    }
  ];

  return (
    <section id="advertising" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              광고 파트너십
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            머니또의 높은 광고전환율로 브랜드를 효과적으로 홍보하세요!
          </p>
        </motion.div>

        {/* Advantages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">광고 문의하기</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      회사명 *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                      placeholder="회사명을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      담당자명 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    예상 광고 예산
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                  >
                    <option value="">예산 범위를 선택해주세요</option>
                    <option value="under-1000">100만원 미만</option>
                    <option value="1000-5000">100만원 - 500만원</option>
                    <option value="5000-10000">500만원 - 1,000만원</option>
                    <option value="over-10000">1,000만원 이상</option>
                    <option value="discuss">논의 후 결정</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    상세 문의내용
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none"
                    placeholder="광고하고자 하는 제품/서비스, 목표 고객층, 원하는 광고 방식 등을 자유롭게 작성해주세요"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? '전송 중...' : '문의 제출하기'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact information & benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            {/* Direct contact */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">직접 연락하기</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">이메일 문의</p>
                    <p className="text-gray-300">univerfirm@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">전화 상담</p>
                    <p className="text-gray-300">1644-0815</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">운영시간</p>
                    <p className="text-gray-300">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white flex-grow">
              <h3 className="text-xl font-bold mb-0.5">광고 성과 지표</h3>
              
              <div className="flex flex-col justify-center space-y-6 h-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">광고 전환율</p>
                      <p className="text-indigo-200 text-sm">일반 광고 대비 3배 높음</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">85%</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">월 활성 사용자</p>
                      <p className="text-indigo-200 text-sm">20-30대 젊은층 중심</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">50K+</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">위치 정확도</p>
                      <p className="text-indigo-200 text-sm">정밀한 타겟팅 가능</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">92%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingSection;