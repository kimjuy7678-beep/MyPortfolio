import { useState, useEffect } from 'react'
import '../src/scss/hero.scss'

interface HeroProps {
    isOn: boolean;
    setIsOn: (value: boolean) => void;
}

const Hero = ({ isOn, setIsOn }: HeroProps) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isOn) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),   // 슬로건 첫줄
            setTimeout(() => setStep(2), 1000),   // 슬로건 둘째줄
            setTimeout(() => setStep(3), 2500),  // 슬로건 올라가고 이름 등장
            setTimeout(() => setStep(4), 3300),  // Web Publisher
            setTimeout(() => setStep(5), 3800),  // Marquee
        ];
        return () => timers.forEach(clearTimeout);
    }, [isOn]);

    return (
        <section className={`hero-section${isOn ? ' on' : ''}`}>
            <div className="light" aria-hidden="true" />

            {/* 스위치 - 독립적으로 정중앙 */}
            <div className={`switch${step >= 1 ? ' hide' : ''}`}>
                <span className="info">YE:ON 개발로 예술을 켜다</span>
                <span className="icon">↓</span>
                <label className="toggle">
                    <input
                        type="checkbox"
                        checked={isOn}
                        onChange={() => setIsOn(!isOn)}
                    />
                    <span className="slider" />
                </label>
            </div>

            {/* 콘텐츠 - 별도 위치 */}
            <div className={`hero-content step-${step}`}>
                <div className="slogan">
                    <p className={step >= 1 ? 'visible' : ''}>디자인의 의도부터 코드의 구현까지,</p>
                    <p className={step >= 2 ? 'visible' : ''}>모든 과정을 '주연'으로 이끄는</p>
                </div>
                <div className={`name${step >= 3 ? ' visible' : ''}`}>
                    <h2>kim juyeon</h2>
                    <p className={step >= 4 ? 'visible' : ''}>Web Publisher</p>
                </div>
            </div>

            <div className={`bg-name${step >= 5 ? ' visible' : ''}`} aria-hidden="true">
                <p>kimjuyeon&nbsp;kimjuyeon&nbsp;kimjuyeon&nbsp;kimjuyeon&nbsp;kimjuyeon&nbsp;kimjuyeon&nbsp;</p>
            </div>
        </section>
    );
};

export default Hero;