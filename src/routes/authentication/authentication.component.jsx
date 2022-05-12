import './authentication.styles.scss'
import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInForm from "../../components/sign-in/sign-in.component";

const Authentication = () => {
    return (
      <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
      </div>
    );
};

export default Authentication;
