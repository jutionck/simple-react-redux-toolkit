import './App.css';
import {Provider} from "react-redux";
import {StoreInit} from "./app/store";
import StudentView from "./pages/student/StudentView";
import StudentPage from "./pages/student/StudentPage";

const store = StoreInit();
function App() {
  return (
    <Provider store={store}>
      <StudentPage view={StudentView}/>
    </Provider>
  );
}

export default App;
