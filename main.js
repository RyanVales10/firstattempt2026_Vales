const app = document.querySelector('#app');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('./sw.js');
      console.log('Service Worker registered successfully.');
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  });
}

const roleSets = {
  alumni: {
    label: 'Alumni',
    screens: [
      {
        id: 'alumni-login',
        title: 'Alumni Login Page',
        activeNav: null,
        chrome: 'login',
        body: `
          <section class="screen login-screen">
            <div class="brand-banner">
              <div class="seal"></div>
              <div class="brand-name">University Portal</div>
              <div class="brand-sub">Document Request System</div>
            </div>

            <div class="login-copy">
              <h2>ALUMNI</h2>
            </div>

            <div class="role-switch">
              <div class="field-label">Select Role</div>
              <div class="role-grid">
                <button class="role-card is-active" type="button">
                  <span class="role-emoji">👤</span>
                  <span>Alumni</span>
                </button>
                <button class="role-card" type="button">
                  <span class="role-emoji">👥</span>
                  <span>Staff</span>
                </button>
              </div>
            </div>

            <label class="input-block">
              <span>Email</span>
              <input type="text" />
            </label>

            <label class="input-block">
              <span>Password</span>
              <input type="password" />
            </label>

            <button class="primary-button" type="button">Login</button>

            <div class="auth-links">
              <a href="#">Forgot Password ?</a>
              <p>Don’t have an account? <a href="#">Create Account</a></p>
            </div>
          </section>
        `
      },
      {
        id: 'alumni-dashboard',
        title: 'Alumni Dashboard',
        activeNav: 'dashboard',
        chrome: 'dashboard',
        body: `
          <section class="screen dashboard-screen">
            <header class="hero-header">
              <div>
                <h2>Welcome Back!</h2>
                <p>Ravic Santos</p>
              </div>
              <div class="hero-avatar">👤</div>
            </header>

            <div class="card-row stats-row">
              <article class="mini-stat">
                <div class="mini-icon yellow">◔</div>
                <strong>0</strong>
                <span>Pending</span>
              </article>
              <article class="mini-stat">
                <div class="mini-icon blue">✓</div>
                <strong>1</strong>
                <span>Approved</span>
              </article>
              <article class="mini-stat">
                <div class="mini-icon green">▦</div>
                <strong>1</strong>
                <span>Ready</span>
              </article>
            </div>

            <button class="primary-button large-button" type="button">Request Document</button>

            <button class="menu-card" type="button">
              <div class="menu-icon">▣</div>
              <div class="menu-copy">
                <strong>My Requests</strong>
                <span>Track your Documents</span>
              </div>
              <div class="menu-chevron">›</div>
            </button>

            <button class="menu-card" type="button">
              <div class="menu-icon">▤</div>
              <div class="menu-copy">
                <strong>Appointment Schedule</strong>
                <span>View your Bookings</span>
              </div>
            </button>

            <section class="info-card note-card">
              <div class="info-title">📌 How it works</div>
              <ul>
                <li>Select your required document</li>
                <li>Schedule an appointment to avoid queues</li>
                <li>Track your request status in real-time</li>
                <li>Pick up when ready</li>
              </ul>
            </section>
          </section>
        `
      },
      {
        id: 'alumni-profile',
        title: 'Alumni Profile',
        activeNav: 'profile',
        chrome: 'profile',
        body: `
          <section class="screen profile-screen">
            <header class="back-bar">
              <span class="back-arrow">←</span>
              <span>My Profile</span>
            </header>

            <section class="profile-card">
              <div class="profile-avatar large">👤</div>
              <strong>Ravic Santos</strong>
              <span class="profile-pill">Alumni</span>
            </section>

            <section class="info-card">
              <div class="section-label">Account Information</div>
              <div class="info-list">
                <div class="info-row"><span>✉</span><div><small>Email</small><p>rvsantos@gmail.com</p></div></div>
                <div class="info-row"><span>🪪</span><div><small>Student ID</small><p>2022-012345</p></div></div>
                <div class="info-row"><span>👥</span><div><small>Account Type</small><p>Alumni Account</p></div></div>
              </div>
            </section>

            <section class="info-card">
              <div class="section-label">Quick Information</div>
              <button class="menu-card compact" type="button">
                <div class="menu-icon">▣</div>
                <div class="menu-copy">
                  <strong>My Request</strong>
                </div>
                <div class="menu-chevron">›</div>
              </button>
            </section>

            <button class="logout-button" type="button">↩ Logout</button>
          </section>
        `
      },
      {
        id: 'select-document',
        title: 'Document Request Selection Page',
        activeNav: 'dashboard',
        chrome: 'document',
        body: `
          <section class="screen request-screen">
            <header class="back-bar">
              <span class="back-arrow">←</span>
              <span>Select Document</span>
            </header>
            <p class="screen-intro">Choose ythe document you need to request</p>

            <div class="doc-list">
              <article class="doc-card"><div class="doc-left"><div class="doc-icon">📄</div><div><strong>Transcript of Records</strong><span>Official academic records</span></div></div><div class="doc-price">₱150</div></article>
              <article class="doc-card"><div class="doc-left"><div class="doc-icon">📘</div><div><strong>Diploma Copy</strong><span>Certified true copy</span></div></div><div class="doc-price">₱200</div></article>
              <article class="doc-card"><div class="doc-left"><div class="doc-icon">📘</div><div><strong>Certificate of Enrollment</strong><span>Proof of enrollment</span></div></div><div class="doc-price">₱150</div></article>
              <article class="doc-card"><div class="doc-left"><div class="doc-icon">📘</div><div><strong>Good Moral Certificate</strong><span>Character certificate</span></div></div><div class="doc-price">₱200</div></article>
              <article class="doc-card"><div class="doc-left"><div class="doc-icon">📘</div><div><strong>Other</strong><span>Specify your document</span></div></div></article>
            </div>

            <button class="primary-button large-button" type="button">Continue to appointment</button>
          </section>
        `
      },
      {
        id: 'select-document-active',
        title: 'Document Selection Active',
        activeNav: 'dashboard',
        chrome: 'document',
        body: `
          <section class="screen request-screen">
            <header class="back-bar">
              <span class="back-arrow">←</span>
              <span>Select Document</span>
            </header>
            <p class="screen-intro">Choose ythe document you need to request</p>

            <div class="doc-list">
              <article class="doc-card selected"><div class="doc-left"><div class="doc-icon">📄</div><div><strong>Transcript of Records</strong><span>Official academic records</span></div></div><div class="doc-price">₱150</div></article>
              <article class="doc-card"><div class="doc-left"><div class="doc-icon">📘</div><div><strong>Diploma Copy</strong><span>Certified true copy</span></div></div><div class="doc-price">₱200</div></article>
              <article class="doc-card"><div class="doc-left"><div class="doc-icon">📘</div><div><strong>Certificate of Enrollment</strong><span>Proof of enrollment</span></div></div><div class="doc-price">₱150</div></article>
              <article class="doc-card"><div class="doc-left"><div class="doc-icon">📘</div><div><strong>Good Moral Certificate</strong><span>Character certificate</span></div></div><div class="doc-price">₱200</div></article>
              <article class="doc-card"><div class="doc-left"><div class="doc-icon">📘</div><div><strong>Other</strong><span>Specify your document</span></div></div></article>
            </div>

            <button class="primary-button large-button" type="button">Continue to appointment</button>
          </section>
        `
      },
      {
        id: 'appointment',
        title: 'Appointment Selection Page',
        activeNav: 'dashboard',
        chrome: 'appointment',
        body: `
          <section class="screen appointment-screen">
            <header class="back-bar">
              <span class="back-arrow">←</span>
              <span>Schedule Appointment</span>
            </header>

            <article class="summary-card">
              <small>Selected Document</small>
              <div class="summary-row"><div class="doc-icon small">📄</div><strong>Transcript of Records</strong></div>
            </article>

            <label class="input-block spaced">
              <span>Enter Date</span>
              <input type="text" value="February 27, 2026" />
            </label>

            <label class="input-block spaced">
              <span>Enter Time</span>
              <input type="text" value="9:00AM" />
            </label>

            <article class="summary-card compact-summary">
              <small>Appointment Schedule</small>
              <div class="summary-row"><div class="summary-icon">🕒</div><strong>February 27, 2026 - 9:00AM</strong></div>
            </article>

            <button class="primary-button large-button" type="button">Continue to Summary</button>
          </section>
        `
      },
      {
        id: 'review',
        title: 'Request Review Page',
        activeNav: 'dashboard',
        chrome: 'review',
        body: `
          <section class="screen review-screen">
            <header class="back-bar">
              <span class="back-arrow">←</span>
              <span>Review Request</span>
            </header>

            <p class="screen-intro">Please review your request details before submitting</p>

            <article class="review-card">
              <div class="section-label small-label">Document Details</div>
              <div class="info-stack">
                <div class="info-row"><span>📄</span><div><small>Document Type</small><p>Transcript of Records</p></div></div>
                <div class="info-row"><span>📅</span><div><small>Appointment Date</small><p>Friday, February 27, 2026</p></div></div>
                <div class="info-row"><span>🕒</span><div><small>Appointment Time</small><p>10:00 AM</p></div></div>
              </div>
            </article>

            <article class="review-card">
              <div class="section-label small-label">Payment Details</div>
              <div class="price-row"><span>Processing Fee</span><strong>₱150</strong></div>
              <div class="price-row"><span>Add-ons</span><strong id="addon-fee">₱0</strong></div>
              <div class="price-row total"><span>Total Amount</span><strong id="total-fee">₱150</strong></div>
              <div class="payment-line"><span>Payment Method</span><strong id="payment-method">Not yet selected</strong></div>
            </article>

            <article class="micro-card">
              <div class="section-label small-label">Micro Transactions</div>
              <div class="addon-grid">
                <button class="addon-btn" type="button" data-addon="Priority Processing" data-amount="30">Priority +₱30</button>
                <button class="addon-btn" type="button" data-addon="Digital Copy" data-amount="20">Digital Copy +₱20</button>
                <button class="addon-btn" type="button" data-addon="SMS Alerts" data-amount="10">SMS Alerts +₱10</button>
              </div>
              <div class="pay-row">
                <button class="pay-btn" type="button" data-pay-method="Wallet">Pay with Wallet</button>
                <button class="pay-btn" type="button" data-pay-method="Cashier">Pay at Cashier</button>
              </div>
              <p id="payment-status" class="payment-status">No payment completed yet.</p>
            </article>

            <article class="notes-card">
              <div class="section-label small-label">📌 Important Notes</div>
              <ul>
                <li>Bring a valid ID on your appointment</li>
                <li>Payment will be collected at the cashier</li>
                <li>Processing takes 3-5 business days</li>
                <li>You'll receive updates via email</li>
              </ul>
            </article>

            <button class="primary-button large-button" type="button">Submit Request</button>
            <a class="secondary-link" href="#">Back to edit details</a>
          </section>
        `
      },
      {
        id: 'tracker',
        title: 'Order Tracker',
        activeNav: 'history',
        chrome: 'tracker',
        body: `
          <section class="screen tracker-screen">
            <header class="back-bar">
              <span class="back-arrow">←</span>
              <span>Order Tracker</span>
            </header>
            <p class="screen-intro large-intro">Track your document request</p>

            <article class="tracker-summary">
              <div class="summary-top">
                <div>
                  <small>Order #</small>
                  <strong>ALM-2026-0001</strong>
                </div>
                <span class="status-pill blue-pill">Processing..</span>
              </div>
              <div class="summary-foot">
                <span>Transcript (TOR)</span>
                <span>Est. delivery: March 1, 2026</span>
              </div>
            </article>

            <div class="timeline-list">
              <div class="timeline-item active"><span class="timeline-dot checked">✓</span><div><strong>Order Placed</strong><p>Your request has been submitted</p><small>Feb 22, 2026 - 10:30 AM</small></div></div>
              <div class="timeline-item highlighted"><span class="timeline-dot">◔</span><div><strong>Processing</strong><p>Document is being prepared by the Registrar</p><small>In Progress...</small></div></div>
              <div class="timeline-item"><span class="timeline-dot">▣</span><div><strong>Quality Check</strong><p>Document is being prepared by the Registrar</p></div></div>
              <div class="timeline-item"><span class="timeline-dot">▭</span><div><strong>Out for Delivery</strong><p>On its way to your address</p></div></div>
              <div class="timeline-item"><span class="timeline-dot">⌂</span><div><strong>Delivered</strong><p>Document has been received</p></div></div>
            </div>

            <button class="secondary-flow-button" type="button">View Transaction History</button>
          </section>
        `
      },
      {
        id: 'transaction-history',
        title: 'Transaction History',
        activeNav: 'history',
        chrome: 'history',
        body: `
          <section class="screen tracker-screen">
            <header class="back-bar">
              <span class="back-arrow">←</span>
              <span>Transaction History</span>
            </header>
            <p class="screen-intro large-intro">Your micro transactions and payment receipts</p>
            <section id="transaction-list" class="tx-list"></section>
          </section>
        `
      }
    ]
  },
  staff: {
    label: 'Staff',
    screens: [
      {
        id: 'staff-login',
        title: 'Staff Login Page',
        activeNav: null,
        chrome: 'login',
        body: `
          <section class="screen login-screen">
            <div class="brand-banner">
              <div class="seal"></div>
              <div class="brand-name">University Portal</div>
              <div class="brand-sub">Document Request System</div>
            </div>

            <div class="login-copy">
              <h2>STAFF</h2>
            </div>

            <div class="role-switch">
              <div class="field-label">Select Role</div>
              <div class="role-grid">
                <button class="role-card" type="button">
                  <span class="role-emoji">👤</span>
                  <span>Alumni</span>
                </button>
                <button class="role-card is-active" type="button">
                  <span class="role-emoji">👥</span>
                  <span>Staff</span>
                </button>
              </div>
            </div>

            <label class="input-block">
              <span>Email</span>
              <input type="text" />
            </label>

            <label class="input-block">
              <span>Password</span>
              <input type="password" />
            </label>

            <button class="primary-button" type="button">Login</button>

            <div class="auth-links">
              <a href="#">Forgot Password ?</a>
              <p>Don’t have an account? <a href="#">Create Account</a></p>
            </div>
          </section>
        `
      },
      {
        id: 'staff-dashboard',
        title: 'Staff Dashboard',
        activeNav: 'dashboard',
        chrome: 'dashboard',
        body: `
          <section class="screen dashboard-screen">
            <header class="hero-header compact-hero">
              <div>
                <h2>Welcome Back!</h2>
                <p>Admin Staff</p>
              </div>
              <div class="hero-avatar">👤</div>
            </header>

            <div class="card-row stats-row">
              <article class="mini-stat">
                <div class="mini-icon yellow">◔</div>
                <strong>1</strong>
                <span>Pending</span>
              </article>
              <article class="mini-stat">
                <div class="mini-icon blue">✓</div>
                <strong>1</strong>
                <span>Approved</span>
              </article>
              <article class="mini-stat">
                <div class="mini-icon green">▦</div>
                <strong>1</strong>
                <span>Ready</span>
              </article>
            </div>

            <button class="primary-button large-button" type="button">Manage Requests</button>

            <article class="notice-card">ℹ 1 pending request needs your attention</article>

            <section class="info-card note-card">
              <div class="info-title">📌 How it works</div>
              <ul>
                <li>Select your required document</li>
                <li>Schedule an appointment to avoid queues</li>
                <li>Track your request status in real-time</li>
                <li>Pick up when ready</li>
              </ul>
            </section>
          </section>
        `
      },
      {
        id: 'status-filter-all',
        title: 'Status Filter Page',
        activeNav: 'dashboard',
        chrome: 'management',
        stateLabel: 'All',
        body: `
          <section class="screen management-screen">
            <header class="back-bar compact-back">
              <span class="back-arrow">←</span>
              <div><span>Staff Management</span><small>Manage Document Requests</small></div>
            </header>

            <section class="filter-block">
              <div class="filter-title">☐ Filter by Status</div>
              <div class="filter-chips">
                <button class="chip">All</button>
                <button class="chip">Pending</button>
                <button class="chip">Approved</button>
                <button class="chip">Rejected</button>
                <button class="chip">Ready for Pickup</button>
              </div>
            </section>

            <section class="stats-strip">
              <div><strong>3</strong><span>Total</span></div>
              <div><strong class="amber">1</strong><span>Pending</span></div>
              <div><strong class="blue">1</strong><span>Approved</span></div>
              <div><strong class="green">1</strong><span>Ready</span></div>
            </section>

            <article class="request-card">
              <div class="request-top">
                <div><h3>Transcript of Records</h3><p>Ref: REF-2026-001</p></div>
                <span class="status-pill blue-pill">Approved</span>
              </div>
              <p class="request-person">👥 John Doe</p>
              <div class="request-meta"><span>📅 Mar 5, 2026</span><span>🕒 10:00 AM</span></div>
              <button class="ready-button green-button" type="button">Mark as Ready for Pickup</button>
            </article>

            <article class="request-card">
              <div class="request-top">
                <div><h3>Diploma Copy</h3><p>Ref: REF-2026-002</p></div>
                <span class="status-pill green-pill">Ready for Pickup</span>
              </div>
              <p class="request-person">👥 John Doe</p>
              <div class="request-meta"><span>📅 Feb 28, 2026</span><span>🕒 2:00 PM</span></div>
              <button class="ready-button pale-button" type="button">Ready for pickup - awaiting collection</button>
            </article>

            <article class="request-card">
              <div class="request-top">
                <div><h3>Good Moral Certificate</h3><p>Ref: REF-2026-003</p></div>
                <span class="status-pill yellow-pill">Pending</span>
              </div>
              <p class="request-person">👥 Jane Smith</p>
              <div class="request-meta"><span>📅 Mar 10, 2026</span><span>🕒 11:00 AM</span></div>
              <div class="action-row">
                <button class="approve-button" type="button">Approve</button>
                <button class="reject-button" type="button">Reject</button>
              </div>
            </article>
          </section>
        `
      },
      {
        id: 'status-filter-pending',
        title: 'Pending Filter',
        activeNav: 'dashboard',
        chrome: 'management',
        stateLabel: 'Pending',
        body: `
          <section class="screen management-screen">
            <header class="back-bar compact-back">
              <span class="back-arrow">←</span>
              <div><span>Staff Management</span><small>Manage Document Requests</small></div>
            </header>
            <section class="filter-block">
              <div class="filter-title">☐ Filter by Status</div>
              <div class="filter-chips">
                <button class="chip">All</button>
                <button class="chip active">Pending</button>
                <button class="chip">Approved</button>
                <button class="chip">Rejected</button>
                <button class="chip">Ready for Pickup</button>
              </div>
            </section>
            <section class="stats-strip">
              <div><strong>3</strong><span>Total</span></div>
              <div><strong class="amber">1</strong><span>Pending</span></div>
              <div><strong class="blue">1</strong><span>Approved</span></div>
              <div><strong class="green">1</strong><span>Ready</span></div>
            </section>
            <article class="request-card">
              <div class="request-top">
                <div><h3>Good Moral Certificate</h3><p>Ref: REF-2026-003</p></div>
                <span class="status-pill yellow-pill">Pending</span>
              </div>
              <p class="request-person">👥 Jane Smith</p>
              <div class="request-meta"><span>📅 Mar 10, 2026</span><span>🕒 11:00 AM</span></div>
              <div class="action-row">
                <button class="approve-button" type="button">Approve</button>
                <button class="reject-button" type="button">Reject</button>
              </div>
            </article>
          </section>
        `
      },
      {
        id: 'status-filter-approved',
        title: 'Approved Filter',
        activeNav: 'dashboard',
        chrome: 'management',
        stateLabel: 'Approved',
        body: `
          <section class="screen management-screen">
            <header class="back-bar compact-back">
              <span class="back-arrow">←</span>
              <div><span>Staff Management</span><small>Manage Document Requests</small></div>
            </header>
            <section class="filter-block">
              <div class="filter-title">☐ Filter by Status</div>
              <div class="filter-chips">
                <button class="chip">All</button>
                <button class="chip">Pending</button>
                <button class="chip active">Approved</button>
                <button class="chip">Rejected</button>
                <button class="chip">Ready for Pickup</button>
              </div>
            </section>
            <section class="stats-strip">
              <div><strong>3</strong><span>Total</span></div>
              <div><strong class="amber">1</strong><span>Pending</span></div>
              <div><strong class="blue">1</strong><span>Approved</span></div>
              <div><strong class="green">1</strong><span>Ready</span></div>
            </section>
            <article class="request-card">
              <div class="request-top">
                <div><h3>Transcript of Records</h3><p>Ref: REF-2026-001</p></div>
                <span class="status-pill blue-pill">Approved</span>
              </div>
              <p class="request-person">👥 John Doe</p>
              <div class="request-meta"><span>📅 Mar 5, 2026</span><span>🕒 10:00 AM</span></div>
              <button class="ready-button green-button" type="button">Mark as Ready for Pickup</button>
            </article>
          </section>
        `
      },
      {
        id: 'status-filter-rejected',
        title: 'Rejected Filter',
        activeNav: 'dashboard',
        chrome: 'management',
        stateLabel: 'Rejected',
        body: `
          <section class="screen management-screen">
            <header class="back-bar compact-back">
              <span class="back-arrow">←</span>
              <div><span>Staff Management</span><small>Manage Document Requests</small></div>
            </header>
            <section class="filter-block">
              <div class="filter-title">☐ Filter by Status</div>
              <div class="filter-chips">
                <button class="chip">All</button>
                <button class="chip">Pending</button>
                <button class="chip">Approved</button>
                <button class="chip active">Rejected</button>
                <button class="chip">Ready for Pickup</button>
              </div>
            </section>
            <section class="stats-strip">
              <div><strong>3</strong><span>Total</span></div>
              <div><strong class="amber">1</strong><span>Pending</span></div>
              <div><strong class="blue">1</strong><span>Approved</span></div>
              <div><strong class="green">1</strong><span>Ready</span></div>
            </section>
            <p class="empty-state">No requests found</p>
          </section>
        `
      },
      {
        id: 'status-filter-ready',
        title: 'Ready Filter',
        activeNav: 'dashboard',
        chrome: 'management',
        stateLabel: 'Ready for Pickup',
        body: `
          <section class="screen management-screen">
            <header class="back-bar compact-back">
              <span class="back-arrow">←</span>
              <div><span>Staff Management</span><small>Manage Document Requests</small></div>
            </header>
            <section class="filter-block">
              <div class="filter-title">☐ Filter by Status</div>
              <div class="filter-chips">
                <button class="chip">All</button>
                <button class="chip">Pending</button>
                <button class="chip">Approved</button>
                <button class="chip">Rejected</button>
                <button class="chip active">Ready for Pickup</button>
              </div>
            </section>
            <section class="stats-strip">
              <div><strong>3</strong><span>Total</span></div>
              <div><strong class="amber">1</strong><span>Pending</span></div>
              <div><strong class="blue">1</strong><span>Approved</span></div>
              <div><strong class="green">1</strong><span>Ready</span></div>
            </section>
            <article class="request-card ready-card">
              <div class="request-top">
                <div><h3>Diploma Copy</h3><p>Ref: REF-2026-002</p></div>
                <span class="status-pill green-pill">Ready for Pickup</span>
              </div>
              <p class="request-person">👥 John Doe</p>
              <div class="request-meta"><span>📅 Feb 28, 2026</span><span>🕒 2:00 PM</span></div>
              <button class="ready-button pale-button" type="button">Ready for pickup - awaiting collection</button>
            </article>
          </section>
        `
      },
      {
        id: 'staff-profile',
        title: 'Staff Profile',
        activeNav: 'profile',
        chrome: 'profile',
        body: `
          <section class="screen profile-screen">
            <header class="back-bar">
              <span class="back-arrow">←</span>
              <span>My Profile</span>
            </header>

            <section class="profile-card staff-profile-card">
              <div class="profile-avatar large">👤</div>
              <strong>Admin Staff</strong>
              <span class="profile-pill">Registrar Staff</span>
            </section>

            <section class="info-card">
              <div class="section-label">Account Information</div>
              <div class="info-list">
                <div class="info-row"><span>✉</span><div><small>Email</small><p>asd@addu.edu.ph</p></div></div>
                <div class="info-row"><span>👥</span><div><small>Account Type</small><p>Staff Account</p></div></div>
              </div>
            </section>

            <button class="logout-button danger" type="button">↩ Logout</button>
          </section>
        `
      }
    ]
  }
};

