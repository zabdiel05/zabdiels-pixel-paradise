
import React from 'react';

const PixelatedTrees = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 200"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Tree 1 - Large Pine */}
        <g transform="translate(100, 50)">
          {/* Trunk */}
          <rect x="18" y="120" width="12" height="30" fill="#4a3728" />
          {/* Tree layers from bottom to top */}
          <rect x="0" y="100" width="48" height="12" fill="#2d5016" />
          <rect x="6" y="88" width="36" height="12" fill="#2d5016" />
          <rect x="12" y="76" width="24" height="12" fill="#365e1a" />
          <rect x="18" y="64" width="12" height="12" fill="#365e1a" />
        </g>

        {/* Tree 2 - Medium Spruce */}
        <g transform="translate(300, 70)">
          <rect x="14" y="100" width="8" height="25" fill="#4a3728" />
          <rect x="0" y="85" width="36" height="10" fill="#2d5016" />
          <rect x="6" y="75" width="24" height="10" fill="#365e1a" />
          <rect x="12" y="65" width="12" height="10" fill="#4a7c2a" />
        </g>

        {/* Tree 3 - Tall Thin Pine */}
        <g transform="translate(500, 30)">
          <rect x="16" y="130" width="8" height="40" fill="#4a3728" />
          <rect x="4" y="110" width="32" height="10" fill="#2d5016" />
          <rect x="8" y="100" width="24" height="10" fill="#365e1a" />
          <rect x="12" y="90" width="16" height="10" fill="#4a7c2a" />
          <rect x="16" y="80" width="8" height="10" fill="#4a7c2a" />
        </g>

        {/* Tree 4 - Wide Tree */}
        <g transform="translate(700, 60)">
          <rect x="22" y="115" width="12" height="35" fill="#4a3728" />
          <rect x="0" y="95" width="56" height="12" fill="#2d5016" />
          <rect x="8" y="83" width="40" height="12" fill="#365e1a" />
          <rect x="16" y="71" width="24" height="12" fill="#4a7c2a" />
        </g>

        {/* Tree 5 - Small Tree */}
        <g transform="translate(900, 90)">
          <rect x="12" y="110" width="6" height="20" fill="#4a3728" />
          <rect x="0" y="95" width="30" height="8" fill="#2d5016" />
          <rect x="6" y="87" width="18" height="8" fill="#365e1a" />
          <rect x="12" y="79" width="6" height="8" fill="#4a7c2a" />
        </g>

        {/* Tree 6 - Another Medium Tree */}
        <g transform="translate(1050, 75)">
          <rect x="15" y="105" width="10" height="30" fill="#4a3728" />
          <rect x="0" y="90" width="40" height="10" fill="#2d5016" />
          <rect x="6" y="80" width="28" height="10" fill="#365e1a" />
          <rect x="12" y="70" width="16" height="10" fill="#4a7c2a" />
        </g>
      </svg>

      {/* Ground/grass effect */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-green-800 to-green-600 opacity-70"></div>
    </div>
  );
};

export default PixelatedTrees;
