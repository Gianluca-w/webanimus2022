const DropTargetInput = ({}) => {
    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", event.target.files[0]);
        const response = await fetch("/api/FileUploader", {
            method: "POST",
            body
        });
    };
return <input type="file" name="ResumeUploader" onChange={uploadToServer}/>
}
const ContactFormDragNDrop = ({ }) => {
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDragOver= (e)=>{
        e.preventDefault();
        e.stopPropagation();
    }
    

    return <div>
                <div
                onDrop={(e) => handleDrop(e)}
                onDragOver={(e) => handleDragOver(e)}
                className="DragAndDropArea"
                >
                    <DropTargetInput/>
                </div>
            </div>

};
export default ContactFormDragNDrop;