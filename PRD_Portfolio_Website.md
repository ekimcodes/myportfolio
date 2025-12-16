# Product Requirement Document (PRD)
## GitHub-Style Portfolio Website

**Document Version:** 1.0  
**Date:** 2025-01-27  
**Author:** Edwin Kim  
**Status:** Draft

---

## 1. Executive Summary

### 1.1 Overview
This PRD outlines the requirements for transforming a portfolio website into a GitHub-profile-inspired interface that maintains the iconic developer aesthetic while showcasing professional experience, technical projects, and skills in an engaging, recruiter-friendly format.

### 1.2 Product Vision
Create a portfolio website that feels instantly familiar to developers and recruiters familiar with GitHub, but elevates the content to highlight specific technical achievements, professional growth, and expertise depth rather than generic repository metrics.

### 1.3 Target Audience
- **Primary:** Technical recruiters and hiring managers at tech companies
- **Secondary:** Fellow developers, engineering managers, and industry peers
- **Tertiary:** Academic collaborators and research groups

---

## 2. Goals & Objectives

### 2.1 Primary Goals
1. **Preserve GitHub Aesthetic:** Maintain the recognizable visual language of GitHub profiles (rounded corners, badges, contribution graphs, README styling)
2. **Showcase Technical Depth:** Replace generic indicators with specific technologies, frameworks, and methodologies
3. **Highlight Impact Metrics:** Surface quantifiable achievements from professional experience (e.g., "94% precision", "25% latency reduction")
4. **Communicate Professional Growth:** Present a chronological narrative of experience that demonstrates progression

### 2.2 Success Criteria
- Recruiters can quickly identify key technical skills and project impact
- The site feels immediately recognizable as "GitHub-inspired" to developers
- All resume highlights are prominently featured and easy to discover
- Page load time < 2 seconds on standard broadband connection

---

## 3. User Stories

### 3.1 As a Technical Recruiter
- **US-1:** I want to see specific technologies used (e.g., "BiLSTM", "Signal Processing") instead of generic language tags, so I can quickly assess technical fit.
- **US-2:** I want to see quantifiable achievements (e.g., "94% precision", "25% latency reduction") prominently displayed, so I can evaluate impact.
- **US-3:** I want to understand the candidate's professional timeline at a glance, so I can assess experience progression.

### 3.2 As a Hiring Manager
- **US-4:** I want to see visual representations of technical skills, so I can quickly assess expertise depth across different domains.
- **US-5:** I want to access contact information in a developer-friendly format, so I can reach out efficiently.

### 3.3 As a Fellow Developer
- **US-6:** I want the portfolio to feel familiar and visually appealing (like GitHub), so I can quickly navigate and appreciate the aesthetic.
- **US-7:** I want to see project case studies with technical details, so I can understand the depth of work involved.

---

## 4. Feature Requirements

### 4.1 Pinned Repositories → Case Study Cards

#### 4.1.1 Visual Design
- **FR-1.1:** Maintain rounded corner styling consistent with GitHub repository cards
- **FR-1.2:** Include "Public" badge aesthetic (green badge with rounded corners)
- **FR-1.3:** Support thumbnail images (e.g., dashboard screenshots, UI mockups) to break up text-heavy content
- **FR-1.4:** Implement hover states that provide additional context or metrics

#### 4.1.2 Content Requirements

**Hermes Project Card:**
- **FR-1.5:** Display project name: "Hermes (Grid Outage Prediction & Restoration Time Estimator)"
- **FR-1.6:** Include key metrics:
  - "94% precision in forecasting grid failures 48 hours in advance"
  - "Real-time geospatial dashboard"
  - "60% reduction in incident response planning time"
  - "Processing 10M+ daily data points"
  - "Random Forest classifier trained on 500,000+ synthetic scenarios"
- **FR-1.7:** Show technology badges (not just languages):
  - "Random Forest"
  - "Geospatial Analysis"
  - "Time Series Forecasting"
  - "Real-time Dashboard"
  - "Physics-Informed AI"
  - "Python" (as a supporting language)
