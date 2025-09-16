import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '50K+', label: '활성 사용자' },
    { number: '1M+', label: '수집된 포인트' },
    { number: '10K+', label: '교환된 리워드' },
    { number: '4.8', label: '앱스토어 평점' },
  ];

  const values = [
    {
      icon: Target,
      title: '혁신적인 경험',
      description: '위치 기반 게임화를 통해 일상에 새로운 재미를 제공합니다'
    },
    {
      icon: Users,
      title: '사용자 중심',
      description: '사용자의 편의와 만족을 최우선으로 생각하며 서비스를 개발합니다'
    },
    {
      icon: Lightbulb,
      title: '창의적 솔루션',
      description: '기술과 창의력을 결합하여 독창적인 솔루션을 제공합니다'
    },
    {
      icon: Award,
      title: '품질 보장',
      description: '높은 품질의 서비스로 사용자에게 최상의 경험을 선사합니다'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
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
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              머니또
            </span>
            를 만드는 사람들
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            우리는 일상 속에서 즐거움과 보상을 발견할 수 있는 혁신적인 모바일 경험을 만들어갑니다
          </p>
        </motion.div>

        {/* Company story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">우리의 미션</h3>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                머니또는 위치 기반 기술과 게임화 요소를 결합하여, 사용자들이 일상 생활 속에서 
                자연스럽게 즐거움과 혜택을 얻을 수 있는 플랫폼을 제공합니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                우리는 단순한 포인트 적립을 넘어서, 사용자와 그들의 가상 펫이 함께 모험을 떠나며 
                성장하는 독특한 경험을 선사하고자 합니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                기술의 발전이 우리의 삶을 더욱 풍요롭게 만들 수 있다고 믿으며, 
                이를 통해 모든 사용자가 특별한 순간을 경험할 수 있도록 노력하고 있습니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-6xl mb-6">🎯</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">혁신을 통한 가치 창출</h4>
                <p className="text-gray-600">
                  최첨단 기술과 창의적인 아이디어를 결합하여 사용자에게 
                  새로운 형태의 디지털 경험을 제공합니다.
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-200 rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 shadow-lg mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">숫자로 보는 머니또</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company values */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-900 mb-12"
          >
            우리의 핵심 가치
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;