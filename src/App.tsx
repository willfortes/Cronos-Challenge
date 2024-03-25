import './App.css'
import Group from './components/Group'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Group/>  
        </div>
      </div>
    </>
  )
}

export default App
