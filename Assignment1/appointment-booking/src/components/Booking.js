import { Container, Image } from 'react-bootstrap';
import NavbarSection from './NavbarSection';
import TherapistDiv from './TherapistDiv';
import RefreshImage from '../Images/refresh.png';
import styles from './styles';
import { useEffect, useState } from 'react';

const Booking = () => {
    const [refresh, setRefresh] = useState(false);
    const [text, setText] = useState('');

    useEffect(()=>{
        if(refresh === true)
        {
            setText('');
        }
    },[refresh])

    return (
        <Container fluid style={{padding:0}}>
            <NavbarSection />
            <div style={styles.searchDiv}>
                <input style={styles.search} type="text" placeholder="Search..." value={text} onChange={(e)=> setText(e.target.value)}/>
                <Image src={RefreshImage} style={styles.refresh} onClick={()=>setRefresh(true)}></Image>
            </div>
            <TherapistDiv refresh={refresh} setRefresh={setRefresh} text={text}/>
        </Container>
    )
}

export default Booking;