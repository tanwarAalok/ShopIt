import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in.styles.scss';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    console.log(formFields);

    const signInWithGoogle = async () => {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await signInAuthUserWithEmailAndPassword(
              email,
              password
            );
            console.log(response);
            resetFormFields();
        }
        catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert("Incorrect Password!!");
                    break;
                case 'auth/user-not-found':
                    alert('User not found!!');
                    break;
                default:
                    console.log(error);
            };

            console.log(error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" id="email" type="email"
                    required onChange={handleChange}
                    name="email" value={email} />
                
                
                <FormInput label="Password" id="password" type="password"
                    required onChange={handleChange}
                    name="password" value={password} />
                
                <div className="buttons-container">
                    <Button Children="Sign In" type="submit"></Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle} Children="Google sign in"></Button>
                </div>
                

            </form>
        </div>
    )
}

export default SignInForm;