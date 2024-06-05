const styles = {
    navbar: {
        backgroundColor: "#95BFB3",
        height: '6vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        height: '5vh',
        width: '5vh',
        margin: '0.5vh'
    },
    navLinks: {
        width: '70vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    link: {
        fontFamily: "Helvetica",
        color: '#121D26',
        fontWeight:'bold'
    },
    logout: {
        height: '4vh',
        marginRight: '0.5vh',
        paddingTop: 0,
    },
    searchDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '5vh',
        marginTop: '5vh',
        justifyContent: 'space-between'
    },
    search: {
        backgroundColor: '#284B73',
        width: '11vw',
        height:'6vh',
        borderRadius: '0.6vw',
        marginLeft: '5.5vh',
        color: '#A7D9C6',
        paddingLeft: '0.5vw'
    },
    searchText: {
        marginLeft: '1vw',
        color:'#A7D9C6'
    },
    refresh: {
        height: '1.5vw',
        width: '1.5vw',
        marginRight: '2.7vw',
        cursor: 'pointer'
    },
    therapistDiv: {
        marginLeft: '3.5vw',
        marginRight: '3.5vw',
    },
    therapistRow: {
        backgroundColor: "#A7D9C6",
        marginBottom: '4vh',
        borderRadius: '0.7vw',
    },
    doctorDiv: {
        display: 'flex',
        flexDirection: 'row'
    },
    doctorImage: {
        height: '6vw',
        width: '6vw',
        borderRadius: '10vw',
        marginTop: '1.5vh',
        marginBottom: '1.5vh'
    },
    doctorDescription: {
        marginLeft: '3vw',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    doctorName: {
        fontFamily: 'Georgia',
        fontSize: '1.7rem',
        marginBottom: '0px',
        color: '#1771BF'
    },
    descriptionText: {
        color: '#284B73'
    },
    timeDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    selectSlots: {
        marginBottom:'0px',
        marginRight: '2vw',
        fontSize: '1.1rem',
        color: '#284B73'
    },
    dropdownToggle: {
        fontSize:'0.8rem',
        color: '#A7D9C6'
    },
    dropdownMenu: {
        minWidth: 'auto',
        width: '7.3vw',
        backgroundColor: '#284B73'
    },
    dropdownItem: {
        fontSize:'0.8rem',
        color: '#A7D9C6'
    },
    divider: {
        height: '0.2vh',
        backgroundColor: '#1771BF',
        marginLeft: '-0.9vw',
        marginRight: '-0.9vw',
        marginBottom: '4vh',
    }
}

export default styles;
