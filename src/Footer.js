import email from './email.png';
import cell from './cell.png';

const Footer = () => {
  return ( 
    <footer>
      <img src={email} alt="Email" />&nbsp;&nbsp;
      <img src={cell} alt="Cell" />
      <p>Project created in UC Davis Bootcam</p>
    </footer>
  ) ;
}
 
export default Footer;

