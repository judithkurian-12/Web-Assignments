import { Container } from 'react-bootstrap';
import NavbarSection from './NavbarSection';
import styles from './styles';
import StatusRow from './StatusRow';

const RequestStatus = () => {
    return (
        <Container fluid style={styles.container}>
            <NavbarSection />
            <StatusRow />
        </Container>
    )
}

export default RequestStatus;