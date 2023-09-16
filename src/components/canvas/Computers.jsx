import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ComputersCanvas = () => {
  return (
  <div className="flex items-center justify-center h-screen relative">
    <div className="bg-inherit p-8 rounded-lg shadow-lg absolute right-0">
    <div className="text-white text-center text-4xl font-bold">AI</div>
    <div className="text-white text-center text-xl mt-4">Loading...</div>
    <div className="mt-8">
      <div className="ai-animation w-8 h-8 bg-violet-900 rounded-full animate-pulse"></div>
    </div>
  </div>
  </div>
  );
};

export default ComputersCanvas;
