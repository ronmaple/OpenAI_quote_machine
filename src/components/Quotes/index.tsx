import { useState } from 'react'
import { openAIClient } from '../../utils/openai'
import Loader from '../Loader'

const defaultQuote = '"Code is like humor. When you have to explain it, it’s bad." - Cory House'

const Quotes = () => {
  const [quote, setQuote] = useState(defaultQuote)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setIsLoading(true)
    const quote = await openAIClient.generateQuote()
    setQuote(quote)
    setIsLoading(false)
  }

  return (
    <div className="w-96 h-70">
      <div className="px-8 py-6">
        <div className="text-2xl font-bold">Smart Quotes</div>
      </div>
      <div className="px-8 py-6">
        <div className="mb-4 flex justify-center">
          {isLoading ? <Loader /> : <p className="text-gray-700 text-base italic">{quote}</p>}
        </div>
        <div className="py-6">
          <button
            onClick={handleSubmit}
            className="bg-cyan-500 shadow-lg shadow-cyan-500/20 disabled:bg-slate-200 disabled:text-slate-500 disabled:shadow-none disabled:hover:none"
            disabled={isLoading}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quotes
