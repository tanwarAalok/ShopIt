import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up.styles.scss';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, password, confirmPassword } = formFields;

    // console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!!");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            console.log("user: ", user);
            await createUserDocumentFromAuth(user, { name });

            resetFormFields();
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user!!, Email already exists');
            }
            console.log("User creation encountered an error", error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Dont't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Name"
                     type="text"
                    required onChange={handleChange}
                    name="name" value={name} />


                <FormInput label="Email" type="email"
                    required onChange={handleChange}
                    name="email" value={email} />
                
                
                <FormInput label="Password"  type="password"
                    required onChange={handleChange}
                    name="password" value={password} />
                
              
                <FormInput label="Confirm Password"  type="password"
                    required onChange={handleChange}
                    name="confirmPassword" value={confirmPassword} />

                <Button Children="Sign Up" type="submit"></Button>

            </form>
        </div>
    )
}

export default SignUpForm;