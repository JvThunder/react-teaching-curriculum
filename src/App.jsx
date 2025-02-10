import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaList } from "react-icons/fa";

function App() {
  // const [count, setCount] = useState(0)
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  // return (
  //   <>
  //     <div className="chess">
  //       {/* containerization */}
  //       <h1> Chess h1 </h1> {/* headings */}
  //       <h2> Chess h2 </h2>
  //       <h3> Check h3 </h3>
  //       <p> Join the link below </p> {/* paragraph */}
  //       <a href="https://www.chess.com/home"> Chess </a> {/* to create links */}
  //       <br></br> {/* break line */}
  //       <button>
  //         <a href="https://github.com/">Click Me!</a>
  //       </button>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className="competition-filter-button">
        <div>
          <p style={{ margin: "5px", fontWeight: "bold", fontSize: "10px" }}>
            All Competitions
          </p>
          <p style={{ margin: "5px", fontSize: "8px" }}>
            Everything, past & present
          </p>
        </div>
        <div>
          <i class="fas fa-list icon"></i>
        </div>
      </div>
    </>
  );
}

export default App;
