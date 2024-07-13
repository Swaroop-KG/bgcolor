import  { useState } from 'react';

function App() {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{ backgroundColor: "red" }} 
            onClick={() => handleColorChange("red")}
          >
            Red
          </button>
          <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{ backgroundColor: "blue" }} 
            onClick={() => handleColorChange("blue")}
          >
            Blue
          </button>
          <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{ backgroundColor: "black" }} 
            onClick={() => handleColorChange("black")}
          >
            Black
          </button>
          <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{ backgroundColor: "pink" }} 
            onClick={() => handleColorChange("pink")}
          >
            Pink
          </button>
          <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{ backgroundColor: "green" }} 
            onClick={() => handleColorChange("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
