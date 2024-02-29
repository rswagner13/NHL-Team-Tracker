
import './styles.css'

export default function HomePage({ teamLogos }) {
    

    return(
        <>
            <h1 className="is-size-1">Welcome to NHL Team Tracker!</h1>
            <div className="image-carousel">
                <div className="slider">
                    <div className="slide">
                        {teamLogos.map(image =>  <img key={image} src={image} />)}
                    </div>
                </div>
            </div>
        </>
    )
}