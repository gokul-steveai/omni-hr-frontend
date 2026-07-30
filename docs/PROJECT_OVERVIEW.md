# OmniHR Enterprise System - Frontend Project Overview

OmniHR is a modern, high-performance web application providing an intuitive workforce operating system for employees, department managers, and HR administrators.

---

## 1. Product Experience & User Personas

- **Super Admin**: Manages system configuration, user provisioning, global organization settings, and security policies.
- **HR Manager**: Onboards new employees, reviews organization directory, manages company holidays, and executes payroll runs.
- **Department Lead**: Oversees team attendance, reviews weekly timesheets, and approves/rejects leave applications.
- **Regular Employee**: Accesses self-service portal to submit leave requests, log daily work status, inspect payslips, and update contact details.

---

## 2. End-to-End User Experience Workflows

```
[ Landing Page (/) ] ──> [ Auth Portal (/login) ] ──> [ Workspace Dashboard (/dashboard) ]
                                                                   │
         ┌─────────────────────────────┼───────────────────────────┤
         ▼                             ▼                           ▼
[ Apply for Leave ]           [ Log Timesheet ]          [ Manage Self-Service Profile ]
         │                             │                           │
         ▼                             ▼                           ▼
[ Track Quota Balance ]      [ Submit Weekly Log ]       [ Update Contact & Bank Info ]
```
