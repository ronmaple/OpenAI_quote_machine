import './App.css'
import { useState } from 'react'
const defaultQuote =
  'Code is like humor. When you have to explain it, it’s bad.'

function App() {
  const [quote, setQuote] = useState(defaultQuote)

  return (
    <div className="flex flex-col h-full w-full max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
      <div className="px-8 py-6">
        <div className="text-2xl font-bold">AI Quote Machine</div>
      </div>
      <div className="px-8 py-6">
        <div className="mb-4">
          <p className="text-gray-700 text-base italic">"{quote}"</p>
          {/* <p className="text-gray-700 text-base font-bold">{author}</p> */}
        </div>
        <div className="py-6">
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/20">
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
