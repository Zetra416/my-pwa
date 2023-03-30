import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';

export default function SignUp () {
    const navigate = useNavigate()
    const handleSelanjutnya = () => {
        navigate('/signup-2')
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
                    <div className='connector-before'></div>
                    <div class="step">
                        <img src="./assets/doc_gray.png" alt="doc_gray" style={{width:'24px', padding: '2px', border: "2px solid #aaa", borderRadius: '50%'}}/>
                        <div className="icon-des">Register</div>
                    </div>
                </div>


                <div className='all-form'>
                    <h1 className='form-signup-title'>Input Data Perusahaan</h1>
                    <form>
                        <div>
                            <select id="bidang-usaha" name="bidang-usaha" style={{ color: '#999' }}>
                                <option value="">Bidang usaha *</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" id="nama-perusahaan" name="nama-perusahaan" placeholder="Nama Perusahaan *"/>
                        </div>
                        <div>
                            <input type="text" id="npwp-perusahaan" name="npwp-perusahaan" placeholder="NPWP Perusahaan *"/>
                        </div>
                        <div>
                            <input type="text" id="alamat-npwp" name="alamat-npwp" placeholder="Alamat Sesuai NPWP *"/>
                        </div>
                        <div>
                            <select id="provinsi" name="provinsi" style={{ color: '#999' }}>
                                <option value="">Provinsi *</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div>
                            <select id="kota-kabupaten" name="kota-kabupaten" style={{ color: '#999' }}>
                                <option value="">Kota/kabupaten *</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div>
                            <select id="kecamatan" name="kecamatan" style={{ color: '#999' }}>
                                <option value="">Kecamatan *</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" id="kode-pos" name="kode-pos" placeholder="Kode Pos *"/>
                        </div>
                        
                        <div className='upload-nib'>
                            <label for="file-upload" >
                                <div className='nib-title'>
                                    <img src="./assets/nib.png" alt="nib" style={{width:'24px', padding: '4px'}}/>
                                    <h1 className='nib-text-1'>NIB</h1>
                                </div>

                                <div className='nib-content'>
                                    <img src="./assets/upload-nib.png" alt="upload-nib" style={{width:'24px', color: 'white'}}/>
                                    <h1 className='nib-text-2'>Unggah NIB Valid</h1>
                                </div>
                            </label>
                            <input type="file" id="file-upload" name="file-upload" class="file-upload"/>
                        </div>


                        <button type="submit" className="next-btn" onClick={handleSelanjutnya}>Selanjutnya</button>
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