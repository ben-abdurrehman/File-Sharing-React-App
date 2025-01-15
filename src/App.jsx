import React, { useCallback, useState } from "react";
import "./App.css";
import { FileUploader } from "react-drag-drop-files";

const App = () => {
  const handleChange = (file) => {
    console.log(file); // Handle the uploaded file here
    setFile(file)

    const formData = new FormData();
    formData.append("file", file);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log("File uploaded successfully:", data))
  };
    

  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null)

  


  return (
    <div className="w-[90vw] h-[95vh] bg-[#00000040] border border-teal-500 p-[5vh] flex flex-col lg:flex-row items-center justify-center rounded-[5vh]">
      <div className="w-full md:w-[60%] flex flex-col gap-[4vh] items-center md:items-start text-center md:text-left">
        <h1 className="text-teal-400 drop-shadow-2xl text-[6vh] md:text-[8vh] lg:text-[8vh]  text-center lg:text-left font-['Boogaloo']">
          Your one stop for file sharing!
        </h1>
        <div className=" xl:w-[70%] lg:w-[80%] md:w-[100%] sm:w-3/4 h-[10vh] md:h-[10vh] rounded-[2vh] cursor-pointer flex items-start justify-start">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            multiple={false}
            classes="custom-file-uploader"
          />
        </div>
      </div>

      {/* Right Section */}
      <div
        style={{
          backgroundImage: "url('src/assets/2.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="w-full 2xl:w-[35vw] 2xl:h-[70vh] xl:w-[35vw] xl:h-[70vh] lg:w-[35vw]  md:w-[35%] h-[30vh] md:h-[40vh] rounded-[2vh] mt-6 md:mt-0"
      ></div>
      <div
        style={{
            backgroundImage: file
            ? `url('${URL.createObjectURL(file)}')`
            : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="w-full 2xl:w-[35vw] 2xl:h-[70vh] xl:w-[35vw] xl:h-[70vh] lg:w-[35vw]  md:w-[35%] h-[30vh] md:h-[40vh] rounded-[2vh] mt-6 md:mt-0"
      ></div>
    </div>
  );
}

export default App;
