import axios from "axios";
import React , {useState , useEffect} from "react";
import {PortfolioSection , PortfolioList , PortfolioTitle , PortofolioItem , Span , Image, ImageWrapper ,Overlay , OverlaySpan} from './Style.js'

const Portfolio = () => {

    const [ images , setImages ] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then(res =>{setImages(res.data.portfolio)})
    } , [] ) 

    const PortfolioImages = images.map((imageItem) => {
        return(
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt=""/>
                <Overlay >
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
        </ImageWrapper>
        )
    } )

  return (
    <PortfolioSection>
    <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
    <PortfolioList>
        <PortofolioItem active>All</PortofolioItem>
        <PortofolioItem>HTML</PortofolioItem>
        <PortofolioItem>Photoshop</PortofolioItem>
        <PortofolioItem>Wordpress</PortofolioItem>
        <PortofolioItem>Mobile</PortofolioItem>
    </PortfolioList>
    
    <div className="box">
        
      {PortfolioImages}
        
    </div>
    
</PortfolioSection>

  );
}

export default Portfolio;
