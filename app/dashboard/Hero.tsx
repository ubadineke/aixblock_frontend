import React, { useState } from 'react';
import { Github } from 'lucide-react';

export default function Hero({ setIsConnected }: { setIsConnected: (value: boolean) => void }) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
            Contribute & Earn with AIxBlock
          </h1>
          <p className="text-xl text-purple-200 text-center max-w-2xl">
            Join our open-source ecosystem and earn tokens for your valuable contributions.
            Powered by Solana blockchain for transparent and fair rewards.
          </p>
          <button
            onClick={() => setIsConnected(true)}
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            <Github size={24} />
            <span>Sign in with GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
}
