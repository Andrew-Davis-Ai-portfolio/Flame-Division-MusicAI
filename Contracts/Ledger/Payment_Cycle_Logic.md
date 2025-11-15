# 🔁 Payment Cycle Logic — Flame Division MusicAI

This document defines the **standard payment and settlement logic** used for projects managed under the Flame-Division-MusicAI contract system.

It tells everyone **when money moves, how it’s split, and what triggers each release** of funds.

---

## 1. Roles

- **[CLIENT NAME]** – person or company funding the project.  
- **[ARTIST / CREATOR NAME]** – performer, writer, producer, or engineer delivering creative work.  
- **Flame Division** – AI implementation + admin layer (optional) providing systems, templates, and tracking.

---

## 2. Default Payment Stages

Unless a written contract states otherwise, projects follow this 4-stage flow:

1. **Stage 1 – Booking / Deposit (Non-Refundable)**
   - Amount: **[DEPOSIT %] %** of total project fee.
   - Due: On signing the **Artist Service Agreement**.
   - Purpose: Reserves dates and covers initial prep, prompts, and AI configuration.

2. **Stage 2 – Draft Delivery / Milestone 1**
   - Amount: **[M1 %] %** of total project fee.
   - Trigger: Delivery of first usable draft (e.g., reference beat pack, hook concept, or demo files).
   - Client has **[REVIEW_DAYS] days** to request revisions under the contract.

3. **Stage 3 – Final Approval / Delivery**
   - Amount: **[M2 %] %** of total project fee.
   - Trigger: Client signs off on final assets (stems, mixes, final lyrics, etc.) or uses them publicly.
   - Rights and licenses defined in the **Royalties & Ownership Agreement** become active.

4. **Stage 4 – Royalties & Passive Income**
   - Ongoing splits follow the **Royalties_Ownership.md** terms.
   - Payments are usually consolidated **monthly or quarterly**, depending on platform reports.

> **Example split:** 30 % deposit / 30 % draft / 40 % final – with separate royalty percentages on revenue (streams, sync, publishing, etc.).

---

## 3. Accepted Payment Methods

- Bank transfer / ACH  
- Major payment processors (e.g., Stripe, PayPal)  
- Any additional methods listed in the specific project agreement.

All transfers should include a **reference line**:  
`[PROJECT TITLE] – [INVOICE #] – [STAGE #]`.

---

## 4. Late Payment & Grace Periods

- **Standard term:** Invoices due **within [DUE_DAYS] days** of issue date.  
- **Grace period:** Additional **[GRACE_DAYS] days** before late-fee logic triggers.  
- **Late fee:** Either  
  - a flat **[LATE_FEE_AMOUNT]** per late invoice, **or**  
  - **[LATE_FEE_PERCENT]%** of the outstanding balance (whichever is specified in the contract).

Projects may be **paused** if payment is more than **[PAUSE_THRESHOLD_DAYS] days** late.

---

## 5. Refund Logic (High-Level)

Refunds are intentionally limited to protect creative labor:

- Stage 1 deposit is **non-refundable**.  
- Stage 2 and 3 payments are refundable **only** if:
  - Services were not delivered as described in the contract **and**
  - Both parties sign a written cancellation / settlement agreement.

Streaming or public use of any deliverables **voids** refund eligibility for that stage.

---

## 6. Reporting & Transparency

- All income sources (DSPs, PROs, sync fees, advances, etc.) are logged in the **Project Ledger**.  
- Statements are shared with collaborators on a **[REPORTING_FREQUENCY]** basis.  
- Any dispute over numbers should be raised in writing within **[DISPUTE_WINDOW_DAYS] days** of receiving a statement.

---

## 7. Escalation Path

If there is a payment dispute:

1. **Direct discussion** between [CLIENT NAME] and [ARTIST NAME].  
2. **Mediation** using contract documents and the Project Ledger.  
3. If still unresolved, parties may seek **independent legal counsel** or follow any dispute-resolution clause in their contract.

---

## 8. Customization Notes

Each project can override this logic in its own agreement by clearly stating:

- Different stage percentages or milestones  
- Alternative due dates or payment methods  
- Special royalty splits for specific territories, formats, or placements

Any override should be **written and signed**; verbal exceptions don’t change the system.

---

**Disclaimer:** This document is a structural guide for payment logic and does not constitute legal or financial advice. Always consult a qualified attorney or accountant before relying on this for binding agreements.