const state = {
  roleKey: 'alumni',
  screenId: 'alumni-login',
  uiMessage: '',
  micro: {
    baseFee: 150,
    addons: [],
    paid: false,
    method: '',
    transactions: []
  }
};

let feedbackTimer;

function currency(amount) {
  return `₱${amount}`;
}

function addonsTotal() {
  return state.micro.addons.reduce((total, addon) => total + addon.amount, 0);
}

function totalFee() {
  return state.micro.baseFee + addonsTotal();
}

function resetMicroTransaction() {
  state.micro.addons = [];
  state.micro.paid = false;
  state.micro.method = '';
}

function toggleAddon(name, amount) {
  const index = state.micro.addons.findIndex((addon) => addon.name === name);
  if (index >= 0) {
    state.micro.addons.splice(index, 1);
  } else {
    state.micro.addons.push({ name, amount });
  }
}

function createTransaction(method) {
  state.micro.method = method;
  state.micro.paid = true;
  const txId = `TXN-${String(state.micro.transactions.length + 1).padStart(4, '0')}`;
  state.micro.transactions.unshift({
    id: txId,
    date: new Date().toLocaleString(),
    method,
    amount: totalFee(),
    addons: [...state.micro.addons],
    status: 'Paid'
  });
}

function hydrateReviewScreen() {
  const addonFeeNode = app.querySelector('#addon-fee');
  const totalFeeNode = app.querySelector('#total-fee');
  const methodNode = app.querySelector('#payment-method');
  const statusNode = app.querySelector('#payment-status');

  if (!addonFeeNode || !totalFeeNode || !methodNode || !statusNode) {
    return;
  }

  addonFeeNode.textContent = currency(addonsTotal());
  totalFeeNode.textContent = currency(totalFee());
  methodNode.textContent = state.micro.method ? state.micro.method : 'Not yet selected';

  if (state.micro.paid) {
    statusNode.textContent = `Payment complete via ${state.micro.method}. Receipt saved.`;
    statusNode.classList.add('is-paid');
  } else {
    statusNode.textContent = 'No payment completed yet.';
    statusNode.classList.remove('is-paid');
  }

  app.querySelectorAll('.addon-btn').forEach((button) => {
    const exists = state.micro.addons.some((addon) => addon.name === button.dataset.addon);
    button.classList.toggle('is-active', exists);
  });
}

