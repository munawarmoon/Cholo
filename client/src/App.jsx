import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
