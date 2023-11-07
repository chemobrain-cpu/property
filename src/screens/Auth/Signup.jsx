import React, { useState, useCallback } from 'react';
import styles from './Login.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/Input';
import SubmitBtn from '../../components/Submit';
import Loader from "../../components/loader";



function SignupPage() {
    let [email, setEmail] = useState("")
    let [emailError, setEmailError] = useState("")


    let [password, setPassword] = useState("")
    let [passwordError, setPasswordError] = useState("")


    let [username, setUsername] = useState("")
    let [usernameError, setUsernameError] = useState("")


    let [fullName, setFullName] = useState("")
    let [fullNameError, setFullNameError] = useState("")


    let [confirmPassword, setConfirmPassword] = useState("")
    let [confirmPasswordError, setConfirmPasswordError] = useState("")
    



    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    //initialising reduzx
    let dispatch = useDispatch()
    let { color } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()
    //loaders state

    let isFormValid =  password && !passwordError && !emailError && email && fullName && !fullNameError && confirmPassword && !confirmPasswordError && username && !usernameError






    let toLogin = ()=>{
        navigate('/login')
    }


    let setFormDetails = useCallback(e => {

        if (e.formName === "email") {
            let formValue = e.value
            setEmail(formValue)
            setEmailError(e.error)

        } else if (e.formName === "password") {
            let formValue = e.value
            setPassword(formValue)
            setPasswordError(e.error)

        } else if (e.formName === "fullName") {
            let formValue = e.value
            alert(formValue)
            setFullName(formValue)
            setFullNameError(e.error)

        }else if (e.formName === "username") {
            let formValue = e.value
            alert(formValue)
            setUsername(formValue)
            setUsernameError(e.error)

        }else if (e.formName === "confirmPassword") {
            let formValue = e.value
            setConfirmPassword(formValue)
            setConfirmPasswordError(e.error)
        }
    },[])


    const submitHandler = async (e) => {
        e.preventDefault()
        if (!isFormValid) {
            return
        }
        setIsLoading(true)
        let response

        let data = {
            email: email,
            password: password,
            fullName :fullName,
            confirmPassword:confirmPassword,
            username:username
        }

        console.log(data)

        return

        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            setTimeout(() => {
                navigate(`${response.url}`)
            }, 3000)


        }else{
            setTimeout(() => {
                navigate(`${response.url}`)
            }, 3000)

        }
    }

    let navigateBackward = ()=>{
        navigate(-1)

    }

    return (<>

        <div className={styles.screenContainer}>
            <div className={styles.leftContainer}>
                <h1>Welcome</h1>
            </div>

            <div className={styles.rightContainer}>
                {isLoading && <Loader />}

                <form className={styles.rightformcontainer} onSubmit={submitHandler}>
                    <div className={styles.navigate}>
                        <span className='material-icons' onClick={navigateBackward}>arrow_backward</span>
                    </div>


                    <div className={styles.inputcontainer}>
                        <h2>Create an account</h2>

                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Full Name'
                                type='text'
                                types="text"
                                className="formcard"
                                formName="fullName"
                                placeholder='Enter your full name'
                                setFormDetails={setFormDetails}
                            />

                        </div>

                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Username'
                                type='text'
                                types="text"
                                className="formcard"
                                formName="username"
                                placeholder='Enter username'
                                setFormDetails={setFormDetails}
                            />

                        </div>

                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Email'
                                type='email'
                                types="email"
                                className="formcard"
                                formName="email"
                                placeholder='Enter your email address'
                                setFormDetails={setFormDetails}
                            />

                        </div>


                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Password'
                                type='password'
                                types='password'
                                className="formcard"
                                setFormDetails={setFormDetails}
                                formName="password"
                                placeholder=''
                            />

                        </div>

                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Confirm Password'
                                type='password'
                                types='password'
                                className="formcard"
                                setFormDetails={setFormDetails}
                                formName="confirmPassword"
                                placeholder=''
                            />

                        </div>

                    </div>







                    <div className={styles.submit}>
                        <SubmitBtn style={{ opacity: isFormValid ? 1 : 0.5, borderRadius: '8px' }} text="Continue" />

                        {isError && <p className={styles.errorText} >{isErrorInfo}</p>}


                    </div>


                    <p className={styles.terms}>By signing up you agree to our <span>terms</span> and <span>conditions</span></p>




                    <p className={styles.alternative}> Already have account ? <span onClick={toLogin}>Login</span></p>

                </form>

            </div>


        </div>
    </>

    );
}

export default SignupPage