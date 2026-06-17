import '../scss/header.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom'

interface HeaderProps {
    isOn: boolean;
}

const Header = ({ isOn }: HeaderProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/김주연_이력서.pdf';
        link.download = '김주연_이력서.pdf';
        link.click();
    };

    const handleNavClick = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={isOn ? "header light" : "header dark"}>
            <div className="left">
                <h1 className="logo">YE:ON</h1>
                <span className="star"><img src="/images/Star.png" alt="빛" /></span>
                <h2>portfolio</h2>
            </div>

            <div className="right">
                <ul>
                    <li><a onClick={() => handleNavClick('about')} style={{ cursor: 'pointer' }}>about</a></li>
                    <li><a onClick={() => handleNavClick('skills')} style={{ cursor: 'pointer' }}>skills</a></li>
                    <li><a onClick={() => handleNavClick('projects')} style={{ cursor: 'pointer' }}>projects</a></li>
                    <li><Link to="/design-archive">design</Link></li>
                </ul>
                <button className="resume" onClick={handleDownload}>이력서 다운받기</button>
            </div>
        </header>
    )
}

export default Header