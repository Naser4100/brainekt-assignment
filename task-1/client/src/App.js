import { Container, Checkbox } from '@material-ui/core';
import BasicComponents from './components/FeatureList/BasicFeatures';

function App() {
  return (
    <div className="App">
      <h1>Hello from react</h1>
      <Container maxWidth="sm">
        <BasicComponents/>
        <Checkbox/>
      </Container>
    </div>
  );
}

export default App;
