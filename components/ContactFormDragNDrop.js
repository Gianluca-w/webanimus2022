const ContactFormDragNDrop = ({}) => {
    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", event.target.files[0]);
        const response = await fetch("/api/FileUploader", {
          method: "POST",
          body
        });
        console.log(response)
      };

return      <div>
      <div>
        <input type="file" name="ResumeUploader" onChange={uploadToServer}  />
      </div>
    </div>

    };
    export default ContactFormDragNDrop;