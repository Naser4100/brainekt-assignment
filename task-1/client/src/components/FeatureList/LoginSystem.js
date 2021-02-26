// Reusable components
import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';

// Main component function
const LoginSystem = ({ featureData }) => {

  // Destructuring featureData
  const {
    emailPasswordLogin,
    socialLogin,
  } = featureData;

  return (
    <CardLayout sectionTitle = 'Login System'>

      <CheckBox
        id='email_pass_login'
        name={emailPasswordLogin.name}
        value={emailPasswordLogin.price}
      />

      <CheckBox
        id='social_login'
        name={socialLogin.name}
        value={socialLogin.price}
      />

    </CardLayout>
  )
}

export default LoginSystem;
