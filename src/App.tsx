import { useMemo, useState, type ReactNode } from "react";

type IconName =
  | "alert"
  | "book"
  | "calendar"
  | "chart"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "download"
  | "filter"
  | "grid"
  | "help"
  | "home"
  | "id"
  | "info"
  | "list"
  | "mail"
  | "people"
  | "search"
  | "settings"
  | "shield"
  | "upload";

const iconPaths: Record<IconName, ReactNode> = {
  alert: (
    <>
      <path d="M10.3 3.7 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </>
  ),
  calendar: (
    <>
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect x="3" y="4" width="18" height="18" rx="3" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  download: (
    <>
      <path d="M12 3v13M7 11l5 5 5-5" />
      <path d="M4 20h16" />
    </>
  ),
  filter: <path d="M4 6h16M7 12h10M10 18h4" />,
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.7 9a2.4 2.4 0 1 1 4.1 1.7c-1.1.8-1.8 1.2-1.8 2.6M12 17h.01" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10M9 21v-7h6v7" />
    </>
  ),
  id: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8" cy="11" r="2" />
      <path d="M6 16c.6-1.4 1.4-2 2-2s1.4.6 2 2M13 10h5M13 14h4" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  list: (
    <>
      <path d="M8 6h13M8 12h13M8 18h13" />
      <path d="M3 6h.01M3 12h.01M3 18h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  people: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-3.8 8-10V5l-8-3-8 3v7c0 6.2 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V3M7 8l5-5 5 5" />
      <path d="M4 15v5h16v-5" />
    </>
  ),
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

type Risk = "Urgent" | "Watch";

type Student = {
  id: number;
  name: string;
  initials: string;
  risk: Risk;
  signals: number;
  lessons: number;
  lastActive: string;
  progress: number;
};

const students: Student[] = [
  { id: 1, name: "Zihcheng Wu", initials: "ZW", risk: "Urgent", signals: 9, lessons: 3, lastActive: "3 days ago", progress: 3 },
  { id: 2, name: "Kenya Lennon", initials: "KL", risk: "Urgent", signals: 7, lessons: 3, lastActive: "Yesterday", progress: 8 },
  { id: 3, name: "Devon Riley Kirk", initials: "DK", risk: "Watch", signals: 5, lessons: 2, lastActive: "4 hours ago", progress: 11 },
  { id: 4, name: "Anika Patel", initials: "AP", risk: "Watch", signals: 4, lessons: 2, lastActive: "Today", progress: 18 },
  { id: 5, name: "Mateo Flores", initials: "MF", risk: "Watch", signals: 3, lessons: 1, lastActive: "Yesterday", progress: 21 },
];

const lessonSignals = [
  {
    name: "Operators",
    summary: "4 activities need attention",
    items: [
      { name: "Quiz 1B", detail: "Not submitted · due in 2 days", kind: "Missing" },
      { name: "Quiz 2", detail: "Not submitted · due in 2 days", kind: "Missing" },
      { name: "Quiz 3", detail: "32% score · class median 78%", kind: "Low score" },
      { name: "Quiz 4", detail: "2 failed attempts", kind: "Attempts" },
    ],
  },
  {
    name: "Variables & Datatypes",
    summary: "3 activities need attention",
    items: [
      { name: "Quiz 2", detail: "Not submitted · due tomorrow", kind: "Missing" },
      { name: "Quiz 3", detail: "41% score · class median 81%", kind: "Low score" },
      { name: "Quiz 4", detail: "Not started · due tomorrow", kind: "Missing" },
    ],
  },
  {
    name: '"Hello, World!"',
    summary: "2 activities need attention",
    items: [
      { name: "Quiz 3", detail: "2 failed attempts", kind: "Attempts" },
      { name: "Quiz 4 (coding)", detail: "Not submitted · overdue 1 day", kind: "Overdue" },
    ],
  },
];

const attentionSummary = {
  urgent: 6,
  watch: 12,
  totalSignals: 54,
  lessonsAffected: 7,
  updated: "8 min ago",
};

const attentionSeverity =
  attentionSummary.urgent > 0 ? "urgent" : attentionSummary.watch > 0 ? "watch" : "clear";
const studentsNeedingSupport = attentionSummary.urgent + attentionSummary.watch;

type Page = "dashboard" | "grades" | "people" | "attention";
type AttentionFilter = "All" | "Urgent" | "Watch";

function AppHeader({ page, onNavigate }: { page: Page; onNavigate: (page: Page) => void }) {
  return (
    <>
      <header className="topbar">
        <button className="logo" aria-label="My courses" onClick={() => onNavigate("dashboard")}>LC</button>
        <div className="breadcrumbs">
          <button onClick={() => onNavigate("dashboard")}>My courses</button>
          <Icon name="chevron" size={14} />
          <span>Programming for Beginners</span>
          <Icon name="chevron" size={14} />
          <strong>
            {page === "dashboard"
              ? "COSC111 2026W1"
              : page === "grades"
                ? "Grades · Export"
                : page === "people"
                  ? "People · ID verification"
                  : "Needs attention"}
          </strong>
        </div>
        <label className="global-search">
          <Icon name="search" size={16} />
          <input aria-label="Search lessons" placeholder="Search lessons..." />
        </label>
        <button className="top-icon" aria-label="Help"><Icon name="help" size={18} /></button>
        <button className="profile">
          <span>Abdallah Mohamed</span>
          <span className="avatar">AM</span>
        </button>
      </header>
      <aside className="sidebar">
        <span className="side-label">Teaching</span>
        <button className="side-item active"><Icon name="book" size={17} /> My sections</button>
        <button className="side-item"><Icon name="grid" size={17} /> Courses</button>
        <button className="side-item"><Icon name="calendar" size={17} /> Drafts and reviews</button>
        <button className="side-item"><Icon name="mail" size={17} /> My requests</button>
        <span className="side-label advanced">Manage</span>
        <button className="side-item"><Icon name="people" size={17} /> People</button>
        <button className="side-item"><Icon name="settings" size={17} /> Section settings</button>
      </aside>
    </>
  );
}

function CourseHero({ page, onNavigate }: { page: Page; onNavigate: (page: Page) => void }) {
  return (
    <section className="course-hero">
      <div className="course-title">
        <span className="eyebrow">Offering · Section 001</span>
        <h1>Programming for Beginners <span>/</span> COSC111 2026W1</h1>
        <p><Icon name="calendar" size={15} /> 8 Sep 2026 to 31 Dec 2026 <span>·</span> Lead: Abdallah Mohamed</p>
      </div>
      <nav className="course-tabs" aria-label="Course pages">
        <button className={page === "dashboard" ? "active" : ""} onClick={() => onNavigate("dashboard")}><Icon name="home" size={16} /> Home</button>
        <button><Icon name="grid" size={16} /> Quizzes</button>
        <button className={page === "grades" ? "active" : ""} onClick={() => onNavigate("grades")}>
          <Icon name="chart" size={16} /> Grades
        </button>
        <button className={page === "people" ? "active" : ""} onClick={() => onNavigate("people")}>
          <Icon name="people" size={16} /> People
        </button>
        <button
          className={`attention-tab ${page === "attention" ? "active" : ""}`}
          onClick={() => onNavigate("attention")}
        >
          <Icon name="alert" size={16} /> Attention
          <span className={`tab-count ${attentionSeverity}`}>{studentsNeedingSupport}</span>
        </button>
        <button><Icon name="settings" size={16} /> Section settings</button>
      </nav>
    </section>
  );
}

function Dashboard({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="page">
      <CourseHero page="dashboard" onNavigate={onNavigate} />
      <div className="dashboard-grid">
        <div className="dashboard-main">
          <section className="panel glance-panel">
            <div className="panel-heading">
              <h2>At a glance</h2>
              <span className="published">Section published</span>
            </div>
            <div className="glance-content">
              <div className="metric"><strong>300</strong><span>enrolled</span></div>
              <div className="metric"><strong>18</strong><span>at risk</span></div>
              <div className="metric"><strong>11</strong><span>lessons</span></div>
              <div className="metric"><strong>38</strong><span>quizzes</span></div>
              <div className="term"><span>Term</span><strong>2026 W1</strong><span>Section</span><strong>001</strong></div>
            </div>
          </section>

          <section className="panel cohort-panel">
            <div className="panel-heading"><h2>Cohort progress <span>across this course</span></h2></div>
            <div className="cohort-content">
              <div className="cohort-bar">
                <span className="bar-complete" />
                <span className="bar-progress" />
                <span className="bar-not-started" />
              </div>
              <div className="cohort-footer">
                <div className="legend">
                  <span><i className="dot gray" /> 24 not started</span>
                  <span><i className="dot orange" /> 198 in progress</span>
                  <span><i className="dot blue" /> 78 completed</span>
                </div>
                <div className="attention-badge-wrap">
                  <button
                    className={`attention-badge ${attentionSeverity}`}
                    onClick={() => onNavigate("attention")}
                    aria-describedby="attention-summary-tooltip"
                  >
                    <Icon name="alert" size={14} />
                    Needs attention
                    <span>{studentsNeedingSupport}</span>
                  </button>
                  <div className="attention-tooltip" id="attention-summary-tooltip" role="tooltip">
                    <div className="tooltip-heading">
                      <div>
                        <span className="eyebrow warning">Needs attention</span>
                        <strong>{studentsNeedingSupport} students may need support</strong>
                      </div>
                      <small>Updated {attentionSummary.updated}</small>
                    </div>
                    <p>Signals are grouped by student, so you can prioritize outreach instead of reviewing individual quiz warnings.</p>
                    <div className="tooltip-stats">
                      <span><strong>{attentionSummary.urgent}</strong> urgent</span>
                      <span><strong>{attentionSummary.watch}</strong> watch</span>
                      <span><strong>{attentionSummary.totalSignals}</strong> total signals</span>
                      <span><strong>{attentionSummary.lessonsAffected}</strong> lessons affected</span>
                    </div>
                    <small className="tooltip-hint">Select the badge to review students</small>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="dashboard-aside">
          <section className="panel">
            <div className="panel-heading"><h2>My role</h2></div>
            <div className="simple-content">
              <span>No course content role</span>
              <strong>Lead of this section</strong>
            </div>
          </section>
          <section className="panel">
            <div className="panel-heading"><h2>Teaching staff</h2></div>
            <div className="staff-content">
              <span>Abdallah Mohamed <small>Lead</small></span>
              <span>Abdallah Mohamed (Instructor) <small>Lead</small></span>
            </div>
          </section>
          <section className="panel quick-panel">
            <div className="panel-heading"><h2>Quick actions</h2></div>
            <button><Icon name="mail" size={17} /> Message class <Icon name="chevron" size={15} /></button>
            <button onClick={() => onNavigate("grades")}><Icon name="chart" size={17} /> Open gradebook <Icon name="chevron" size={15} /></button>
            <button onClick={() => onNavigate("people")}><Icon name="people" size={17} /> Manage enrolment <Icon name="chevron" size={15} /></button>
          </section>
        </aside>
      </div>
    </div>
  );
}

function GradesExportWorkspace({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const [exportOpen, setExportOpen] = useState(false);
  const [activeExportAction, setActiveExportAction] = useState<"csv" | "canvas" | "merge" | null>(null);
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2400);
  };
  const studentVisible = "Sam Patel".toLowerCase().includes(query.toLowerCase());

  return (
    <div className="page grades-page">
      <CourseHero page="grades" onNavigate={onNavigate} />
      <section className="grades-heading">
        <div>
          <span className="eyebrow">Course assessment</span>
          <h1>Grades</h1>
          <p>Review verified results and prepare grades for export.</p>
        </div>
      </section>

      <div className="grades-actions-area">
        <section className="grades-toolbar" aria-label="Grade settings">
          <button><Icon name="filter" size={16} /><span>Grading: <strong>Points</strong></span></button>
          <button onClick={() => onNavigate("people")}><Icon name="shield" size={16} /><span><strong>1 student</strong> needs ID checks</span></button>
          <button><Icon name="clock" size={16} /><span>Late policy</span></button>
          <button
            className={`export-toggle ${exportOpen ? "active" : ""}`}
            onClick={() => setExportOpen((current) => !current)}
            aria-expanded={exportOpen}
          >
            <Icon name="upload" size={16} />
            <span>Export grades</span>
          </button>
        </section>

        {exportOpen && (
          <section className="grade-export-drawer">
          <div className="grade-export-heading">
            <span className="card-icon"><Icon name="upload" size={18} /></span>
            <div><h2>Export and send grades</h2><p>Download verified results or prepare them for another gradebook.</p></div>
            <button aria-label="Close export panel" onClick={() => setExportOpen(false)}><Icon name="close" size={16} /></button>
          </div>
          <div className="export-task-grid">
            <section className="export-task">
              <div className="export-task-heading">
                <span className="export-task-icon"><Icon name="download" size={18} /></span>
                <div><span className="section-kicker">Download</span><h3>Export grade data</h3></div>
              </div>
              <p>Create a new CSV containing student names, emails, LearnCoding user IDs, and grades.</p>
              <div className="task-assurance"><Icon name="check" size={14} /><span>No student-ID matching is performed, and institution or Canvas IDs are not included.</span></div>
              <button className="secondary-button" onClick={() => { setExportOpen(false); setActiveExportAction("csv"); }}><Icon name="download" size={15} /> Export CSV</button>
            </section>

            <section className="export-task send-task">
              <div className="export-task-heading">
                <span className="export-task-icon"><Icon name="upload" size={18} /></span>
                <div><span className="section-kicker">Send or merge</span><h3>Use another gradebook</h3></div>
              </div>
              <p>Choose a destination for the verified results.</p>
              <div className="destination-list">
                <div>
                  <span><strong>Canvas</strong><small>Send results to the linked Canvas section.</small></span>
                  <button className="primary-button" onClick={() => { setExportOpen(false); setActiveExportAction("canvas"); }}>Push to Canvas</button>
                </div>
                <div>
                  <span><strong>Your gradebook file</strong><small>Upload a CSV, review student matches, and download it with grades added.</small></span>
                  <button className="secondary-button" onClick={() => { setExportOpen(false); setActiveExportAction("merge"); }}>Merge into a file</button>
                </div>
              </div>
              <button className="task-context-link" onClick={() => onNavigate("people")}>
                <Icon name="shield" size={14} />
                Matching uses your ID verification settings
                <Icon name="chevron" size={13} />
              </button>
            </section>
          </div>
          </section>
        )}
      </div>

      <section className="results-card">
        <div className="results-heading">
          <div><h2>Student results</h2><p>1 student · 7 graded quizzes</p></div>
          <label className="results-search"><Icon name="search" size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search students" aria-label="Search student results" /></label>
        </div>
        <div className="results-table-wrap">
          <table className="results-table">
            <thead>
              <tr className="lesson-headings">
                <th rowSpan={2}>Student</th>
                <th colSpan={3}>Object Oriented Programming</th>
                <th colSpan={3}>Inheritance and Polymorphism</th>
                <th rowSpan={2}>Total</th>
              </tr>
              <tr>
                <th>OOP-A: Quiz 1<small>LC-da03b2ca</small></th>
                <th>OOP-A: Quiz 2<small>LC-00c7bfc7</small></th>
                <th>OOP-A: Quiz 3<small>LC-8d4a38ee</small></th>
                <th>OOP-B: Quiz 1<small>LC-7b02e718</small></th>
                <th>OOP-B: Quiz 2<small>LC-165f70d8</small></th>
                <th>Case Study<small>LC-797f6ba0</small></th>
              </tr>
            </thead>
            <tbody>
              {studentVisible ? (
                <tr><th>Sam Patel</th><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td><strong>0</strong></td></tr>
              ) : (
                <tr className="empty-result"><td colSpan={8}>No students match “{query}”</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <footer className="results-footer"><span>Rows per page <strong>10</strong></span><span>Showing {studentVisible ? "1 of 1" : "0 of 1"} result</span></footer>
      </section>

      <div className="results-note"><Icon name="info" size={16} /><p><strong>Read-only results.</strong> Computed from server-verified attempts for this section only. N/A means no quiz in that language, which is not zero.</p></div>
      {activeExportAction && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveExportAction(null)}>
          <section className="grade-action-modal" role="dialog" aria-modal="true" aria-labelledby="grade-action-title" onMouseDown={(event) => event.stopPropagation()}>
            <header>
              <h2 id="grade-action-title">
                {activeExportAction === "csv" ? "Export grade data" : activeExportAction === "canvas" ? "Push grades to Canvas" : "Merge into a file"}
              </h2>
              <button aria-label="Close dialog" onClick={() => setActiveExportAction(null)}><Icon name="close" size={18} /></button>
            </header>
            <div className="grade-action-body">
              <p>
                {activeExportAction === "csv"
                  ? "Download a new CSV containing the current verified results. Student IDs are not exported, and no matching is performed."
                  : activeExportAction === "canvas"
                    ? "Review what will be sent to the Canvas section linked to this course."
                    : "Upload your own gradebook CSV. LearnCoding matches its rows to students, shows you a review, and writes grades into a copy of the file."}
              </p>

              {activeExportAction === "merge" && (
                <>
                  <div className="match-readiness">
                    <h3>Who can be matched</h3>
                    <span><Icon name="check" size={13} /> 300 students have a confirmed email</span>
                    <span><Icon name="check" size={13} /> 299 students have an institution ID</span>
                    <span><Icon name="alert" size={13} /> 1 student needs a Canvas ID check</span>
                    <button onClick={() => { setActiveExportAction(null); onNavigate("people"); }}>Review ID verification</button>
                  </div>
                  <label className="modal-file-field">
                    <span>Gradebook file</span>
                    <input type="file" accept=".csv" />
                    <small>Choose a CSV file up to 2 MB. Your original file is never changed.</small>
                  </label>
                </>
              )}

              {activeExportAction === "canvas" && (
                <div className="canvas-destination">
                  <span className="card-icon"><Icon name="upload" size={17} /></span>
                  <div><strong>Canvas · Section 001</strong><small>Programming for Beginners · 300 students</small></div>
                  <span className="published">Connected</span>
                </div>
              )}

              <fieldset className="action-options">
                <legend>Include</legend>
                <label><input type="checkbox" defaultChecked /> Total</label>
                <label><input type="checkbox" defaultChecked /> Per lesson</label>
                <label><input type="checkbox" defaultChecked /> Per quiz</label>
                <p>The total already includes the breakdown, so a gradebook that sums columns may double count.</p>
              </fieldset>
              <fieldset className="action-options compact-options">
                <legend>Show grades as</legend>
                <label><input type="radio" name="grade-format" defaultChecked /> Points</label>
                <label><input type="radio" name="grade-format" /> Percentage</label>
              </fieldset>
              <fieldset className="action-options compact-options">
                <legend>Cells with no grade (N/A)</legend>
                <label><input type="radio" name="empty-grade" defaultChecked /> Leave blank</label>
                <label><input type="radio" name="empty-grade" /> Write 0</label>
              </fieldset>
            </div>
            <footer>
              <button className="secondary-button" onClick={() => setActiveExportAction(null)}>Cancel</button>
              <button
                className="primary-button"
                onClick={() => {
                  showNotice(activeExportAction === "csv" ? "Grade CSV prepared" : activeExportAction === "canvas" ? "Canvas grade sync started" : "Gradebook ready for match review");
                  setActiveExportAction(null);
                }}
              >
                {activeExportAction === "csv" ? "Download CSV" : activeExportAction === "canvas" ? "Review and push" : "Review matches"}
              </button>
            </footer>
          </section>
        </div>
      )}
      {notice && <div className="toast"><Icon name="check" size={17} /> {notice}</div>}
    </div>
  );
}

