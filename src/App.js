import { CenterLayout } from './app/containers/CenterLayout/index';
import { ChuckNorrisApp } from './app/containers/ChuckNorrisApp/index';
import './App.css';

function App() {
  return (
    <CenterLayout>
      <ChuckNorrisApp />
    </CenterLayout>
  );
}

export default App;
