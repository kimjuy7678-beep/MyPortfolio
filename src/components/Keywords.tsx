import '../scss/keywords.scss'

const keywordData = ["집요함", "배려형코드", "사용자경험개발", "디자인퍼블리셔", "집요한_퍼블리싱"]

const Keywords = () => {
    return (
        <div className="keywords scroll-item">
            <ul className="keyword-list">
                {keywordData.map((tag, id) => (
                    <li key={id} className="tag-item">
                        #{tag}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Keywords