- **FR-1.8:** Include thumbnail image of the geospatial dashboard

**CALI Project Card:**
- **FR-1.9:** Display project name: "CALI - Real-time Stress-Tracking Platform"
- **FR-1.10:** Include key metrics:
  - "Custom BiLSTM neural network"
  - "5 heterogeneous time-series data streams synchronized within <10ms tolerance"
  - "Sampling rates from 50Hz to 1kHz"
  - "100,000+ synthetic data points"
  - "40% improvement in model convergence speed"
- **FR-1.11:** Show technology badges:
  - "BiLSTM"
  - "Signal Processing"
  - "Time Series Fusion"
  - "AD8237 EMG"
  - "MAX30003"
  - "Real-time Data Pipeline"
  - "Python" (as a supporting language)
- **FR-1.12:** Include thumbnail image of analytics dashboard or data visualization

#### 4.1.3 Interaction Requirements
- **FR-1.13:** Clicking on a case study card should expand to show full project details
- **FR-1.14:** Hover state should highlight key metrics
- **FR-1.15:** Technology badges should be filterable/taggable for future enhancement

---

### 4.2 Contribution Graph → Skill Proficiency Grid

#### 4.2.1 Visual Transformation
- **FR-2.1:** Replace daily commit heatmap with skill proficiency visualization
- **FR-2.2:** Maintain green color scheme (varying intensities) consistent with GitHub contribution graph
- **FR-2.3:** Use grid layout where axes represent skill categories:
  - Machine Learning / AI
  - Backend Development
  - Frontend Development
  - Data Engineering
  - Systems Architecture
  - Research & Academia

#### 4.2.2 Skill Mapping
- **FR-2.4:** Each square/cell represents expertise level in a specific tool/technology:
  - **ML/AI:** Python, TensorFlow, PyTorch, BiLSTM, Random Forest, Signal Processing, Time Series Analysis
  - **Backend:** Python, API Design, Database Optimization, Distributed Systems, Caching Strategies
  - **Frontend:** Dashboard Development, Data Visualization, Real-time UIs
  - **Data Engineering:** Data Pipelines, ETL, Data Fusion, Geospatial Data Processing
  - **Systems:** Performance Optimization, Scalability, Real-time Systems
  - **Research:** Materials Informatics, Statistical Learning, Research Methodologies

#### 4.2.3 Intensity Levels
- **FR-2.5:** Green intensity should reflect expertise level:
  - Light green: Familiar/Entry-level
  - Medium green: Proficient/Intermediate
  - Dark green: Expert/Advanced
  - Very dark green: Specialized/Deep expertise

#### 4.2.4 Interaction
- **FR-2.6:** Hover over squares should display tool name and proficiency level
- **FR-2.7:** Clicking on a category should filter projects/case studies by that technology

---

### 4.3 About Me → README.md Styling

#### 4.3.1 Visual Design
- **FR-3.1:** Style the entire "About Me" section to look like a rendered README.md file
- **FR-3.2:** Use monospace font for code blocks
- **FR-3.3:** Implement syntax highlighting for code blocks (Python/JSON)

#### 4.3.2 Content Formatting

**Contact Information as Code:**
- **FR-3.4:** Display contact information formatted as a Python class:

```python
class ContactInfo:
    email = "edwinkim0509@berkeley.edu"
    phone = "(310) 617-6693"
    linkedin = "linkedin.com/in/kedwin"
    location = "Berkeley, CA"
    education = "UC Berkeley, Computer Science (2025)"
```

**Alternative JSON Format:**
- **FR-3.5:** Provide option for JSON formatting:

```json
{
  "contact": {
    "email": "edwinkim0509@berkeley.edu",
    "phone": "(310) 617-6693",
    "linkedin": "linkedin.com/in/kedwin"
  },
  "location": "Berkeley, CA",
  "education": {
    "institution": "UC Berkeley",
    "degree": "Computer Science",
    "year": 2025
  }
}
```

