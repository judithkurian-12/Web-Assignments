import styles from "./styles";
import {Row, Col, Image } from 'react-bootstrap';
import Doctor1 from "../Images/Doctor1.png";
import Doctor2 from "../Images/Doctor2.jpg";
import Doctor3 from "../Images/Doctor3.jpg";

const StatusRow = () => {
    const requestData = [
        {
            image: Doctor2,
            name: "John Doe",
            specialisation: "Child and Adolescent Psychiatrist"
        },
        {
            image: Doctor3,
            name: "Celine Gomez",
            specialisation: "General Psychiatrist"
        },
        {
            image: Doctor1,
            name: "Laila Ali",
            specialisation: "Medical Psychotherapist"
        },
    ]

    return (
        <div style={styles.statusRowDiv}>
            {requestData.map((data) => {
                return (
                    <Row style={styles.statusRow}>
                        <Col sm="5" style={styles.doctorDiv}>                            
                            <Image src={data.image} style={styles.doctorImage}></Image>
                            <div style={styles.doctorDescription}>
                                <p style={styles.doctorName}>{data.name}</p>
                                <p style={styles.descriptionText}>{data.specialisation}</p>
                            </div>
                        </Col>
                        <Col sm="5" style={styles.timeDiv}>
                            <p style={styles.blackBlue}>1 July 2024</p>
                        </Col>
                        <Col sm="2" className="d-flex align-items-center"><p style={styles.blackBlue}>Pending</p></Col>
                    </Row>
                )
            })}
        </div>
    )
}

export default StatusRow;