import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {agregarCitaAction} from '../actions/citasActions'
import {validarFormularioAction} from '../actions/validarActions';
import uuid from 'uuid/v4';


//sfc
const AgregarCita = () => {
    const [nombre, guardarNombre] = useState('');
    const [apellido, guardarApellido] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [sintomas, guardarSintomas] = useState('');

    //dispatch para ejecutar nuestras acciones 

    const dispatch = useDispatch();
    const agregarNuevaCita = (cita) => dispatch(agregarCitaAction(cita));
    const validarFormulario = (estado) => dispatch(validarFormularioAction(estado));

    //Acceder al error se utilizaba antes el mapStateToProps en Hooks
    const error = useSelector((state) => state.error);

    //cuando el formulario es enviado
    const submitNuevaCita = e => {
        e.preventDefault();


        //validar formulario 
        if(nombre.trim() === '' ||
           apellido.trim() === '' || 
           fecha.trim() === '' ||
           hora.trim() === '' ||
           sintomas.trim() === ''){
            validarFormulario(true);
            return;
        }
        validarFormulario(false);

        //crear cita
        agregarNuevaCita({
            id : uuid(),
            nombre,
            apellido,
            hora,
            fecha,
            sintomas
        });

        //reiniciar el formulario 
        guardarNombre('');
        guardarApellido('');
        guardarHora('');
        guardarFecha('');
        guardarSintomas('');

    }

    return ( <div className="card mt-5">
    <div className="card-body">
        <h2 className="card-title text-center mb-5">Agrega cita</h2>
        <form onSubmit={submitNuevaCita}>
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                <div className="col-sm-8 col-lg-10">
                    <input 
                        type="text" 
                        className="form-control"  
                        placeholder="Nombre"
                        value= {nombre}
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Apellido</label>
                <div className="col-sm-8 col-lg-10">
                    <input 
                        type="text" 
                        className="form-control"  
                        placeholder="Apellido"
                        value= {apellido}
                        onChange={e => guardarApellido(e.target.value)}
                    />
                </div>
            </div>
            

            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                    <input 
                        type="date" 
                        className="form-control"
                        value= {fecha}
                        onChange={e => guardarFecha(e.target.value)}
                    />
                </div>                            

                <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                <div className="col-sm-8 col-lg-4">
                    <input 
                        type="time" 
                        className="form-control" 
                        value= {hora}
                        onChange={e => guardarHora(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                <div className="col-sm-8 col-lg-10">
                    <textarea 
                        className="form-control"
                        value= {sintomas}
                        onChange={e => guardarSintomas(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="form-group row justify-content-end">
                <div className="col-sm-3">
                    <button type="submit" className="btn btn-success w-100">Agregar</button>
                </div>
            </div>
        </form>
       {error.error ? <div className="alert alert-danger text-center p2">Todos los campos son obligatorios</div> : null}
    </div>
</div> );
}
 
export default AgregarCita;