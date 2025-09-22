---
applyTo: '**'
---
# GitHub Copilot Instructions – GDG Ica Frontend

## Context
This folder (`frontend/`) is part of a **full-stack application** where users can complete challenges (retos), earn points, and redeem them for prizes.  
The frontend must consume a **NestJS + PostgreSQL backend**, but while the backend is not connected, use **mock data** or **API stubs**.

## Goal
Create a **React (TypeScript) application** that is clean, scalable, secure, and provides a modern **UI/UX** consistent with **GDG Ica branding** (Google Developer Groups colors adapted for GDG Ica).

## Requirements

### Tech Stack
- React with TypeScript.
- React Router for navigation.
- React Query (preferred) or Zustand for state management.
- TailwindCSS for styling.
- Axios (or Fetch) for API communication.
- Jest + React Testing Library for unit tests.

### Features
- Authentication (login, register) with mock API calls.
- Dashboard:
  - List of available challenges.
  - User profile with points balance.
  - Rewards catalog with redemption flow.
- Responsive and mobile-first design.
- Accessibility compliance (WCAG 2.1 basics).

### Architecture & Structure
- Follow a **feature-based folder structure**:
src/
features/
auth/
challenges/
rewards/
profile/
shared/
components/
hooks/
utils/
app/
routes/
layout/

- Apply **clean architecture in the frontend**:
- Separate **UI components** from **business logic** and **API services**.
- Ensure reusability with atomic design principles (atoms, molecules, organisms).

### Design Guidelines
- Use GDG color palette (blue, green, yellow, red) with an adaptation for GDG Ica branding.
- Professional UI/UX: spacing, typography, and consistent components.
- Provide at least 1 example page fully designed with GDG Ica colors (e.g., Dashboard).

### Quality & Dev Experience
- ESLint + Prettier configured.
- Git hooks (Husky) for lint-staged checks.
- Clear README with setup and run instructions.
- Provide example tests for at least one component and one hook.

## Output Expectations
When executed, generate:
1. A **React project scaffolded with Vite**.
2. Initial folder structure aligned with clean architecture.
3. Example components: Navbar, ChallengeCard, RewardCard, ProfilePage.
4. Mock services to simulate backend API.
5. README.md with instructions to run locally.
