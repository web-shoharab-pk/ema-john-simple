import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './firebase.config';

export const initializeFirebaseLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            };
            return signedInUser;
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(error, errorCode, errorMessage, email, credential);
        });
}

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((result) => {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            };
           return signedInUser;
        })
        .catch((error) => {
            return error;
        });
}


export const handleSignOut = () => {
   return firebase.auth().signOut().then(result => {
         const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            password: '',
            photo: '',
            error: '',
            success: false
        }
        console.log(result);
        // Sign-out successful.
        return signedOutUser;
    }).catch((error) => {
        // An error happened.
        console.log(error);
    });
}

export const createUserWithEmailPassword = (name, email, password) => {
   return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            // Signed in 
            const newUserInfo = res.user;
            newUserInfo.error = null;
            newUserInfo.success = true;
            updateUserInfo(name)
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;         
        }
        );
}

export const signInWithEmailAndPassword = (email, password) => {
   return firebase.auth().signInWithEmailAndPassword( email,  password)
                .then((res) => {
                    // Signed in
 
                    const newUserInfo = res.user ;
                    newUserInfo.error = null;
                    newUserInfo.success = true;
                    return newUserInfo;
                    //   console.log("sign in info", userCredential);
                })
                .catch((error) => {
                    const newUserInfo = { };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    return newUserInfo;
                });
}

const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
        // photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function () {
        // Update successful.
        console.log("User name updated successfully");
    }).catch(function (error) {
        // An error happened.
        console.log(error);
    });
}