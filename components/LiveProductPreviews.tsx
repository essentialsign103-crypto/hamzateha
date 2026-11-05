'use client';

import React, { useState } from 'react';
import {
  Activity,
  Users,
  Calendar,
  FileText,
  Package,
  Layers,
  CheckCircle2,
  ExternalLink,
  Video,
  Monitor,
  Building,
  ClipboardList,
  Sparkles,
} from 'lucide-react';

export function HuCmsPreview() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'patients' | 'records'>('dashboard');

  return (
    <div className="w-full h-full min-h-[300px] p-5 bg-[#0e1117] text-white font-sans text-xs flex flex-col justify-between select-none">
      {/* Clinic OS Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center font-bold text-white text-[10px]">
            HU
          </div>
          <span className="font-bold tracking-tight text-white text-sm">
            HU CMS <span className="text-white/40 text-xs font-normal">| Clinic OS</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold">
            Role: Medical Admin
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 my-2.5 border-b border-white/5 pb-2">
        {[
          { key: 'dashboard', label: 'Clinical Stats' },
          { key: 'patients', label: 'Patient Registry' },
          { key: 'records', label: 'EMR Encounters' },
        ].map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActiveTab(t.key as typeof activeTab)}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
              activeTab === t.key
                ? 'bg-blue-600 text-white'
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* View Content */}
      {activeTab === 'dashboard' && (
        <div className="space-y-3 my-2">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[9px] font-mono uppercase text-white/40 block">Patients</span>
              <p className="text-base font-bold text-white mt-0.5">1,248</p>
              <span className="text-[9px] text-emerald-400">+14 Today</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[9px] font-mono uppercase text-white/40 block">Appointments</span>
              <p className="text-base font-bold text-white mt-0.5">38</p>
              <span className="text-[9px] text-blue-400">Scheduled</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[9px] font-mono uppercase text-white/40 block">Staff on Duty</span>
              <p className="text-base font-bold text-white mt-0.5">12</p>
              <span className="text-[9px] text-amber-400">Doctors & Nurses</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-[9px] font-mono uppercase text-white/40 block">Recent Consultations</span>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between text-white/80">
                <span>Patient #HU-4029 (Student Outpatient)</span>
                <span className="text-emerald-400 font-mono">Discharged</span>
              </div>
              <div className="flex justify-between text-white/60 text-[10px]">
                <span>Treated by: Dr. F. Ahmed • General Medicine</span>
                <span>10:45 AM</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'patients' && (
        <div className="space-y-2 my-2 overflow-y-auto max-h-[140px] pr-1">
          {[
            { id: 'P-101', name: 'Almaz Bekele', dept: 'Engineering', status: 'Consultation Complete' },
            { id: 'P-102', name: 'Dawit Tadesse', dept: 'Agriculture', status: 'Pending Lab Tests' },
            { id: 'P-103', name: 'Sara Mohammed', dept: 'Health Sciences', status: 'Prescription Issued' },
          ].map((p) => (
            <div key={p.id} className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-[11px]">{p.name}</p>
                <p className="text-[9px] text-white/50">{p.id} • Dept: {p.dept}</p>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                {p.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'records' && (
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 my-2 font-mono text-[10px]">
          <div className="flex justify-between text-white/60">
            <span>ENC-2026-081</span>
            <span className="text-emerald-400">Verified Encrypted Session</span>
          </div>
          <p className="text-white/80 font-sans text-xs">
            Chief Complaint: Seasonal respiratory symptoms. Prescribed generic antihistamine and 48hr clinical review.
          </p>
          <div className="text-white/40 pt-1 border-t border-white/5 flex justify-between">
            <span>Role Permissions: Medical Officer</span>
            <span>Electronic Signature: Valid</span>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
        <span>HU Clinic Management System</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <Activity className="w-3 h-3" /> Live Operations
        </span>
      </div>
    </div>
  );
}

export function TehaTechPreview() {
  const [selectedWeek, setSelectedWeek] = useState('Week 1');

  const roadmap = {
    'Week 1': {
      title: 'Foundation & Topic Architecture',
      tasks: ['Define Afaan Oromoo Tech Niche', 'Equipment & Microphone Setup', 'Scripting First Tutorial'],
      status: 'Curriculum Ready',
    },
    'Week 2': {
      title: 'Screen Recording & Studio Rig',
      tasks: ['OBS Studio Resolution Profiles', 'Audio Equalization & Filtering', 'Bilingual Terminology Glossary'],
      status: 'Production Standards',
    },
    'Week 3': {
      title: 'Post-Production & Narrative Editing',
      tasks: ['Pacing & Motion Cutoffs', 'Thumbnail Visual Contrast', 'Metadata & Description Optimization'],
      status: 'Workflow System',
    },
  };

  const current = roadmap[selectedWeek as keyof typeof roadmap] || roadmap['Week 1'];

  return (
    <div className="w-full h-full min-h-[300px] p-5 bg-[#0f1118] text-white font-sans text-xs flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4 text-rose-500" />
          <span className="font-bold tracking-tight text-white text-sm">
            TEHA<span className="text-rose-500">TECH</span> <span className="text-white/40 text-xs font-normal">Command Center</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 font-mono font-bold border border-rose-500/20">
            Afaan Oromoo / EN
          </span>
        </div>
      </div>

      {/* Week Selector */}
      <div className="flex items-center gap-2 my-2.5">
        {['Week 1', 'Week 2', 'Week 3'].map((week) => (
          <button
            key={week}
            type="button"
            onClick={() => setSelectedWeek(week)}
            className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
              selectedWeek === week
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-white/5 text-white/50 hover:bg-white/10'
            }`}
          >
            {week}
          </button>
        ))}
      </div>

      {/* Roadmap Content */}
      <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2.5 my-2">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-white text-xs">{current.title}</h4>
          <span className="text-[9px] font-mono text-rose-400 font-bold px-2 py-0.5 rounded bg-rose-500/10">
            {current.status}
          </span>
        </div>

        <div className="space-y-1.5">
          {current.tasks.map((task, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[11px] text-white/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>{task}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
        <span>YouTube Creator Ecosystem</span>
        <span className="text-rose-400 font-mono">Bilingual Studio Roadmap</span>
      </div>
    </div>
  );
}

export function HuisPreview() {
  const [selectedDept, setSelectedDept] = useState('Computing Lab');

  const items = [
    { name: 'Dell Precision Tower 3650', serial: 'HU-CMP-091', count: 24, val: '1,440,000 ETB' },
    { name: 'Cisco Catalyst 2960 Switch', serial: 'HU-NET-014', count: 6, val: '360,000 ETB' },
    { name: 'Optoma 4K Laser Projector', serial: 'HU-AV-108', count: 4, val: '280,000 ETB' },
  ];

  return (
    <div className="w-full h-full min-h-[300px] p-5 bg-[#0a101d] text-white font-sans text-xs flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4 text-emerald-400" />
          <span className="font-bold tracking-tight text-white text-sm">
            HUIS <span className="text-white/40 text-xs font-normal">| Inventory System</span>
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/25">
          Haramaya Univ.
        </span>
      </div>

      {/* Filter / Scope */}
      <div className="flex items-center justify-between my-2.5">
        <span className="text-[10px] font-mono text-white/50 uppercase">Department Inventory</span>
        <div className="flex gap-1">
          {['Computing Lab', 'Engineering', 'Science Hall'].map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setSelectedDept(dept)}
              className={`px-2 py-0.5 rounded text-[9px] font-mono transition-all ${
                selectedDept === dept ? 'bg-emerald-600 text-white font-bold' : 'bg-white/5 text-white/50'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Items List */}
      <div className="space-y-2 my-2 overflow-y-auto max-h-[140px] pr-1">
        {items.map((item, idx) => (
          <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div>
              <p className="font-bold text-white text-[11px]">{item.name}</p>
              <p className="text-[9px] font-mono text-white/50">{item.serial} • Qty: {item.count}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono font-bold text-emerald-400">{item.val}</span>
              <p className="text-[8px] text-white/40 uppercase">Voucher Verified</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
        <span>Storekeeper Voucher Tracking</span>
        <span className="text-emerald-400 font-mono">Academic Collaboration</span>
      </div>
    </div>
  );
}
