import { motion } from "framer-motion";
import { MapPin, Coins, Gift, Star } from "lucide-react";

const ServiceSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "실시간 위치 기반 탐험",
      description:
        "당신의 위치를 중심으로 지도상에 무작위로 생성되는 포인트를 찾아 모험을 떠나보세요",
      gradient: "from-primary-500 to-accent-500",
    },
    {
      icon: Coins,
      title: "포인트 수집 시스템",
      description:
        "지도상의 포인트를 수집하고 축적하여 다양한 아이템과 기프티콘으로 교환하세요",
      gradient: "from-primary-400 to-primary-600",
    },
    {
      icon: Gift,
      title: "리워드 스토어",
      description:
        "모은 포인트로 실제 기프티콘, 할인쿠폰, 다양한 아이템을 구매할 수 있습니다",
      gradient: "from-accent-500 to-accent-600",
    },
    {
      icon: Star,
      title: "펫 육성 & 꾸미기",
      description:
        "귀여운 펫을 키우고 다양한 스킨과 아이템으로 나만의 펫을 꾸며보세요",
      gradient: "from-primary-600 to-accent-400",
    },
  ];

  return (
    <section
      id="service"
      className="min-h-screen py-20 scroll-section"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 80%, rgba(42, 204, 200, 0.04) 95%, rgba(42, 204, 200, 0.08) 100%)",
        fontFamily: "'Fredoka', 'LINESeedKR', sans-serif",
        fontWeight: "600"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 mt-8"
        >
          <h2 className="font-bold text-gray-900 mb-4 leading-loose">
            <span
              className="text-xl md:text-2xl lg:text-3xl"
              style={{ color: "#4E5A67" }}
            >
              쉬고 계세요
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl gradient-text shimmer">
              모두 펫이 대신 해줘요.
            </span>
          </h2>
        </motion.div>

        {/* Interactive Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden mt-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                  style={{ lineHeight: "1.3", color: "#333333" }}
                >
                  지도에 놓인 리워드
                  <br />
                  <span className="gradient-text shimmer">펫이 알아서 획득</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  지도에 쌓여 있는 수많은 리워드, 펫을 보내기만 하면 자동으로
                  획득해요.
                </p>
              </motion.div>
            </div>

            {/* Right side - Interactive Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative pb-8"
            >
              <div className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-3xl p-8 ">

                {/* Main visual content */}
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      펫 활동 현황
                    </h4>
                    <p className="text-sm text-gray-600">실시간 수집 상태</p>
                  </div>

                  {/* Stats display */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        24
                      </div>
                      <div className="text-xs text-gray-600">
                        오늘 수집한 리워드
                      </div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-accent-600 mb-1">
                        847
                      </div>
                      <div className="text-xs text-gray-600">누적 포인트</div>
                    </div>
                  </div>

                  {/* Activity indicator */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-3 h-3 bg-green-400 rounded-full"
                    ></motion.div>
                    <span className="text-sm font-medium text-gray-700">
                      펫이 활동 중입니다
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="bg-white/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "78%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 1.5 }}
                    ></motion.div>
                  </div>
                  <div className="text-xs text-gray-600 text-center mt-2">
                    다음 리워드까지 22%
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Feature Sections */}
        <div className="space-y-20 mt-20">
          {/* Section 2: Document Processing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left side - Visual first */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-3xl p-8 ">

                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      다양한 리워드 형태
                    </h4>
                    <p className="text-sm text-gray-600">
                      펫이 수집하는 혜택들
                    </p>
                  </div>

                  {/* Reward types grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">🎁</div>
                      <div className="text-xs font-medium text-gray-700">
                        기프티콘
                      </div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">💰</div>
                      <div className="text-xs font-medium text-gray-700">
                        포인트
                      </div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">🎫</div>
                      <div className="text-xs font-medium text-gray-700">
                        쿠폰
                      </div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">⭐</div>
                      <div className="text-xs font-medium text-gray-700">
                        특별혜택
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-emerald-700">
                        자동 분류 중
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                style={{ lineHeight: "1.3", color: "#333333" }}
              >
                걷지 않아도
                <br />
                <span className="gradient-text shimmer">만보기 포인트 적립</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                집에 누워있어도 채워지는 만보기, 펫이 대신 걸어줘요.
              </p>
            </motion.div>
          </motion.div>

          {/* Section 3: AI Model Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                style={{ lineHeight: "1.3", color: "#333333" }}
              >
                매일 쓰다듬을수록
                <br />
                <span className="gradient-text shimmer">올라가는 친밀도</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                펫과 친해질수록 더욱 많은 보상을 얻어요.
              </p>
            </motion.div>

            {/* Right side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-3xl p-8 ">

                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      AI 모델 성능
                    </h4>
                    <p className="text-sm text-gray-600">실시간 분석 결과</p>
                  </div>

                  {/* Performance metrics */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        위치 정확도
                      </span>
                      <span className="text-sm font-bold text-purple-600">
                        99.7%
                      </span>
                    </div>
                    <div className="bg-white/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "99.7%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 1.5 }}
                      ></motion.div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        패턴 인식률
                      </span>
                      <span className="text-sm font-bold text-indigo-600">
                        97.2%
                      </span>
                    </div>
                    <div className="bg-white/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "97.2%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 1.5 }}
                      ></motion.div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        예측 정확도
                      </span>
                      <span className="text-sm font-bold text-purple-600">
                        94.8%
                      </span>
                    </div>
                    <div className="bg-white/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "94.8%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2, duration: 1.5 }}
                      ></motion.div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-purple-700">
                        AI 학습 중
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Section 4: Platform Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left side - Visual first */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-3xl p-8 ">

                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      연동 플랫폼
                    </h4>
                    <p className="text-sm text-gray-600">
                      하나의 플랫폼에서 관리
                    </p>
                  </div>

                  {/* Platform logos/names */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-sm font-semibold text-gray-800 mb-1">
                        카카오페이
                      </div>
                      <div className="text-xs text-gray-600">포인트 연동</div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-sm font-semibold text-gray-800 mb-1">
                        네이버페이
                      </div>
                      <div className="text-xs text-gray-600">결제 연동</div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-sm font-semibold text-gray-800 mb-1">
                        토스
                      </div>
                      <div className="text-xs text-gray-600">계좌 연동</div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-sm font-semibold text-gray-800 mb-1">
                        +더보기
                      </div>
                      <div className="text-xs text-gray-600">확장 지원</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-orange-700">
                        연동 활성화
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                style={{ lineHeight: "1.3", color: "#333333" }}
              >
                펫이 많을수록
                <br />
                <span className="gradient-text shimmer">더욱 풍성한 보상 획득</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                펫이 많아지면 포인트도, 리워드도, 펫과 스킨도 더욱 많이 받아요.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
