import React, { useCallback } from "react";
import "./App.css";
import { FileUploader } from "react-drag-drop-files";

const App = () => {
  const handleChange = (file) => {
    console.log(file); // Handle the uploaded file here
  };

  const fileTypes = ["JPG", "PNG", "GIF"];


  return (
    <div className="w-[90%] h-[90vh] bg-[#00000040] border border-teal-500 p-10 flex items-center content-center rounded-3xl">
      <div className="w-3/5 flex flex-col gap-10">
        <h1 className="text-teal-400 drop-shadow-2xl [text-shadow:_1px_1px_1px_#000000] text-8xl font-['Boogaloo']">
          Your one stop for file sharing!
        </h1>
        <div className="w-2/5 h-60  rounded-2xl border border-teal-950 hover:border-teal-800 cursor-pointer flex items-center content-center">
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Upload a File</h1>
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              multiple={false}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('src/assets/2.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="w-2/5 h-full"
      ></div>
    </div>
  );
};

export default App;
