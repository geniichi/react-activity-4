import './Carspage.css';

const Cars = () => {
    return(
        <main>
            <h1 className="car-title py-3">OUR CARS</h1>
            <div id="carouselExampleIndicators" class="carousel slide container" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://images.drive.com.au/driveau/image/upload/t_wp-default/v1/cms/uploads/swx81rftyxityfhgo6si" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://carwow-uk-wp-1.imgix.net/Cybertruck-4-e1612178090276.png?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://imageio.forbes.com/specials-images/imageserve/5efa416b5f1126000639efc0/0x0.jpg?format=jpg&width=1200" alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <p className='container pt-3' id="car-description">
                Our company prides itself on producing the best cars on the market.
                We believe that the key to our success lies in our rigorous attention to detail and
                commitment to quality at every step of the production process. From the initial design
                phase, where we carefully consider every aspect of the car's form and function, to the
                manufacturing stage, where we use only the highest-quality materials and employ the latest
                technologies to ensure precision and consistency, we strive for excellence in everything we
                do. We also place a strong emphasis on innovation and sustainability, constantly exploring new
                ideas and ways to reduce our environmental impact. But ultimately, what sets us apart is our passion
                for creating cars that not only look and perform great, but also provide our customers with a sense of pride
                and satisfaction that comes from owning the best of the best.
            </p>
        </main>
    )
}

export default Cars;
