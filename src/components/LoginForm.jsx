import { useState } from 'react';
import axios from 'axios';

const LoginForm = () =>{
    const [username , setUsername]=useState('');
    const [password , setPassword]=useState('');
    const handleSubmit = async(e) => {
        e.preventDefault();
        const authObject ={ ' Project-ID':"a2c3a5dd-1a2c-4ad1-8d3e-70c84a6c1405", 'User-Name': username ,'User-Secret':password };
        try{
            // username ve sifre gidecek kontrol edilecek
            await axios.get('https://api.chatengine.io/chats', { headers:authObject });
           //dogruysa icerdeyiz
           localStorage.setItem('username',username);
           localStorage.setItem('password',password);
           window.location.reload();
        
        }catch(error){
            //yanlıssa hata mesajı

        }
    }
   
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Fırat Chat Platformu</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text " value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Kullanıcı Adı" required/>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Sifre" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Giriş Yap</span>
                        </button>

                    </div>


                </form>
            </div>

        </div>

    );
}
export default LoginForm;