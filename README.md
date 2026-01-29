# Blynk Automation Task

## Task Description

**Task 1 (if you have no experience with automation):**

- Create a repository on github.com
- Find bugs/issues/problems in the Blynk IoT Platform. You don't need hardware for testing.
- You can test web (host blynk.cloud), Android, or iOS (app name Blynk IoT). It's up to you
- For every bug/issue/problem create a ticket in the repository

**OR**

**Task 2 (if you have experience with automation):**

- Create a repository on github.com
- Create an automated test cases (any you want) for blynk.cloud
- Record a video of a successful test case and push it to GitHub with the code for the automated test

**As a result of the task - please send the link to your repository.**

---

## Solution Implemented

This repository contains the solution for **Task 2**.

- **Environment**: Node.js + Playwright
- **Tests**: Automated login page verification (`tests/blynk_login.spec.js`)
- **Evidence**: A video recording of the successful test is included.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   npx playwright install
   ```
2. Run tests:
   ```bash
   npx playwright test
   ```
