const Data = [
    { id: 1, date: "2025.12.31 ~ 2026.06.18 수료", name: "이젠아카데미DX교육센터", program: "UXUI디자인 웹프론트엔드개발 부트캠프" },
    { id: 2, date: "2023.08.28 ~ 2027.02 졸업예정", name: "경희사이버대학교", program: "ICT융합콘텐츠과" },
    { id: 3, date: "2021.07.19 ~ 2023.02.08 졸업", name: "일신여자상업고등학교", program: "디자인콘텐츠과" }
]

const Education = () => {
    return (
        <>
            <h3>학력 / 교육</h3>
            <ul className="history">
                {Data.map((item) => (
                    <li key={item.id}>
                        <span className="date">{item.date}</span>
                        <strong className="name">{item.name}</strong>
                        <span className="program">{item.program}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Education