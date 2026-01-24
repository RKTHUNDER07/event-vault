# **EventVault — System Overview & Design Report**

## **1\. Introduction**

EventVault is a privacy-first, event-based media sharing platform designed to allow users to collaboratively capture and store photos/videos during an event while maintaining strict access control. The platform ensures that only approved participants can contribute media, and that visibility of content is governed by clear roles and permissions.

The core idea is simple:

* Events are private and invite-only  
* Media is captured primarily from mobile devices  
* Files are stored securely in cloud storage  
* Ownership and access are clearly defined and enforced

This document explains how the system works end-to-end, from user roles to data flow, security, and scalability.

---

## **2\. User Roles and Responsibilities**

### **2.1 Platform Roles**

EventVault defines three distinct roles:

* **Admin**  
  * Platform-level supervisor  
  * Can view all active events and their metadata  
  * Cannot view event media unless explicitly a participant or owner  
* **Event Owner**  
  * Creator of an event  
  * Approves or rejects join requests  
  * Can view all media uploaded within their event  
* **Participant**  
  * Approved member of an event  
  * Can upload media to the event  
  * Can view only their own uploads

Roles are contextual. A user may be an admin at the platform level while simultaneously being an owner or participant in specific events.

---

## **3\. Event Lifecycle**

Events move through a controlled lifecycle to maintain order and predictability:

1. **Active**  
   * Uploads allowed  
   * Join requests accepted (with owner approval)  
2. **Closed**  
   * No new uploads  
   * Media remains viewable  
   * Membership frozen  
3. **Archived**  
   * Read-only state  
   * Intended for long-term storage or export

Lifecycle states prevent misuse and help manage storage costs.

---

## **4\. System Architecture Overview**

EventVault follows a modern, decoupled architecture:

* **Frontend (React Web App)**  
  * Mobile-first responsive design  
  * Handles authentication state  
  * Provides camera access and upload UI  
* **Backend (Express API)**  
  * Manages events, memberships, and permissions  
  * Stores metadata and audit logs  
  * Enforces business rules  
* **Authentication (Firebase Auth)**  
  * Provides secure user identity  
  * Issues tokens used across the system  
* **Cloud Storage (Firebase Storage)**  
  * Stores photos and videos  
  * Enforces access rules at the storage layer  
* **Database (MongoDB / Firestore)**  
  * Stores structured data such as users, events, memberships, and media metadata

---

## **5\. Data Models (High-Level)**

The platform relies on clearly separated schemas:

* **User**: identity and global role  
* **Event**: core event information  
* **Event Membership**: mapping of users to events and roles  
* **Media Metadata**: references to stored files  
* **Audit Logs**: traceability of actions

Actual media files are never stored in the database; only secure URLs and metadata are persisted.

---

## **6\. Media Upload and Storage Flow**

The media workflow is the heart of EventVault:

1. User accesses the event page via the web app  
2. Mobile camera is used to capture a photo or video  
3. File is uploaded directly from the client to cloud storage  
4. Storage rules validate:  
   * Authentication status  
   * Event membership  
   * Folder ownership  
5. Cloud storage returns a secure download URL  
6. Metadata is saved in the database

Storage is organized by event and user, ensuring isolation and traceability.

---

## **7\. Access Control and Security**

Security is enforced at multiple layers:

* **Frontend**: UI visibility based on role  
* **Backend**: API authorization checks  
* **Storage**: Strict cloud storage rules

Key principles:

* Non-members cannot access events  
* Participants cannot view others’ uploads  
* Admins cannot bypass privacy rules  
* Storage is never public

This layered approach ensures that even if one layer fails, others remain protective.

---

## **8\. Privacy and Ethics**

EventVault is designed with user trust as a priority:

* Participants retain ownership of their media  
* No public sharing or indexing  
* No data selling or tracking  
* Clear boundaries between platform management and user content

Admins can manage the platform without violating user privacy.

---

## **9\. Failure Handling and Edge Cases**

The system anticipates common real-world issues:

* Network interruptions during uploads  
* Duplicate media submissions  
* Event deletion with active media  
* Authentication expiry during sessions

Graceful error handling and clear user feedback are core UX goals.

---

## **10\. Scalability and Performance Considerations**

Although initially built for small-to-medium usage, EventVault is designed to scale:

* Media stored independently from metadata  
* Pagination for galleries  
* Event-based storage isolation  
* Archival and cleanup strategies

The architecture supports growth without fundamental redesign.

---

## **11\. Future Enhancements**

Planned extensions include:

* Exporting event media to Google Drive (owner-authorized)  
* ZIP downloads of event media  
* Progressive Web App (PWA) support  
* AI-based photo grouping  
* Automatic event expiration

These features build on the existing architecture without compromising privacy.

---

## **12\. Conclusion**

EventVault is a thoughtfully designed system that balances usability, privacy, and scalability. By separating concerns, enforcing strict access control, and using modern cloud services, the platform provides a secure and intuitive solution for private event media sharing.

This document represents the foundational understanding of how EventVault operates and serves as a reference point for development, discussion, and future expansion.

