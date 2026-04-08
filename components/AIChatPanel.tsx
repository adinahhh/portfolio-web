'use client';

import { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function AIChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: input.trim() };
    const history = [...messages, userMsg];
    setMessages([...history, { role: 'assistant', content: '' }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();
      const text = data.text ?? data.error ?? `Error ${res.status}: unknown`;
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'assistant', content: text };
        return updated;
      });
    } catch {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content: 'Something went wrong. Please try again.',
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border border-line rounded-lg flex flex-col bg-canvas" style={{ minHeight: '340px', maxHeight: '520px', height: '420px' }}>
      {/* Header */}
      <div className="px-4 py-3 border-b border-line shrink-0">
        <p className="text-sm font-medium text-ink">Ask Whitney&apos;s AI</p>
        <p className="text-xs text-ink-3 mt-0.5">
          Ask about my background, projects, or experience
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        {messages.length === 0 && (
          <div className="flex flex-col gap-2 mt-auto text-center">
            <p className="text-sm text-ink-3">No questions yet.</p>
            <p className="text-xs text-ink-3 opacity-60">
              Try: &ldquo;What kind of backend work has Whitney done?&rdquo;
            </p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-olive text-white'
                  : 'bg-surface text-ink'
              }`}
            >
              {msg.content || (loading && i === messages.length - 1 ? (
                <span className="flex gap-1 items-center">
                  <span className="w-1 h-1 bg-ink-3 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-1 bg-ink-3 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-1 bg-ink-3 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              ) : '')}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      {messages.filter(m => m.role === 'user').length >= 8 ? (
        <div className="px-4 py-4 border-t border-line shrink-0 text-center flex flex-col gap-1">
          <p className="text-xs text-ink-2">Looks like you have a lot of questions — Whitney would love to chat.</p>
          <a
            href="https://www.linkedin.com/in/zilton/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-olive hover:text-olive-dark transition-colors"
          >
            Reach out on LinkedIn &rarr;
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-line flex gap-2 shrink-0">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={loading}
            className="flex-1 text-sm border border-line rounded-md px-3 py-2 bg-canvas text-ink placeholder:text-ink-3 focus:outline-none focus:ring-1 focus:ring-ink-3 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="text-sm px-4 py-2 bg-olive text-white rounded-md hover:bg-olive-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