function hydrateTransactionHistory() {
  const container = app.querySelector('#transaction-list');
  if (!container) {
    return;
  }

  if (!state.micro.transactions.length) {
    container.innerHTML = '<p class="tx-empty">No transactions yet. Complete a payment from Review Request.</p>';
    return;
  }

  container.innerHTML = state.micro.transactions
    .map((tx) => {
      const addonText = tx.addons.length ? tx.addons.map((addon) => addon.name).join(', ') : 'None';
      return `
        <article class="tx-item">
          <div class="tx-top">
            <strong>${tx.id}</strong>
            <span class="status-pill green-pill">${tx.status}</span>
          </div>
          <p>${tx.date}</p>
          <p>Method: ${tx.method}</p>
          <p>Add-ons: ${addonText}</p>
          <div class="tx-amount">${currency(tx.amount)}</div>
        </article>
      `;
    })
    .join('');
}

function hydrateDynamicScreen(screenId) {
  if (screenId === 'review') {
    hydrateReviewScreen();
  }
  if (screenId === 'transaction-history') {
    hydrateTransactionHistory();
  }
}

function currentRole() {
  return roleSets[state.roleKey];
}

function currentScreen() {
  return currentRole().screens.find((screen) => screen.id === state.screenId) ?? currentRole().screens[0];
}

