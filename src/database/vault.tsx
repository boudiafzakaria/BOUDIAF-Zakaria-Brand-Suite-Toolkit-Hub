import React, { useState } from 'react';

// ============================================================================
// BRAND PORTAL 01: OOREDOO PROJECT BUILDER
// ============================================================================
export function OoredooPanel({ onAddLog }: { onAddLog: (message: string, type: 'ooredoo' | 'sga' | 'bnp') => void }) {
  const [projectName, setProjectName] = useState('');
  const [language, setLanguage] = useState('FR + AR');
  const [activeTab, setActiveTab] = useState<'bulle' | 'guide' | 'logo' | 'text'>('bulle');
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleBuild = () => {
    if (!projectName.trim()) {
      onAddLog('⚠️ Ooredoo: Enter a project name first!', 'ooredoo');
      return;
    }
    onAddLog(`🚀 Ooredoo: Compiling After Effects Project "${projectName}" with language: [${language}]...`, 'ooredoo');
    setTimeout(() => {
      onAddLog(`✅ Ooredoo: Template built successfully for layout LC 65!`, 'ooredoo');
    }, 1200);
  };

  const handlePresetClick = (presetName: string) => {
    onAddLog(`📥 Ooredoo: Loaded Preset "${presetName}"`, 'ooredoo');
  };

  return (
    <div id="ooredoo-panel">
      <div className="panel">
        
        {/* HEADER */}
        <div className="panel-header">
          <div className="blink-dot"></div>
          <div>
            <div className="panel-title">Ooredoo Project Builder</div>
            <div className="panel-sub">v1.0.0 — After Effects Extension</div>
          </div>
          <span className="badge" style={{ marginLeft: 'auto' }}>AE</span>
        </div>

        {/* BODY */}
        <div className="panel-body">
          
          {/* PROJECT CREATION */}
          <div className="section">
            <div className="section-label">Project Creation</div>
            <div className="form-row">
              <div className="form-field" style={{ flex: 2 }}>
                <label>Project Name</label>
                <input 
                  type="text" 
                  placeholder="Enter project name…" 
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="form-field" style={{ flex: 1 }}>
                <label>Language</label>
                <div className="select-wrap">
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="FR">FR</option>
                    <option value="AR">AR</option>
                    <option value="FR + AR">FR + AR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* USER INFO BAR */}
          <div className="info-bar">
            <div className="info-entries">
              <div className="info-entry">User: <span>LC 65 — BOUDIAF ZAKARIA</span></div>
              <div className="info-entry">IP: <span>192.168.0.0</span></div>
            </div>
            <button className="btn" onClick={() => {
              setIsAboutOpen(true);
              onAddLog('ℹ️ Ooredoo: Clicked "About" information panel', 'ooredoo');
            }}>
              About
            </button>
          </div>

          {/* BUILD TRIGGER */}
          <button className="btn btn-primary" onClick={handleBuild}>
            Build Ooredoo Project
          </button>

          <div className="divider"></div>

          {/* TABS COMPONENT */}
          <div className="tabs">
            <div className="tab-nav">
              <button 
                className={`tab-btn ${activeTab === 'bulle' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('bulle');
                  onAddLog('📂 Ooredoo: Switched workspace to "Bulle & Slide" tab', 'ooredoo');
                }}
              >
                Bulle &amp; Slide
              </button>
              <button 
                className={`tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('guide');
                  onAddLog('📂 Ooredoo: Switched workspace to "Screen Guide" tab', 'ooredoo');
                }}
              >
                Screen Guide
              </button>
              <button 
                className={`tab-btn ${activeTab === 'logo' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('logo');
                  onAddLog('📂 Ooredoo: Switched workspace to "Logo" tab', 'ooredoo');
                }}
              >
                Logo
              </button>
              <button 
                className={`tab-btn ${activeTab === 'text' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('text');
                  onAddLog('📂 Ooredoo: Switched workspace to "Add Text" tab', 'ooredoo');
                }}
              >
                Add Text
              </button>
            </div>

            {/* TAB: BULLE & SLIDE CONTENT */}
            <div className={`tab-content ${activeTab === 'bulle' ? 'active' : ''}`}>
              <div className="presets-grid">
                <div className="preset-group-label">Bulle Presets</div>
                <button className="btn btn-preset" onClick={() => handlePresetClick('01 — Bulle TXT')}>01 — Bulle TXT</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('02 — Bulle SLID')}>02 — Bulle SLID</button>
                <div className="preset-group-label">Slide Presets</div>
                <button className="btn btn-preset" onClick={() => handlePresetClick('03 — Slide TOP')}>03 — Slide TOP</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('04 — Slide BOTTOM')}>04 — Slide BOTTOM</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('05 — Slide LEFT')}>05 — Slide LEFT</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('06 — Slide RIGHT')}>06 — Slide RIGHT</button>
              </div>
            </div>

            {/* TAB: SCREEN GUIDE CONTENT */}
            <div className={`tab-content ${activeTab === 'guide' ? 'active' : ''}`}>
              <div className="presets-grid">
                <button className="btn btn-preset" onClick={() => handlePresetClick('00 — RGB Colour Palette')}>00 — RGB Colour Palette</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('01 — LA CHARTE LOGO (1920×1080)')}>01 — LA CHARTE LOGO (1920×1080)</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('02 — LA CHARTE LOGO — Twitter (1200×675)')}>02 — LA CHARTE LOGO — Twitter (1200×675)</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('03 — LA CHARTE LOGO — LinkedIn (1104×736)')}>03 — LA CHARTE LOGO — LinkedIn (1104×736)</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('04 — LA CHARTE LOGO — Square (1:1)')}>04 — LA CHARTE LOGO — Square (1:1)</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('05 — LA CHARTE LOGO — Story (4:5)')}>05 — LA CHARTE LOGO — Story (4:5)</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('06 — LA CHARTE LOGO — Story (9:16)')}>06 — LA CHARTE LOGO — Story (9:16)</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('07 — LA CHARTE LOGO Format Cinéma (2048×858)')}>07 — LA CHARTE LOGO Format Cinéma (2048×858)</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('08 — LA CHARTE LOGO AdDISPLAY (5760×3840)')}>08 — LA CHARTE LOGO AdDISPLAY (5760×3840)</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('09 — LA CHARTE LOGO PIKASSO (2160×3840)')}>09 — LA CHARTE LOGO PIKASSO (2160×3840)</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('10 — LA CHARTE LOGO Écran A (512×640)')}>10 — LA CHARTE LOGO Écran A (512×640)</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('11 — LA CHARTE LOGO Écran B (4288×256)')}>11 — LA CHARTE LOGO Écran B (4288×256)</button>
              </div>
            </div>

            {/* TAB: LOGO CONTENT */}
            <div className={`tab-content ${activeTab === 'logo' ? 'active' : ''}`}>
              <div className="presets-grid">
                <button className="btn btn-preset" onClick={() => handlePresetClick('01 — OOREDOO LOGO Screen')}>01 — OOREDOO LOGO Screen</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('02 — OOREDOO LOGO EN — Red BG')}>02 — OOREDOO LOGO EN — Red BG</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('02 — OOREDOO LOGO EN — White BG')}>02 — OOREDOO LOGO EN — White BG</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('03 — OOREDOO LOGO AR — Red BG')}>03 — OOREDOO LOGO AR — Red BG</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('03 — OOREDOO LOGO AR — White BG')}>03 — OOREDOO LOGO AR — White BG</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('04 — OOREDOO LOGO Business — Blue BG')}>04 — OOREDOO LOGO Business — Blue BG</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('04 — OOREDOO LOGO Business — White BG')}>04 — OOREDOO LOGO Business — White BG</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('05 — OOREDOO Favicon')}>05 — OOREDOO Favicon</button>
              </div>
            </div>

            {/* TAB: ADD TEXT CONTENT */}
            <div className={`tab-content ${activeTab === 'text' ? 'active' : ''}`}>
              <div className="presets-grid">
                <button className="btn btn-preset" onClick={() => handlePresetClick('01 — FR TEXT')}>01 — FR TEXT</button>
                <button className="btn btn-preset" onClick={() => handlePresetClick('02 — AR TEXT')}>02 — AR TEXT</button>
              </div>
              <div className="info-box" style={{ marginTop: '8px' }}>
                <div><span>1.</span> Add your preset text</div>
                <div><span>2.</span> Edit your text block</div>
                <div><span>3.</span> Select layer → <strong>Shift+Ctrl+N</strong></div>
                <div><span>4.</span> Work is done!</div>
              </div>
            </div>

          </div>

        </div>

        {/* WATERMARK */}
        <div className="watermark">© 2025 — Boudiaf Zakaria — Internal Use Only — OOREEDOO</div>
      </div>

      {/* ABOUT MODAL */}
      {isAboutOpen && (
        <div className="modal-overlay open" onClick={() => setIsAboutOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">About This Tool</span>
              <button className="modal-close" onClick={() => setIsAboutOpen(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="modal-field">
                <span className="mf-icon">◉</span>
                <div>
                  <div className="mf-label">Created By</div>
                  <div className="mf-value">Boudiaf Zakaria</div>
                </div>
              </div>
              <div className="modal-field">
                <span className="mf-icon">◈</span>
                <div>
                  <div className="mf-label">Version</div>
                  <div className="mf-value">1.0.0</div>
                </div>
              </div>
              <div className="modal-desc">
                <div><span className="tag">// Description</span></div>
                <div>Automates After Effects project setup for Ooredoo branding in FR and AR formats.</div>
                <br />
                <div><span className="tag">// Includes</span></div>
                <div>⚙ Preset Loader</div>
                <div>◎ Logo System</div>
                <div>⊞ Screen Guides</div>
                <div>⬡ Bulle &amp; Slide Tools</div>
                <div>✦ Project Template Builder</div>
                <br />
                <div><span className="tag">// Access</span></div>
                <div>For internal use only — Lotus Conseil.</div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn" onClick={() => setIsAboutOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}


// ============================================================================
// BRAND PORTAL 02: SOCIÉTÉ GÉNÉRALE ALGÉRIE
// ============================================================================
export function SGAPanel({ onAddLog }: { onAddLog: (message: string, type: 'ooredoo' | 'sga' | 'bnp') => void }) {
  const [projectName, setProjectName] = useState('');
  const [language, setLanguage] = useState('French Composition');
  const [activeCategory, setActiveCategory] = useState<'logo' | 'line' | 'text' | 'transition' | 'guide'>('logo');
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleBuild = () => {
    if (!projectName.trim()) {
      onAddLog('⚠️ SGA: Please enter a project name!', 'sga');
      return;
    }
    onAddLog(`🚀 SGA: Loading SG composition workspace for project "${projectName}" [${language}]...`, 'sga');
    setTimeout(() => {
      onAddLog(`✅ SGA: Red & Black alignment layers successfully generated!`, 'sga');
    }, 1200);
  };

  const handlePresetClick = (presetName: string) => {
    onAddLog(`📥 SGA: Active preset loaded -> "${presetName}"`, 'sga');
  };

  return (
    <div id="sga-panel">
      <div className="panel animate-fade-in">
        
        {/* HEADER */}
        <div className="panel-header">
          <div className="blink-dot"></div>
          <div>
            <div className="panel-title">Société Générale Algérie Toolkit</div>
            <div className="panel-sub">v1.1.0 — After Effects Extension</div>
          </div>
          <span className="badge" style={{ marginLeft: 'auto' }}>AE</span>
        </div>

        {/* BODY */}
        <div className="panel-body">
          
          {/* PROJECT & COMPOSITION SETTINGS */}
          <div className="section">
            <div className="section-label">Project &amp; Composition Settings</div>
            <div className="form-row">
              <div className="form-field" style={{ flex: 2 }}>
                <label>Project Name</label>
                <input 
                  type="text" 
                  placeholder="Enter project name…"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="form-field" style={{ flex: 1.4 }}>
                <label>Language</label>
                <div className="select-wrap">
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option>French Composition</option>
                    <option>Arabic Composition</option>
                    <option>French + Arabic</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-primary" onClick={handleBuild}>
              Create SGA Project
            </button>
          </div>

          <div className="divider"></div>

          {/* SETTINGS SELECTOR */}
          <div className="section">
            <div className="section-label">Settings Selector</div>
            <div className="selector-block">
              <div className="select-wrap">
                <select 
                  value={activeCategory} 
                  onChange={(e) => {
                    const cat = e.target.value as any;
                    setActiveCategory(cat);
                    onAddLog(`📂 SGA: Switch Category Settings to "${cat.toUpperCase()}"`, 'sga');
                  }}
                >
                  <option value="logo">Logo Settings</option>
                  <option value="line">Moving Line Settings</option>
                  <option value="text">Text Settings</option>
                  <option value="transition">Transition Settings</option>
                  <option value="guide">Screen Guides</option>
                </select>
              </div>

              <div className="settings-area">
                {/* LOGO */}
                <div className={`settings-inner ${activeCategory === 'logo' ? 'active' : ''}`}>
                  <div className="settings-category">Logo Presets</div>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('SGA Intro')}>SGA Intro</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Logo Screen SGA')}>Logo Screen SGA</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Bloc Marque Screen')}>Bloc Marque Screen</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Bloc Marque Out')}>Bloc Marque Out</button>
                </div>

                {/* MOVING LINE */}
                <div className={`settings-inner ${activeCategory === 'line' ? 'active' : ''}`}>
                  <div className="settings-category">Line Presets</div>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Red Moving Line')}>Red Moving Line</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('White Moving Line')}>White Moving Line</button>
                </div>

                {/* TEXT */}
                <div className={`settings-inner ${activeCategory === 'text' ? 'active' : ''}`}>
                  <div className="settings-category">Text Presets</div>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('TXT AR')}>TXT AR</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('TXT FR')}>TXT FR</button>
                </div>

                {/* TRANSITION */}
                <div className={`settings-inner ${activeCategory === 'transition' ? 'active' : ''}`}>
                  <div className="settings-category">Transition Presets</div>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Left Transition')}>Left Transition</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Right Transition')}>Right Transition</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Top Transition')}>Top Transition</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Bottom Transition')}>Bottom Transition</button>
                </div>

                {/* SCREEN GUIDES */}
                <div className={`settings-inner ${activeCategory === 'guide' ? 'active' : ''}`}>
                  <div className="settings-category">Screen Formats</div>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('YouTube — 1920 × 1080')}>YouTube — 1920 × 1080</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Twitter — 1200 × 675')}>Twitter — 1200 × 675</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('LinkedIn — 1104 × 736')}>LinkedIn — 1104 × 736</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Square — 1080 × 1080')}>Square — 1080 × 1080</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Square — 1080 × 1350')}>Square — 1080 × 1350</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Story — 1080 × 1920')}>Story — 1080 × 1920</button>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* SOCIAL MEDIA SCREEN GUIDE GRID */}
          <div className="section">
            <div className="section-label">Social Media Screen Guide</div>
            <div className="guide-grid">
              
              {/* YouTube */}
              <div className="guide-card" onClick={() => handlePresetClick('YouTube Guide Grid (1920 × 1080)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '50px', height: '28px' }}></div>
                </div>
                <div>
                  <div className="guide-name">YouTube</div>
                  <div className="guide-dims">1920 × 1080</div>
                </div>
              </div>

              {/* Twitter */}
              <div className="guide-card" onClick={() => handlePresetClick('Twitter Guide Grid (1200 × 675)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '50px', height: '28px' }}></div>
                </div>
                <div>
                  <div className="guide-name">Twitter</div>
                  <div className="guide-dims">1200 × 675</div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="guide-card" onClick={() => handlePresetClick('LinkedIn Guide Grid (1104 × 736)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '50px', height: '33px' }}></div>
                </div>
                <div>
                  <div className="guide-name">LinkedIn</div>
                  <div className="guide-dims">1104 × 736</div>
                </div>
              </div>

              {/* Square (1:1) */}
              <div className="guide-card" onClick={() => handlePresetClick('Square Standard Guide Grid (1080 × 1080)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '40px', height: '40px' }}></div>
                </div>
                <div>
                  <div className="guide-name">Square</div>
                  <div className="guide-dims">1080 × 1080</div>
                </div>
              </div>

              {/* Square (4:5) */}
              <div className="guide-card" onClick={() => handlePresetClick('Square Portrait Guide Grid (1080 × 1350)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '40px', height: '50px' }}></div>
                </div>
                <div>
                  <div className="guide-name">Square</div>
                  <div className="guide-dims">1080 × 1350</div>
                </div>
              </div>

              {/* Story */}
              <div className="guide-card" onClick={() => handlePresetClick('Story Guide Grid (1080 × 1920)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '28px', height: '50px' }}></div>
                </div>
                <div>
                  <div className="guide-name">Story</div>
                  <div className="guide-dims">1080 × 1920</div>
                </div>
              </div>

            </div>
          </div>

          <div className="divider"></div>

          {/* USER BAR */}
          <div className="info-bar">
            <div className="info-entries">
              <div className="info-entry">User: <span>BOUDIAF ZAKARIA</span></div>
              <div className="info-entry">Version: <span>1.1.0</span></div>
            </div>
            <button className="btn" onClick={() => {
              setIsAboutOpen(true);
              onAddLog('ℹ️ SGA: Clicked "About" information panel', 'sga');
            }}>
              About
            </button>
          </div>

        </div>

        {/* WATERMARK */}
        <div className="watermark">© 2025 — Boudiaf Zakaria — Internal Use Only — SGA</div>
      </div>

      {/* ABOUT MODAL FOR SGA */}
      {isAboutOpen && (
        <div className="modal-overlay open" onClick={() => setIsAboutOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">About SGA Toolkit</span>
              <button className="modal-close" onClick={() => setIsAboutOpen(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="modal-field">
                <span className="mf-icon">◉</span>
                <div>
                  <div className="mf-label">Created By</div>
                  <div className="mf-value">Boudiaf Zakaria</div>
                </div>
              </div>
              <div className="modal-field">
                <span className="mf-icon">◈</span>
                <div>
                  <div className="mf-label">Version</div>
                  <div className="mf-value">1.1.0</div>
                </div>
              </div>
              <div className="modal-desc">
                <div><span className="tag">// Description</span></div>
                <div>Automates After Effects project setup for SGA branding in FR and AR formats.</div>
                <br />
                <div><span className="tag">// Includes</span></div>
                <div>⚙ Preset Loader</div>
                <div>◎ Logo System</div>
                <div>⊞ Screen Guides</div>
                <div>⬡ Moving Line Tools</div>
                <div>✦ Project Template Builder</div>
                <br />
                <div><span className="tag">// Access</span></div>
                <div>For internal use only.</div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn" onClick={() => setIsAboutOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}


// ============================================================================
// BRAND PORTAL 03: BNP PARIBAS EL DJAZAÏR
// ============================================================================
export function BNPPanel({ onAddLog }: { onAddLog: (message: string, type: 'ooredoo' | 'sga' | 'bnp') => void }) {
  const [projectName, setProjectName] = useState('');
  const [language, setLanguage] = useState('French Composition');
  const [activeCategory, setActiveCategory] = useState<'logo' | 'line' | 'text' | 'transition' | 'guide'>('logo');
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleBuild = () => {
    if (!projectName.trim()) {
      onAddLog('⚠️ BNP: Please enter a project name!', 'bnp');
      return;
    }
    onAddLog(`🚀 BNP: Initializing BNP Paribas workspace for project "${projectName}" [${language}]...`, 'bnp');
    setTimeout(() => {
      onAddLog(`✅ BNP: Standard Emerald layouts, brandmarks, and grids compiled!`, 'bnp');
    }, 1200);
  };

  const handlePresetClick = (presetName: string) => {
    onAddLog(`📥 BNP: Brand preset loaded -> "${presetName}"`, 'bnp');
  };

  return (
    <div id="bnp-panel">
      <div className="panel">
        
        {/* HEADER */}
        <div className="panel-header">
          <div className="blink-dot"></div>
          <div>
            <div className="panel-title">BNP Paribas El Djazaïr Toolkit</div>
            <div className="panel-sub">v1.0.0 — After Effects Extension</div>
          </div>
          <span className="badge" style={{ marginLeft: 'auto' }}>AE</span>
        </div>

        {/* BODY */}
        <div className="panel-body">
          
          {/* PROJECT BUILDER Block */}
          <div className="section">
            <div className="section-label">Project Builder</div>
            <div className="form-row">
              <div className="form-field" style={{ flex: 2 }}>
                <label>Project Name</label>
                <input 
                  type="text" 
                  placeholder="Enter project name…"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="form-field" style={{ flex: 1.4 }}>
                <label>Language</label>
                <div className="select-wrap">
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option>French Composition</option>
                    <option>Arabic Composition</option>
                    <option>French + Arabic</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-primary" onClick={handleBuild}>
              Create BNP Project
            </button>
          </div>

          <div className="divider"></div>

          {/* SECTION SELECTOR */}
          <div className="section">
            <div className="section-label">Section Selector</div>
            <div className="selector-block">
              <div className="select-wrap">
                <select 
                  value={activeCategory}
                  onChange={(e) => {
                    const val = e.target.value as any;
                    setActiveCategory(val);
                    onAddLog(`📂 BNP: Switch section view to "${val.toUpperCase()}"`, 'bnp');
                  }}
                >
                  <option value="logo">Logo Tools</option>
                  <option value="line">Motion Lines</option>
                  <option value="text">Text Tools</option>
                  <option value="transition">Transitions</option>
                  <option value="guide">Screen Guides</option>
                </select>
              </div>

              <div className="settings-area">
                {/* LOGO */}
                <div className={`settings-inner ${activeCategory === 'logo' ? 'active' : ''}`}>
                  <div className="settings-category">Logo Presets</div>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('BNP Intro')}>BNP Intro</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Logo Reveal')}>Logo Reveal</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Bloc Marque')}>Bloc Marque</button>
                </div>

                {/* MOTION LINES */}
                <div className={`settings-inner ${activeCategory === 'line' ? 'active' : ''}`}>
                  <div className="settings-category">Motion Presets</div>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Green Line')}>Green Line</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('White Line')}>White Line</button>
                </div>

                {/* TEXT TOOLS */}
                <div className={`settings-inner ${activeCategory === 'text' ? 'active' : ''}`}>
                  <div className="settings-category">Text Presets</div>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('TXT FR')}>TXT FR</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('TXT AR')}>TXT AR</button>
                </div>

                {/* TRANSITIONS */}
                <div className={`settings-inner ${activeCategory === 'transition' ? 'active' : ''}`}>
                  <div className="settings-category">Transition Presets</div>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Left Transition')}>Left Transition</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Right Transition')}>Right Transition</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Top Transition')}>Top Transition</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Bottom Transition')}>Bottom Transition</button>
                </div>

                {/* SCREEN GUIDES */}
                <div className={`settings-inner ${activeCategory === 'guide' ? 'active' : ''}`}>
                  <div className="settings-category">Screen Formats</div>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('YouTube — 1920 × 1080')}>YouTube — 1920 × 1080</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Twitter — 1200 × 675')}>Twitter — 1200 × 675</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('LinkedIn — 1104 × 736')}>LinkedIn — 1104 × 736</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Square — 1080 × 1080')}>Square — 1080 × 1080</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Square — 1080 × 1350')}>Square — 1080 × 1350</button>
                  <button className="btn btn-preset" onClick={() => handlePresetClick('Story — 1080 × 1920')}>Story — 1080 × 1920</button>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* SOCIAL MEDIA SCREEN GUIDE PREVIEWS */}
          <div className="section">
            <div className="section-label">Social Media Screen Guide</div>
            <div className="guide-grid">
              
              <div className="guide-card" onClick={() => handlePresetClick('YouTube Composition Grid (1920 × 1080)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '50px', height: '28px' }}></div>
                </div>
                <div>
                  <div className="guide-name">YouTube</div>
                  <div className="guide-dims">1920 × 1080</div>
                </div>
              </div>

              <div className="guide-card" onClick={() => handlePresetClick('Twitter Composition Grid (1200 × 675)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '50px', height: '28px' }}></div>
                </div>
                <div>
                  <div className="guide-name">Twitter</div>
                  <div className="guide-dims">1200 × 675</div>
                </div>
              </div>

              <div className="guide-card" onClick={() => handlePresetClick('LinkedIn Composition Grid (1104 × 736)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '50px', height: '33px' }}></div>
                </div>
                <div>
                  <div className="guide-name">LinkedIn</div>
                  <div className="guide-dims">1104 × 736</div>
                </div>
              </div>

              <div className="guide-card" onClick={() => handlePresetClick('Square Standard Grid (1080 × 1080)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '40px', height: '40px' }}></div>
                </div>
                <div>
                  <div className="guide-name">Square</div>
                  <div className="guide-dims">1080 × 1080</div>
                </div>
              </div>

              <div className="guide-card" onClick={() => handlePresetClick('Square Portrait Grid (1080 × 1350)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '40px', height: '50px' }}></div>
                </div>
                <div>
                  <div className="guide-name">Square</div>
                  <div className="guide-dims">1080 × 1350</div>
                </div>
              </div>

              <div className="guide-card" onClick={() => handlePresetClick('Story Vertical Grid (1080 × 1920)')}>
                <div className="guide-preview">
                  <div className="guide-frame" style={{ width: '28px', height: '50px' }}></div>
                </div>
                <div>
                  <div className="guide-name">Story</div>
                  <div className="guide-dims">1080 × 1920</div>
                </div>
              </div>

            </div>
          </div>

          <div className="divider"></div>

          {/* USER INFO BAR */}
          <div className="info-bar">
            <div className="info-entries">
              <div className="info-entry">User: <span>BOUDIAF ZAKARIA</span></div>
              <div className="info-entry">Version: <span>1.0.0</span></div>
            </div>
            <button className="btn" onClick={() => {
              setIsAboutOpen(true);
              onAddLog('ℹ️ BNP: Clicked "About" information panel', 'bnp');
            }}>
              About
            </button>
          </div>

        </div>

        {/* WATERMARK */}
        <div className="watermark">© 2025 — Boudiaf Zakaria — Internal Use Only — BNP</div>
      </div>

      {/* ABOUT MODAL FOR BNP */}
      {isAboutOpen && (
        <div className="modal-overlay open" onClick={() => setIsAboutOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">About BNP Toolkit</span>
              <button className="modal-close" onClick={() => setIsAboutOpen(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="modal-field">
                <span className="mf-icon">◉</span>
                <div>
                  <div className="mf-label">Created By</div>
                  <div className="mf-value">Boudiaf Zakaria</div>
                </div>
              </div>
              <div className="modal-field">
                <span className="mf-icon">◈</span>
                <div>
                  <div className="mf-label">Version</div>
                  <div className="mf-value">1.0.0</div>
                </div>
              </div>
              <div className="modal-desc">
                <div><span className="tag">// Description</span></div>
                <div>Automates BNP Paribas After Effects project setup in FR and AR formats.</div>
                <br />
                <div><span className="tag">// Includes</span></div>
                <div>⚙ Project Builder</div>
                <div>◎ Logo System</div>
                <div>⊞ Screen Guides</div>
                <div>⬡ Motion Tools</div>
                <div>✦ Workflow Automation</div>
                <br />
                <div><span className="tag">// Access</span></div>
                <div>For internal use only.</div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn" onClick={() => setIsAboutOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