type VerificationMethod = "self" | "email" | "canvas";

const methodCopy: Record<VerificationMethod, { title: string; label: string; description: string; detail: string }> = {
  email: {
    title: "Student email",
    label: "Merge only",
    description: "Match an email column in the uploaded gradebook to the student's LearnCoding account email.",
    detail: "Checked only when a gradebook file is merged · the class list does not verify emails",
  },
  canvas: {
    title: "Canvas class list",
    label: "Canvas ID",
    description: "Match an LMS ID column in the gradebook to the Canvas ID verified by this section's class list.",
    detail: "Students can see their Canvas ID status before a merge",
  },
  self: {
    title: "Institution ID",
    label: "Self-report",
    description: "Match an institution ID column in the gradebook to the ID a student entered.",
    detail: "A class list containing institution IDs can verify self-reported IDs ahead of time",
  },
};

function PeopleWorkspace({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const [methods, setMethods] = useState<Record<VerificationMethod, boolean>>({
    canvas: true,
    email: true,
    self: true,
  });
  const [showGuide, setShowGuide] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [replaceOpen, setReplaceOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [notice, setNotice] = useState("");

  const toggleMethod = (method: VerificationMethod) => {
    setMethods((current) => {
      const enabledCount = Object.values(current).filter(Boolean).length;
      if (current[method] && enabledCount === 1) {
        showNotice("At least one verification method must stay on");
        return current;
      }
      return { ...current, [method]: !current[method] };
    });
  };

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2400);
  };

  return (
    <div className="page people-page">
      <CourseHero page="people" onNavigate={onNavigate} />

      <nav className="people-tabs" aria-label="People pages">
        <button><Icon name="people" size={16} /> Roster</button>
        <button><Icon name="shield" size={16} /> Staff</button>
        <button className="active"><Icon name="id" size={16} /> ID verification</button>
      </nav>

      <section className="verification-heading">
        <div>
          <span className="eyebrow">People · Grade matching</span>
          <h1>ID verification</h1>
          <p>Choose which identifiers LearnCoding may use when you merge a file from Grades → Export and send grades.</p>
          <div className="verification-context">
            <Icon name="info" size={15} />
            <span>These settings control how gradebook rows are connected to students when you merge a file.</span>
            <button onClick={() => onNavigate("grades")}>Open Export and send grades <Icon name="chevron" size={13} /></button>
          </div>
        </div>
        <div className="verification-heading-actions">
          <button className="secondary-button" onClick={() => setShowGuide(true)}>
            <Icon name="help" size={16} /> How matching works
          </button>
        </div>
      </section>

      <div className="verification-grid">
        <section className="verification-card methods-card">
          <div className="verification-card-heading">
            <span className="card-icon"><Icon name="shield" size={18} /></span>
            <div>
              <span className="section-kicker">Matching setup</span>
              <h2>Verification methods</h2>
              <p>Turn on one or more methods. At least one is required. During a merge, <strong>every enabled method</strong> with a matching file column is checked; a score is written only when every method that finds someone points to the same student. Otherwise, the row is withheld for review.</p>
            </div>
          </div>
          <div className="method-list">
            {(["self", "email", "canvas"] as VerificationMethod[]).map((method) => {
              const copy = methodCopy[method];
              return (
                <div className={`method-row ${methods[method] ? "" : "disabled"}`} key={method}>
                  <span className="method-symbol"><Icon name={method === "email" ? "mail" : method === "canvas" ? "list" : "id"} size={16} /></span>
                  <div className="method-copy">
                    <div><strong>{copy.title}</strong><span>{copy.label}</span></div>
                    <p>{copy.description}</p>
                    <small>{copy.detail}</small>
                  </div>
                  <button
                    className={`switch ${methods[method] ? "on" : ""}`}
                    role="switch"
                    aria-checked={methods[method]}
                    aria-label={`${methods[method] ? "Disable" : "Enable"} ${copy.title}`}
                    onClick={() => toggleMethod(method)}
                  >
                    <span />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="method-note">
            <Icon name="shield" size={15} />
            Enabled methods are all checked during a merge. If two matches disagree, the row is withheld for review.
          </div>
        </section>

        <aside className="verification-card source-card">
          <div className="verification-card-heading">
            <span className="card-icon"><Icon name="list" size={18} /></span>
            <div>
              <span className="section-kicker">Verification source</span>
              <h2>Class list</h2>
              <p>Uploaded separately from a gradebook merge.</p>
            </div>
          </div>

          <div className="source-summary">
            <span className="file-icon">CSV</span>
            <div><strong>2026W1-section-001.csv</strong><span>300 students · uploaded 21 Oct 2026</span></div>
          </div>
          <dl className="source-meta">
            <div><dt>Uploaded by</dt><dd>Abdallah Mohamed</dd></div>
            <div>
              <dt>Can verify with current settings</dt>
              <dd>
                {[methods.canvas && "Canvas ID", methods.self && "Institution ID"].filter(Boolean).join(", ") || "No IDs — email is merge-only"}
              </dd>
            </div>
          </dl>
          {methods.canvas && (
            <div className="class-list-note">
              <Icon name="info" size={15} />
              <span><strong>Upload a Canvas class list as soon as possible</strong> so students can immediately see whether their Canvas ID is valid. Self-reported institution IDs stay unverified until the list includes them; emails are matched only during a gradebook merge.</span>
            </div>
          )}

          <button className="disclosure" onClick={() => setShowNames((current) => !current)} aria-expanded={showNames}>
            <span><Icon name="people" size={16} /> View student names</span>
            <span className={`expand ${showNames ? "open" : ""}`}><Icon name="chevron" size={15} /></span>
          </button>
          {showNames && (
            <div className="names-panel">
              <div className="names-toolbar"><span>300 names in this file</span><button>Download names</button></div>
              <div className="name-chips">
                <span>Alex Chen</span><span>Bob Ahmed</span><span>Devon Riley Kirk</span><span>+297 more</span>
              </div>
              <p>Institution IDs are stored as one-way hashes and cannot be displayed.</p>
            </div>
          )}

          <button className="disclosure" onClick={() => setReplaceOpen((current) => !current)} aria-expanded={replaceOpen}>
            <span><Icon name="upload" size={16} /> Replace class list</span>
            <span className={`expand ${replaceOpen ? "open" : ""}`}><Icon name="chevron" size={15} /></span>
          </button>
          {replaceOpen && (
            <div className="replace-panel">
              <div className="replace-warning"><Icon name="info" size={15} /><span>Replacing the list rechecks Canvas IDs and any self-reported institution IDs included in the file.</span></div>
              <label className="file-drop">
                <input
                  type="file"
                  accept=".csv"
                  onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
                />
                <Icon name="upload" size={20} />
                <strong>{fileName || "Choose a Canvas CSV file"}</strong>
                <span>{fileName ? "Ready to review" : "or drag and drop · up to 10 MB"}</span>
              </label>
              <div className="columns-heading">
                <span>Columns for current settings</span>
                <span className="column-help" tabIndex={0} aria-label="About class list headers">
                  <Icon name="help" size={13} />
                  <span role="tooltip">Headers are matched ignoring spaces and case. Other columns, including grades and sections, are ignored. The file is never stored.</span>
                </span>
              </div>
              <div className="column-requirements">
                <div className="column-row">
                  <div>
                    <span className="column-name">
                      Student name
                      <span className="column-help" tabIndex={0} aria-label="About the student name column">
                        <Icon name="help" size={12} />
                        <span role="tooltip">The student's name must match their LearnCoding name. Case and spaces are ignored; a number alone never verifies anyone.</span>
                      </span>
                    </span>
                    <small>Header: <strong>Student</strong></small>
                  </div>
                  <span className="column-status required">Required</span>
                </div>
                <div className="column-row">
                  <div>
                    <span className="column-name">
                      Canvas ID
                      <span className="column-help" tabIndex={0} aria-label="About the Canvas ID column">
                        <Icon name="help" size={12} />
                        <span role="tooltip">This is the number Canvas gives each student in a gradebook export, not the institution-issued student number.</span>
                      </span>
                    </span>
                    <small>Header: <strong>ID</strong></small>
                  </div>
                  <span className={`column-status ${methods.canvas ? "required" : "optional"}`}>
                    {methods.canvas ? "Required" : "Optional"}
                  </span>
                </div>
                <div className="column-row">
                  <div>
                    <span className="column-name">
                      Institution ID
                      <span className="column-help" tabIndex={0} aria-label="About the institution ID column">
                        <Icon name="help" size={12} />
                        <span role="tooltip">This is the student number issued by your institution—the same number students enter under Institution ID.</span>
                      </span>
                    </span>
                    <small>Header: <strong>SIS User ID</strong> <span>or Student Number, SIS ID</span></small>
                  </div>
                  <span className={`column-status ${methods.self ? "required" : "optional"}`}>
                    {methods.self ? "Required" : "Optional"}
                  </span>
                </div>
              </div>
              <div className="replace-support">
                <button className="text-button">Download sample CSV</button>
                <span>
                  Header matching rules
                  <span className="column-help" tabIndex={0} aria-label="Header matching rules">
                    <Icon name="help" size={12} />
                    <span role="tooltip">Spaces and letter case are ignored when matching headers. Unrecognized columns are ignored.</span>
                  </span>
                </span>
              </div>
              <div className="replace-actions">
                <button className="secondary-button" onClick={() => { setReplaceOpen(false); setFileName(""); }}>Cancel</button>
                <button
                  className="primary-button"
                  disabled={!fileName}
                  onClick={() => { showNotice("Class list replaced and matching refreshed"); setReplaceOpen(false); setFileName(""); }}
                >
                  Review and replace
                </button>
              </div>
            </div>
          )}
        </aside>
      </div>

      {showGuide && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setShowGuide(false)}>
          <section className="matching-modal" role="dialog" aria-modal="true" aria-labelledby="matching-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-heading">
              <div><span className="card-icon"><Icon name="id" size={18} /></span><div><span className="section-kicker">ID verification</span><h2 id="matching-title">How students are matched</h2></div></div>
              <button aria-label="Close dialog" onClick={() => setShowGuide(false)}><Icon name="close" size={18} /></button>
            </div>
            <p className="modal-intro">There are two different ways to get grades out of LearnCoding. Matching happens only when you merge into your own file.</p>
            <div className="modal-export-options">
              <div><span>A</span><strong>Export a new CSV</strong><p>Creates a file with names, emails, LearnCoding user IDs, and grades. It contains no student IDs, and no matching happens.</p></div>
              <div><span>B</span><strong>Merge into a file</strong><p>Upload your gradebook, review matches, and download it with grades added. Use this to keep IDs next to grades.</p></div>
            </div>
            <div className="agreement-callout"><Icon name="shield" size={18} /><p><strong>All matches must agree.</strong> LearnCoding tries every enabled method with a matching file column. If the results point to different students, the row is withheld or reported.</p></div>
            <div className="matching-rules">
              <h3>What each method checks during a merge</h3>
              <div><Icon name="id" size={16} /><p><strong>Institution ID:</strong> the file's institution ID against the student's self-reported ID. Names only double-check IDs that are not yet verified.</p></div>
              <div><Icon name="mail" size={16} /><p><strong>Student email:</strong> the file's email against the student's LearnCoding account email. Email is matched only at merge time.</p></div>
              <div><Icon name="list" size={16} /><p><strong>Canvas class list:</strong> the file's LMS ID against the Canvas ID verified by the separately uploaded class list.</p></div>
            </div>
            <footer><button className="secondary-button" onClick={() => setShowGuide(false)}>Close</button><button className="primary-button" onClick={() => { setShowGuide(false); onNavigate("grades"); }}>Open Export and send grades</button></footer>
          </section>
        </div>
      )}
      {notice && <div className="toast"><Icon name="check" size={17} /> {notice}</div>}
    </div>
  );
}

function AttentionWorkspace({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<AttentionFilter>("All");
  const [selectedId, setSelectedId] = useState(1);
  const [expandedLessons, setExpandedLessons] = useState([lessonSignals[0].name]);
  const [notice, setNotice] = useState("");

  const visibleStudents = useMemo(
    () =>
      students.filter(
        (student) =>
          (filter === "All" || student.risk === filter) &&
          student.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [filter, query],
  );

  const selectedStudent = students.find((student) => student.id === selectedId) ?? students[0];

  const toggleLesson = (lesson: string) => {
    setExpandedLessons((current) =>
      current.includes(lesson) ? current.filter((item) => item !== lesson) : [...current, lesson],
    );
  };

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2400);
  };

  return (
    <div className="page attention-page">
      <CourseHero page="attention" onNavigate={onNavigate} />
      <section className="workspace-heading">
        <div>
          <span className="eyebrow warning">Student support</span>
          <h1>Needs attention</h1>
          <p>Prioritized signals across 300 students. Review context before reaching out.</p>
        </div>
        <div className="workspace-actions">
          <button className="secondary-button"><Icon name="filter" size={16} /> Manage rules</button>
          <button className="primary-button" onClick={() => showNotice("Summary exported")}>Export summary</button>
        </div>
      </section>

      <section className="attention-stats">
        <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>
          <span>Students flagged</span><strong>18</strong><small>6% of class</small>
        </button>
        <button className={filter === "Urgent" ? "active urgent" : "urgent"} onClick={() => setFilter("Urgent")}>
          <span>Urgent</span><strong>6</strong><small>Overdue or inactive</small>
        </button>
        <button className={filter === "Watch" ? "active watch" : "watch"} onClick={() => setFilter("Watch")}>
          <span>Watch</span><strong>12</strong><small>Performance signals</small>
        </button>
        <div><span>Total signals</span><strong>54</strong><small>Across 7 lessons</small></div>
      </section>

      <div className="workspace">
        <section className="student-browser">
          <div className="browser-toolbar">
            <label className="student-search">
              <Icon name="search" size={17} />
              <input
                aria-label="Search students"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search students..."
              />
              {query && <button aria-label="Clear search" onClick={() => setQuery("")}><Icon name="close" size={14} /></button>}
            </label>
            <button className="sort-button"><Icon name="filter" size={16} /> Highest priority</button>
          </div>
          <div className="list-heading">
            <span>{visibleStudents.length === students.length ? "18 students" : `${visibleStudents.length} shown`}</span>
            <span>Priority is based on severity, recency, and signal count</span>
          </div>
          <div className="student-list">
            {visibleStudents.map((student) => (
              <button
                className={`student-row ${selectedStudent.id === student.id ? "selected" : ""}`}
                key={student.id}
                onClick={() => setSelectedId(student.id)}
              >
                <span className="student-avatar">{student.initials}</span>
                <span className="student-identity">
                  <strong>{student.name}</strong>
                  <small>Last active {student.lastActive}</small>
                </span>
                <span className="student-progress">
                  <span><i style={{ width: `${student.progress}%` }} /></span>
                  <small>{student.progress}% complete</small>
                </span>
                <span className={`risk-badge ${student.risk.toLowerCase()}`}>{student.risk}</span>
                <span className="signal-count"><strong>{student.signals}</strong><small>signals</small></span>
                <Icon name="chevron" size={16} />
              </button>
            ))}
            {visibleStudents.length === 0 && (
              <div className="no-results"><Icon name="search" /><strong>No students found</strong><span>Try another name or filter.</span></div>
            )}
          </div>
          <footer className="pagination">
            <span>Showing 1–{visibleStudents.length} of 18</span>
            <div><button disabled>Previous</button><button>Next</button></div>
          </footer>
        </section>

        <aside className="student-detail">
          <div className="detail-header">
            <div className="student-profile">
              <span className="student-avatar large">{selectedStudent.initials}</span>
              <div><h2>{selectedStudent.name}</h2><span>COSC111 · Section 001</span></div>
            </div>
            <span className={`risk-badge ${selectedStudent.risk.toLowerCase()}`}>{selectedStudent.risk} priority</span>
          </div>
          <div className="detail-meta">
            <span><small>Course progress</small><strong>{selectedStudent.progress}%</strong></span>
            <span><small>Last active</small><strong>{selectedStudent.lastActive}</strong></span>
            <span><small>Lessons affected</small><strong>{selectedStudent.lessons}</strong></span>
          </div>
          <div className="detail-actions">
            <button className="primary-button" onClick={() => showNotice(`Message started for ${selectedStudent.name}`)}>
              <Icon name="mail" size={16} /> Message student
            </button>
            <button className="secondary-button" onClick={() => showNotice("Student marked as reviewed")}>
              <Icon name="check" size={16} /> Mark reviewed
            </button>
          </div>
          <div className="signals-heading">
            <div><h3>Signals by lesson</h3><p>{selectedStudent.signals} signals across {selectedStudent.lessons} lessons</p></div>
            <span>Newest first</span>
          </div>
          <div className="lesson-signals">
            {lessonSignals.map((lesson, lessonIndex) => {
              const isExpanded = expandedLessons.includes(lesson.name);
              return (
                <section className="signal-group" key={lesson.name}>
                  <button className="signal-group-heading" onClick={() => toggleLesson(lesson.name)}>
                    <span className="lesson-index">{lessonIndex + 1}</span>
                    <span><strong>{lesson.name}</strong><small>{lesson.summary}</small></span>
                    <span className={`expand ${isExpanded ? "open" : ""}`}><Icon name="chevron" size={16} /></span>
                  </button>
                  {isExpanded && (
                    <div className="signal-items">
                      {lesson.items.map((item) => (
                        <div className="signal-item" key={`${lesson.name}-${item.name}`}>
                          <span className={`signal-dot ${item.kind === "Overdue" ? "danger" : ""}`} />
                          <span><strong>{item.name}</strong><small>{item.detail}</small></span>
                          <span className="signal-kind">{item.kind}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </aside>
      </div>
      {notice && <div className="toast"><Icon name="check" size={17} /> {notice}</div>}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("dashboard");

  return (
    <div className="app-shell">
      <AppHeader page={page} onNavigate={setPage} />
      <main className="main">
        {page === "dashboard" && <Dashboard onNavigate={setPage} />}
        {page === "grades" && <GradesExportWorkspace onNavigate={setPage} />}
        {page === "people" && <PeopleWorkspace onNavigate={setPage} />}
        {page === "attention" && <AttentionWorkspace onNavigate={setPage} />}
      </main>
    </div>
  );
}