function selectRole(roleKey) {
  state.roleKey = roleKey;
  state.screenId = roleSets[roleKey].screens[0].id;
  render();
}

function selectScreen(screenId) {
  state.screenId = screenId;
  render();
}

function showFeedback(message) {
  state.uiMessage = message;
  render();
  clearTimeout(feedbackTimer);
  feedbackTimer = setTimeout(() => {
    state.uiMessage = '';
    render();
  }, 1400);
}

function phoneNav(selected, roleKey) {
  const thirdLabel = roleKey === 'staff' ? 'Orders' : 'History';
  const thirdNav = roleKey === 'staff' ? 'orders' : 'history';

  return `
    <nav class="bottom-bar">
      <button class="bottom-nav ${selected === 'profile' ? 'is-active' : ''}" type="button" data-nav="profile">
        <span>👤</span>
        <small>My Profile</small>
      </button>
      <button class="bottom-nav ${selected === 'dashboard' ? 'is-active' : ''}" type="button" data-nav="dashboard">
        <span>▣</span>
        <small>Dashboard</small>
      </button>
      <button class="bottom-nav ${selected === 'history' ? 'is-active' : ''}" type="button" data-nav="${thirdNav}">
        <span>🗂</span>
        <small>${thirdLabel}</small>
      </button>
    </nav>
  `;
}

