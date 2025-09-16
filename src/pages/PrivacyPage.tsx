import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">개인정보처리방침</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">개인정보 수집 및 이용 동의서</h2>
            
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">1. 총칙</h3>
            <p>
              (주)유니버(이하 "회사"라 합니다)는 이용자의 개인정보를 매우 소중히 생각합니다. 이용자께서 알려주신 개인정보는 수집, 이용 동의를 받은 범위 내에서, 단말기 정보 등에 접근한다는 것을 고지, 승인 후 수집됩니다. 회사는 개인정보 보호 관련 법령에 따라 고객의 개인정보를 보호하고 이와 관련된 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립 및 공개합니다.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">2. 개인정보의 처리목적</h3>
            <p>
              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음 목적 이외의 용도로 이용되지 아니하며, 이용 목적이 변경되는 경우에는 법률에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">1. 고충처리</h4>
            <p>
              민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락 및 통지, 처리결과 통보 등의 목적으로 개인정보를 처리합니다.
            </p>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">2. 재화 또는 서비스 제공</h4>
            <p>
              서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금결제 및 정산, 포인트 적립 및 이용, 물품발송, 채권추심 등을 목적으로 개인정보를 처리합니다.
            </p>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">3. 머니또 서비스 회원 가입 및 관리</h4>
            <p>
              회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별 및 인증, 회원자격 유지와 관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 각종 고지 및 통지, 고충처리 등을 목적으로 개인정보를 처리합니다.
            </p>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">4. 마케팅 및 광고</h4>
            <p>
              앱 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계, 이벤트 등 광고성 정보 전달 등을 목적으로 개인정보를 처리합니다.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">3. 수집하는 개인정보의 항목</h3>
            <p>
              1. 회사는 회원가입, 상담, 서비스 제공 등을 위해 아래와 같은 개인정보를 수집하고 있습니다. 해당 서비스의 본질적 기능을 수행하기 위한 정보는 필수항목으로서 수집하며 이용자가 그 정보를 회사에 제공하지 않는 경우 서비스 이용에 제한이 가해질 수 있지만, 선택항목으로 수집되는 정보의 경우에는 이를 입력하지 않은 경우에도 서비스 이용제한은 없습니다.
            </p>
            <p>
              2. 수집항목, 이용목적, 보유기간
            </p>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">① 회원 기반 서비스 제공</h4>
            <p>
              회사는 회원 기반 서비스 제공을 위해 가입시 다음과 같이 개인정보를 수집, 이용합니다. 그리고 인터넷 서비스 이용과정에서 IP 주소, 쿠키, MAC 주소, 서비스 이용 기록, 방문기록, 불량 이용기록 등이 자동으로 생성되어 수집될 수 있습니다.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-4 mb-4">
              <p><strong>수집 항목:</strong> 이메일, 이름, 생년월일, 휴대폰번호, 본인확인값(CI, DI) 또는 아이핀인증결과, ADID/IDFA</p>
              <p><strong>수집 및 이용목적:</strong> 본인 확인 및 가입의사 확인, 서비스 제공, 신규 서비스 안내, 상담 및 문의처리, 맞춤 서비스 제공, 광고 제공</p>
            </div>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">② SNS 회원가입 서비스 제공</h4>
            <p>
              회사는 SNS 회원가입 서비스 제공을 위해 다음과 같이 개인정보를 수집, 이용합니다.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-4 mb-4">
              <p><strong>수집 항목:</strong> 소셜 계정 아이디(이메일), 소셜 계정에서 공개 설정한 정보, 개인정보 수정 페이지에 입력한 정보(소셜 계정에서 공개 설정한 정보 제외), 본인확인값(CI, DI) 또는 아이핀인증결과, ADID/IDFA</p>
              <p><strong>수집 및 이용목적:</strong> 본인 확인 및 가입의사 확인, 서비스 제공, 신규 서비스 안내, 상담 및 문의처리, 맞춤 서비스 제공, 광고 제공</p>
            </div>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">③ 보유기간</h4>
            <p>
              회원탈퇴 후 60일 이내 또는 법령에 따른 보존기간(단, 부정이용 확인 시 회원탈퇴 후 6개월)
            </p>

            <p className="mt-4">
              ④ 기타 뉴스레터 발송, 각종 이벤트, 마케팅, 설문조사 등을 위하여 해당 발송에 대한 수신동의를 받아 이메일을 수집하고 있으며, 각종 이벤트시 그 내용에 따라 추가 항목들을 제공받아 이용하고 있습니다. 그리고 중복가입방지, 문의사항처리, 부정 이용자 제재, 포인트 정산, 공지사항 전달, 분쟁조정을 위한 기록보존 등 회원 관리와 신규 서비스 개발을 위한 통계적 분석을 위해 서비스 이용기록 등의 사항들을 저장하고 있습니다.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">3. 개인정보 수집방법</h3>
            <p>
              회사는 온라인 회원가입, 회원정보수정, 서면양식, 전화 또는 팩스, 서비스 이용, 제휴사로부터의 제공, 단말기를 통한 자동수집, 이메일과 같은 방법을 통하여 개인정보를 수집합니다. 이용자의 사상, 신념, 과거의 병력 등 개인의 권리, 이익이나 사생활을 뚜렷하게 침해할 우려가 있는 민감정보는 수집하지 않으며, 회사는 이용자의 개인정보를 수집할 때, 사전에 해당 사실을 이용자에게 알리고 동의를 구합니다. 다만, 이용자가 요구하는 서비스를 제공하는 과정에서 이를 이행하기 위하여 필요한 개인정보로서 경제적, 기술적 사유로 통상적인 동의를 받는 것이 뚜렷하게 곤란한 경우, 서비스 제공에 따른 요금정산을 위하여 필요한 경우, 기타 정보통신망법 또는 다른 법률에 특별한 규정이 있는 경우에는 동의를 받지 않고 이용자의 개인정보를 수집할 수 있습니다.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">4. 개인정보의 제3자에 대한 제공</h3>
            <p>
              회사는 회원이 이용과정 등에서 따로 동의하는 경우나 법령에 규정된 경우를 제외하고는 목적 범위를 초과하여 회원의 개인정보를 이용하거나 제3자에게 제공 또는 공유하지 않습니다. 그러나 제휴컨텐츠 구매 등 회사 서비스에 제3자의 서비스가 연결되어 제공되는 경우에는 이용을 위해 필요한 최소한의 범위 내에서 여러분의 동의를 얻은 후에 개인정보를 제3자에게 제공할 수 있습니다. 연결 서비스를 위한 개인정보의 제3자 제공 내용은 다음과 같습니다.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mt-4 mb-4">
              <p><strong>제공받는 자:</strong> (기프티콘 상품 제공 업체)주식회사 허니콘</p>
              <p><strong>목적:</strong> 서비스 제공(기프티콘 발행 및 전송)</p>
              <p><strong>항목:</strong> (기프티콘) 구매 시 구매자 정보(이름, 휴대폰번호), 구매상품정보</p>
              <p><strong>보유기간:</strong> 업무목적 달성 후 파기(단, 타법령에 따라 법령에서 규정한 기간동안 보존)</p>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">5. 개인정보의 파기 절차 및 방법</h3>
            <p>
              회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
            </p>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">1. 파기절차</h4>
            <p>
              이용자가 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져 (종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 (보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.
            </p>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">2. 파기기한</h4>
            <p>
              이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유 기간의 종료일로부터 7 영업일 이내에 파기하며 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 7 영업일 이내에 그 개인정보를 파기합니다.
            </p>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">3. 파기방법</h4>
            <p>
              종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하며, 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">6. 이용자 및 법정대리인의 권리와 그 행사방법</h3>
            <p>회사는 이용자 및 법정대리인의 권리를 다음과 같이 보호하고 있습니다.</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>언제든지 자신의 개인정보를 조회하고 수정할 수 있습니다.</li>
              <li>언제든지 개인정보 제공에 관한 동의철회/회원가입 해지를 요청할 수 있습니다.</li>
              <li>정확한 개인정보의 이용 및 제공을 위해 이용자가 개인정보 수정 진행 시 수정이 완료될 때까지 이용자의 개인정보는 이용되거나 제공되지 않습니다. 이미 제3자에게 제공된 경우에는 지체 없이 제공받은 자에게 사실을 알려 수정이 이루어질 수 있도록 하겠습니다.</li>
            </ul>

            <p className="mt-4">
              권리 행사는 고객센터에서 할 수 있으며 서면, 전화, 전자우편, 등을 통해서도 하실 수 있습니다.
            </p>

            <p className="mt-4">
              서면, 전화, 전자우편, 등을 통해 요청하는 경우 개인정보보호법 시행규칙 별지 제8호 서식에 따라 개인정보(열람,정정,삭제,처리정지) 요구서를 제출하시면 이에 대해 지체없이(10일 이내) 조치해 드릴 것 입니다. 이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한, 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
            </p>

            <p className="mt-4">
              회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 "3. 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
            </p>

            <p className="mt-4">
              또한 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">7. 개인정보의 기술적, 관리적 보호대책</h3>
            <p>
              회사는 이용자들의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고 있습니다.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>관리적 조치: 내부관리계획 수립 시행, 정기적 직원 교육 등</li>
              <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리 등</li>
              <li>물리적 조치: 전산실, 자료보관실 등의 접근통제 등</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">8. 개인정보에 관한 민원서비스</h3>
            <p>
              회사는 개인정보보호 전담 조직 운영을 통하여 개인정보 처리방침의 이행사항 및 담당자의 준수여부를 확인하고 있으며, 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보보호책임자를 지정하고 있습니다.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mt-4 mb-4">
              <p><strong>개인정보보호 책임자 및 담당부서</strong></p>
              <p>이름: 김태완</p>
              <p>직책: 정보보호 이사</p>
              <p>이메일: ktw@univer.vision</p>
              <p>문의: univerfirm@gmail.com</p>
            </div>

            <p className="mt-4">
              또한 개인정보가 침해되어 이에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하셔서 도움을 받으실 수 있습니다.
            </p>

            <div className="overflow-x-auto mt-4 mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">분류</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">개인정보침해 신고센터</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">대검찰청 사이버수사과</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">경찰청 사이버안전국</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">연락처</td>
                    <td className="border border-gray-300 px-4 py-2">
                      (국번없이) 118<br />
                      https://privacy.kisa.or.kr
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      (국번없이) 1301<br />
                      http://www.spo.go.kr
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      (국번없이) 182<br />
                      http://cyberbureau.police.go.kr/
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">9. 개인위치정보의 처리</h3>
            <p>
              1. 회사는 개인위치정보를 다음과 같이 처리 합니다. 위치기반 서비스 이용약관은 머니또 앱 '마이페이지' &gt; 서비스 정보 &gt; '위치기반 서비스 이용약관'에서 확인하실 수 있습니다.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mt-4 mb-4">
              <p><strong>개인위치정보의 처리목적 및 보유기간:</strong> 회사는 포인트 획득을 비롯한 서비스 제공을 위하여 개인위치정보 서비스를 제공하나 개인위치정보를 일회성 또는 임시로 이용하며, 저장하거나 보유하지 않습니다.</p>
              <p><strong>개인위치정보의 제3자 제공 및 통보에 관한 사항:</strong> 회사는 이용자의 사전 동의 없이 개인위치정보를 제3자에게 제공하지 않으며, 이용자가 지정한 제3자에게 개인위치정보를 제공하는 경우 매회 개인위치정보주체에게 제공받는 자, 제공일시 및 제공목적을 즉시 통보합니다.</p>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">10. 기타 개인정보 처리에 관한 방침</h3>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">1. 부가서비스 이용에 따른 개인정보 처리방침</h4>
            <p>
              회사가 제공하는 부가서비스 중 회원가입이 필요한 서비스의 경우 개인정보 처리방침에 대한 동의를 따로 받습니다.
            </p>

            <h4 className="text-base font-bold text-gray-800 mt-4 mb-2">2. 개인 아이디와 비밀번호 관리</h4>
            <p>
              이용자가 사용하고 계시는 계정 이메일과 비밀번호는 원칙적으로 이용자만이 사용하도록 되어 있습니다. 회사의 고의 또는 과실이 없는 경우에, 이용자의 계정 이메일과 비밀번호 도용 또는 기타 타인의 사용으로 인해 발생된 문제에 대하여 회사가 책임지지 않습니다. 어떠한 경우에도 비밀번호는 타인에게 알려 주지 마시고 로그온 상태에서는 주위의 다른 사람에게 개인정보가 유출되지 않도록 특별한 주의를 기울여 주시기 바랍니다. 타인의 개인정보를 도용하여 회원가입 또는 계약이 확인되었을 경우에는 이용계약이 일방적으로 해지될 수 있으며, 주민등록법에 의해 3년 이하의 징역 또는 1천만원 이하의 벌금이 부과될 수 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;