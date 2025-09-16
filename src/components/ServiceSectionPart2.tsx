import { motion } from "framer-motion";
import service03 from "../assets/service03.png";
import service04 from "../assets/service04.png";

const ServiceSectionPart2 = () => {
  return (
    <section
      id="service-part2"
      className="h-screen py-20 scroll-section flex items-center"
      style={{
        background: "white",
        fontFamily: "'Fredoka', 'LINESeedKR', sans-serif",
        fontWeight: "600"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-32">
          {/* Section 3: 매일 쓰다듬을수록 올라가는 친밀도 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Content */}
              <div className="relative z-10 max-w-lg">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
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
                    펫과의 친밀도가 높을수록 더 많은 리워드를 수집해올 수 있어요.
                  </p>
                </motion.div>
              </div>

              {/* Right side - Interactive Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative pb-8 max-w-lg ml-auto"
              >
                <div className="relative bg-gradient-to-br from-purple-50/80 to-indigo-50/80 backdrop-blur-sm rounded-3xl p-1 flex items-center justify-center h-96">
                  {/* Service Image */}
                  <img 
                    src={service03}
                    alt="매일 쓰다듬을수록 올라가는 친밀도"
                    className="w-full h-full object-contain rounded-3xl max-w-none"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Section 4: 펫이 많을수록 더욱 풍성한 보상 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Interactive Visual */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-lg"
              >
                <div className="relative bg-gradient-to-br from-orange-50/80 to-amber-50/80 backdrop-blur-sm rounded-3xl p-1 flex items-center justify-center h-96">
                  {/* Service Image */}
                  <img 
                    src={service04}
                    alt="펫이 많을수록 더욱 풍성한 보상 획득"
                    className="w-full h-full object-contain rounded-3xl max-w-none"
                  />
                </div>
              </motion.div>

              {/* Right side - Content */}
              <div className="relative z-10 max-w-lg ml-24">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                    style={{ lineHeight: "1.3", color: "#333333" }}
                  >
                    펫이 많을수록
                    <br />
                    <span className="gradient-text shimmer">더욱 풍성한 보상 획득</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    여러 마리의 펫을 키우면서 동시에 다양한 리워드를 수집하고
                    더 큰 보상을 받아보세요.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionPart2;