import { useState, useEffect, useRef } from 'react'
import '../src/scss/hero.scss'

interface HeroProps {
    isOn: boolean;
    setIsOn: (value: boolean) => void;
}

const FINAL_STEP = 5;

const Hero = ({ isOn, setIsOn }: HeroProps) => {
    const wasOnAtMount = useRef(isOn);

    const [step, setStep] = useState(() => (wasOnAtMount.current ? FINAL_STEP : 0));

    useEffect(() => {
        if (wasOnAtMount.current) {
            setStep(FINAL_STEP);
            return;
        }

        if (!isOn) { setStep(0); return; }

        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 1000),
            setTimeout(() => setStep(3), 2500),
            setTimeout(() => setStep(4), 3300),
            setTimeout(() => setStep(5), 3800),
        ];
        return () => timers.forEach(clearTimeout);
    }, [isOn]);

    return (
        <section className={`hero-section${isOn ? ' on' : ''}`}>
            <div className="light" aria-hidden="true" />

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