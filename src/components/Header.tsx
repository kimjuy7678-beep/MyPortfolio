import { useState } from 'react'
import '../scss/header.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom'

interface HeaderProps {
    isOn: boolean;
}

const Header = ({ isOn }: HeaderProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/김주연_이력서.pdf';
        link.download = '김주연_이력서.pdf';
        link.click();
    };

    const handleNavClick = (id: string) => {
        setMenuOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDesignClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={isOn ? "header light" : "header dark"}>
            <div className="left">
                <Link to="/" className="logo-link" aria-label="메인으로 이동" onClick={() => setMenuOpen(false)}>
                    <h1 className="logo">YE:ON</h1>
                    <span className="star"><img src="/images/Star.png" alt="빛" /></span>
                    <h2>portfolio</h2>
                </Link>
            </div>

            <div className="right">
                <ul>
                    <li><a onClick={() => handleNavClick('about')} style={{ cursor: 'pointer' }}>about</a></li>
                    <li><a onClick={() => handleNavClick('skills')} style={{ cursor: 'pointer' }}>skills</a></li>
                    <li><a onClick={() => handleNavClick('projects')} style={{ cursor: 'pointer' }}>projects</a></li>
                    <li><Link to="/design-archive">design</Link></li>
                </ul>
                <button className="resume" onClick={handleDownload}>이력서 다운받기</button>

                <button
                    type="button"
                    className={`hamburger-btn ${menuOpen ? 'active' : ''}`}
                    aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(open => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div className={`mobile-nav-backdrop ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
            <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a onClick={() => handleNavClick('about')}>About</a></li>
                    <li><a onClick={() => handleNavClick('skills')}>Skills</a></li>
                    <li><a onClick={() => handleNavClick('projects')}>Projects</a></li>
                    <li><Link to="/design-archive" onClick={handleDesignClick}>Design Archive</Link></li>
                </ul>
                <button className="resume" onClick={() => { handleDownload(); setMenuOpen(false); }}>
                    이력서 다운받기
                </button>
            </nav>
        </header>
    )
}

export default Header