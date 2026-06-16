---
sidebar_position: 5
title: System Overview
custom_edit_url: null
---

# System Overview

Select a section below to view its documentation.

<div className="card-grid">

  <a className="card" href="/docs/System Overview/storage">
    <div className="card-icon">🗄️</div>
    <div className="card-content">
      <h3>Storage</h3>
      <p>Mount and manage network storage shares for backup repositories. Supports CIFS and iSCSI protocols.</p>
    </div>
  </a>

  <a className="card" href="/docs/System Overview/custom_software">
    <div className="card-icon">⚙️</div>
    <div className="card-content">
      <h3>Custom Software</h3>
      <p>Define custom backup software types and file extensions. These appear as Folder Type options when creating or mounting storage folders.</p>
    </div>
  </a>

  <a className="card" href="/docs/System Overview/firewall">
    <div className="card-icon">🛡️</div>
    <div className="card-content">
      <h3>Firewall</h3>
      <p>Configure network access rules to allow specific IP addresses and ports. Enable, disable, reset, and reload firewall rules.</p>
    </div>
  </a>

  <a className="card" href="/docs/System Overview/maintenance">
    <div className="card-icon">🔨</div>
    <div className="card-content">
      <h3>Maintenance</h3>
      <p>Restart or shut down the G-Immute server service directly from the web interface without needing physical or SSH access.</p>
    </div>
  </a>

  <a className="card" href="/docs/System Overview/logs">
    <div className="card-icon">📋</div>
    <div className="card-content">
      <h3>Logs</h3>
      <p>View a complete audit trail of all system actions and events with timestamps. Essential for monitoring, troubleshooting, and security auditing.</p>
    </div>
  </a>

</div>

<style>{`
  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    margin-top: 2rem;
  }
  .card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.4rem;
    border: 1px solid var(--ifm-color-emphasis-300);
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    background: var(--ifm-card-background-color, var(--ifm-background-surface-color));
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .card:hover {
    border-color: var(--ifm-color-primary);
    box-shadow: 0 2px 12px rgba(0,0,0,0.12);
    text-decoration: none;
  }
  .card-icon {
    font-size: 1.8rem;
    line-height: 1;
    flex-shrink: 0;
  }
  .card-content h3 {
    margin: 0 0 0.4rem 0;
    font-size: 1rem;
    font-weight: 600;
  }
  .card-content p {
    margin: 0;
    font-size: 0.875rem;
    color: var(--ifm-color-emphasis-700);
    line-height: 1.5;
  }
  @media (max-width: 640px) {
    .card-grid { grid-template-columns: 1fr; }
  }
`}</style>