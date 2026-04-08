'use client';

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight text-ink">Resume</h1>
          <p className="text-sm text-ink-2">Whitney Zilton — Backend Software Engineer</p>
        </div>
        <a
          href="/resume.pdf"
          download="Whitney_Zilton_Resume.pdf"
          className="text-sm text-ink border border-line rounded-md px-4 py-2 hover:bg-surface transition-colors"
        >
          Download PDF
        </a>
      </div>

      {/* PDF embed — desktop only */}
      <div className="hidden sm:block border border-line rounded-lg overflow-hidden" style={{ height: '80vh' }}>
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
            <p className="text-sm text-ink-2">
              Your browser doesn&apos;t support inline PDF viewing.
            </p>
            <a
              href="/resume.pdf"
              download="Whitney_Zilton_Resume.pdf"
              className="text-sm text-ink border border-line rounded-md px-4 py-2 hover:bg-surface transition-colors"
            >
              Download Resume
            </a>
          </div>
        </object>
      </div>

      {/* Mobile fallback */}
      <div className="sm:hidden border border-line rounded-lg p-8 flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-ink-2">
          PDF preview isn&apos;t great on mobile. Download the file to view it.
        </p>
        <a
          href="/resume.pdf"
          download="Whitney_Zilton_Resume.pdf"
          className="text-sm text-ink border border-line rounded-md px-4 py-2 hover:bg-surface transition-colors"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
