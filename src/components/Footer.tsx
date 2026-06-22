import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import '../scss/footer.scss'

const Footer = () => {
    const [showMailPopup, setShowMailPopup] = useState(false);
    const email = 'juy0417@naver.com';
    const phoneNumber = '010-3906-1910';
    const githubUrl = 'https://github.com/kimjuy7678-beep';

    const handlePhoneClick = () => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches
            && navigator.maxTouchPoints > 0;

        if (isMobile) {
            window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
            return;
        }

        navigator.clipboard.writeText(phoneNumber);
        toast.success("010-3906-1910 북사되었습니다 !", {
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
                    <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="깃허브">
                        <img src="/images/github.png" alt="깃허브" className="icon-no-invert" />
                    </a>
                    <button onClick={() => setShowMailPopup(true)}><img src="/images/mail.png" alt="메일보내기" /></button>
                    <button onClick={handlePhoneClick}><img src="/images/phone.png" alt="전화번호" /></button>
                </div>
            </div>
            <p className="copyright">YE:ON PORTFOLIO © 2026 KIM JUYEON.</p>
        </footer>
    );
};

export default Footer;