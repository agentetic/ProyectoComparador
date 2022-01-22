/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/img/logotipo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='bg-moradoFooter font-semibold flex text-white flex-col footer-center py-5 space-y-4  '>
      <div>
        <a href='#'> Aviso legal |</a>
        <a href='#'> Política de Cookies |</a>
        <a href='#'> Política de Privacidad</a>
      </div>

      <div>
        <img className='Footer__img' src={logo} alt='logotipo' />
      </div>

      <div className='pb-4 '>
        <p>
          © Copyright Rastreator.com 2021. Todos los Derechos
          Reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
