import '../scss/profile.scss'

type ProfileProps = {
    isText?: boolean
}

const Profile = ({ isText = false }: ProfileProps) => {
    return (
        <div className="profile">
            {!isText && (
                <div className="profile-img">
                    <img src="/images/profileImg.png" alt="프로필사진" />
                </div>
            )}

            {isText && (
                <div className="info">
                    <p className="job-title scroll-item">UI/UX 디자이너 & 웹 퍼블리셔</p>
                    <h3 className="name scroll-item">김주연</h3>
                    <p className="bio scroll-item">디자인 속에 숨겨진 의도를 읽어내고,<br />가장 명확한 코드의 언어로 구현합니다</p>
                </div>
            )}
        </div>
    )
}

export default Profile