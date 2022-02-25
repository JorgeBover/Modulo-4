import '../styles/Componentes/Pages/ReservasPage.css'
import React from 'react';

const ReservasPage = (props) => {
    return (
        <main>
            <div className="holder">

                <div className="detalle">

                    <h3>RESERVAS Y CONSULTAS</h3>
                    <p>Reserve sus habitaciones sin cargo o envíenos su consulta y con gusto la responderemos a la brevedad.</p>
                    <p>* Las reservas deberán ser confirmadas hasta 72 hs antes del ingreso. </p>

                </div>

                <div className="reservas">

                    <img src="images/reservas/reserva.jpg" alt=""/>

                        <div className="formularios">

                            <div className="usuarios">
                                <h4><a href="">ingresar</a> - <a href="">registrarse</a></h4>
                            </div>

                            <form action="" className="formulario">
                                <p>
                                    <label for="">Ingreso</label>
                                    <input type="date"/>
                                </p>

                                <p>
                                    <label for="">Salida</label>
                                    <input type="date"/>
                                </p>

                                <p>
                                    <label for="Habitaciones">Habitación</label>
                                    <select name="" id="">
                                        <option value="" selected disabled>Seleccione Habitación</option>
                                        <option value="">E Lounge</option>
                                        <option value="">Vista a Ciudad</option>
                                        <option value="">Suite Presidencial</option>
                                    </select>
                                </p>

                                <p>
                                    <label for="">Cantidad</label>
                                    <input type="number"/>
                                </p>

                                <p>
                                    <label for="">Adultos</label>
                                    <input type="number"/>
                                </p>

                                <p>
                                    <label for="">Niños</label>
                                    <input type="number"/>
                                </p>

                                <input type="button" value="RESERVAR"/>

                            </form>

                            <form action="" className="consulta">
                                <p>
                                    <label for="">Nombre</label>
                                    <input type="text"/>
                                </p>
                                <p>
                                    <label for="">E-mail</label>
                                    <input type="text"/>
                                </p>
                                <p>
                                    <label for="">Consulta</label>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                </p>

                                <input type="button" value="ENVIAR"/>

                            </form>


                        </div>


                </div>

            </div>


        </main>
    );
}

export default ReservasPage;