
import './styles.css'

export default function HomePage({ teamLogos, setPageName }) {
    
    setPageName('Home')

    return(
        <>
            <h1 className="is-size-1 has-text-black-ter">Welcome to NHL Now!</h1>
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