function chromeMarkup(screen, roleKey) {
  if (screen.chrome === 'login') {
    return '';
  }

  if (screen.chrome === 'profile') {
    return phoneNav('profile', roleKey);
  }

  if (screen.chrome === 'history') {
    return phoneNav('history', roleKey);
  }

  return phoneNav('dashboard', roleKey);
}

function routeBottomNav(nav) {
  if (state.roleKey === 'alumni') {
    const alumniNav = {
      profile: 'alumni-profile',
      dashboard: 'alumni-dashboard',
      history: 'transaction-history'
    };
    if (alumniNav[nav]) {
      selectScreen(alumniNav[nav]);
    }
    return;
  }

  const staffNav = {
    profile: 'staff-profile',
    dashboard: 'staff-dashboard',
    orders: 'status-filter-all'
  };
  if (staffNav[nav]) {
    selectScreen(staffNav[nav]);
  }
}

function routeFilterChip(label) {
  const normalized = label.toLowerCase();
  if (normalized.includes('all')) {
    selectScreen('status-filter-all');
  } else if (normalized.includes('pending')) {
    selectScreen('status-filter-pending');
  } else if (normalized.includes('approved')) {
    selectScreen('status-filter-approved');
  } else if (normalized.includes('rejected')) {
    selectScreen('status-filter-rejected');
  } else if (normalized.includes('ready')) {
    selectScreen('status-filter-ready');
  }
}

