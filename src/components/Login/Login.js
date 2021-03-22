import { useContext, useState } from 'react'
import './Login.css'
import { UserContaxt } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeFirebaseLoginFramework, signInWithEmailAndPassword } from './LoginManager';




function Login() {
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
    });

    initializeFirebaseLoginFramework()
    const [loggedInUser, setLoggedInUser] = useContext(UserContaxt);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
 
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            handleRespose(res, true)
        });
    }

    const signOut = () => {
        handleSignOut()
        .then(res => {
            handleRespose(res, false)
        });
    }

    const fbSignIn = () => {
        handleFbSignIn()
        .then(res => {
            handleRespose(res, true)
        });
    }


    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailPassword( user.name, user.email, user.password)
            .then(res => {
                handleRespose(res, true)
            })
        }
       if (!newUser && user.email && user.password) {
        signInWithEmailAndPassword( user.email, user.password)
        .then(res => {
            handleRespose(res, true)
        }) 
        }
        e.preventDefault()
        // console.log(user.email , user.password);
    }

    const handleRespose = (res, redireact) => {
        setUser(res)
        setLoggedInUser(res)
        if(redireact){
            history.replace(from);
        }
    } 

    const handleBlur = (e) => {
        // console.log(e.target.name, e.target.value);
        let isFieldValid;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }

        if (e.target.name === 'password') {
            isFieldValid = e.target.value.length > 8;
        }

        if (e.target.name === 'name') {
            isFieldValid = e.target.value.length > 4;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
 
    return (
        <div className="login">
            {
                user.isSignedIn ?
                    <button className="btn btn-info" onClick={signOut}>Sign Out</button>
                    :
                    <button className="btn btn-info" onClick={googleSignIn}>Sign In</button>
            }
            <br /> <br />
            <button onClick={fbSignIn} className="btn btn-secondary">Login using facebook</button>
            {
                user.isSignedIn &&
                <div>
                    <h1>Welcome, {user.name}</h1>
                    <img src={user.photo} alt="photoURT" />
                    <h3>Email: {user.email}</h3>
                </div>
            }
            {/* <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p> */}
            <form onSubmit={handleSubmit}>
                <h1>Our OWN authentication system</h1>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} />
                <label>new user sign up</label>
                <br />
                {
                    newUser ?
                        <div>
                            <input name="name" className="form-control" placeholder="Your name" onBlur={handleBlur} type="text" />
                            <br />
                            <input type="email" className="form-control" name="email" onBlur={handleBlur} placeholder="inter Email" required />
                            <br />
                            <input type="password" className="form-control" name="password" onChange={handleBlur} placeholder="password" required />
                        </div>
                        :
                        <div>
                            <input type="email" className="form-control" name="email" onBlur={handleBlur} placeholder="inter Email" required />
                            <br />
                            <input type="password" className="form-control" name="password" onChange={handleBlur} placeholder="password" required />
                        </div>
                }
                <br />
                <input className="btn btn-primary mx-3" type="submit" value={newUser ? 'sign up' : 'sign in'} />
            </form>
            {
                user.success ?
                    <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'logged'} successfully</p>
                    :
                    <p style={{ color: 'red' }}>{user.error}</p>
            }
        </div>
    );
}

export default Login;
