import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};

const post = async (req, res) => {
  
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    if (files.file.mimetype!='application/pdf') {
      return res.status(400).send("File not a PDF");
    }
    await saveFile(files.file);
    
    return res.status(201).send("Resume Correctly Uploaded");
  });
};

const saveFile = async (file) => {
  
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./curriculums/${file.originalFilename}`, data);
  await fs.unlinkSync(file.filepath);
  return;
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(405).send("");
};
