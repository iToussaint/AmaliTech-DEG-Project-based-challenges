# SecureVault Dashboard

A modern, accessible file explorer interface designed for SecureVault, an enterprise cloud storage platform for organizations managing large collections of sensitive documents.

The project focuses on making deeply nested file structures easier to navigate while providing clear context about the user's current location and selected files.

## Overview

SecureVault Dashboard is a frontend implementation of the SecureVault file management experience.

The application allows users to:

- Navigate deeply nested folders through a recursive file tree
- Expand and collapse folders without reloading the page
- View the contents of the currently selected folder
- Understand their current location through breadcrumb navigation
- Select files and inspect their metadata
- Navigate the explorer using keyboard controls
- Search for files and folders
- Quickly understand the context of files within the vault

The interface was designed with a focus on clarity, accessibility, information hierarchy, and efficient navigation of large file structures.

## Design

The interface was designed before implementation using Figma.

The design process included a dedicated design system covering:

- Typography
- Color palette
- Spacing grid
- Component states

### Design File

[Figma Design — SecureVault Dashboard](https://www.figma.com/design/CNGJ7NfJOdbbCfCfDRUz7v/SecureVault-Dashboard?m=auto&t=27mUgeQxzdZK5C9e-1)

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Git / GitHub

No component library such as Bootstrap, Material UI, Chakra UI, or Ant Design is used. The interface is built from reusable components based on the project's design system.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```
