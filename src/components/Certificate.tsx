const certificateData = [
    { date: "2022.07", title: "컴퓨터그래픽스운용기능사" },
    { date: "2022.02", title: "SMAT(서비스경영자격) 3급" },
    { date: "2021.05", title: "GTQ(그래픽기술자격) 2급" },
    { date: "2021.03", title: "정보기술자격(ITQ) 아래한글 A등급" }
]

const Certificate = () => {
    return (
        <div className="certificate">
            <h3>자격증</h3>
            <ul>
                {certificateData.map((cert, id) => (
                    <li key={id}>
                        <span className="cert-date">{cert.date}</span>
                        <span className="cert-title">{cert.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Certificate