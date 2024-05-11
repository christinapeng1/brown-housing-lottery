# brown-housing-portal

# Housing Lottery Web App

## Introduction

### 1.1 Project Specific Details

**Project Name:** Housing Lottery  
**Team Members:**

- Kseniia Dolgopolova [@kdolgopo]: Gathering information from ResLife, work on information retrieval from server, user interface
- Christina Peng [@jpeng29]: Display changes in file to users, user interface
- Havi Nguyen [@hnguy116]: Clean and format CSV, user interface
- Jack Xu [@jackshuxu]: Load file to users, implement filtering functionality, user interface  
  **Total Estimated Time:** 55 hours  
  **Weekly Budget:** ~11 hours  
  **Repository:** [Link to Repository](https://github.com/christinapeng1/brown-housing-lottery)

### 1.2 Purpose

The Housing Lottery project aims to address the challenge of accessing accurate and up-to-date information about available spaces during housing selection at Brown University. Currently, students face difficulties in planning their housing strategy due to outdated information, leading to chaos and dissatisfaction. The project seeks to provide a real-time updated list of available spaces to enable students to make informed decisions during the housing selection process.

### 1.3 Intended Audience and Intended Use

The intended audience for the Housing Lottery web app includes Brown University students selecting on-campus housing and ResLife staff responsible for managing housing data. The web app will be utilized before and during the housing selection period by students to plan their room preferences and by ResLife staff to automate the process of updating available rooms. Secondary users, such as Brown University software engineers, may also benefit from the project by potentially integrating it into their software.

### 1.4 Scope and User Stories

#### User Stories:

1. **End User**: As a user of the web app, I can only access information using a @brown.edu email.
2. **End User**: As a Brown student, I can view updated data of available rooms, including the time of update and changes since the last update.
3. **End User**: As a student, I can search for rooms based on specific configurations to plan my housing group effectively.
4. **End User**: As ResLife staff, I can upload an unformatted CSV file, triggering the web app to format and update the available rooms list.
5. **Developer**: As a developer, I can understand the project's design, functionality, and how to run the program.

## Overall Description

### 2.1 User Needs

User research conducted with students and ResLife staff identified the need for real-time access to updated housing information, simplifying the process of updating room lists, and enhancing transparency in the housing selection process. The project aims to meet these needs by providing a user-friendly interface for students and automating the room list update process for ResLife staff.

### 2.2 Assumptions

Assumptions include the availability of unformatted CSV files from ResLife, users accessing the web app with @brown.edu emails, and the effectiveness of the web app compared to manual processes. Adjustments may be needed based on user feedback and system requirements.

### 2.3 Dependencies

The project relies on technologies such as React, Firebase, and VSCode for development. Non-technical dependencies include the cooperation of ResLife staff in providing CSV files and user adoption of the web app. Financial dependencies are minimal, and the app's relevance transcends social and cultural contexts.

## System Features and Requirements

### 3.1 Module Design

#### ResLife CSV Data (Model)

- **Functionality Testing:** Ensure accurate parsing of CSV files.
- **Integration Testing:** Verify compatibility with other modules.
- **Accessibility Testing:** No specific accessibility concerns.

#### Frontend Website (View)

- **Functionality Testing:** Test UI elements, filters, and search functionality.
- **Integration Testing:** Verify communication with the backend.
- **Accessibility Testing:** Conduct tests with screen readers and keyboard navigation.

#### Update Rooms (Controller)

- **Functionality Testing:** Test comparison algorithm for updating available rooms.
- **Integration Testing:** Ensure proper interaction with frontend and CSV data.
- **Accessibility Testing:** Focus on accessible error messages.

### 3.2 Data Requirements

Data includes unformatted CSV files from ResLife, which are processed and stored for room updates. Consent is provided through Brown authentication, and no personal data is collected besides user emails for authentication.

### 3.3 Risks

Risks include operational challenges in ResLife adoption and technical limitations in meeting system requirements. Mitigation strategies involve communication with stakeholders and flexibility in project implementation.

### 3.4 Testing Plan

- **ResLife CSV Data (Model):** Test parsing and integration with other modules.
- **Frontend Website (View):** Test UI functionality and accessibility.
- **Update Rooms (Controller):** Test filtering algorithm and integration with frontend.

## How to...

### Run the Tests

To run the tests, execute the following command: `npm test`

### Build and Run the Program

To build and run the program, follow these steps:

1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Start the server: `npm start`

## Conclusion

The Housing Lottery web app aims to streamline the housing selection process for Brown University students and ResLife staff by providing real-time access to updated room information. With a user-centered design and robust testing, the project endeavors to enhance transparency and efficiency in the housing selection process.
