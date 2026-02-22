PROJECT CONTEXT — EVENTVAULT

Project Name:
EventVault

One-line Summary:
EventVault is a privacy-first, event-based media sharing platform where users can create private events, approve participants, and collaboratively upload photos/videos with strict access control.

Core Goal:
Allow people attending an event to capture and upload media from their phones while ensuring that:

- Events are invite-only
- Media is never public
- Ownership and visibility rules are strictly enforced

User Roles:

1. Admin (platform-level)
   - Can view all events (metadata only)
   - Can manage events/users
   - Cannot view any event photos or videos unless explicitly a participant or owner

2. Event Owner
   - Creates an event
   - Approves/rejects join requests
   - Can view all media uploaded in their event

3. Participant
   - Requests to join events
   - Can upload media
   - Can view only their own uploads

Important Rule:
Admin role does NOT grant media access.
Media access is determined ONLY by event ownership or membership.

Event Lifecycle:

- Active: uploads allowed, join requests allowed
- Closed: uploads disabled, media viewable
- Archived: read-only state

Tech Stack Decisions:

- Frontend: React (mobile-first web app)
- Backend: Node.js + Express
- Authentication: Firebase Auth
- Storage: Firebase Cloud Storage (media only)
- Database: MongoDB or Firestore (metadata only)

Storage Design:

- Media stored in Firebase Storage
- Folder structure:
  /events/{eventId}/{userId}/{media-file}
- Database stores only metadata and storage URLs

Security Model:

- Role-based UI rendering
- Backend authorization middleware
- Firebase Storage rules as final enforcement layer
- No public access to storage files

Current Status:

- Idea and scope finalized
- Schemas and access matrices designed
- Docs folder created (privacy, security, lifecycle, etc.)
- GitHub repo initialized
- README written
- About to start Week 1 implementation (React setup)

Expectation from ChatGPT:

- Continue guiding implementation and brainstorming
- Assume this document is the single source of truth
- Do not re-scope unless explicitly requested
