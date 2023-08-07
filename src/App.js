import "./App.css";

// Contexts
import { TempProvider } from "./Context/TempContext";

// Components
import FormComponent from "./Components/FormComponent";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <TempProvider>
        <FormComponent />
        <Main />
      </TempProvider>
    </div>
  );
}

export default App;
