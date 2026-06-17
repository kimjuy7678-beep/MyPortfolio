import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import '../scss/footer.scss'

const Footer = () => {
    const [showMailPopup, setShowMailPopup] = useState(false);
    const email = 'juy0417@naver.com';

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Resume.pdf';
        link.download = '김주연_이력서.pdf';
        link.click();
    };

    const handlePhoneClick = () => {
        const phoneNumber = "010-3906-1910";
        navigator.clipboard.writeText(phoneNumber);
        toast.success("전화번호가 복사되었습니다!", {
            style: {
                background: '#1a1a1a',
                color: '#fff',
                fontSize: '13px',
                fontWeight: '200',
                letterSpacing: '0.5px',
                borderRadius: '50px',
            },
            iconTheme: {
                primary: '#ffd250',
                secondary: '#1a1a1a',
            },
            duration: 2000,
        });
    };

    const handleMailSelect = (service: string) => {
        const urls: Record<string, string> = {
            google: `https://mail.google.com/mail/?view=cm&to=${email}`,
            naver: `https://mail.naver.com/write?to=${email}`,
            daum: `https://mail.daum.net/compose?to=${email}`,
        };
        window.open(urls[service], '_blank');
        setShowMailPopup(false);
    };

    return (
        <footer className="footer">
            <Toaster />

            {/* 메일 팝업 */}
            {showMailPopup && (
                <div className="mail-popup-overlay" onClick={() => setShowMailPopup(false)}>
                    <div className="mail-popup" onClick={e => e.stopPropagation()}>
                        <p>메일 서비스를 선택해주세요</p>
                        <div className="mail-options">
                            <button onClick={() => handleMailSelect('google')}>Google</button>
                            <button onClick={() => handleMailSelect('naver')}>Naver</button>
                            <button onClick={() => handleMailSelect('daum')}>Daum</button>
                        </div>
                        <button className="mail-close" onClick={() => setShowMailPopup(false)}>✕</button>
                    </div>
                </div>
            )}

            <div className="footer-left">
                <h2 className="footer-logo">YE:ON</h2>
                <p>오늘 켠 이 불빛이 마음에 드셨다면,</p>
                <div className="footer-icons">
                    <button onClick={handleDownload}><img src="/images/resume.png" alt="이력서 다운받기" /></button>
                    <button onClick={() => setShowMailPopup(true)}><img src="/images/mail.png" alt="메일보내기" /></button>
                    <button onClick={handlePhoneClick}><img src="/images/phone.png" alt="전화번호" /></button>
                </div>
            </div>
            <p className="copyright">YE:ON PORTFOLIO © 2026 KIM JUYEON.</p>
        </footer>
    );
};

export default Footer;

// "메일 서비스 선택 팝업을 직접 구현했어요."
// 구체적으로는:

// useState로 팝업 열고 닫는 상태 관리
// Google, Naver, Daum 각각의 메일 작성 URL에 ? to = 이메일주소 쿼리스트링으로 받는 사람을 자동 입력
// window.open으로 새 탭에서 열기
// 오버레이 클릭 시 팝업 닫히는 UX 처리

// 특히 mailto: 링크는 기본 메일 앱으로 연결되는 반면, 이 방식은 웹 메일 서비스를 사용자가 선택할 수 있게 해서 접근성을 높였다고 어필하면 좋아요.