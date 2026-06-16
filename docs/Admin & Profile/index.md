---
sidebar_position: 8
title: Admin & Profile
custom_edit_url: null
---

# Admin & Profile

Manage administrator accounts, product licensing, and personal profile security settings including Multi-Factor Authentication.

<div className="card-grid">

  <a className="card" href="/docs/Admin & Profile/license">
    <div className="card-icon">🔑</div>
    <div className="card-content">
      <h3>License</h3>
      <p>Activate and manage your G-Immute product license. Enter a license key to restore full system functionality when expired.</p>
    </div>
  </a>

  <a className="card" href="/docs/Admin & Profile/users">
    <div className="card-icon">👤</div>
    <div className="card-content">
      <h3>Users</h3>
      <p>Create new G-Immute administrator accounts that can log in and manage the entire system via the web interface.</p>
    </div>
  </a>

  <a className="card" href="/docs/Admin & Profile/profile-mfa">
    <div className="card-icon">🔐</div>
    <div className="card-content">
      <h3>Profile & MFA</h3>
      <p>Update your administrator profile details and enable Multi-Factor Authentication for enhanced login security.</p>
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