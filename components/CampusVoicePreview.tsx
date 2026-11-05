'use client';

import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Shield, Filter, Database, ArrowRight } from 'lucide-react';

interface CampusVoicePreviewProps {
  activeScreen?: 'form' | 'dashboard' | 'architecture';
}

export function CampusVoicePreview({ activeScreen = 'form' }: CampusVoicePreviewProps) {
  const [selectedCourse, setSelectedCourse] = useState('Web Development');
  const [selectedRating, setSelectedRating] = useState('Good');
  const [dashboardFilter, setDashboardFilter] = useState('All');

  const mockFeedback = [
    {
      id: 'FB-902',
      course: 'Web Development',
      rating: 'Good',
      areas: ['Practical Sessions'],
      comment: 'Excellent hands-on lab assignments with real React component structures.',
      date: 'Just now',
    },
    {
      id: 'FB-901',
      course: 'Database Management',
      rating: 'Average',
      areas: ['Materials'],
      comment: 'Need more SQL indexing examples for high-volume relational schemas.',
      date: '2h ago',
    },
    {
      id: 'FB-900',
      course: 'Computer Networks',
      rating: 'Good',
      areas: ['Teaching', 'Practical Sessions'],
      comment: 'Packet tracer labs were very clear and well-structured.',
      date: 'Yesterday',
    },
  ];

  const filtered =
    dashboardFilter === 'All'
      ? mockFeedback
      : mockFeedback.filter((item) => item.course === dashboardFilter);

  if (activeScreen === 'architecture') {
    return (
      <div className="w-full h-full min-h-[300px] p-6 bg-[#0f1013] text-[#e5e7eb] font-mono text-xs flex flex-col justify-between select-none">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white tracking-wider">CAMPUS VOICE SYSTEM ARCHITECTURE</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Node / Express + React
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Client Layer</span>
            <p className="text-white font-semibold">React (Vite) @ :5173</p>
            <ul className="text-[11px] text-white/60 space-y-1">
              <li>• Controlled useState machine</li>
              <li>• Native form semantics</li>
              <li>• Client-side validation</li>
              <li>• Timeout retry (12s abort)</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">API Server</span>
            <p className="text-white font-semibold">Express REST @ :3001</p>
            <ul className="text-[11px] text-white/60 space-y-1">
              <li>• GET /api/options</li>
              <li>• GET /api/feedback</li>
              <li>• POST /api/feedback</li>
              <li>• Independent schema validator</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Persistence</span>
            <p className="text-white font-semibold">Atomic JSON Engine</p>
            <ul className="text-[11px] text-white/60 space-y-1">
              <li>• Single-thread write queue</li>
              <li>• feedback.json serialized store</li>
              <li>• Zero database daemons</li>
              <li>• Instant local reproducibility</li>
            </ul>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
          <span>Campus Voice Architecture</span>
          <span className="text-emerald-400">Strict Schema Verification & 100% Native Controls</span>
        </div>
      </div>
    );
  }

  if (activeScreen === 'dashboard') {
    return (
      <div className="w-full h-full min-h-[300px] p-5 bg-[#0f1013] text-white font-sans text-xs flex flex-col justify-between select-none">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-blue-400" />
            <span className="font-bold tracking-tight text-white text-sm">Feedback Response Stream</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-white/50">Filter:</span>
            <select
              value={dashboardFilter}
              onChange={(e) => setDashboardFilter(e.target.value)}
              className="bg-white/10 text-white text-[11px] px-2 py-1 rounded-lg border border-white/10 focus:outline-none"
            >
              <option value="All" className="bg-[#121316]">All Courses</option>
              <option value="Web Development" className="bg-[#121316]">Web Development</option>
              <option value="Database Management" className="bg-[#121316]">Database Management</option>
              <option value="Computer Networks" className="bg-[#121316]">Computer Networks</option>
            </select>
          </div>
        </div>

        <div className="space-y-2.5 my-3 overflow-y-auto max-h-[200px] pr-1">
          {filtered.map((item) => (
            <div key={item.id} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">{item.course}</span>
                <span
                  className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                    item.rating === 'Good'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}
                >
                  {item.rating}
                </span>
              </div>
              <p className="text-white/70 text-[11px] leading-relaxed">{item.comment}</p>
              <div className="flex items-center justify-between text-[10px] text-white/40 pt-1">
                <span>Areas: {item.areas.join(', ')}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
          <span>Total Responses: {mockFeedback.length}</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Live Synced
          </span>
        </div>
      </div>
    );
  }

  // Default: Evaluation Form screen
  return (
    <div className="w-full h-full min-h-[300px] p-5 bg-[#0f1013] text-white font-sans text-xs flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-blue-400" />
          <span className="font-bold tracking-tight text-white text-sm">Course Feedback Submission</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
          Assignment Demo
        </span>
      </div>

      <div className="space-y-3.5 my-3">
        <div>
          <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider block mb-1">
            1. Select Course <span className="text-rose-400">*</span>
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {['Web Development', 'Database Management', 'Computer Networks'].map((course) => (
              <button
                key={course}
                type="button"
                onClick={() => setSelectedCourse(course)}
                className={`px-2 py-1.5 rounded-lg text-[10px] font-medium border text-left truncate transition-all ${
                  selectedCourse === course
                    ? 'bg-blue-600/30 border-blue-500 text-white'
                    : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                }`}
              >
                {course}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider block mb-1">
            2. Satisfaction Rating <span className="text-rose-400">*</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Good', emoji: '😊' },
              { label: 'Average', emoji: '😐' },
              { label: 'Poor', emoji: '😞' },
            ].map((rating) => (
              <button
                key={rating.label}
                type="button"
                onClick={() => setSelectedRating(rating.label)}
                className={`py-2 px-2 rounded-xl text-center border flex items-center justify-center gap-1.5 transition-all ${
                  selectedRating === rating.label
                    ? 'bg-white/15 border-white text-white font-bold'
                    : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'
                }`}
              >
                <span>{rating.emoji}</span>
                <span className="text-[11px]">{rating.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] text-white/50 uppercase tracking-wider mb-1">
            <span>3. Feedback Commentary</span>
            <span>42 / 1000 chars</span>
          </div>
          <div className="w-full bg-white/5 border border-white/10 rounded-xl p-2.5 text-[11px] text-white/80 leading-relaxed font-sans">
            The practical laboratory exercises are well-paced and teach real React state management.
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <Shield className="w-3.5 h-3.5" /> Client & Server Validated
        </div>
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-[10px] font-bold hover:bg-blue-500 transition-colors"
        >
          Submit Feedback <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
