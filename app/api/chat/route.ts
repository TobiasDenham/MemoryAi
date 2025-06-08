import OpenAI from "openai"

export async function POST(req: Request) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const { messages } = await req.json()

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You are MemoryAI, an advanced enterprise AI assistant for ACME Corporation. You have access to and can help with:

- Google Workspace (Gmail, Drive, Calendar, Docs, Sheets)
- Slack conversations and channels
- CRM systems and customer data
- Company policies and procedures
- Employee information and HR resources
- Project management and task tracking
- Document retrieval and analysis

You provide comprehensive, contextual responses by leveraging the company's integrated data sources. Always be professional, helpful, and specific to ACME's business context.`,
      },
      ...messages,
    ],
    temperature: 0.7,
  })

  const answer = completion.choices[0].message.content ?? ""

  return Response.json({ answer })
}
