import { motion } from "framer-motion";
import service01 from "../assets/service01.png";
import service02 from "../assets/service02.png";

const ServiceSectionPart1 = () => {
  return (
    <section
      id="service-part1"
      className="h-screen py-20 scroll-section flex items-center"
      style={{
        background: "white",
        fontFamily: "'Fredoka', 'LINESeedKR', sans-serif",
        fontWeight: "600"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        <div className="space-y-32">
          {/* Section 1: 지도에 놓인 리워드 */}
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
                className="relative pb-8 max-w-lg ml-auto"
              >
                <div className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-3xl p-1 flex items-center justify-center h-96">
                  {/* Service Image */}
                  <img 
                    src={service01}
                    alt="지도에 놓인 리워드"
                    className="w-full h-full object-contain rounded-3xl max-w-none"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Section 2: 걷지 않아도 만보기 포인트 */}
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
                <div className="relative bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-3xl p-1 flex items-center justify-center h-96">
                  {/* Service Image */}
                  <img 
                    src={service02}
                    alt="걷지 않아도 만보기 포인트"
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
                  <p className="text-lg text-gray-600 leading-relaxed">
                    실제로 걷지 않아도 펫이 대신 걸어서 만보기 포인트를
                    적립해드려요.
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

export default ServiceSectionPart1;