import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const AnnouncementsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'update' | 'event' | 'maintenance'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const announcements = [
    {
      id: 1,
      category: 'update',
      date: '2024.03.15',
      title: '머니또 v2.0 업데이트 출시',
      content: '새로운 펫 시스템과 향상된 지도 인터페이스가 추가되었습니다. 더욱 다양한 펫 캐릭터와 커스터마이징 옵션을 만나보세요.',
      important: true,
      views: 1250
    },
    {
      id: 2,
      category: 'event',
      date: '2024.03.10',
      title: '신규 리워드 아이템 추가',
      content: '인기 브랜드의 기프티콘과 할인쿠폰이 새롭게 추가되었습니다. 스타벅스, 교보문고, 올리브영 등 다양한 브랜드의 혜택을 만나보세요.',
      important: false,
      views: 892
    },
    {
      id: 3,
      category: 'maintenance',
      date: '2024.03.05',
      title: '정기 서버 점검 안내 (완료)',
      content: '더 나은 서비스 제공을 위한 정기 점검이 2024년 3월 6일 새벽 2시~4시에 진행되었습니다. 점검이 완료되어 정상 서비스 중입니다.',
      important: false,
      views: 634
    },
    {
      id: 4,
      category: 'event',
      date: '2024.02.28',
      title: '봄맞이 더블 포인트 이벤트 (진행중)',
      content: '3월 한 달간 모든 포인트 획득량이 2배로 증가합니다! 이 기회에 더 많은 포인트를 모아 원하는 리워드를 획득해보세요. 이벤트 기간: ~3월 31일',
      important: true,
      views: 2341
    },
    {
      id: 5,
      category: 'update',
      date: '2024.02.20',
      title: '개인정보 처리방침 개정 안내',
      content: '개인정보보호법 개정에 따라 개인정보 처리방침이 일부 변경되었습니다. 주요 변경사항을 확인해주세요.',
      important: false,
      views: 543
    },
    {
      id: 6,
      category: 'update',
      date: '2024.02.15',
      title: '새로운 펫 캐릭터 출시',
      content: '귀여운 판다와 펭귄 캐릭터가 새롭게 추가되었습니다. 각각 고유한 특수 능력을 가지고 있으니 꼭 확인해보세요!',
      important: false,
      views: 1876
    },
    {
      id: 7,
      category: 'event',
      date: '2024.02.12',
      title: '밸런타인 데이 특별 이벤트',
      content: '밸런타인 데이를 맞아 핑크 하트 스킨과 특별한 펫 액세서리를 출시합니다. 2월 14일까지 한정 판매됩니다!',
      important: false,
      views: 1234
    },
    {
      id: 8,
      category: 'update',
      date: '2024.02.08',
      title: '앱 성능 개선 업데이트',
      content: '앱 실행 속도가 30% 향상되었고, 배터리 소모량을 20% 줄였습니다. 더 쾌적한 머니또 경험을 즐겨보세요.',
      important: false,
      views: 987
    },
    {
      id: 9,
      category: 'event',
      date: '2024.02.05',
      title: '신규 브랜드 기프티콘 추가',
      content: '메가커피, 컴포즈커피, 베스킨라빈스 기프티콘이 새롭게 추가되었습니다. 다양한 브랜드의 혜택을 누려보세요!',
      important: false,
      views: 2156
    },
    {
      id: 10,
      category: 'maintenance',
      date: '2024.02.01',
      title: '결제 시스템 점검 안내',
      content: '2월 2일 오전 1시부터 3시까지 결제 시스템 점검이 진행됩니다. 해당 시간 동안 기프티콘 구매가 제한될 수 있습니다.',
      important: false,
      views: 456
    },
    {
      id: 11,
      category: 'update',
      date: '2024.01.28',
      title: '펫 레벨 상한선 확장',
      content: '펫의 최대 레벨이 50에서 80으로 확장되었습니다. 더 강력해진 펫과 함께 더 많은 포인트를 획득해보세요!',
      important: false,
      views: 3421
    },
    {
      id: 12,
      category: 'event',
      date: '2024.01.25',
      title: '설날 연휴 특별 보너스',
      content: '설날 연휴 동안 모든 포인트 획득량이 1.5배로 증가합니다! 1월 29일부터 2월 12일까지 진행됩니다.',
      important: false,
      views: 4567
    },
    {
      id: 13,
      category: 'update',
      date: '2024.01.22',
      title: '지도 인터페이스 개선',
      content: '지도에서 포인트를 찾기 더 쉬워졌습니다. 새로운 필터 기능과 확대/축소 기능이 추가되었습니다.',
      important: false,
      views: 1765
    },
    {
      id: 14,
      category: 'event',
      date: '2024.01.18',
      title: '친구 추천 이벤트',
      content: '친구를 초대하면 초대한 사람과 가입한 사람 모두에게 1000포인트를 지급합니다. 무제한으로 참여 가능합니다!',
      important: false,
      views: 5432
    },
    {
      id: 15,
      category: 'maintenance',
      date: '2024.01.15',
      title: '데이터베이스 최적화 점검 완료',
      content: '서버 안정성 향상을 위한 데이터베이스 최적화 작업이 완료되었습니다. 앱 응답 속도가 더욱 빨라졌습니다.',
      important: false,
      views: 789
    },
    {
      id: 16,
      category: 'update',
      date: '2024.01.10',
      title: '푸시 알림 설정 개선',
      content: '이제 포인트 획득, 펫 상태 변화, 이벤트 알림을 각각 개별적으로 설정할 수 있습니다. 설정 메뉴에서 확인해보세요.',
      important: false,
      views: 2341
    }
  ];

  const categories = [
    { id: 'all', name: '전체', count: announcements.length },
    { id: 'update', name: '업데이트', count: announcements.filter(a => a.category === 'update').length },
    { id: 'event', name: '이벤트', count: announcements.filter(a => a.category === 'event').length },
    { id: 'maintenance', name: '점검', count: announcements.filter(a => a.category === 'maintenance').length },
  ];

  const filteredAnnouncements = selectedCategory === 'all' 
    ? announcements 
    : announcements.filter(a => a.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'update': return 'bg-blue-100 text-blue-700';
      case 'event': return 'bg-green-100 text-green-700';
      case 'maintenance': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'update': return '업데이트';
      case 'event': return '이벤트';
      case 'maintenance': return '점검';
      default: return '공지';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900">공지사항</h1>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Announcements List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-xl overflow-hidden"
        >
          {filteredAnnouncements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.3, duration: 0.4 }}
              className={`border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 cursor-pointer ${
                index === 0 ? '' : ''
              }`}
            >
              <div className="px-6 py-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(announcement.category)}`}>
                      {getCategoryName(announcement.category)}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">{announcement.date}</span>
                </div>
                
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h3 className="text-gray-900 font-medium text-base mb-2 leading-tight">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {announcement.content}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAnnouncements.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-xl"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
            </div>
            <p className="text-gray-500">선택한 카테고리에 공지사항이 없습니다.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementsPage;