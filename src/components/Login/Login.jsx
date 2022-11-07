import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} type="text" name="login" placeholder="login" validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type="text" name="password" placeholder="password" validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type="checkbox" name="rememberMe" validate={[required]}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;