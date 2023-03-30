import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';

export default function SignUp2 () {
    const navigate = useNavigate()
    const handleKembali = () => {
        navigate('/signup')
    }
    const handleRegister = () => {
        navigate('/')
    }
    return(
        <div className='signup-page'>
            <div className='signup-header'>
                <div className="help">
                    <div className="icon-text">
                        <img src="./assets/question.png" alt="question" width={"24px"}/>
                        <span className="help-text">Pusat Bantuan</span>
                    </div>
                </div>

                <div className="logo">
                    <img src={logo} width={"75px"} alt="logo" />
                </div>
            </div>

            <div className='content-signup' >
                <div class="steps">
                    <div class="step">
                        <img src="./assets/map.png" alt="map" style={{width:'24px', padding: '2px', border: "2px solid #489CFE", borderRadius: '50%'}}/>
                        <div className="icon-des">Pendaftaran Sarana</div>
                    </div>
                    <div className='connector-after'></div>
                    <div class="step">
                        <img src="./assets/doc_blue.png" alt="doc_blue" style={{width:'24px', padding: '2px', border: "2px solid #489CFE", borderRadius: '50%'}}/>
                        <div className="icon-des">Register</div>
                    </div>
                </div>

                <div className='all-form'>
                    <h1 className='form-signup-title'>Register Akun OLIN</h1>
                    <form>
                        <div>
                            <input type="text" id="email-signup" name="email-signup" placeholder="Email *"/>
                        </div>

                        <div>
                            <input type="text" id="kata-sandi" name="kata-sandi" placeholder="Kata Sandi *"/>
                        </div>
                        
                        <div>
                            <input type="text" id="konfirmasi-kata-sandi" name="konfirmasi-kata-sandi" placeholder="Konfirmasi Kata Sandi *"/>
                        </div>

                        <div className="agree-btn">
                            <input type="checkbox" name="agree-btn" style={{transform:"scale(1.5)"}}/>
                            <span>
                                Dengan membuat akun, Anda menyetujui <span style={{color: 'orange'}}>Ketentuan <br/> Penggunaan dan Pemberitahuan Privasi</span> aplikasi OLN
                            </span> 
                        </div>

                        <div className='buttons-signup-2'>
                            <button type="submit" className="prev-btn" onClick={handleKembali}>Kembali</button>
                            <button type="submit" className="register-btn" onClick={handleRegister}>Register</button>
                        </div>
                       
                    </form>
                </div>
            </div>


            <div className="custom-shape">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#BAE6FF" d="M57.3,-59.6C72.3,-55.7,81.1,-35.8,74.1,-21.1C67.2,-6.4,44.5,3.1,34.9,20.4C25.2,37.7,28.6,62.9,20.3,73.7C11.9,84.6,-8.2,81.2,-18.1,69.2C-27.9,57.1,-27.6,36.4,-30.3,22.1C-33.1,7.8,-39.1,-0.1,-41.2,-10.6C-43.4,-21.2,-41.7,-34.4,-34.2,-39.7C-26.6,-44.9,-13.3,-42.2,3.9,-46.8C21.1,-51.5,42.3,-63.5,57.3,-59.6Z" transform="translate(100 100)" />
                </svg>
            </div>
            
            


        </div>
        
    )
}