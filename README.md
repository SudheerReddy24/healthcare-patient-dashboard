# Healthcare Patient Dashboard

An interactive healthcare patient dashboard built with Angular and TypeScript, featuring patient profiles, diagnosis history, vital signs, diagnostic records, and lab results. The UI is based on an Adobe XD design and integrates with a REST API to display patient information dynamically.

## Overview

The Healthcare Patient Dashboard provides a centralized interface for viewing patient information and health-related records. Users can select patients and view their associated information across dashboard components.

## Features

- **Patient Profiles:** View patient details, contact information, and insurance information.
- **Patient Selection:** Dynamically update dashboard information when a different patient is selected.
- **Diagnosis History:** Display historical blood pressure readings using an interactive Chart.js line chart.
- **Vital Signs:** Display heart rate, respiratory rate, and temperature from patient records.
- **Diagnostic List:** View diagnosis names, descriptions, and treatment statuses.
- **Lab Results:** Display available laboratory test records.
- **Interactive Chart:** Switch between available time periods to explore blood pressure history.
- **Responsive UI:** Dashboard styling based on the supplied Adobe XD design.

## Technologies Used

- Angular
- TypeScript
- HTML5
- CSS3
- RxJS
- Chart.js
- REST API
- Git and GitHub

## Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── patient-list/
│   │   ├── patient-profile/
│   │   ├── diagnosis-history/
│   │   ├── vital-cards/
│   │   └── diagnostic-list/
│   ├── models/
│   ├── services/
│   └── app.component.*
├── environments/
├── index.html
├── main.ts
└── styles.css
```

*Note: The structure above is illustrative. Adjust the folder names to match the actual project.*

## Prerequisites

Install the following before running the application:

- Node.js and npm
- Angular CLI compatible with the project's Angular version

Check your installed versions:

```bash
node --version
npm --version
ng version
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/healthcare-patient-dashboard.git
cd healthcare-patient-dashboard
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API

Configure the API URL and any required credentials using your local development configuration.

**Security note:** Do not commit API passwords, access tokens, or other secrets. Credentials embedded in a frontend Angular application are visible to browser users, so private credentials should be handled by a backend service.

If the API requires credentials, follow the project's local setup instructions before running the application.

### 4. Run the application

```bash
ng serve
```

Open the local URL shown in the terminal, typically:

```text
http://localhost:4200
```

### 5. Build for production

```bash
ng build
```

The generated build output is placed in the configured output directory.

## Implementation Highlights

### Shared Patient State

Uses an Angular service with RxJS `BehaviorSubject` to share the selected patient across dashboard components, keeping the profile, diagnosis history, vital signs, and diagnostic records synchronized.

### Blood Pressure Visualization

Uses Chart.js to visualize systolic and diastolic blood pressure readings over time, with selectable history periods.

### API Integration

Retrieves patient information from a REST API and binds the response data to Angular components.

## Learning Outcomes

This project demonstrates practical experience with:

- Angular standalone components
- TypeScript interfaces and API response models
- REST API integration
- RxJS and shared application state
- Chart.js data visualization
- Dynamic template rendering
- Git version control

## Future Improvements

- Add improved loading and API error states.
- Add unit tests for components and services.
- Improve accessibility and responsive behavior.
- Add a secure backend proxy if private API credentials are required.
- Configure continuous integration for automated builds.

## Author

**Kalli Sudheer Reddy**

- GitHub: [SudheerReddy24](https://github.com/SudheerReddy24)
- LinkedIn: [Sudheer Reddy Kalli](https://www.linkedin.com/in/sudheerreddykalli)

---

Developed as a portfolio project to demonstrate Angular frontend development, API integration, and interactive data visualization.