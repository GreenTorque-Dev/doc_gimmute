---
sidebar_position: 6
title: Settings
custom_edit_url: null
---

# Settings

The Settings section allows administrators to manage core system preferences, server configuration, cloud storage integration, and email notifications.

<div className="card-grid">

  <a className="card" href="/docs/Settings/general-settings">
    <div className="card-icon">🔧</div>
    <div className="card-content">
      <h3>General Settings</h3>
      <p>Configure server time zone, secondary copy path, SSH port, and SSH access controls.</p>
    </div>
  </a>

  <a className="card" href="/docs/Settings/cloud-configuration">
    <div className="card-icon">☁️</div>
    <div className="card-content">
      <h3>Cloud Configuration</h3>
      <p>Set up AWS S3 credentials for cloud backup storage. Once configured, repository folders can be synced to S3.</p>
    </div>
  </a>

  <a className="card" href="/docs/Settings/email-configuration">
    <div className="card-icon">✉️</div>
    <div className="card-content">
      <h3>Email Configuration</h3>
      <p>Configure SMTP email settings so G-Immute can send system alert notifications automatically.</p>
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