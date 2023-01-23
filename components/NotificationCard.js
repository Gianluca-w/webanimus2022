const NotificationCard = ({ Title,Body,Controller="block",Positioner = "150px" }) => {

    return <div className="NotificationMaster" style={{display:Controller, position:"fixed", top:Positioner, right:"60px"}} onClick={Controller="none"}>
        <div className="NotificationCardWrapper">
            <div className="NotificationCardTitle">{Title}</div>
            <div className="NotificationCardBody">{Body}</div>
        </div>
    </div>
}
export default NotificationCard


