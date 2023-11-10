import OpenAI from 'openai'

const MODEL = 'gpt-3.5-turbo'

// I'm intentionally overdoing this so I can use this for other projects later
interface OpenAIContext {
  content: string
  model: Model
}
interface ClientContext {
  model: Model
}

type Model = 'gpt-3.5-turbo' | 'davinci'

class OpenAIClient {
  private openAI: OpenAI
  model: Model

  constructor(client?: ClientContext) {
    this.openAI = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    })
    this.model = client?.model || MODEL
  }

  async generate(context: OpenAIContext): Promise<string> {
    if (!context.content) {
      throw new Error('Content is required')
    }
    const chatCompletion: OpenAI.Chat.ChatCompletion = await this.openAI.chat.completions.create({
      messages: [{ role: 'user', content: context.content }],
      model: context.model || this.model,
    })
    return chatCompletion.choices[0].message.content as string
  }

  async generateQuote(message?: string): Promise<string> {
    const response = await this.generate({
      content: message || 'Generate a random quote about software developement',
      model: MODEL,
    })
    return response
  }
}

const openAIClient = new OpenAIClient()

export { OpenAIClient, openAIClient }
