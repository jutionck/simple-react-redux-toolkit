import './App.css';
import {Provider} from "react-redux";
import {StoreInit} from "./app/store";
import StudentView from "./pages/student/StudentView";
import StudentPage from "./pages/student/StudentPage";
import StudentBookPage from "./pages/student-book/StudentBookPage";
import StudentBookView from "./pages/student-book/StudentBookView";

const store = StoreInit();
function App() {
  return (
    <Provider store={store}>
      <StudentPage view={StudentView}/>
      <StudentBookPage view={StudentBookView} />
    </Provider>
  );
}

export default App;