function routeBack(screenId) {
  const backMap = {
    'alumni-profile': 'alumni-dashboard',
    'select-document': 'alumni-dashboard',
    'select-document-active': 'alumni-dashboard',
    appointment: 'select-document-active',
    review: 'appointment',
    tracker: 'alumni-dashboard',
    'transaction-history': 'alumni-dashboard',
    'staff-profile': 'staff-dashboard',
    'status-filter-all': 'staff-dashboard',
    'status-filter-pending': 'staff-dashboard',
    'status-filter-approved': 'staff-dashboard',
    'status-filter-rejected': 'staff-dashboard',
    'status-filter-ready': 'staff-dashboard'
  };

  if (backMap[screenId]) {
    selectScreen(backMap[screenId]);
  }
}

function handleDeviceInteraction(event) {
  const current = currentScreen();
  const target = event.target.closest('button, a, .back-arrow');
  if (!target) {
    return;
  }

  const label = target.textContent.replace(/\s+/g, ' ').trim().toLowerCase();

  if (target.matches('a')) {
    event.preventDefault();
    if (label.includes('forgot password')) {
      showFeedback('Password reset flow coming soon.');
      return;
    }
    if (label.includes('create account')) {
      showFeedback('Account registration flow coming soon.');
      return;
    }
  }

  if (target.classList.contains('bottom-nav') && target.dataset.nav) {
    routeBottomNav(target.dataset.nav);
    return;
  }

  if (target.classList.contains('back-arrow')) {
    routeBack(current.id);
    return;
  }

  if (current.id === 'alumni-login') {
    if (target.classList.contains('role-card')) {
      if (label.includes('staff')) {
        selectRole('staff');
      }
      return;
    }
    if (label === 'login') {
      selectScreen('alumni-dashboard');
    }
    return;
  }

  if (current.id === 'staff-login') {
    if (target.classList.contains('role-card')) {
      if (label.includes('alumni')) {
        selectRole('alumni');
      }
      return;
    }
    if (label === 'login') {
      selectScreen('staff-dashboard');
    }
    return;
  }

  if (current.id === 'alumni-dashboard') {
    if (label.includes('request document')) {
      resetMicroTransaction();
      selectScreen('select-document');
    } else if (label.includes('my requests')) {
      selectScreen('tracker');
    } else if (label.includes('appointment schedule')) {
      selectScreen('appointment');
    }
    return;
  }

  if (current.id === 'alumni-profile') {
    if (label.includes('logout')) {
      selectScreen('alumni-login');
    } else if (label.includes('my request')) {
      selectScreen('tracker');
    }
    return;
  }

  if (current.id === 'select-document' || current.id === 'select-document-active') {
    if (target.closest('.doc-card')) {
      selectScreen('select-document-active');
      return;
    }
    if (label.includes('continue to appointment')) {
      selectScreen('appointment');
    }
    return;
  }

  if (current.id === 'appointment') {
    if (label.includes('continue to summary')) {
      selectScreen('review');
    }
    return;
  }

  if (current.id === 'review') {
    if (target.classList.contains('addon-btn')) {
      toggleAddon(target.dataset.addon, Number(target.dataset.amount));
      render();
      return;
    }

    if (target.classList.contains('pay-btn')) {
      const method = target.dataset.payMethod === 'Wallet' ? 'Wallet Payment' : 'Pay at Cashier';
      createTransaction(method);
      render();
      return;
    }

    if (label.includes('submit request')) {
      if (!state.micro.paid) {
        const status = app.querySelector('#payment-status');
        if (status) {
          status.textContent = 'Complete payment first to submit request.';
        }
        return;
      }
      selectScreen('tracker');
    } else if (label.includes('back to edit details')) {
      selectScreen('appointment');
    }
    return;
  }

  if (current.id === 'tracker' && label.includes('view transaction history')) {
    selectScreen('transaction-history');
    return;
  }

  if (current.id === 'staff-dashboard') {
    if (label.includes('manage requests')) {
      selectScreen('status-filter-all');
    }
    return;
  }

  if (current.id.startsWith('status-filter')) {
    if (target.classList.contains('chip')) {
      routeFilterChip(label);
      return;
    }
    if (label.includes('approve')) {
      selectScreen('status-filter-approved');
    } else if (label.includes('reject')) {
      selectScreen('status-filter-rejected');
    } else if (label.includes('mark as ready')) {
      selectScreen('status-filter-ready');
    }
    return;
  }

  if (current.id === 'staff-profile' && label.includes('logout')) {
    selectScreen('staff-login');
    return;
  }

  if (target.tagName === 'BUTTON') {
    showFeedback('Action captured.');
  }
}

function render() {
  const screen = currentScreen();

  app.innerHTML = `
    <div class="page-shell">
      ${state.uiMessage ? `<p class="ui-feedback floating">${state.uiMessage}</p>` : ''}
      <main class="stage single-device-stage">
        <section class="device-shell" data-current-role="${state.roleKey}" data-screen="${screen.id}">
          <div class="device-notch"></div>
          <div class="device-frame">
            ${screen.body}
            ${chromeMarkup(screen, state.roleKey)}
          </div>
        </section>
      </main>
    </div>
  `;

  hydrateDynamicScreen(screen.id);

  const deviceFrame = app.querySelector('.device-frame');
  if (deviceFrame) {
    deviceFrame.addEventListener('click', handleDeviceInteraction);
  }
}

render();
