import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card, Anchor, message } from 'antd';
import logo from '../../public/SUTHLOGO-01.png'
import { loginAdmin, authenticate, getToken, getEmail } from '../services/LoginService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        try {
            const result = await loginAdmin(values); // Login
            message.success('Success', 2);
            authenticate(result, () => navigate("/dashboard")); // เก็บ Token ใน Browser
        } catch (error) {
            if (error == 'Wrong email!') {
                message.error('Wrong email!', 2);
            } else if (error == 'Wrong password!') {
                message.error('Wrong password!', 2);
            }
        }
    };
    const showLoginData = () => {
        try {
            console.log(getToken())
            console.log(getEmail())
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <div className="login-root">
                <div className="content">
                    <Card style={{ width: 400 }}>
                        <div className="login-container">
                            <div className="logo-login">
                                <img src={logo} alt="" style={{ width: '100px' }} />
                            </div>
                            <div className="anchor-container">
                                <Anchor
                                    direction="horizontal"
                                    items={[
                                        {
                                            key: 'login',
                                            href: '',
                                            title: 'Login',
                                        },
                                    ]}
                                />
                            </div>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email or phone!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon custom-login-icon" />} placeholder="email or phone" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon custom-login-icon" />}
                                        type="password"
                                        placeholder="password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <div className="rem-for">
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>

                                        <a className="login-form-forgot" href="">
                                            Forgot password
                                        </a>
                                    </div>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Sign in
                                    </Button>

                                    {/* Test BTN */}
                                    <Button style={{ margin: "0 0 0 20px" }} className="login-form-button" onClick={showLoginData}>
                                        Show Data
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Login