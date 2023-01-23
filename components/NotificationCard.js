const NorificationCard = ({ Title,Body,Controller,Positioner }) => {
    
    return <div style={{display:"none", position:"fixed", top:"50px", right:"60px", zIndex:"1"}}>
        <div className="NotificationCardWrapper">
            <div className="NotificationCardTitle">{Title}</div>
            <div className="NotificationCardBody">{Body}</div>
        </div>
    </div>
}
export default NorificationCard


