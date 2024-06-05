import { Navbar, Nav, Image, Button } from 'react-bootstrap';
import styles from './styles';
import Logo from '../Images/Logo.jpg';

const NavbarSection = () => {
    return (
        <Navbar style={styles.navbar}>
            <Image src={Logo} style={styles.logo}></Image>
            <Nav style={styles.navLinks}>
                <Nav.Link href="" style={styles.link}>My Profile</Nav.Link>
                <Nav.Link href="" style={styles.link}>Blogs</Nav.Link>
                <Nav.Link href="" style={styles.link}>Musics</Nav.Link>
                <Nav.Link href="" style={styles.link}>My Journals</Nav.Link>
                <Nav.Link href="" style={styles.link}>Therapist Booking</Nav.Link>
                <Nav.Link href="" style={styles.link}>Reminders</Nav.Link>
                <Nav.Link href="" style={styles.link}>Request Status</Nav.Link>
            </Nav>
            <Button size="sm" style={styles.logout} variant="danger">Logout</Button>
        </Navbar>
    )
}

export default NavbarSection;