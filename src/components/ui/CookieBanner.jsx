import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('nodeflux_cookies_accepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('nodeflux_cookies_accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-white border border-[#D5E3FC] rounded-2xl p-4 shadow-xl flex items-center justify-between gap-4">
      <p className="text-xs text-[#5B6576] leading-relaxed">
        Utilizamos cookies para melhorar sua experiência em nossa plataforma.
      </p>
      <button
        onClick={accept}
        className="px-4 py-2 rounded-full bg-[#0E43FB] hover:bg-[#0832C9] text-white font-bold text-xs shrink-0 transition-colors"
      >
        Entendi
      </button>
    </div>
  );
};

export default CookieBanner;
