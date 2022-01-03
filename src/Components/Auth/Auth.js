import { Formik } from 'formik';
import React, { Component } from 'react'
import { auth } from '../../redux/authActionCreators';
import { connect } from 'react-redux';
import Comspinner from '../spinner/Comspinner';

const mapDispatchToProps= dispatch =>{
    return{
        auth:(email,password,mode)=>dispatch(auth(email,password,mode))
    }
}

const mapStateToProps=(state)=>{
    return{
        authLoading:state.authLoading
    }
}

 class Auth extends Component {
     state={
         Mode:"Sign Up"
     }
     handleModeChange=()=>{
         this.setState({
             Mode:this.state.Mode==='Sign Up'?'Login':'Sign Up'
         })
     }
    render() {
        let form=null
        if(this.props.authLoading){
            form = (<Comspinner />)
        }else{
            form=(
                <Formik
                    initialValues={{
                        email:"",
                        password:"",
                        passwordConfirm:""
                    }}
                    onSubmit={
                        (values)=>{
                            this.props.auth(values.email,values.password,this.state.Mode)
                        }
                    }

                    validate={
                        (values)=>{
                            const errors={}
                            if(!values.email){
                                errors.email='Required'
                            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }

                            if (!values.password) {
                                errors.password = 'Required';
                            } else if (values.password.length < 4) {
                                errors.password = 'Must be atleast 4 characters!';
                            }
                                if(this.state.Mode==="Sign Up"){
                                    if (!values.passwordConfirm) {
                                        errors.passwordConfirm = 'Required';
                                    } else if (values.password !== values.passwordConfirm) {
                                        errors.passwordConfirm = 'Password field does no match!';
                                    }
                                }
                                
                                return errors;
                            }
                        }
                    
                    
                    > 

                    {({values,handleChange,handleSubmit,errors})=>(
                    <div
                        style={{
                            marginTop:'20px',
                            border:'1px solid grey',
                            borderRadius:"7px",
                            padding:'15px'
                    }}
                    
                    >
                        <button
                        style={{backgroundColor:'grey',color:'white',width:'100%'}} onClick={this.handleModeChange}
                        >Switch To {this.state.Mode==="Sign Up"?"Login":"Sign Up"}</button>
                        <br/><br/>
                        <form onSubmit={handleSubmit} >
                            <input name='email' placeholder='Type Your email' className='form-control'
                             value={values.email} onChange={handleChange} />
                            
                            <span style={{color:'red'}}>{errors.email}</span>
                            <br/>
                            <input name='password' placeholder='Type Your Password' 
                            className='form-control' value={values.password} onChange={handleChange} />
                            
                            <span style={{color:'red'}}>{errors.password}</span>
                            <br/>
                            {this.state.Mode==="Sign Up"?<div><input name='passwordConfirm' placeholder='Confirm Password' 
                            className='form-control' value={values.passwordConfirm} onChange={handleChange} />
                            
                            <span style={{color:'red'}}>{errors.passwordConfirm}</span>
                            <br/></div> :null}
                            
                            <button type='submit' className='btn btn-success'>
                                {this.state.Mode==="Sign Up"?"Sign Up":"Login"}</button>
                        </form>
                        </div>)}
                </Formik>
            )
        }
        return (
            <div>
                {form}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Auth);
