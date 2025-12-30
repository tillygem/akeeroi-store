import * as React from 'react';

export const WelcomeEmail = () => {
  return (
    <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', backgroundColor: '#FDFBF7', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '40px', borderRadius: '8px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
        
        {/* HEADER */}
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#800020', fontFamily: 'Georgia, serif', margin: '0', fontSize: '28px', letterSpacing: '2px' }}>AKEE-ROI</h1>
          <p style={{ color: '#D4AF37', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '3px', marginTop: '5px' }}>Collections</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />

        {/* CONTENT */}
        <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Welcome to the Inner Circle.</h2>
        
        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '30px' }}>
          Thank you for joining our exclusive list. You are now first in line for new drops, limited editions, and private sales.
        </p>

        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '40px' }}>
          We promise to only fill your inbox with elegance.
        </p>

        <a href="https://www.akeeroi.com/shop" style={{ backgroundColor: '#800020', color: '#ffffff', padding: '15px 30px', textDecoration: 'none', borderRadius: '5px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
          Explore The Collection
        </a>

        {/* FOOTER */}
        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '40px 0 20px 0' }} />
        
        <p style={{ color: '#ccc', fontSize: '10px' }}>
          © {new Date().getFullYear()} Akee-roi Collections. Accra & Kumasi, Ghana.
        </p>

      </div>
    </div>
  );
};