import React, { useState } from "react";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

// Import pet images
import pet01 from "../assets/pet01.png";
import pet02 from "../assets/pet02.png";
import pet03 from "../assets/pet03.png";
import pet04 from "../assets/pet04.png";
import pet05 from "../assets/pet05.png";
import pet06 from "../assets/pet06.png";
import pet07 from "../assets/pet07.png";
import pet08 from "../assets/pet08.png";
import pet09 from "../assets/pet09.png";
import pet10 from "../assets/pet10.png";
import pet11 from "../assets/pet11.png";
import pet12 from "../assets/pet12.png";
import pet13 from "../assets/pet13.png";
import pet14 from "../assets/pet14.png";
import pet15 from "../assets/pet15.png";
import pet16 from "../assets/pet16.png";
import pet17 from "../assets/pet17.png";

// Import stat icons
import heartIcon from "../assets/heart.png";
import thunderIcon from "../assets/thunder.png";
import fireIcon from "../assets/fire.png";

// Import skin images
import skin01 from "../assets/skin01.png";
import skin02 from "../assets/skin02.png";
import skin03 from "../assets/skin03.png";
import skin04 from "../assets/skin04.png";
import skin05 from "../assets/skin05.png";

// Import snow skin images
import skin_snow01 from "../assets/skin_snow01.png";
import skin_snow02 from "../assets/skin_snow02.png";
import skin_snow03 from "../assets/skin_snow03.png";
import skin_snow04 from "../assets/skin_snow04.png";
import skin_snow05 from "../assets/skin_snow05.png";
import skin_snow06 from "../assets/skin_snow06.png";
import skin_snow07 from "../assets/skin_snow07.png";

// Import Lunar New Year skin images
import skin_seol01 from "../assets/skin_seol01.png";
import skin_seol02 from "../assets/skin_seol02.png";
import skin_seol03 from "../assets/skin_seol03.png";
import skin_seol04 from "../assets/skin_seol04.png";
import skin_seol05 from "../assets/skin_seol05.png";
import skin_seol06 from "../assets/skin_seol06.png";
import skin_seol07 from "../assets/skin_seol07.png";
import skin_seol08 from "../assets/skin_seol08.png";
import skin_seol09 from "../assets/skin_seol09.png";

// Import fashion skin images
import skin_fashion01 from "../assets/skin_fashion01.png";
import skin_fashion02 from "../assets/skin_fashion02.png";
import skin_fashion03 from "../assets/skin_fashion03.png";
import skin_fashion04 from "../assets/skin_fashion04.png";
import skin_fashion05 from "../assets/skin_fashion05.png";
import skin_fashion06 from "../assets/skin_fashion06.png";
import skin_fashion07 from "../assets/skin_fashion07.png";

// Import space skin images
import skin_space01 from "../assets/skin_space01.png";
import skin_space02 from "../assets/skin_space02.png";
import skin_space03 from "../assets/skin_space03.png";
import skin_space04 from "../assets/skin_space04.png";
import skin_space05 from "../assets/skin_space05.png";
import skin_space06 from "../assets/skin_space06.png";
import skin_space07 from "../assets/skin_space07.png";
import skin_space08 from "../assets/skin_space08.png";
import skin_space09 from "../assets/skin_space09.png";

