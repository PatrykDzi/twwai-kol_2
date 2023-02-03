import './App.css';
import {LineChart} from "./components/LineChart";
const styles = {
  display: 'flex',
  justifyContent: 'space-between'
};
function App() {
  return (
      <div className="App">
        <div style={styles}>
            <LineChart/>
          </div>
      </div>
  );
}
export default App;