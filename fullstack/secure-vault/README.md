## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

````bash
git clone https://github.com/iToussaint/AmaliTech-DEG-Project-based-challenges.git

2. Navigate to the SecureVault project:

```bash
cd fullstack/secure-vault

3. Install the dependencies:

```bash
npm install

4. Start the development server:

```bash
npm run dev

5. Open the local URL provided by Vite in your browser.
````

## Design File

[Figma Design — SecureVault Dashboard](https://www.figma.com/design/CNGJ7NfJOdbbCfCfDRUz7v/SecureVault-Dashboard?m=auto&t=27mUgeQxzdZK5C9e-1)

## Recursive Strategy

The file explorer is represented as a tree data structure.

Each node contains an id, name, and type. Folder nodes can also contain
a children array containing their nested files and folders.

For example:

Folder
├── File
├── Folder
│   ├── File
│   └── Folder
│       └── File
└── File

The TreeNode component uses recursion to render this structure. When a node
is a folder and it is expanded, the component renders its children by
rendering another TreeNode for each child.

This approach allows the application to support an arbitrary nesting depth
without having to create separate components or logic for each level.

The same recursive approach is also used by utility functions that traverse
the tree, such as searching for nodes and finding the path from the root to a
specific node.

## Wildcard Feature

As an additional feature beyond the core requirements, I identified an
important missing part of the file explorer experience: a dedicated view for
the contents of the currently selected folder.

The middle section of the interface provides an overview of the selected
folder and displays:

- The files and folders contained within the currently selected folder
- Breadcrumb navigation showing the current location
- The total number of documents
- The total number of folders
- The total number of files

This feature provides additional context about the user's current location
in the file structure and makes it easier to understand the contents of a
folder without having to navigate through the tree alone.

I considered this an essential addition because the recursive tree is mainly
used for navigation, while the folder contents section provides a more
detailed view of what exists inside the currently selected folder.