const PetSection = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const petFeatures = [
    {
      image: pet01,
      name: "터보",
      description: "귀여운 고양이 펫",
      level: 15,
      bgGradient: "linear-gradient(135deg, #B9E8A7 0%, #8FD678 100%)",
      nameTagColor: "#A7D897",
      textColor: "#4A6741",
      stats: { health: 85, speed: 92, power: 78 },
    },
    {
      image: pet02,
      name: "토리",
      description: "충성스러운 강아지 펫",
      level: 23,
      bgGradient: "linear-gradient(135deg, #FFEEEF 0%, #FFB3BA 100%)",
      nameTagColor: "#FFD6D9",
      textColor: "#8B4A52",
      stats: { health: 90, speed: 65, power: 88 },
    },
    {
      image: pet03,
      name: "티노",
      description: "깡총깡총 토끼 펫",
      level: 8,
      bgGradient: "linear-gradient(135deg, #C6F1E0 0%, #8FE3BF 100%)",
      nameTagColor: "#B0E4D0",
      textColor: "#4A6B5C",
      stats: { health: 60, speed: 95, power: 45 },
    },
    {
      image: pet04,
      name: "피니",
      description: "느긋한 코알라 펫",
      level: 12,
      bgGradient: "linear-gradient(135deg, #FFD3C5 0%, #FF9F84 100%)",
      nameTagColor: "#FFC2B3",
      textColor: "#8B5A47",
      stats: { health: 95, speed: 30, power: 55 },
    },
    {
      image: pet05,
      name: "캥구",
      description: "귀여운 판다 펫",
      level: 18,
      bgGradient: "linear-gradient(135deg, #FFE49E 0%, #FFD058 100%)",
      nameTagColor: "#FFD98C",
      textColor: "#8B7A3D",
      stats: { health: 88, speed: 50, power: 82 },
    },
    {
      image: pet06,
      name: "수호",
      description: "영리한 여우 펫",
      level: 22,
      bgGradient: "linear-gradient(135deg, #D9F1FF 0%, #A7DBFF 100%)",
      nameTagColor: "#C7E7FF",
      textColor: "#4A6B8B",
      stats: { health: 70, speed: 88, power: 85 },
    },
    {
      image: pet07,
      name: "팡디",
      description: "야생의 늑대 펫",
      level: 30,
      bgGradient: "linear-gradient(135deg, #E0E0E0 0%, #B8B8B8 100%)",
      nameTagColor: "#D0D0D0",
      textColor: "#5A5A5A",
      stats: { health: 85, speed: 80, power: 92 },
    },
    {
      image: pet08,
      name: "달리",
      description: "통통한 개구리 펫",
      level: 5,
      bgGradient: "linear-gradient(135deg, #FFECDC 0%, #FFD4A8 100%)",
      nameTagColor: "#FFE0CA",
      textColor: "#8B6F52",
      stats: { health: 45, speed: 75, power: 40 },
    },
    {
      image: pet09,
      name: "디디",
      description: "느림보 거북이 펫",
      level: 35,
      bgGradient: "linear-gradient(135deg, #E4C3AA 0%, #D1A876 100%)",
      nameTagColor: "#D7B498",
      textColor: "#7A5F47",
      stats: { health: 98, speed: 25, power: 70 },
    },
    {
      image: pet10,
      name: "펭구",
      description: "노란 병아리 펫",
      level: 3,
      bgGradient: "linear-gradient(135deg, #C4E1FF 0%, #92CAFF 100%)",
      nameTagColor: "#B2D5FF",
      textColor: "#4A6B8B",
      stats: { health: 35, speed: 60, power: 25 },
    },
    {
      image: pet11,
      name: "치토",
      description: "시원한 펭귄 펫",
      level: 16,
      bgGradient: "linear-gradient(135deg, #FFE1AF 0%, #FFCD6B 100%)",
      nameTagColor: "#FFD79D",
      textColor: "#8B7A52",
      stats: { health: 75, speed: 70, power: 65 },
    },
    {
      image: pet12,
      name: "까지",
      description: "마법의 유니콘 펫",
      level: 50,
      bgGradient: "linear-gradient(135deg, #D6D9DB 0%, #B2B7BB 100%)",
      nameTagColor: "#C4C7C9",
      textColor: "#5A5E63",
      stats: { health: 95, speed: 85, power: 98 },
    },
    {
      image: pet13,
      name: "탱이",
      description: "전설의 드래곤 펫",
      level: 99,
      bgGradient: "linear-gradient(135deg, #E8DCC3 0%, #D4C497 100%)",
      nameTagColor: "#DDD0B1",
      textColor: "#7A6F52",
      stats: { health: 100, speed: 95, power: 100 },
    },
    {
      image: pet14,
      name: "코코",
      description: "용맹한 호랑이 펫",
      level: 28,
      bgGradient: "linear-gradient(135deg, #FFEAE3 0%, #FFCEB5 100%)",
      nameTagColor: "#FFDED1",
      textColor: "#8B6552",
      stats: { health: 80, speed: 85, power: 95 },
    },
    {
      image: pet15,
      name: "쿠바",
      description: "왕의 사자 펫",
      level: 32,
      bgGradient: "linear-gradient(135deg, #F7D6C8 0%, #F0B894 100%)",
      nameTagColor: "#F2C4B6",
      textColor: "#8B5F4A",
      stats: { health: 90, speed: 75, power: 98 },
    },
    {
      image: pet16,
      name: "맘모",
      description: "똑똑한 문어 펫",
      level: 19,
      bgGradient: "linear-gradient(135deg, #FFE9CC 0%, #FFD586 100%)",
      nameTagColor: "#FFDDBA",
      textColor: "#8B7352",
      stats: { health: 65, speed: 60, power: 90 },
    },
    {
      image: pet17,
      name: "루아",
      description: "우아한 나비 펫",
      level: 7,
      bgGradient: "linear-gradient(135deg, #E8E3FF 0%, #CFBFFF 100%)",
      nameTagColor: "#DDD1FF",
      textColor: "#6B5A8B",
      stats: { health: 55, speed: 90, power: 60 },
    },
  ];

  // 테마별 빈 카드 데이터 (나중에 실제 이미지로 교체 예정)
  const createEmptyCards = (count: number, theme: string) => {
    return Array.from({ length: count }, (_, index) => ({
      id: `${theme}-${index}`,
      name: `${theme} 캐릭터 ${index + 1}`,
      bgGradient: "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)",
      nameTagColor: "#D1D5DB",
      textColor: "#6B7280",
      stats: { health: 0, speed: 0, power: 0 },
    }));
  };

  // Winter themed pets data
  const winterPets = [
    {
      image: skin_snow01,
      name: "눈사람 친구 티노",
      description: "겨울 동화 속 펫",
      level: 12,
      bgGradient: "linear-gradient(135deg, #E8F4FD 0%, #B8E0FF 100%)",
      nameTagColor: "#C5E7FF",
      textColor: "#2E5984",
      stats: { health: 88, speed: 85, power: 82 },
    },
    {
      image: skin_snow02,
      name: "눈의 정령 디디",
      description: "겨울 동화 속 펫",
      level: 18,
      bgGradient: "linear-gradient(135deg, #F0F8FF 0%, #ADD8E6 100%)",
      nameTagColor: "#B4D4F0",
      textColor: "#1E3A5F",
      stats: { health: 92, speed: 78, power: 89 },
    },
    {
      image: skin_snow03,
      name: "빙사조 피니",
      description: "겨울 동화 속 펫",
      level: 14,
      bgGradient: "linear-gradient(135deg, #F5F9FF 0%, #D1E7FF 100%)",
      nameTagColor: "#DDEEFF",
      textColor: "#2A4A6B",
      stats: { health: 85, speed: 90, power: 80 },
    },
    {
      image: skin_snow04,
      name: "산타클로스 치토",
      description: "겨울 동화 속 펫",
      level: 20,
      bgGradient: "linear-gradient(135deg, #EBF5FF 0%, #C7E2FF 100%)",
      nameTagColor: "#D8EAFF",
      textColor: "#1B3A5C",
      stats: { health: 95, speed: 88, power: 93 },
    },
    {
      image: skin_snow05,
      name: "스노우맨 터보",
      description: "겨울 동화 속 펫",
      level: 16,
      bgGradient: "linear-gradient(135deg, #F8FCFF 0%, #E1EFFF 100%)",
      nameTagColor: "#EDFAFF",
      textColor: "#2C4E73",
      stats: { health: 87, speed: 83, power: 91 },
    },
    {
      image: skin_snow06,
      name: "빙어낚시 캥구",
      description: "겨울 동화 속 펫",
      level: 22,
      bgGradient: "linear-gradient(135deg, #F2F9FF 0%, #C9E1FF 100%)",
      nameTagColor: "#D5E8FF",
      textColor: "#1A365D",
      stats: { health: 98, speed: 75, power: 96 },
    },
    {
      image: skin_snow07,
      name: "얼음궁전 루나",
      description: "겨울 동화 속 펫",
      level: 25,
      bgGradient: "linear-gradient(135deg, #EDF7FF 0%, #BDDDFF 100%)",
      nameTagColor: "#CCE5FF",
      textColor: "#1F4A6B",
      stats: { health: 92, speed: 88, power: 94 },
    },
  ];

  // Lunar New Year themed pets data
  const lunarNewYearPets = [
    {
      image: skin_seol01,
      name: "딱지치기 탱이",
      description: "설날 축복 펫",
      level: 15,
      bgGradient: "linear-gradient(135deg, #FFF5E6 0%, #FFE4B5 100%)",
      nameTagColor: "#FFEDC9",
      textColor: "#8B5A2B",
      stats: { health: 90, speed: 85, power: 88 },
    },
    {
      image: skin_seol02,
      name: "복주머니 까지",
      description: "설날 축복 펫",
      level: 18,
      bgGradient: "linear-gradient(135deg, #FFF0F5 0%, #FFB6C1 100%)",
      nameTagColor: "#FFC9D6",
      textColor: "#8B2F4A",
      stats: { health: 85, speed: 95, power: 80 },
    },
    {
      image: skin_seol03,
      name: "봉황 피니",
      description: "설날 축복 펫",
      level: 20,
      bgGradient: "linear-gradient(135deg, #FFFACD 0%, #FFD700 100%)",
      nameTagColor: "#FFE55C",
      textColor: "#B8860B",
      stats: { health: 95, speed: 70, power: 92 },
    },
    {
      image: skin_seol04,
      name: "사물놀이패 터보",
      description: "설날 축복 펫",
      level: 25,
      bgGradient: "linear-gradient(135deg, #F0FFFF 0%, #87CEEB 100%)",
      nameTagColor: "#A7D8F0",
      textColor: "#1E6091",
      stats: { health: 98, speed: 88, power: 96 },
    },
    {
      image: skin_seol05,
      name: "세뱃돈 받은 아기 캥구",
      description: "설날 축복 펫",
      level: 12,
      bgGradient: "linear-gradient(135deg, #FFF8DC 0%, #DDA0DD 100%)",
      nameTagColor: "#E6B8E6",
      textColor: "#8B008B",
      stats: { health: 80, speed: 98, power: 75 },
    },
    {
      image: skin_seol06,
      name: "애기씨 토리",
      description: "설날 축복 펫",
      level: 22,
      bgGradient: "linear-gradient(135deg, #F5FFFA 0%, #98FB98 100%)",
      nameTagColor: "#B3FFB3",
      textColor: "#006400",
      stats: { health: 100, speed: 65, power: 90 },
    },
    {
      image: skin_seol07,
      name: "연날리기 티노",
      description: "설날 축복 펫",
      level: 16,
      bgGradient: "linear-gradient(135deg, #FFFAF0 0%, #FFEFD5 100%)",
      nameTagColor: "#FFF2E0",
      textColor: "#D2691E",
      stats: { health: 88, speed: 92, power: 85 },
    },
    {
      image: skin_seol08,
      name: "윷놀이 치토",
      description: "설날 축복 펫",
      level: 19,
      bgGradient: "linear-gradient(135deg, #FDF5E6 0%, #F4A460 100%)",
      nameTagColor: "#F7C98A",
      textColor: "#8B4513",
      stats: { health: 92, speed: 82, power: 90 },
    },
    {
      image: skin_seol09,
      name: "팽이치기 디디",
      description: "설날 축복 펫",
      level: 21,
      bgGradient: "linear-gradient(135deg, #F0F8FF 0%, #9370DB 100%)",
      nameTagColor: "#B19CD9",
      textColor: "#4B0082",
      stats: { health: 87, speed: 90, power: 93 },
    },
  ];

  const fashionPets = [
    {
      image: skin_fashion01,
      name: "가을 타는 디디",
      description: "패션왕 펫",
      level: 18,
      bgGradient: "linear-gradient(135deg, #FFF5E6 0%, #FFD4B3 100%)",
      nameTagColor: "#FFE0C4",
      textColor: "#A0522D",
      stats: { health: 88, speed: 85, power: 82 },
    },
    {
      image: skin_fashion02,
      name: "귀공자 티노",
      description: "패션왕 펫",
      level: 20,
      bgGradient: "linear-gradient(135deg, #F0F0FF 0%, #C0C0FF 100%)",
      nameTagColor: "#D5D5FF",
      textColor: "#4B0082",
      stats: { health: 85, speed: 90, power: 85 },
    },
    {
      image: skin_fashion03,
      name: "캠퍼스룩 탱이",
      description: "패션왕 펫",
      level: 22,
      bgGradient: "linear-gradient(135deg, #FFFACD 0%, #FFE55C 100%)",
      nameTagColor: "#FFF2AA",
      textColor: "#DAA520",
      stats: { health: 90, speed: 88, power: 90 },
    },
    {
      image: skin_fashion04,
      name: "턴시도 치토",
      description: "패션왕 펫",
      level: 16,
      bgGradient: "linear-gradient(135deg, #FFE4E1 0%, #FFC0CB 100%)",
      nameTagColor: "#FFD0DC",
      textColor: "#8B0000",
      stats: { health: 82, speed: 92, power: 78 },
    },
    {
      image: skin_fashion05,
      name: "황야의 무법자 피니",
      description: "패션왕 펫",
      level: 24,
      bgGradient: "linear-gradient(135deg, #E6FFE6 0%, #98FB98 100%)",
      nameTagColor: "#B3FFB3",
      textColor: "#228B22",
      stats: { health: 95, speed: 80, power: 88 },
    },
    {
      image: skin_fashion06,
      name: "후드티 터보",
      description: "패션왕 펫",
      level: 19,
      bgGradient: "linear-gradient(135deg, #FFF8DC 0%, #F0E68C 100%)",
      nameTagColor: "#F5F5B8",
      textColor: "#8B8000",
      stats: { health: 87, speed: 86, power: 85 },
    },
    {
      image: skin_fashion07,
      name: "힙스터 캥구",
      description: "패션왕 펫",
      level: 21,
      bgGradient: "linear-gradient(135deg, #FFEFD5 0%, #FFDAB9 100%)",
      nameTagColor: "#FFE4CC",
      textColor: "#CD853F",
      stats: { health: 89, speed: 84, power: 87 },
    },
  ];

  const spacePets = [
    {
      image: skin_space01,
      name: "달나라 토리",
      description: "우주 탐험 펫",
      level: 25,
      bgGradient: "linear-gradient(135deg, #E6E6FA 0%, #9370DB 100%)",
      nameTagColor: "#D8BFD8",
      textColor: "#4B0082",
      stats: { health: 95, speed: 88, power: 92 },
    },
    {
      image: skin_space02,
      name: "사슴자리 디디",
      description: "우주 탐험 펫",
      level: 22,
      bgGradient: "linear-gradient(135deg, #F0F8FF 0%, #4169E1 100%)",
      nameTagColor: "#B0C4DE",
      textColor: "#191970",
      stats: { health: 90, speed: 95, power: 85 },
    },
    {
      image: skin_space03,
      name: "우주비행사 까지",
      description: "우주 탐험 펫",
      level: 28,
      bgGradient: "linear-gradient(135deg, #F5F5F5 0%, #708090 100%)",
      nameTagColor: "#C0C0C0",
      textColor: "#2F4F4F",
      stats: { health: 98, speed: 82, power: 95 },
    },
    {
      image: skin_space04,
      name: "우주비행사 탱이",
      description: "우주 탐험 펫",
      level: 26,
      bgGradient: "linear-gradient(135deg, #F0FFFF 0%, #00CED1 100%)",
      nameTagColor: "#AFEEEE",
      textColor: "#008B8B",
      stats: { health: 92, speed: 90, power: 88 },
    },
    {
      image: skin_space05,
      name: "우주비행사 터보",
      description: "우주 탐험 펫",
      level: 24,
      bgGradient: "linear-gradient(135deg, #F8F8FF 0%, #6A5ACD 100%)",
      nameTagColor: "#E6E6FA",
      textColor: "#483D8B",
      stats: { health: 88, speed: 98, power: 90 },
    },
    {
      image: skin_space06,
      name: "제우스 티노",
      description: "우주 탐험 펫",
      level: 30,
      bgGradient: "linear-gradient(135deg, #FFFACD 0%, #FFD700 100%)",
      nameTagColor: "#F0E68C",
      textColor: "#B8860B",
      stats: { health: 100, speed: 85, power: 98 },
    },
    {
      image: skin_space07,
      name: "태양신 피니",
      description: "우주 탐험 펫",
      level: 32,
      bgGradient: "linear-gradient(135deg, #FFF8DC 0%, #FF6347 100%)",
      nameTagColor: "#FFDAB9",
      textColor: "#8B0000",
      stats: { health: 95, speed: 87, power: 100 },
    },
    {
      image: skin_space08,
      name: "태양전사 티노",
      description: "우주 탐험 펫",
      level: 29,
      bgGradient: "linear-gradient(135deg, #FFF5EE 0%, #FF4500 100%)",
      nameTagColor: "#FFDAB9",
      textColor: "#FF4500",
      stats: { health: 94, speed: 92, power: 96 },
    },
    {
      image: skin_space09,
      name: "UFO 캥구",
      description: "우주 탐험 펫",
      level: 27,
      bgGradient: "linear-gradient(135deg, #F0FFF0 0%, #32CD32 100%)",
      nameTagColor: "#98FB98",
      textColor: "#006400",
      stats: { health: 93, speed: 96, power: 91 },
    },
  ];

  const themeData = {
    기본: [...petFeatures, ...petFeatures, ...petFeatures, ...petFeatures, ...petFeatures], // 무한 루프를 위해 5번 반복
    "겨울 동화": [...winterPets, ...winterPets, ...winterPets, ...winterPets, ...winterPets], // 무한 루프를 위해 5번 반복
    패션왕: [...fashionPets, ...fashionPets, ...fashionPets, ...fashionPets, ...fashionPets], // 무한 루프를 위해 5번 반복
    설날: [...lunarNewYearPets, ...lunarNewYearPets, ...lunarNewYearPets, ...lunarNewYearPets, ...lunarNewYearPets], // 무한 루프를 위해 5번 반복
    우주: [...spacePets, ...spacePets, ...spacePets, ...spacePets, ...spacePets], // 무한 루프를 위해 5번 반복
  };

  const customizations = [
    {
      icon: skin01,
      title: "기본",
      description: "기본 펫 컬렉션",
      gradient: "bg-gray-500",
      bgGradient: "from-gray-50 via-gray-100 to-gray-200",
    },
    {
      icon: skin_snow01,
      title: "겨울 동화",
      description: "50+ 종류의 스킨으로 펫을 꾸며보세요",
      gradient: "bg-blue-500",
      bgGradient: "from-blue-50 via-blue-100 to-blue-200",
    },
    {
      icon: skin_fashion01,
      title: "패션왕",
      description: "모자, 안경, 목걸이 등 다양한 아이템",
      gradient: "bg-orange-500",
      bgGradient: "from-orange-50 via-orange-100 to-orange-200",
    },
    {
      icon: skin_seol01,
      title: "설날",
      description: "새해 복 많이 받으세요",
      gradient: "bg-yellow-500",
      bgGradient: "from-yellow-50 via-yellow-100 to-yellow-200",
    },
    {
      icon: skin_space01,
      title: "우주",
      description: "우주를 탐험하는 특별한 펫들",
      gradient: "bg-purple-600",
      bgGradient: "from-purple-50 via-purple-100 to-purple-200",
    },
  ];

  const handleThemeClick = (themeName: string) => {
    setSelectedTheme(selectedTheme === themeName ? null : themeName);
  };

  const getCurrentCards = () => {
    if (selectedTheme && themeData[selectedTheme as keyof typeof themeData]) {
      return themeData[selectedTheme as keyof typeof themeData];
    }
    return petFeatures;
  };

  return (
    <div>
      {/* Pet Section - Combined */}
      <section
        className="h-screen flex items-center justify-center relative overflow-hidden scroll-section"
        style={{
          background:
            "linear-gradient(180deg, rgba(42, 204, 200, 0.08) 0%, rgba(42, 204, 200, 0.06) 15%, rgba(42, 204, 200, 0.04) 30%, rgba(255, 255, 255, 0.98) 50%, rgba(42, 204, 200, 0.06) 75%, rgba(42, 204, 200, 0.12) 100%)",
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-20 left-0 right-0 h-96 opacity-30"
            style={{
              background:
                "linear-gradient(180deg, rgba(42, 204, 200, 0.08) 0%, rgba(42, 204, 200, 0.04) 40%, rgba(42, 204, 200, 0.02) 80%, transparent 100%)",
              borderRadius: "0 0 50% 50%",
              transform: "scale(1.2)",
            }}
          ></div>
          <div
            className="absolute -top-10 left-1/4 right-1/4 h-80 opacity-20"
            style={{
              background:
                "linear-gradient(180deg, rgba(42, 204, 200, 0.06) 0%, rgba(42, 204, 200, 0.03) 50%, transparent 100%)",
              borderRadius: "0 0 60% 60%",
            }}
          ></div>
          <div
            className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(42, 204, 200, 0.05) 0%, rgba(42, 204, 200, 0.02) 50%, transparent 100%)",
            }}
          ></div>
          <div
            className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(42, 204, 200, 0.06) 0%, rgba(42, 204, 200, 0.02) 50%, transparent 100%)",
            }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full blur-xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(42, 204, 200, 0.05) 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-xl opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(42, 204, 200, 0.04) 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="absolute top-2/3 right-1/5 w-20 h-20 rounded-full blur-lg opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(42, 204, 200, 0.03) 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(ellipse at 20% 30%, rgba(42, 204, 200, 0.08) 0%, transparent 30%), 
                             radial-gradient(ellipse at 80% 40%, rgba(42, 204, 200, 0.06) 0%, transparent 35%),
                             radial-gradient(ellipse at 50% 60%, rgba(42, 204, 200, 0.05) 0%, transparent 40%)`,
              backgroundSize: "200px 150px, 180px 120px, 160px 100px",
            }}
          ></div>
        </div>

        {/* Pet showcase section with title */}
        <div className="w-full py-8">
          {/* Section Title */}
          <div className="text-center mb-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3"
            >
              <span className="gradient-text shimmer">
                함께 모험하는 머니또 프렌즈
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              나만의 펫을 키워서 지도의 숨겨진 보물을 획득하세요!
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-4 w-full"
          >
            <div className="relative overflow-hidden w-full">
              <div className="flex space-x-6 animate-scroll">
                {/* First set of cards */}
                {getCurrentCards().map((pet, _index) => (
                  <div
                    key={pet.name + _index}
                    className="flex-shrink-0 py-2 group"
                    style={{ width: "240px" }}
                  >
                    <div
                      className="pet-card relative rounded-2xl mb-3 hover:scale-105 transition-transform duration-300"
                      style={{
                        aspectRatio: "3/4",
                      }}
                    >
                      {/* 카드 앞면 */}
                      <div
                        className="card-front absolute inset-0 rounded-2xl p-4 backface-hidden"
                        style={{
                          background: pet.bgGradient,
                        }}
                      >
                        <div className="flex flex-col h-full justify-center">
                          <div className="flex-1 flex items-center justify-center">
                            {"image" in pet && pet.image && (
                              <img
                                src={pet.image}
                                alt={pet.name}
                                className="w-36 h-36 object-contain"
                              />
                            )}
                          </div>
                          <div className="text-center mt-4">
                            <div
                              className="backdrop-blur-sm rounded-lg px-3 py-2"
                              style={{ backgroundColor: pet.nameTagColor }}
                            >
                              <p
                                className="text-lg font-bold"
                                style={{ color: pet.textColor }}
                              >
                                {pet.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 카드 뒷면 - 능력치 */}
                      <div
                        className="card-back absolute inset-0 rounded-2xl p-4 backface-hidden"
                        style={{
                          background: pet.bgGradient,
                        }}
                      >
                        <div className="flex flex-col h-full">
                          {/* 펫 이름표 */}
                          <div className="text-center mb-6">
                            <div
                              className="backdrop-blur-sm rounded-lg px-3 py-2"
                              style={{ backgroundColor: pet.textColor + "CC" }}
                            >
                              <p className="text-lg font-bold text-white">
                                {pet.name}
                              </p>
                            </div>
                          </div>

                          {/* 능력치 게이지들 */}
                          <div className="flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              {/* 체력 */}
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <div
                                    className="flex items-center gap-1 px-2 py-1 rounded-md"
                                    style={{
                                      backgroundColor: pet.textColor + "4D",
                                    }}
                                  >
                                    <img
                                      src={heartIcon}
                                      alt="체력"
                                      className="w-4 h-4"
                                    />
                                    <span className="text-sm font-medium text-white">
                                      체력
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 bg-white/30 rounded-full h-2.5">
                                    <div
                                      className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                                      style={{
                                        width: `${pet.stats?.health || 0}%`,
                                        backgroundColor: pet.textColor,
                                      }}
                                    ></div>
                                  </div>
                                  <span
                                    className="text-sm font-bold min-w-[2rem] text-right"
                                    style={{ color: pet.textColor }}
                                  >
                                    {pet.stats?.health || 0}
                                  </span>
                                </div>
                              </div>

                              {/* 속도 */}
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <div
                                    className="flex items-center gap-1 px-2 py-1 rounded-md"
                                    style={{
                                      backgroundColor: pet.textColor + "4D",
                                    }}
                                  >
                                    <img
                                      src={thunderIcon}
                                      alt="속도"
                                      className="w-4 h-4"
                                    />
                                    <span className="text-sm font-medium text-white">
                                      속도
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 bg-white/30 rounded-full h-2.5">
                                    <div
                                      className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                                      style={{
                                        width: `${pet.stats?.speed || 0}%`,
                                        backgroundColor: pet.textColor,
                                      }}
                                    ></div>
                                  </div>
                                  <span
                                    className="text-sm font-bold min-w-[2rem] text-right"
                                    style={{ color: pet.textColor }}
                                  >
                                    {pet.stats?.speed || 0}
                                  </span>
                                </div>
                              </div>

                              {/* 힘 */}
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <div
                                    className="flex items-center gap-1 px-2 py-1 rounded-md"
                                    style={{
                                      backgroundColor: pet.textColor + "4D",
                                    }}
                                  >
                                    <img
                                      src={fireIcon}
                                      alt="힘"
                                      className="w-4 h-4"
                                    />
                                    <span className="text-sm font-medium text-white">
                                      힘
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 bg-white/30 rounded-full h-2.5">
                                    <div
                                      className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                                      style={{
                                        width: `${pet.stats?.power || 0}%`,
                                        backgroundColor: pet.textColor,
                                      }}
                                    ></div>
                                  </div>
                                  <span
                                    className="text-sm font-bold min-w-[2rem] text-right"
                                    style={{ color: pet.textColor }}
                                  >
                                    {pet.stats?.power || 0}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Second set of cards for seamless loop */}
                {!selectedTheme &&
                  petFeatures.map((pet, _index) => (
                    <div
                      key={`${pet.name}-duplicate`}
                      className="flex-shrink-0 py-2 group"
                      style={{ width: "240px" }}
                    >
                      <div
                        className="pet-card relative rounded-2xl mb-3 hover:scale-105 transition-transform duration-300"
                        style={{
                          aspectRatio: "3/4",
                        }}
                      >
                        {/* 카드 앞면 */}
                        <div
                          className="card-front absolute inset-0 rounded-2xl p-4 backface-hidden"
                          style={{
                            background: pet.bgGradient,
                          }}
                        >
                          <div className="flex flex-col h-full justify-center">
                            <div className="flex-1 flex items-center justify-center">
                              <img
                                src={pet.image}
                                alt={pet.name}
                                className="w-36 h-36 object-contain"
                              />
                            </div>
                            <div className="text-center mt-4">
                              <div
                                className="backdrop-blur-sm rounded-lg px-3 py-2"
                                style={{ backgroundColor: pet.nameTagColor }}
                              >
                                <p
                                  className="text-lg font-bold"
                                  style={{ color: pet.textColor }}
                                >
                                  {pet.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 카드 뒷면 - 능력치 */}
                        <div
                          className="card-back absolute inset-0 rounded-2xl p-4 backface-hidden"
                          style={{
                            background: pet.bgGradient,
                          }}
                        >
                          <div className="flex flex-col h-full">
                            {/* 펫 이름표 */}
                            <div className="text-center mb-6">
                              <div
                                className="backdrop-blur-sm rounded-lg px-3 py-2"
                                style={{
                                  backgroundColor: pet.textColor + "CC",
                                }}
                              >
                                <p className="text-lg font-bold text-white">
                                  {pet.name}
                                </p>
                              </div>
                            </div>

                            {/* 능력치 게이지들 */}
                            <div className="flex-1 flex flex-col justify-center">
                              <div className="space-y-4">
                                {/* 체력 */}
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <div
                                      className="flex items-center gap-1 px-2 py-1 rounded-md"
                                      style={{
                                        backgroundColor: pet.textColor + "4D",
                                      }}
                                    >
                                      <img
                                        src={heartIcon}
                                        alt="체력"
                                        className="w-4 h-4"
                                      />
                                      <span className="text-sm font-medium text-white">
                                        체력
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-white/30 rounded-full h-2.5">
                                      <div
                                        className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                          width: `${pet.stats.health}%`,
                                          backgroundColor: pet.textColor,
                                        }}
                                      ></div>
                                    </div>
                                    <span
                                      className="text-sm font-bold min-w-[2rem] text-right"
                                      style={{ color: pet.textColor }}
                                    >
                                      {pet.stats.health}
                                    </span>
                                  </div>
                                </div>

                                {/* 속도 */}
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <div
                                      className="flex items-center gap-1 px-2 py-1 rounded-md"
                                      style={{
                                        backgroundColor: pet.textColor + "4D",
                                      }}
                                    >
                                      <img
                                        src={thunderIcon}
                                        alt="속도"
                                        className="w-4 h-4"
                                      />
                                      <span className="text-sm font-medium text-white">
                                        속도
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-white/30 rounded-full h-2.5">
                                      <div
                                        className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                          width: `${pet.stats.speed}%`,
                                          backgroundColor: pet.textColor,
                                        }}
                                      ></div>
                                    </div>
                                    <span
                                      className="text-sm font-bold min-w-[2rem] text-right"
                                      style={{ color: pet.textColor }}
                                    >
                                      {pet.stats.speed}
                                    </span>
                                  </div>
                                </div>

                                {/* 힘 */}
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <div
                                      className="flex items-center gap-1 px-2 py-1 rounded-md"
                                      style={{
                                        backgroundColor: pet.textColor + "4D",
                                      }}
                                    >
                                      <img
                                        src={fireIcon}
                                        alt="힘"
                                        className="w-4 h-4"
                                      />
                                      <span className="text-sm font-medium text-white">
                                        힘
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-white/30 rounded-full h-2.5">
                                      <div
                                        className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                          width: `${pet.stats.power}%`,
                                          backgroundColor: pet.textColor,
                                        }}
                                      ></div>
                                    </div>
                                    <span
                                      className="text-sm font-bold min-w-[2rem] text-right"
                                      style={{ color: pet.textColor }}
                                    >
                                      {pet.stats.power}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skin selection buttons */}
        <div className="absolute bottom-44 left-1/2 transform -translate-x-1/2">
          <div className="grid grid-cols-5 gap-3">
            {customizations.map((feature, index) => (
              <motion.button
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
                onClick={() => handleThemeClick(feature.title)}
              >
                <div
                  className={`bg-gradient-to-br ${
                    feature.bgGradient
                  } rounded-lg p-4 w-20 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                    selectedTheme === feature.title
                      ? "ring-2 ring-primary-500 ring-offset-2"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div
                      className="w-12 h-12 bg-transparent rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                    >
                      <img 
                        src={feature.icon}
                        alt={feature.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                  <h3
                    className="text-xs font-semibold text-center"
                    style={{ color: "#4E5A67" }}
                  >
                    {feature.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* Description text */}
          <div className="text-center mt-5">
            <p className="text-sm text-gray-600">
              버튼을 눌러 귀여운 스킨을 확인해봐요!
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-240px * 17 - 6px * 16));
          }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Card flip animation */
        .pet-card {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .pet-card:hover {
          transform: rotateY(180deg) scale(1.05);
        }

        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .card-front {
          transform: rotateY(0deg);
        }

        .card-back {
          transform: rotateY(180deg);
        }

        .pet-card .card-front,
        .pet-card .card-back {
          transition: transform 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PetSection;
