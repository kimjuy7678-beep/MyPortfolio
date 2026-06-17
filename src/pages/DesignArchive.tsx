import { designData } from "../data/DesignData"

const DesignArchive = () => {
    return (
        <div className="design-archive">
            <h2>Design Archive</h2>
            <div className="masonry-grid">
                {designData.map((item) => (
                    <div key={item.id} className='grid-item'>
                        <img src={item.img} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DesignArchive