import Title from "./components/Title";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";

const App = () => {
  return (
    <div className = 'flex flex-col h-screen m-0 justify-between font-librefranklin font-light text-textCol1'>
        <main className = 'flex flex-col flex-grow justify-around mx-auto my-4 max-w-[680px]'>
          <img src = './images/logo.svg' alt = 'logo' className = 'w-14 mx-auto my-8'></img>
          <Title />
          <Form />
          <img src = './images/illustration-dashboard.png' alt = 'dashboard' className = 'w-5/6 mx-auto my-8 object-contain'></img>
          <Footer />
        </main>
        <Attribution />
    </div>
  )
}

export default App