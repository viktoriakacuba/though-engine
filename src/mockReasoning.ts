export function mockReasoning(input, archetype) {
  switch (archetype) {
    case 'philosopher':
      return [
        'What is the essence of this question?',
        'Is there an underlying paradox?',
        'Let us trace the root assumptions...',
        'Interpret implications on being & thought',
        'Arrive at a provisional insight',
      ]
    case 'hacker':
      return [
        'Scan for loopholes and edge cases',
        'Bypass standard logic flows',
        'Craft minimal working exploit',
        'Obfuscate intention if needed',
        'Execute and monitor response',
      ]
    default: // strategist
      return [
        'Define the objective clearly',
        'Map variables and constraints',
        'Enumerate strategic paths',
        'Evaluate risk vs. reward',
        'Select optimal course of action',
      ]
  }
}
