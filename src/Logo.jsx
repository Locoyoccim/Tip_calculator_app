import '/src/Logo.css';
import logo from '/src/assets/logo.svg';

function Logo() {

  return (
    <>
     <div className='logo_container'>
      <img src={logo} alt="logo_spiltter" className='logo'/>
     </div>
    </>
  )
}

export default Logo;
