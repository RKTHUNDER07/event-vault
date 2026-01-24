# EventVault

**EventVault** is a privacy-first, event-based media sharing platform that allows users to collaboratively capture and store photos/videos during an event while maintaining strict access control.

The platform is designed to ensure that:

- Events are **private and invite-only**
- Media is stored securely in the cloud
- Ownership and visibility of media are clearly defined
- Platform admins cannot access user content unless explicitly authorized

---

## 🚀 Key Features

- 🔐 Secure authentication
- 🎉 Private event creation
- 👥 Invite & approval-based event membership
- 📸 Mobile camera access (web)
- ☁️ Automatic cloud storage of media
- 🧑‍🤝‍🧑 Participant-only uploads & visibility
- 👑 Event owner can view all uploads
- 🛡️ Admin dashboard without media access
- 📱 Fully mobile-responsive design

---

## 👥 User Roles

### 1. Admin (Platform Level)

- View all active events (metadata only)
- Manage events and users
- **Cannot view event photos/videos**
- Privacy-restricted by design

### 2. Event Owner

- Creates an event
- Approves or rejects join requests
- Can view **all media** within their event

### 3. Participant

- Requests to join events
- Uploads media to approved events
- Can view **only their own uploads**

> Roles are contextual — a user can be an admin globally and still be a participant or owner in specific events.

---

## 🧭 Event Lifecycle

Events follow a controlled lifecycle:

- **Active**
  - Uploads allowed
  - Join requests accepted (with approval)

- **Closed**
  - Uploads disabled
  - Media remains viewable

- **Archived**
  - Read-only state
  - Intended for long-term storage or export

---

## 🏗️ System Architecture

User (Mobile Browser)
↓
React Web App (Client)
↓
Express API (Server)
↓
Database (Metadata)
↓
Firebase Storage (Media Files)

### Components:

- **Frontend:** React (mobile-first web app)
- **Backend:** Node.js + Express
- **Authentication:** Firebase Auth
- **Database:** MongoDB / Firestore (metadata only)
- **Storage:** Firebase Cloud Storage (photos/videos)

---

## 📸 Media Upload Flow

1. User accesses event via the web app
2. Camera is accessed using browser APIs
3. Photo/video is captured
4. Media is uploaded directly to cloud storage
5. Storage rules validate access
6. A secure URL is generated
7. Metadata is saved in the database

Media is organized by:
/events/{eventId}/{userId}/media-file

---

## 🔐 Security & Privacy

Security is enforced at **multiple layers**:

- **Frontend:** Role-based UI visibility
- **Backend:** Authorization checks for every API
- **Storage:** Strict cloud storage rules

Key principles:

- No public access to media
- Non-members cannot access events
- Participants cannot view others’ uploads
- Admins cannot bypass media privacy

---

## 📂 Project Structure

EventVault/
├── client/ # React frontend
├── server/ # Express backend
├── docs/ # Design & architecture docs
├── progress-log.txt
└── .gitignore

---

## 📝 Documentation

Detailed design thinking is available in the `docs/` folder:

- Privacy & consent
- Event lifecycle
- Security decisions
- Edge cases
- Scalability considerations
- UX decisions
- Future scope

This repository intentionally documents **design before code**.

---

## 🔮 Future Enhancements

- Export event media to Google Drive (owner-authorized)
- Download all media as ZIP
- Progressive Web App (PWA)
- QR code-based event joining
- AI-based photo grouping
- Automatic event expiry & cleanup

---

## 🧠 Why EventVault?

EventVault focuses on **privacy by design**, not as an afterthought.  
Admins manage the platform **without violating user trust**, and cloud storage is used responsibly with strict access rules.

This project is built to reflect **real-world system design principles**, not just UI functionality.

---

## 📌 Status

🚧 **In active development**  
This repository represents the planning, architecture, and implementation of the EventVault platform.

---

## 📜 License

This project is currently for educational and learning purposes.
