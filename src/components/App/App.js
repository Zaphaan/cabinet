// Import style
import './app.scss';

// Import components
import Header from "components/Header/Header";
import Presentation from 'components/Presentation/Presentation';
import Prestation from 'components/Prestation/Prestation';
import Thalasso from 'components/Thalasso/Thalasso';

function App() {
  return (
    <div className="app">
      <Header />
      <Presentation />
      <Prestation />
      <Thalasso />
    </div>
  );
}

export default App;
