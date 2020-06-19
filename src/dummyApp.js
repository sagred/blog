import React, {useState} from 'react'

function App() {
    //State for login...
    const [lemail, setLemail] = useState('');
    const [lpassword, setLpassword] = useState('');

    //State for SignUP
    const [semail, setSemail] = useState('');
    const [spassword, setSpassword] = useState('');
    const [sspassword, setSspassword] = useState('');

    //State for login and SignUp form
    const [login, setLogin] = useState(true);

    //Error in SignUp
    const [serror ,setSerror] = useState('');
    const Login = (e) => {
        e.preventDefault();
        console.log(lemail, lpassword);
    }

    const SignUpForm = (e) => {
        e.preventDefault();
        setLogin(false);
    }

    const SignUp = (e) => {
        e.preventDefault();
        if(PasswordTest){
            setSerror('Signing Up ...')
        }
        else {
            setSerror('Password is not matching')
        }
        console.log(semail, spassword)
    }

    const LoginForm = (e) => {
        e.preventDefault();
        setLogin(true);
    }

    const PasswordTest = () => {
        if(spassword === sspassword){
            return true
        }
        return false
    }

    return (
        <div>
            <h1>Test</h1>
            {login? 

            <div className = 'Login'>
                <h1>Login</h1>
                <form className = 'loginForm'>
                    <input type = 'email' placeholder = 'Enter your Email...' required autoFocus onChange = {(e) => setLemail(e.target.value)}/>
                    <input type = 'password' placeholder = 'Enter your password...' required onChange = {(e) => setLpassword(e.target.value)}/>
                    <button onClick = {Login}>Submit</button>
                </form>
                <div className = 'loginForm'>
                    <h4>Don't have an account...</h4>
                    <button onClick = {SignUpForm}>SignUp!</button>
                </div>
            </div>:

            <div className = 'SignUp'>
                <h1>SignUp</h1>
            <form className = 'signUpForm'>
                <input type = 'email' placeholder = 'Enter your Email...' required autoFocus onChange = {(e) => setSemail(e.target.value)}/>
                <input type = 'password' placeholder = 'Enter your password...' required onChange = {(e) => setSpassword(e.target.value)}/>
                <input type = 'password' placeholder = 'Reenter your password...' required onChange = {(e) => setSspassword(e.target.value)}/>
                Strength:{spassword.length}
                {serror.length?
                <h5 style = {{color:'red'}}>{serror}</h5>
                : null }
                <button onClick = {SignUp}>Submit</button>
            </form>
            <div className = 'loginForm'>
                <h4>Already have an account...</h4>
                <button onClick = {LoginForm}>Login!</button>
            </div>
        </div>
            }
        </div>
    )
}

export default App;