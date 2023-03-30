import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';

export default function Login() {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/home')
    }
    return (
    <div className="login-page">
        <div className="help">
            <div className="icon-text">
                <img src="./assets/question.png" alt="question" width={"24px"}/>
                <span className="help-text">Pusat Bantuan</span>
            </div>
        </div>

        <div className="logo">
            <img src={logo} width={"75px"} alt="logo" />
        </div>

        <div className="custom-shape-divider-top-1680090073">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>

        <div className="custom-shape-divider-bottom-1680090073">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>

        <div className="title-text">
            <h1 className="main-text">Selamat Datang di Solusi <br/>Perangkat Lunak Farmasi</h1>
            <h2 className="sub-text">Sistem Manajemen Apotek Online</h2>
        </div>

        <div className="image-doctor">
            <img src="./assets/doc_image.png" alt="doc_image" width={"500px"} />
        </div>

        <form className="form">
            <p className="form-title">Silahkan masuk ke dalam akun anda dan kelola apotek Anda.</p>
            <div class="form-group">
                <label for="email" className="label-field">EMAIL</label>
                <div className="email-field">
                    <span className="icon"><i className="fa fa-envelope"></i></span>
                    <input type="email" id="email" name="email" placeholder="name@email.com"/>
                </div>
            </div>

            <div className="form-group">
                <label for="password" className="label-field">PASSWORD</label>
                <div className="password-field">
                    <span className="icon"><i className="fa fa-lock"></i></span>
                    <input type="password" id="password" name="password" placeholder="********"/>
                </div>
            </div>

            <div className="forget-remember">
            <label className="remember-me">
                <input type="checkbox" name="remember_me"/> Ingat saya
            </label>

            <a href="/" className="forget-password">Lupa password?</a>
            </div>

            <button className="login-btn" type="submit" onClick={handleLogin}>Masuk</button>
            <p className="register-text">Belum registrasi ? Silahkan klik <a href="/signup" className="sign-up">Daftar</a></p>

        </form>

    </div>
    )
}