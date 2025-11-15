# 🔥 Royalty Ledger AI – Master Ledger Protocol

**Repository:** Flame-Division-MusicAI  
**Doctrine:** Flame Law – Legacy Before Launch

> “If it isn’t written, it isn’t real.” — Commander Flame

The **Royalty Ledger AI** is the tracking brain of the Flame Division music system.  
It records **who owns what, who did what, and who gets what** across every project.

---

## 1. Purpose of This Ledger

- Prevent disputes by defining ownership **before** release.
- Give every collaborator a clear view of:
  - Rights
  - Percentages
  - Payment cycles
  - AI–human contribution splits
- Maintain auditable records for:
  - Labels
  - PROs (ASCAP, BMI, etc.)
  - Distributors and aggregators
  - Legal and tax professionals

This document sets the **rules of operation** for all ledger files in this directory.

---

## 2. Core Concepts

### 2.1 Project

A **Project** is any track, EP, album, sync placement, or campaign that generates revenue.

Each project must have:

- A unique **PROJECT_ID**
- A corresponding **Project Ledger** file (see `ProjectLedger_Template.md`)
- Linked contracts (Artist Service, Ghostwriting, Royalty Ownership, etc.)

---

### 2.2 Participant

A **Participant** is any human or entity entitled to compensation, including:

- Primary artist(s)
- Featured artist(s)
- Producer(s) / beat maker(s)
- Songwriter(s) / ghostwriter(s)
- Engineer(s) and mixer(s) if negotiated
- Flame Division / ShadowSoundProtocol where applicable

Each participant is assigned a **ROLE** and **PERCENTAGE** per revenue stream.

---

### 2.3 Revenue Streams

Common streams tracked by the Royalty Ledger AI include:

- **MASTER** – master recording ownership
- **PUBLISHING** – songwriting and composition
- **SYNC** – film, TV, games, ads
- **MERCH** – merch tied directly to the project
- **PERFORMANCE** – show splits covered by separate agreements
- **AI SERVICE FEES** – Flame Division consulting / automation services

Each stream can have **different splits** for the same participants.

---

## 3. File Structure

All ledger data should follow this structure:

```text
/Contracts/Ledger/
    RoyaltyLedgerAI.md              – This doctrine
    Royalty_Split_Template.md       – Single-track / single-project split sheet
    ProjectLedger_Template.md       – Full ledger spec per project
    Payment_Cycle_Logic.md          – Payout cadence and calculation rules
