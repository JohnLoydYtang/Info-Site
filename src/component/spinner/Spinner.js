import Spinner from 'react-bootstrap/Spinner';
import ReactLogo from '../../assets/images/react-logo.png';
import Image from 'react-bootstrap/Image';
import './Spinner.css';

export default function ReactLoad() {
    return (
        <Spinner animation="grow">
            <Image src={ReactLogo} fluid roundedCircle />
        </Spinner>
    );
}
