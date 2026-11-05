'use client';

import React, { useState } from 'react';
import { Crop, Sparkles, HardDrive, Download, Sliders, Image as ImageIcon } from 'lucide-react';

interface ImageFitPreviewProps {
  activeScreen?: 'editor' | 'dashboard';
}

export function ImageFitPreview({ activeScreen = 'editor' }: ImageFitPreviewProps) {
  const [selectedRatio, setSelectedRatio] = useState('16:9');
  const [format, setFormat] = useState('WebP');
  const [quality, setQuality] = useState(85);

  const ratios = ['16:9', '4:3', '1:1', '9:16'];

  if (activeScreen === 'dashboard') {
    return (
      <div className="w-full h-full min-h-[300px] p-5 bg-[#0f1013] text-white font-mono text-xs flex flex-col justify-between select-none">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-white font-sans text-sm">Batch Transcoding Engine</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Web Worker Pipeline
          </span>
        </div>

        <div className="space-y-3 my-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between font-sans">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ImageIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-xs text-white">hero-monograph.png</p>
                <p className="text-[10px] text-white/50">3840 × 2160 • Original: 4.8 MB</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                -78% Savings
              </span>
              <p className="text-[10px] text-white/50 mt-1">WebP • 1.05 MB</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between font-sans">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <ImageIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-xs text-white">project-showcase.jpg</p>
                <p className="text-[10px] text-white/50">1920 × 1080 • Original: 2.1 MB</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                -65% Savings
              </span>
              <p className="text-[10px] text-white/50 mt-1">WebP • 735 KB</p>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40 font-sans">
          <span className="flex items-center gap-1 text-emerald-400">
            <HardDrive className="w-3 h-3" /> Memory-Safe Blob Pipeline
          </span>
          <button
            type="button"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-600 text-white font-bold hover:bg-amber-500 transition-colors"
          >
            <Download className="w-3 h-3" /> Export ZIP
          </button>
        </div>
      </div>
    );
  }

  // Default: Canvas Editor Screen
  return (
    <div className="w-full h-full min-h-[300px] p-5 bg-[#0f1013] text-white font-sans text-xs flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Crop className="w-4 h-4 text-amber-400" />
          <span className="font-bold tracking-tight text-white text-sm">ImageFit Canvas Studio</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> 0ms Server Latency
        </span>
      </div>

      <div className="my-3 space-y-3">
        {/* Mock Canvas Viewport */}
        <div className="relative w-full h-28 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
          <div
            className={`border border-amber-400/60 bg-amber-400/10 rounded-md transition-all duration-300 flex items-center justify-center ${
              selectedRatio === '16:9'
                ? 'w-44 h-24'
                : selectedRatio === '4:3'
                ? 'w-36 h-24'
                : selectedRatio === '1:1'
                ? 'w-24 h-24'
                : 'w-16 h-24'
            }`}
          >
            <span className="text-[10px] font-mono text-amber-300 font-bold">{selectedRatio} Crop</span>
          </div>
          <div className="absolute bottom-2 left-2 text-[9px] font-mono text-white/40">
            Viewport: 1920 × 1080 px
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider block mb-1">
              Aspect Ratio
            </label>
            <div className="grid grid-cols-4 gap-1">
              {ratios.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setSelectedRatio(r)}
                  className={`py-1 rounded text-[10px] font-mono font-bold border transition-all ${
                    selectedRatio === r
                      ? 'bg-amber-500/30 border-amber-500 text-white'
                      : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1">
              <span>Quality</span>
              <span className="font-mono text-amber-400">{quality}%</span>
            </div>
            <input
              type="range"
              min="40"
              max="100"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-1.5 bg-white/10 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5 text-white/50">
          <span>Target:</span>
          {['WebP', 'PNG', 'JPEG'].map((fmt) => (
            <button
              key={fmt}
              type="button"
              onClick={() => setFormat(fmt)}
              className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                format === fmt ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white'
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-600 text-white font-bold hover:bg-amber-500 transition-colors"
        >
          Download Render
        </button>
      </div>
    </div>
  );
}
