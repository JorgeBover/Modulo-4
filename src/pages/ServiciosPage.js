import React from 'react';

const ServiciosPage = (props) => {
    return (
        <main>

            <div className="holder">

                <div className="detalle">

                    <h3>SERVICIOS Y COMODIDADES INOLVIDABLES</h3>
                    <p>Disfrute de nuestros servicios y comodidades, desde placeres gastronómicos en nuestro exclusivo bar,
                        hasta organización de bodas o conferencias en nuestro salón. Con la excelencia característica de
                        PCH.</p>

                </div>

            </div>

            <div className="carrusel">
                <img src="images/servicios/servicios.jpg" alt="" />

            </div>

            <div className="holder">
                <div className="servicios">
                    <div className="servdetalle">
                        <img src="images/servicios/bar.jpg" alt="" />
                        <div>
                            <h4>GASTRONOMIA</h4>
                            <p>Nuestro espectacular restaurante ofrece una impresionante selección de los mejores platos de
                                autor y una lista excepcional de vinos locales.</p>
                        </div>

                    </div>

                    <div className="servdetalle">
                        <img src="images/servicios/salon.jpg" alt="" />
                        <div>
                            <h4>EVENTOS</h4>
                            <p>Celebre una romántica boda en Buenos Aires o realice la mejor conferencia. Con la asistencia
                                de nuestro personal especializado.</p>
                        </div>

                    </div>

                    <div className="servdetalle">
                        <img src="images/servicios/spa.jpg" alt="" />
                        <div>
                            <h4>NUESTRO SPA</h4>
                            <p>Relájese en nuestro spa y disfrute de tratamientos faciales, mimese con una manicura, o
                                comparta nuestros masajes para dos con una copa de vino espumoso.</p>
                        </div>

                    </div>

                    <div className="servdetalle">
                        <img src="images/servicios/gym.jpg" alt="" />
                        <div>
                            <h4>GIMNASIO 24hs</h4>
                            <p>Ejercite el cuerpo completo en un gimnasio ultramoderno.</p>
                        </div>

                    </div>


                </div>


            </div>


        </main>
    );
}

export default ServiciosPage;