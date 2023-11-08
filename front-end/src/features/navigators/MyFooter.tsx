import { Container } from 'react-bootstrap';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';



const MyFooter = () => {



  return (
    
    <div>
    <div style = {{height: "300px"}}/>
    <footer style={{ height: "200px", width: "100%", position: 'absolute', bottom: 0, backgroundColor: 'Black' }} className="text-light py-4">
    <Container className='text-center'>
                <a href="https://github.com/omery33111" target="_blank" style={{ color: "white" }}>
                    <FontAwesomeIcon icon={faGithub} size = '2x' style={{margin: "10 20px"}}/>
                </a>
                <a href="https://www.instagram.com/omer_yanai/" target="_blank" style={{ color: "white" }}>
                    <FontAwesomeIcon icon={faInstagram} size = '2x' style={{margin: "10 20px"}}/>
                </a>
                <a href="https://www.linkedin.com/in/omer-yanai-01208a262/" target="_blank" style={{ color: "white" }}>
                    <FontAwesomeIcon icon={faLinkedin} size = '2x' style={{margin: "10 20px"}}/>
                </a>
            </Container>
            <br/>
            <p className="text-center">Copyright &copy; {new Date().getFullYear()} Omer Yanai</p>
    </footer>

    </div>
  );
};

export default MyFooter;