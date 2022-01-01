import { Formik } from 'formik';
import React, { Component } from 'react'

 class Auth extends Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        email:"",
                        password:"",
                        passwordConfirm:""
                    }}
                    onSubmit={
                        (values)=>{
                            console.log(values)
                        }
                    }
                    
                    > 

                    {({values,handleChange,handleSubmit})=>(<div>
                        <form onSubmit={handleSubmit} style={{marginTop:'20px'}}>
                            <input name='email' placeholder='Type Your email' className='form-control'
                             value={values.email} onChange={handleChange} />
                            <br/>
                            <input name='password' placeholder='Type Your Password' 
                            className='form-control' value={values.password} onChange={handleChange} />
                            <br/>
                            <input name='passwordConfirm' placeholder='Confirm Password' 
                            className='form-control' value={values.passwordConfirm} onChange={handleChange} />
                            <br/>
                            <button type='submit' className='btn btn-success'>Submit</button>
                        </form>
                        </div>)}
                </Formik>
            </div>
        )
    }
}

export default Auth;