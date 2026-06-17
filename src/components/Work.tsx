const Data = [
    { id: 1, date: "2023.03.06 ~ 2025.10.30 (2년 8개월)", name: "(주)사이트큐빅", team: "데이터관리팀 주임연구원" },
    { id: 2, date: "2022.08.16 ~ 2022.11.19 (4개월)", name: "서울청년대학(주)", team: "경영지원팀 인턴" }
]

const Work = () => {
    return (
        <>
            <h3>경력</h3>
            <ul className="history">
                {Data.map((item) => (
                    <li key={item.id}>
                        <span className="date">{item.date}</span>
                        <strong className="name">{item.name}</strong>
                        <span className="team">{item.team}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Work