import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, Lightbulb } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: '전체', icon: '📋' },
    { id: 'account', name: '계정 및 로그인', icon: '👤' },
    { id: 'points', name: '포인트 및 리워드', icon: '💰' },
    { id: 'pets', name: '펫 시스템', icon: '🐱' },
    { id: 'technical', name: '기술적 문제', icon: '🔧' },
    { id: 'payment', name: '결제 및 환불', icon: '💳' },
    { id: 'privacy', name: '개인정보', icon: '🔒' }
  ];

  const faqs = [
    {
      category: 'account',
      question: '앱을 어떻게 다운로드 하나요?',
      answer: 'App Store(iOS) 또는 Google Play Store(Android)에서 "머니또"를 검색하여 다운로드 하실 수 있습니다. 앱은 무료로 제공되며, 회원가입 후 바로 이용 가능합니다.',
      popular: true
    },
    {
      category: 'account',
      question: '회원가입은 어떻게 하나요?',
      answer: '앱 다운로드 후 이메일, 카카오톡, 구글 계정 중 하나를 선택하여 간편하게 회원가입할 수 있습니다. 본인 인증 절차를 거쳐 안전하게 가입이 완료됩니다.'
    },
    {
      category: 'account',
      question: '비밀번호를 잊어버렸어요',
      answer: '로그인 화면에서 "비밀번호 찾기"를 클릭하신 후, 가입 시 등록한 이메일을 입력하시면 비밀번호 재설정 링크를 보내드립니다.'
    },
    {
      category: 'points',
      question: '포인트는 어떻게 획득할 수 있나요?',
      answer: '실시간 위치를 켜고 지도에서 반짝이는 포인트를 찾아 터치하면 포인트를 획득할 수 있습니다. 펫과 함께라면 더 많은 포인트를 얻을 수 있어요! 또한 출석체크, 친구 추천 등으로도 포인트를 받을 수 있습니다.',
      popular: true
    },
    {
      category: 'points',
      question: '획득한 포인트로 무엇을 할 수 있나요?',
      answer: '포인트는 앱 내 스토어에서 다양한 리워드로 교환할 수 있습니다: 스타벅스, 이디야 등 음료 기프티콘, 교보문고, 영풍문고 도서상품권, 올리브영, 이마트 할인쿠폰, 펫 꾸미기 아이템, 특별 펫 캐릭터 등이 준비되어 있습니다.'
    },
    {
      category: 'points',
      question: '포인트에 유효기간이 있나요?',
      answer: '기본적으로 포인트는 획득일로부터 1년간 유효합니다. 유효기간이 임박한 포인트는 앱에서 미리 알림을 보내드리니 놓치지 마세요.'
    },
    {
      category: 'pets',
      question: '펫은 어떻게 획득하고 키울 수 있나요?',
      answer: '회원가입 시 첫 번째 펫(고양이, 강아지, 토끼 중 선택)을 무료로 받을 수 있습니다. 포인트로 새로운 펫을 구매하거나, 먹이와 장난감으로 펫을 키워 레벨업시킬 수 있어요.',
      popular: true
    },
    {
      category: 'pets',
      question: '펫 레벨업의 혜택은 무엇인가요?',
      answer: '펫의 레벨이 올라갈수록 포인트 획득량이 증가하고, 특수 능력이 해금됩니다. 예를 들어 고양이는 "야간 탐지" 능력으로 밤에도 포인트를 자동 수집하고, 강아지는 "충성심" 능력으로 보너스 포인트를 제공합니다.'
    },
    {
      category: 'pets',
      question: '펫 스킨은 어떻게 바꾸나요?',
      answer: '펫 메뉴에서 "꾸미기"를 선택하면 보유한 스킨과 액세서리를 확인하고 변경할 수 있습니다. 새로운 스킨은 포인트샵에서 구매하거나 이벤트를 통해 획득 가능합니다.'
    },
    {
      category: 'technical',
      question: 'GPS가 정확하게 작동하지 않아요',
      answer: '설정에서 머니또 앱의 위치 권한이 "항상 허용"으로 설정되어 있는지 확인해주세요. Android는 설정>앱>머니또>권한, iOS는 설정>개인정보 보호>위치 서비스에서 확인할 수 있습니다.'
    },
    {
      category: 'technical',
      question: '앱이 자주 꺼져요',
      answer: '앱 버전을 최신으로 업데이트하고, 휴대폰을 재시작해보세요. 문제가 지속되면 고객센터로 기기 정보(모델명, OS 버전)와 함께 문의해주시면 빠르게 해결해드리겠습니다.'
    },
    {
      category: 'payment',
      question: '실수로 잘못 구매했는데 환불 가능한가요?',
      answer: '구매 후 7일 이내에 미사용 상태라면 환불 가능합니다. 앱 내 "구매내역"에서 환불 신청을 하시거나 고객센터로 문의해주세요. 단, 이미 사용한 기프티콘은 환불이 불가합니다.'
    },
    {
      category: 'payment',
      question: '결제 수단은 어떤 것들이 있나요?',
      answer: '신용카드, 체크카드, 휴대폰 소액결제, 계좌이체, 카카오페이, 네이버페이, 페이코 등 다양한 결제 수단을 지원합니다.'
    },
    {
      category: 'privacy',
      question: '위치 정보가 안전하게 보호되나요?',
      answer: '네, 사용자의 개인정보와 위치 정보는 철저히 보호됩니다. 위치 정보는 포인트 생성을 위해서만 사용되며, 제3자에게 공유되지 않습니다. 또한 암호화되어 저장되므로 안전합니다.',
      popular: true
    },
    {
      category: 'technical',
      question: '오프라인에서도 사용할 수 있나요?',
      answer: '포인트 수집과 지도 기능을 위해서는 인터넷 연결이 필요합니다. 하지만 펫 관리, 인벤토리 확인, 이미 다운로드된 콘텐츠는 오프라인에서도 이용 가능합니다.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFaqs = faqs.filter(faq => faq.popular);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">자주 묻는 질문</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            머니또 이용 중 궁금한 점들을 빠르게 해결해보세요
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="질문을 검색해보세요..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-lg"
            />
          </div>
        </motion.div>

        {/* Popular FAQs */}
        {searchTerm === '' && selectedCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Lightbulb className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">인기 질문</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {popularFaqs.map((faq, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl text-left border border-yellow-200 hover:border-yellow-300 transition-colors"
                  onClick={() => {
                    const faqIndex = faqs.findIndex(f => f.question === faq.question);
                    setOpenFaq(faqIndex);
                    setSelectedCategory('all');
                  }}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-gray-900 font-medium pr-2">{faq.question}</p>
                    <span className="text-yellow-500 text-xs bg-yellow-100 px-2 py-1 rounded-full">인기</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.5, duration: 0.4 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start space-x-3">
                  {faq.popular && (
                    <span className="text-yellow-500 text-xs bg-yellow-100 px-2 py-1 rounded-full mt-1">인기</span>
                  )}
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
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
                    <div className="px-6 pb-5 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-500">다른 검색어를 시도하거나 카테고리를 변경해보세요</p>
          </motion.div>
        )}

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">원하는 답변을 찾지 못하셨나요?</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            FAQ에서 해결되지 않는 문제가 있으시면 고객센터를 통해 직접 문의해주세요
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 py-3 px-8 rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300"
          >
            고객센터 문의하기
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;