#### 4.3.3 Additional Content
- **FR-3.6:** Include a brief professional summary in markdown format
- **FR-3.7:** Add emoji or badges for quick visual interest (consistent with GitHub README culture)
- **FR-3.8:** Make contact information copyable (one-click copy to clipboard)

---

### 4.4 Contribution Activity → Experience Timeline

#### 4.4.1 Visual Structure
- **FR-4.1:** Maintain vertical, chronological timeline layout (mirrors GitHub contribution activity sidebar)
- **FR-4.2:** Use year headers (2025, 2024, 2023) to organize entries
- **FR-4.3:** Each entry should visually distinguish between role type (Intern, Full-time, Research)

#### 4.4.2 Timeline Entries

**2025 Entry:**
- **FR-4.4:** Display "CALI - ML Engineer"
- **FR-4.5:** Include key achievements:
  - "Architected real-time stress-tracking platform"
  - "Designed custom BiLSTM neural network for panic detection"
  - "Fused 5 heterogeneous time-series streams (<10ms tolerance)"
  - "Generated 100,000+ synthetic data points"
  - "40% improvement in model convergence speed"

**2024 Entry:**
- **FR-4.6:** Display "MyFitnessPal - SWE Intern"
- **FR-4.7:** Include key achievements:
  - "Refactored core food-log query engine (50M+ DAU)"
  - "25% reduction in request latency"
  - "40% reduction in API payload size"
  - "Optimized for millions of concurrent sessions"

**2023 Entry:**
- **FR-4.8:** Display "UC Berkeley - Computational Researcher"
- **FR-4.9:** Include key achievements:
  - "Designed scalable materials informatics pipeline"
  - "Processed 1,000+ architected-material samples"
  - "Automated extraction of 50+ high-dimensional features"
  - "Created dataset of 50,000+ data points"
  - "23% increase in predictive accuracy vs. baseline"

#### 4.4.3 Interaction
- **FR-4.10:** Clicking on an entry should expand to show full role description
- **FR-4.11:** Entries should link to relevant case studies (if applicable)
- **FR-4.12:** Timeline should be scrollable/navigable for future expansion

---

## 5. Design Specifications

### 5.1 Visual Design System

#### 5.1.1 Color Palette
- **Primary Green:** #238636 (GitHub's success green for badges)
- **Contribution Green Shades:** 
  - Light: #9be9a8
  - Medium: #40c463
  - Dark: #30a14e
  - Very Dark: #216e39
- **Background:** #0d1117 (GitHub dark mode) or #ffffff (GitHub light mode)
- **Text Primary:** #c9d1d9 (dark mode) or #24292f (light mode)
- **Border/Divider:** #30363d (dark mode) or #d0d7de (light mode)

#### 5.1.2 Typography
- **Body:** System font stack (San Francisco, Segoe UI, etc.)
- **Code/Monospace:** 'SF Mono', 'Monaco', 'Consolas', 'Liberation Mono', monospace
- **Headings:** Same as body, with appropriate weights

#### 5.1.3 Spacing & Layout
- **Card Padding:** 16px (1rem)
- **Card Border Radius:** 6px (GitHub standard)
- **Grid Gaps:** 16px between cards
- **Section Margins:** 32px vertical spacing between major sections

#### 5.1.4 Badges & Tags
- **Size:** Height 20px, padding 4px 8px
- **Border Radius:** 12px (pill shape)
- **Font Size:** 12px
- **Badge Colors:** Category-specific colors (ML: purple, Backend: blue, etc.)

---

## 5.2 Responsive Design

#### 5.2.1 Breakpoints
- **Mobile:** < 768px (single column, stacked layout)
- **Tablet:** 768px - 1024px (two columns where appropriate)
- **Desktop:** > 1024px (full GitHub-profile-like layout)

#### 5.2.2 Mobile Considerations
- **FR-5.1:** Case study cards stack vertically on mobile
- **FR-5.2:** Skill proficiency grid becomes scrollable or simplified view on mobile
- **FR-5.3:** Experience timeline remains vertical but with adjusted spacing
- **FR-5.4:** Code blocks in About Me section should be horizontally scrollable

---

## 6. Technical Requirements

