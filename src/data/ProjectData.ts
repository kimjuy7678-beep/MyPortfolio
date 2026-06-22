export const projectData = {
    academy: [
        {
            id: 1,
            awards: "최우수상",
            title: "애니OTT Laftel 웹사이트 리뉴얼 프로젝트",
            label: "Team",
            date: "2026.05.20 ~ 2026.06.15",
            contribution: "10%",
            role: "프론트엔드 개발 및 UI/UX 인터랙션 설계",
            desc: [
                "반응형 UI 구현: Tailwind CSS와 SASS를 활용하여 데스크탑과 모바일 등 다양한 디바이스 환경에서 일관된 경험을 제공하는 최적화된 반응형 레이아웃을 구현했습니다.",
                "인터랙션 및 사용자 경험 설계: 상세 페이지 내 모달과 탭 컴포넌트를 동적으로 설계하여 사용자가 콘텐츠를 탐색할 때 시각적 몰입감을 높였습니다.",
                "리뷰 및 구매 시스템 구축: 리뷰 시스템(스포일러 차단, 좋아요, 신고)과 함께 굿즈 구매 페이지를 직접 구현하고 외부 API를 연동하여 실제 서비스 가능한 수준의 인터랙티브 기능을 완성했습니다.",
                "데이터 흐름 최적화: API 연동 과정에서 발생한 데이터 바인딩 오류를 주도적으로 해결함으로써, 사용자 프로필 간 데이터 독립성과 처리의 정확성을 확보했습니다."
            ],
            pages: [
                "메인 홈 페이지",
                "애니 상세 페이지",
                "리뷰 컴포넌트",
                "관련 굿즈 바로가기",
                "스토어 굿즈 결제페이지",
            ],
            images: [
                "/images/laftel/laftel01.png",
                "/images/laftel/laftel02.png",
                "/images/laftel/laftel03.png",
                "/images/laftel/laftel04.png",
                "/images/laftel/laftel05.png",
                "/images/laftel/laftel06.png"
            ],
            link: "https://laftel-eta.vercel.app/",
            github: "https://github.com/kimjuy7678-beep/laftel/tree/juyeon",
            tags: ["Next.js", "React", "TailwindCSS", "SASS"]
        },
        {
            id: 2,
            awards: "최우수상",
            title: "가구브랜드 iloom 웹사이트 리뉴얼 프로젝트",
            label: "Team",
            date: "2026.05.20 ~ 2026.06.15",
            contribution: "15%",
            role: "UI 퍼블리싱 및 동적 페이지 구현 담당",
            desc: [
                "디자인 시스템 구축 및 UI 고도화: 디자인 시스템을 구축하고 공통 컴포넌트(컬러, 폰트 등)를 정리하여 팀원들과 일관된 디자인 환경을 마련했습니다.",
                "동적 인터랙션 및 제품 상세 페이지 구현: productData와 ColorData를 활용한 동적 렌더링을 구현했으며, 사용자 상호작용에 따른 이미지 변경 및 탭 UI, 모달 팝업 등 인터랙티브 요소를 개발했습니다.",
                "회원 및 인증 관리 시스템: Firebase Firestore를 기반으로 회원정보 조회/수정 및 소셜 계정(구글,카카오,네이버)연동/해제 기능을 구현하여 안정적인 사용자 인증 시스템을 구축했습니다.",
                "데이터 수집 및 전처리: 제품 이미지 일괄 크롤링 및 배경 제거를 통해 데이터 품질을 향상시켰으며, 비회원 주문/배송조회 및 아이디/비밀번호 찾기 기능 등을 구현하여 서비스의 실용성을 높였습니다."
            ],
            pages: [
                "메인 베스트셀러 섹션",
                "제품 상세페이지",
                "회원정보수정 + 회원탈퇴 페이지",
                "[기능] 비회원 주문 / 배송조회, 아이디/비밀번호 찾기",
                "[데이터] 제품 이미지 일괄 크롤링 + 이미지 배경 제거",
            ],
            images: [
                "/images/iloom/iloom01.png",
                "/images/iloom/iloom02.png",
                "/images/iloom/iloom03.png",
                "/images/iloom/iloom04.png",
                "/images/iloom/iloom05.png",
            ],
            link: "https://iloom-web.netlify.app/",
            github: "https://github.com/kimjuy7678-beep/iloom/tree/juyeon",
            tags: ["TypeScript", "React", "JavaScript", "SCSS/SASS"]
        },
        {
            id: 3,
            title: "CGV 웹사이트 리뉴얼 프로젝트",
            label: "Team",
            date: "2026.01.06 ~ 2026.03.16",
            contribution: "20%",
            role: "서비스 기획 및 UI 인터페이스 설계 + 개발",
            desc: [
                "사용자 여정 중심 UI 기획: 대규모 프로모션 콘텐츠를 시각적으로 분리하기 위해 그리드 레이아웃을 도입하고, 예매 서브 페이지의 시각적 위계를 정리하여 직관적인 서비스를 구현했습니다.",
                "기술적 도전 및 문제 해결: JavaScript 학습 초기 단계였음에도 불구하고, AI와의 협업을 통해 '날짜•시간•좌석 선택'이라는 핵심 예매 팝업 기능을 무결점으로 구현해 냈습니다.",
                "실무형 설계 역량 확보: 기술적 한계를 기획과 협업 능력으로 극복하며, 교육 초기 단계에서 완성하기 어려운 수준 높은 예매 시스템 화면을 성공적으로 만들어냈습니다.",
            ],
            pages: [
                "메인 혜택/이벤트 섹션",
                "영화별 예매",
                "극장별 예매",
                "빠른 예매"
            ],
            images: [
                "/images/cgv/cgv08.png",
                "/images/cgv/cgv01.png",
                "/images/cgv/cgv02.png",
                "/images/cgv/cgv03.png",
                "/images/cgv/cgv04.png",
                "/images/cgv/cgv05.png",
                "/images/cgv/cgv07.png",
            ],
            link: "https://cgv-weld.vercel.app/",
            github: "https://github.com/yejun123188/CGV/tree/branch-jy",
            tags: ["HTML5", "CSS3", "JavaScript", "Claude"]
        },
    ],
    company: [
        {
            id: 4,
            title: "남양주남부경찰서 피해자지원사이트 개발",
            label: "Business",
            date: "2025.05.06 ~ 2025.06.27",
            contribution: "70%",
            role: "UI/UX 인터페이스 설계 및 반응형 웹퍼블리싱",
            desc: [
                "통합 대시보드 기획 및 퍼블리싱: 흩어진 피해자 지원 정보를 한곳에서 확인할 수 있는 통합 대시보드 설계 및 반응형 퍼블리싱 전담",
                "인터랙티브 기능 개발: 카카오맵 및 챗봇 연동을 제외한 서비스 전체 프론트엔드 로직 및 클릭투콜(Click-to-Call)인터페이스 구축",
                "반응형 레이아웃 고도화: 모바일 디바이스 환경에서의 호환성 테스트 및 CSS 코드 전면 재검토를 통한 레이아웃 안정화",
            ],
            pages: [
                "피해자 통합 지원 대시보드",
                "긴급 지원 인터페이스",
                "반응형 웹 최적화"
            ],
            images: [
                "/images/police/police04.png",
                "/images/police/police01.png",
                "/images/police/police02.png",
                "/images/police/police03.png"
            ],
            link: "https://namyangju-sp.onrender.com/",
            github: "https://github.com/kimjuy7678-beep/namyangju_SP.git",
            tags: ["HTML5", "CSS3", "JavaScript", "CursorAI"]
        },

    ]
}