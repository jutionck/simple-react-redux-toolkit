import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {StoreInit} from "./app/store";
import StudentView from "./pages/student/StudentView";

const store = StoreInit();
function App() {
  return (
    <Provider store={store}>
      <StudentView/>
    </Provider>
  );
}

export default App;
