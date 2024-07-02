import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <TextForm heading="Enter the text to analyze below" />
    </>
  );
}

export default App;
