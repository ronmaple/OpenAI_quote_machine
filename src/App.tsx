import './App.css'
import Quotes from './components/Quotes'

const App = () => {
  return (
    <div className="flex flex-col h-full w-full max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
      <Quotes />
    </div>
  )
}

export default App
