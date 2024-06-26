import Card from "../../Components/Cards/Cards";


function Home() {


    return <div>


        <div>
            <img className="uperIMg" src="https://images.olx.com.pk/thumbnails/423979386-800x600.webp" alt=""></img>
            <img className="uperIMg1" src="https://tpc.googlesyndication.com/simgad/2392094703538849053" alt=""></img>

            <h2 className="All-categories">All categories</h2>

            <div className="imgews">

                <img className="imagesDE" src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" alt="" />
                <img className="imagesDE" src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png" alt="" />

                <img className="imagesDE" src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" alt="" />

                <img className="imagesDE" src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png" alt="" />

                <img className="imagesDE" src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png" alt="" />

                <img className="imagesDE" src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png" alt="" />

                <img className="imagesDE" src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png" alt="" />

                <img className="imagesDE" src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png" alt="" />

                <img className="imagesDE" src="https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png" alt="" />

            </div>

            <div className="imgew1">
                <img className="imagesDE" src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png" alt="" />

                <img className="imagesDE" src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png" alt="" />

                <img className="imagesDE" src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png" alt="" />

                <img className="imagesDE" src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png" alt="" />

                <img className="imagesDE" src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png" alt="" />
            </div>

            {/* <h2 className="All-categories1">Grab Yours</h2> */}
            <img className="grab" src="https://www.onebeautifulhomeblog.com/wp-content/uploads/2016/11/Grab-Yours-Now-Button-Red.jpg" alt="Grab Yours Now!"/>

            <img className="ordernow"  src="https://media1.giphy.com/media/rry3DDIcKQ5enlXhbQ/giphy.gif?cid=6c09b952ovs89rw1dr8tv60kiqwwk2v9eohumhmadq145z2c&ep=v1_stickers_related&rid=giphy.gif&ct=ts" alt="Order Now!"/>




        </div>
        <br />

        <div>
            <Card />
        </div>
        <div>
        <img className="visting"  src="https://th.bing.com/th/id/OIP.t8kcvpsnu6fxf_UIQWg3ygHaBg?rs=1&pid=ImgDetMain" alt="Thanks For Visisting Website!!"/>
        </div>
        <div>
            <footer>

                <div class="container__footer">
                    <div class="box__footer">
                        <div class="logo">

                        </div>
                        <div class="terms">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit cum cumque velit libero officiis quam doloremque reprehenderit quae corporis! Delectus architecto officia praesentium atque laudantium, nam deleniti sapiente deserunt.</p>
                        </div>
                    </div>
                    <div class="box__footer">
                        <h2>Soluciones</h2>
                        <a href="https://www.google.com">App Desarrollo</a>
                        <a href="#">App Marketing</a>
                        <a href="#">IOS Desarrollo</a>
                        <a href="#">Android Desarrollo</a>
                    </div>

                    <div class="box__footer">
                        <h2>Compañia</h2>
                        <a href="#">Acerca de</a>
                        <a href="#">Trabajos</a>
                        <a href="#">Procesos</a>
                        <a href="#">Servicios</a>
                    </div>

                    <div class="box__footer">
                        <h2>Redes Sociales</h2>
                        <a href="#"> <i class="fab fa-facebook-square"></i> Facebook</a>
                        <a href="#"><i class="fab fa-twitter-square"></i> Twitter</a>
                        <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a>
                        <a href="#"><i class="fab fa-instagram-square"></i> Instagram</a>
                    </div>

                </div>

                <div class="box__copyright">
                    <hr />
                    <p>Todos los derechos reservados © 2021 <b>MagtimusPro</b></p>
                </div>
            </footer>
        </div>


    </div>
}
export default Home;