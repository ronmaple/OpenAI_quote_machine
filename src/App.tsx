import './App.css'
import { useState } from 'react'
import OpenAI from 'openai'

const defaultQuote =
  '"Code is like humor. When you have to explain it, it’s bad." - Cory House'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})

function App() {
  const [quote, setQuote] = useState(defaultQuote)
  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Generate a random quote' }],
        model: 'gpt-3.5-turbo',
      })
    setQuote(chatCompletion.choices[0].message.content as string)
  }

  return (
    <div className="flex flex-col h-full w-full max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
      <div className="px-8 py-6">
        <div className="text-2xl font-bold">AI Quote Machine</div>
      </div>
      <div className="px-8 py-6">
        <div className="mb-4">
          <p className="text-gray-700 text-base italic">{quote}</p>
        </div>
        <div className="py-6">
          <button
            onClick={handleSubmit}
            className="bg-cyan-500 shadow-lg shadow-cyan-500/20"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
