import React, { useCallback } from "react";
import "./App.css";
import { useDropzone } from "react-dropzone";

const App = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-[90%] h-[90vh] bg-[#00000040] border border-teal-500 p-10 flex items-center content-center rounded-3xl">
      <div className="w-3/5 flex flex-col gap-10">
        <h1 className="text-teal-400 drop-shadow-2xl [text-shadow:_1px_1px_1px_#000000] text-8xl font-['Boogaloo']">
          Your one stop for file sharing!
        </h1>
        <div className="w-2/5 h-60  rounded-2xl border border-teal-950 hover:border-teal-800 cursor-pointer flex items-center content-center">
          <div className="p-10" {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p className='text-gray-400 text-xl flex items-center text-center'>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
          {/* <p className='text-gray-400 text-xl flex items-center text-center'>
            Click to open files or <br/> drag & drop
          </p> */}
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
