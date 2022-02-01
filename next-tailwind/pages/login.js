import React from 'react';
import Button from './components/Button';
import Input from '../components/Input';
import Label from '../components/Label';
import Guest from '../layouts/Guest';

export default function login() {
    return (
        <div>
            <form>
                <div className="mb-6">
                    <Label forInput="email">
                        Email
                    </Label>
                    <Input type='email' name='email' id='email' placeholder="name@gmail.com" />
                </div>
                <div className="mb-6">
                    <Label forInput="password">
                        Password
                    </Label>
                    <Input type="password" name='password' id='password' />
                </div >
                <div className="mb-6 flex justify-between">
                    <div>
                        <input type="checkbox" className='accent-sky-400 mr-3' name='remember' id='remember' />
                        <label htmlFor="remember">
                            Remember me
                        </label>
                    </div>
                    <a href="#">Forgot Password</a>
                </div>
                <Button>Login</Button>
            </form>
        </div>
    );
}

Login.getLayout = (page) => (
    <Guest header="login" title="Login" children={page} />
);