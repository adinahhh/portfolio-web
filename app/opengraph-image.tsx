import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Whitney Zilton — Backend Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#2C3348',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background blob accents */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: '#3D5BE0',
            opacity: 0.15,
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: '#3D5BE0',
            opacity: 0.1,
            filter: 'blur(80px)',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '22px',
            color: '#9AA0B4',
            marginBottom: '40px',
            display: 'flex',
          }}
        >
          &lt;whitney /&gt;
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#EFF2F7',
            lineHeight: 1.1,
            marginBottom: '20px',
            display: 'flex',
          }}
        >
          Whitney Zilton
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '32px',
            color: '#9AA0B4',
            marginBottom: '48px',
            display: 'flex',
          }}
        >
          Backend Software Engineer
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['Go', 'Python', 'Kafka', 'Distributed Systems', 'Application Security'].map(tag => (
            <div
              key={tag}
              style={{
                background: '#3D3F52',
                color: '#9AA0B4',
                fontSize: '18px',
                padding: '8px 16px',
                borderRadius: '8px',
                display: 'flex',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            fontSize: '18px',
            color: '#3D5BE0',
            display: 'flex',
          }}
        >
          ziltonportfolio.io
        </div>
      </div>
    ),
    size,
  );
}
