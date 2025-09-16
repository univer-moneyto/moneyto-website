import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, HelpCircle, Megaphone, Mail, Phone } from 'lucide-react';

const SupportSection = () => {
  const [activeTab, setActiveTab] = useState<'faq' | 'support' | 'announcements'>('faq');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs = [
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'support', label: '고객센터', icon: MessageCircle },
    { id: 'announcements', label: '공지사항', icon: Megaphone },
  ];

  const faqs = [
    {
      question: '앱을 어떻게 다운로드 하나요?',
      answer: 'App Store(iOS) 또는 Google Play Store(Android)에서 "머니또"를 검색하여 다운로드 하실 수 있습니다. 무료로 제공됩니다.'
    },
    {
      question: '포인트는 어떻게 획득할 수 있나요?',
      answer: '실시간 위치를 켜고 지도에서 반짝이는 포인트를 찾아 터치하면 포인트를 획득할 수 있습니다. 펫과 함께라면 더 많은 포인트를 얻을 수 있어요!'
    },
    {
      question: '획득한 포인트로 무엇을 할 수 있나요?',
      answer: '포인트는 앱 내 스토어에서 기프티콘, 할인쿠폰, 펫 아이템 등 다양한 리워드로 교환하실 수 있습니다.'
    },
    {
      question: '펫은 어떻게 획득하고 키울 수 있나요?',
      answer: '회원가입 시 첫 번째 펫을 무료로 받을 수 있으며, 포인트로 새로운 펫을 구매하거나 먹이와 아이템으로 펫을 성장시킬 수 있습니다.'
    },
    {
      question: '위치 정보가 안전하게 보호되나요?',
      answer: '네, 사용자의 개인정보와 위치 정보는 철저히 보호됩니다. 위치 정보는 포인트 생성을 위해서만 사용되며, 제3자에게 공유되지 않습니다.'
    },
    {
      question: '오프라인에서도 사용할 수 있나요?',
      answer: '포인트 수집과 지도 기능을 위해서는 인터넷 연결이 필요합니다. 하지만 펫 관리와 인벤토리 확인 등은 오프라인에서도 가능합니다.'
    }
  ];

  const announcements = [
    {
      date: '2024.03.15',
      title: '머니또 v2.0 업데이트 출시',
      content: '새로운 펫 시스템과 향상된 지도 인터페이스가 추가되었습니다.',
      important: true
    },
    {
      date: '2024.03.10',
      title: '신규 리워드 아이템 추가',
      content: '인기 브랜드의 기프티콘과 할인쿠폰이 새롭게 추가되었습니다.',
      important: false
    },
    {
      date: '2024.03.05',
      title: '서버 점검 안내',
      content: '더 나은 서비스 제공을 위한 정기 점검이 예정되어 있습니다.',
      important: false
    },
    {
      date: '2024.02.28',
      title: '이벤트: 봄맞이 더블 포인트',
      content: '3월 한 달간 모든 포인트 획득량이 2배로 증가합니다!',
      important: true
    }
  ];

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              고객 지원
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            궁금한 점이 있으시거나 도움이 필요하시면 언제든지 문의해주세요
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-gray-100 p-1 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'support' && (
            <motion.div
              key="support"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">이메일 문의</h3>
                  <p className="text-gray-600 mb-4">상세한 문의사항은 이메일로 보내주세요</p>
                  <p className="text-primary-600 font-semibold">support@머니또.com</p>
                  <p className="text-sm text-gray-500 mt-2">평균 응답시간: 24시간 이내</p>
                </div>

                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8">
                  <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">전화 상담</h3>
                  <p className="text-gray-600 mb-4">긴급한 문의사항은 전화로 연락주세요</p>
                  <p className="text-secondary-600 font-semibold">1588-0000</p>
                  <p className="text-sm text-gray-500 mt-2">운영시간: 평일 09:00-18:00</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'announcements' && (
            <motion.div
              key="announcements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl border-l-4 ${
                      announcement.important
                        ? 'bg-orange-50 border-orange-500'
                        : 'bg-gray-50 border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {announcement.important && (
                            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                              중요
                            </span>
                          )}
                          <span className="text-sm text-gray-500">{announcement.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {announcement.title}
                        </h3>
                        <p className="text-gray-600">{announcement.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SupportSection;