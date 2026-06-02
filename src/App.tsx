import React, { useState, useEffect } from 'react';
import { Terminal, Shield, ListTodo, Activity, Trash2, Layout, HelpCircle } from 'lucide-react';
import { OoredooPanel, SGAPanel, BNPPanel } from './database/vault';

interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  type: 'ooredoo' | 'sga' | 'bnp' | 'system';
}

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: '1',
      timestamp: new Date().toLocaleTimeString(),
      message: '🔌 AE Extension Hub initialized. Standby for project compiling...',
      type: 'system',
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addLog = (message: string, type: 'ooredoo' | 'sga' | 'bnp' | 'system') => {
    const newLog: LogEntry = {
      id: Math.random().toString(),
      timestamp: new Date().toLocaleTimeString(),
      message,
      type,
    };
    setLogs((prev) => [newLog, ...prev].slice(0, 50)); // Keep last 50 logs
  };

  const clearLogs = () => {
    setLogs([
      {
        id: '1',
        timestamp: new Date().toLocaleTimeString(),
        message: '🗑️ Action logs cleared. Standby...',
        type: 'system',
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#cccccc] font-sans flex flex-col antialiased">
      
      {/* GLOBAL HEADER */}
      <header className="border-b border-white/5 bg-[#121212]/90 backdrop-blur-md sticky top-0 z-40 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-red-650 to-emerald-650 rounded-lg border border-white/10 flex items-center justify-center">
            <Layout className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wider text-white uppercase font-sans">
              Lotus Brand Toolkit Hub
            </h1>
            <p className="text-xs text-[#555555] font-mono tracking-tight uppercase">
              Production After Effects Automation Panel Manager
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="bg-white/5 border border-white/10 rounded px-2.5 py-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Agent Server: <strong className="text-white">ONLINE</strong></span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded px-2.5 py-1 text-[#888888]">
            Local Time: <span className="text-[#cccccc] font-semibold">{currentTime.toLocaleDateString()} &mdash; {currentTime.toLocaleTimeString()}</span>
          </div>
        </div>
      </header>

      {/* DASHBOARD CONTAINER */}
      <main className="flex-1 p-6 md:p-8 flex flex-col gap-6 max-w-[1650px] mx-auto w-full">
        
        {/* UPPER DESCRIPTION CARD WITH INSTRUCTIONS */}
        <div className="bg-[#121212] border border-white/5 rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-lg">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#ED1C24]" />
              Three Integrated Brand Toolkits Side-By-Side
            </h2>
            <p className="text-[14px] text-[#888888] leading-relaxed max-w-[800px]">
              This workspace integrates original After Effects automation extensions for Ooredoo, Société Générale, and BNP Paribas. Each portal is aligned horizontally with native titles, distinct margins, and fully interactive event loops to mimic a professional production workspace.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs font-mono text-[#aaaeae] max-w-sm shrink-0">
            <div className="font-semibold text-white uppercase mb-1.5 text-[11px] tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
              Interactive Guide
            </div>
            Click preset buttons or type names in each panel to triggers code injections and compile actual workflow actions on the event console.
          </div>
        </div>

        {/* HOV PANELS & TERMINAL LAYOUT */}
        <div className="flex flex-col gap-4">
          
          {/* Main Horizontal flex grid */}
          <div className="overflow-x-auto pb-4 custom-scrollbar flex gap-6 lg:justify-between items-start scroll-smooth">
            
            {/* COLUMN 1: OOREDOO */}
            <div className="flex flex-col gap-3.5 min-w-[320px] max-w-[390px] w-full flex-shrink-0 animate-fade-in">
              <div className="border border-white/5 bg-[#121212] p-3 rounded-lg flex flex-col gap-1 text-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#ED1C24] font-bold">Portal 01</span>
                <h3 className="text-[16px] font-bold tracking-wider text-white uppercase">
                  OOREDOO EXTENSION PORTAL
                </h3>
                <div className="h-[2px] w-12 bg-[#ED1C24] mx-auto mt-1 rounded-full"></div>
              </div>
              <OoredooPanel onAddLog={addLog} />
            </div>

            {/* COLUMN 2: SOCIETE GENERALE */}
            <div className="flex flex-col gap-3.5 min-w-[320px] max-w-[390px] w-full flex-shrink-0">
              <div className="border border-white/5 bg-[#121212] p-3 rounded-lg flex flex-col gap-1 text-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E30613] font-bold">Portal 02</span>
                <h3 className="text-[16px] font-bold tracking-wider text-white uppercase">
                  SGA COMPOSITION TOOLKIT
                </h3>
                <div className="h-[2px] w-12 bg-[#E30613] mx-auto mt-1 rounded-full"></div>
              </div>
              <SGAPanel onAddLog={addLog} />
            </div>

            {/* COLUMN 3: BNP PARIBAS */}
            <div className="flex flex-col gap-3.5 min-w-[320px] max-w-[390px] w-full flex-shrink-0">
              <div className="border border-white/5 bg-[#121212] p-3 rounded-lg flex flex-col gap-1 text-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#009464] font-bold">Portal 03</span>
                <h3 className="text-[16px] font-bold tracking-wider text-white uppercase">
                  BNP EL DJAZAÏR SUITE
                </h3>
                <div className="h-[2px] w-12 bg-[#009464] mx-auto mt-1 rounded-full"></div>
              </div>
              <BNPPanel onAddLog={addLog} />
            </div>

          </div>
        </div>

        {/* ACTION LOGS CONSOLE */}
        <div className="bg-[#121212] border border-white/5 rounded-xl flex flex-col overflow-hidden shadow-lg">
          <div className="px-5 py-3 bg-[#181818] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#888888]" />
              <span className="text-[12px] font-mono uppercase tracking-wider text-white font-bold">
                AE Bridge Logs terminal
              </span>
            </div>
            <button
              onClick={clearLogs}
              className="text-[#555555] hover:text-[#cccccc] hover:bg-white/5 rounded p-1.5 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear Console
            </button>
          </div>

          <div className="p-4 bg-[#0a0a0a] min-h-[140px] max-h-[220px] overflow-y-auto font-mono text-[12px] flex flex-col gap-2 custom-scrollbar">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-3 border-b border-white/[0.02] pb-1.5 last:border-0">
                <span className="text-[#333333] shrink-0 select-none">[{log.timestamp}]</span>
                <span
                  className={
                    log.type === 'ooredoo'
                      ? 'text-[#ED1C24]'
                      : log.type === 'sga'
                      ? 'text-[#E30613]'
                      : log.type === 'bnp'
                      ? 'text-[#009464]'
                      : 'text-sky-400 font-medium'
                  }
                >
                  {log.message}
                </span>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#121212]/30 py-6 px-6 text-center text-xs text-[#555555] font-mono mt-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          © 2026 Lotus Brand Suite. Internal use authorization restricted.
        </div>
        <div>
          Designed by <span className="text-[#888888] font-bold">Boudiaf Zakaria</span> — Built with React &amp; Tailwind
        </div>
      </footer>

    </div>
  );
}

