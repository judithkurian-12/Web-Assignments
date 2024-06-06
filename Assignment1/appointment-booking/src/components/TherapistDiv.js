import {React, useEffect, useState} from 'react';
import styles from './styles';
import Doctor1 from "../Images/Doctor1.png";
import Doctor2 from "../Images/Doctor2.jpg";
import Doctor3 from "../Images/Doctor3.jpg";
import RowComponent from './RowComponent';

const TherapistDiv = (props) => {
    const dummydata = [
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

    const [timeSlots, setTimeSlots] = useState(Array(dummydata.length).fill("Time Slot"));

    useEffect(()=>{
        if(props.refresh === true)
            {
                setTimeSlots(Array(dummydata.length).fill("Time Slot"));
                props.setRefresh(false);
            }   
    },[props, props.refresh, dummydata.length])

    return (
        <div style={styles.therapistDiv}>
            {dummydata.map((data, index) => {
                const rowName = data.name.toLowerCase();
                const searchText = props.text.toLowerCase();
                const rowSpecialisation = data.specialisation.toLowerCase();
                
                return (
                    <>
                    {props.text==='' &&
                    <RowComponent data={data} timeSlots={timeSlots} setTimeSlots={setTimeSlots} index={index} />}
                    {props.text!=="" && 
                    (rowName.includes(searchText) || 
                    rowSpecialisation.includes(searchText)) && 
                    <RowComponent data={data} timeSlots={timeSlots} setTimeSlots={setTimeSlots} index={index}/>}
                    </>
                )
            })}
        </div>
    )
}

export default TherapistDiv;