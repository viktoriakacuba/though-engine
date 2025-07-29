export async function getReasoningSteps(prompt: string, archetype: string) {
    const system = `You are a ${archetype} and think in structured, multi-step reasoning. Return a step-by-step plan to analyze or answer a given input.`;
    
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: prompt }
        ]
      })
    })
  
    const json = await res.json()
    return json.choices?.[0]?.message?.content?.split('\n').filter(Boolean) ?? []
  }
  