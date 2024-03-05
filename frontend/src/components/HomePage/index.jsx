
import './styles.css'

export default function HomePage({ teamLogos, setPageName }) {
    
    setPageName('Home')

    return(
        <>
            <h1 className="is-size-1 has-text-black mb-4">Welcome to NHL Now!</h1>
            <h2 className="is-size-3 has-text-black mb-4">Where everything hockey can be found instantly!</h2>
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