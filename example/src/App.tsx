import { InputComponent, PasswordInput } from '../../src';
function App() {
  return (
    <div style={{ marginTop: '20px' }}>
      <InputComponent
        handleBlur={() => console.log()}
        inputLabel="Nome"
        inputIdentifier="name"
        inputValue="testing input"
        handleChange={() => console.log()}
        isRequired
        hasFloatingLabel
      />

      <PasswordInput
        handleBlur={() => console.log()}
        inputLabel="Nome"
        inputIdentifier="name"
        inputValue="testing input"
        handleChange={() => console.log()}
        isRequired
        hasFloatingLabel
      />
    </div>
  );
}

export default App;
