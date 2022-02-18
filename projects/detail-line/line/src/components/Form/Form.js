import React from 'react';
import { FormStyles, InsideFormStyles } from '../FormStyles';

function Form() {
    return (
        <FormStyles>
            <InsideFormStyles>
                <div className="form-group">
                    <label>Usuario: </label>
                    <br />
                    <input
                    type="text"
                    className="form-control"
                    name="username"
                    // onChange={this.handleChange}
                    />
                    <br />
                    <label>Contraseña: </label>
                    <br />
                    <input
                    type="password"
                    className="form-control"
                    name="password"
                    // onChange={this.handleChange}
                    />
                    <br />
                    <button 
                        className="btn btn-primary" 
                        // onClick={()=> this.iniciarSesion()}
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </InsideFormStyles>
        </FormStyles>
    );
}

export default Form;