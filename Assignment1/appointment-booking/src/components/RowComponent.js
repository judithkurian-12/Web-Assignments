import styles from "./styles";
import {Row, Col, Image, Dropdown, Button} from 'react-bootstrap';

const RowComponent = (props) => {

    const changeTimeSlot = (index, slot) => {
        const newTimeSlots = [...props.timeSlots];
        newTimeSlots[props.index] = slot;
        props.setTimeSlots(newTimeSlots);
    }

    return (
        <>
            <Row style={styles.therapistRow}>
                <Col sm="5" style={styles.doctorDiv}>                            
                    <Image src={props.data.image} style={styles.doctorImage}></Image>
                    <div style={styles.doctorDescription}>
                        <p style={styles.doctorName}>{props.data.name}</p>
                        <p style={styles.descriptionText}>{props.data.specialisation}</p>
                    </div>
                </Col>
                <Col sm="5" style={styles.timeDiv}>
                    <p style={styles.selectSlots}>Select Slot</p>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={styles.dropdownToggle}>
                            {props.timeSlots[props.index]}
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={styles.dropdownMenu}>
                            <Dropdown.Item style={styles.dropdownItem} onClick={()=>changeTimeSlot(props.index, "Time 1")}>Time 1</Dropdown.Item>
                            <Dropdown.Item style={styles.dropdownItem} onClick={()=>changeTimeSlot(props.index, "Time 2")}>Time 2</Dropdown.Item>
                            <Dropdown.Item style={styles.dropdownItem} onClick={()=>changeTimeSlot(props.index, "Time 3")}>Time 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm="2" className="d-flex align-items-center"><Button variant="info" style={styles.bookButton}>Book Appointment</Button></Col>
            </Row>
            <div style={styles.divider}></div>
        </>
    )
}

export default RowComponent;