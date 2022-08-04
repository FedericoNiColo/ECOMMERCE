
import './Us.css';


const Us = () => {



    return (

        <>
            <main class="contenedor">
                <h1>Nosotros</h1>

                <div class="nosotros">
                    <div class="nosotros__contenido">
                        <p>Aenean viverra, libero nec bibendum viverra, nisi elit tristique risus, accumsan imperdiet nunc magna
                            quis libero. Ut tempus neque id tempor mattis. Proin facilisis quam ac tellus aliquet accumsan.
                            Praesent diam est, maxs. Maecenas scelerisque sem ex, nec consectetur turpis rhoncus a.
                            Curabitur nulla risus, porta vitae aliquam eget, finibus eu elit.</p>

                        <p>Fusce in est ut dui blandit mollis a nec augue. Praesent commodo ut nulla non hendrerit. Sed eros
                            nibh, scelerisque et pulvinar in, convallis egestas purus. Fusce vehicula tempus odio eget lacinia.
                            Donec rutrum vel ex nc massa, ultrices sed vestibulum finibus, facilisis eget
                            erat. Nam eros velit, semper a malesuada rutrum, egestas vitae arcu. Maecenas at consectetur arcu.
                            Nullam id neque vitae arcu consequat imperdiet.</p>
                    </div>

                    <img class="nosotros__imagen" src='./Img/nosotros.jpg' alt="imagen nosotros" />
                </div>
            </main>

            <section class="contenedor comprar">
                <h2 class="comprar__titulo">¿Porqué comprar con nosotros?</h2>

                <div class="bloques">
                    <div class="bloque">
                        <img class="bloque__imagen" src="./Img/icono_1.png" alt="porque comprar" />
                        <h3 class="bloque__titulo">El mejor precio</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum libero sit suscipit volu</p>
                    </div>

                    <div class="bloque">
                        <img class="bloque__imagen" src="./Img/icono_2.png" alt="para devs" />
                        <h3 class="bloque__titulo">Para devs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum libero sit suscipit volu</p>
                    </div>

                    <div class="bloque">
                        <img class="bloque__imagen" src="./Img/icono_3.png" alt="envio gratis" />
                        <h3 class="bloque__titulo">Envios gratis</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum libero sit suscipit volu</p>
                    </div>

                    <div class="bloque">
                        <img class="bloque__imagen" src="./Img/icono_4.png" alt="la mejor calidad" />
                        <h3 class="bloque__titulo">La mejor calidad</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum libero sit suscipit volu</p>
                    </div>
                </div>
            </section>

        </>


    )
}


export default Us;