### 6.1 Technology Stack Recommendations
- **Framework:** Next.js 14+ (React) or Astro (for static generation)
- **Styling:** Tailwind CSS (for GitHub-like styling) or CSS Modules
- **Deployment:** Vercel, Netlify, or GitHub Pages
- **Code Highlighting:** Prism.js or Shiki (for README code blocks)

### 6.2 Performance Requirements
- **FR-6.1:** First Contentful Paint (FCP) < 1.5 seconds
- **FR-6.2:** Largest Contentful Paint (LCP) < 2.5 seconds
- **FR-6.3:** Time to Interactive (TTI) < 3.5 seconds
- **FR-6.4:** Lighthouse Performance Score > 90

### 6.3 Accessibility Requirements
- **FR-6.5:** WCAG 2.1 AA compliance
- **FR-6.6:** Keyboard navigation support
- **FR-6.7:** Screen reader compatibility
- **FR-6.8:** Sufficient color contrast ratios (4.5:1 for text)

### 6.4 Browser Support
- **FR-6.9:** Support latest versions of Chrome, Firefox, Safari, Edge
- **FR-6.10:** Graceful degradation for older browsers (ES6+ features)

---

## 7. Content Requirements

### 7.1 Copy Requirements
- **FR-7.1:** All project descriptions should emphasize impact and quantifiable metrics
- **FR-7.2:** Technical terminology should be accurate and industry-standard
- **FR-7.3:** Avoid generic phrases; use specific technologies and methodologies

### 7.2 Media Requirements
- **FR-7.4:** Dashboard thumbnails for Hermes and CALI projects (recommended: 1200x800px, compressed)
- **FR-7.5:** All images should be optimized (WebP format preferred, with fallbacks)
- **FR-7.6:** Alt text required for all images

---

## 8. Future Enhancements (Out of Scope for v1)

### 8.1 Potential Features
- **FE-1:** Interactive project demos embedded in case study cards
- **FE-2:** Blog section styled as GitHub Discussions
- **FE-3:** Skills grid filtering system
- **FE-4:** Dark/light mode toggle
- **FE-5:** Export resume as PDF directly from timeline
- **FE-6:** Integration with GitHub API to pull actual repository stats (if relevant)

---

## 9. Success Metrics

### 9.1 Quantitative Metrics
- **SM-1:** Average time on page > 2 minutes (indicates engagement)
- **SM-2:** Bounce rate < 40%
- **SM-3:** Contact information click-through rate > 10%
- **SM-4:** Case study card expansion rate > 50%

### 9.2 Qualitative Metrics
- **SM-5:** Positive feedback from recruiters on clarity of technical skills
- **SM-6:** Recognition of "GitHub vibe" aesthetic by developers
- **SM-7:** Successful interviews/contacts attributed to portfolio

---

## 10. Dependencies & Constraints

### 10.1 Dependencies
- Access to project screenshots/dashboard images
- Confirmation of all metrics and achievements from resume
- Approval of design direction and GitHub aesthetic approach

### 10.2 Constraints
- Must maintain fast load times despite rich content
- Should work without JavaScript (progressive enhancement)
- Must be easily maintainable/updateable as experience grows

---

## 11. Timeline & Milestones

### 11.1 Proposed Phases
- **Phase 1 (Week 1-2):** Design system implementation, case study cards
- **Phase 2 (Week 3):** Skill proficiency grid, README styling
- **Phase 3 (Week 4):** Experience timeline, content integration
- **Phase 4 (Week 5):** Testing, optimization, deployment

---

## 12. Appendix

### 12.1 Key Terms
- **BiLSTM:** Bidirectional Long Short-Term Memory (neural network architecture)
- **EMG:** Electromyography (muscle activity sensor)
- **R-peak:** ECG signal feature (heart rate detection)
- **DAU:** Daily Active Users
- **ETL:** Extract, Transform, Load (data pipeline process)

### 12.2 References
- GitHub Profile UI/UX patterns
- Resume content (provided by Edwin Kim)
- Technical achievements and metrics from professional experience

---

**Document End**
