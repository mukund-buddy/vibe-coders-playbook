# 🎯 The Vibe Coder's Playbook

![vanilla JS](https://img.shields.io/badge/vanilla-JS-f7df1e?logo=javascript&logoColor=black)
![no theory](https://img.shields.io/badge/lessons-real%20breakage-ff6b7a)
![license](https://img.shields.io/badge/license-MIT-4dd0e1)

**A practical operating system for building software with AI — written for people who build with AI, test like humans, and refuse to ship garbage.**

> Part of [The Antigle](https://github.com/mukund-buddy) 🔥
> This is not theory. Every rule here was learned by breaking something real.

---

## 🧭 Who This Is For

You, if any of these are true:

- You build things **with AI as a partner** and you're honest about it
- You can read/edit HTML, JSON and configs, but you're not a "10x systems engineer"
- You care more about **the product working** than the code being fancy
- You have watched AI confidently produce something beautiful and completely broken

Then congrats — you're a vibe coder. This playbook makes you a **professional** one.

---

## The Core Identity

```
Vibe Coder = Director + QA Lead + Refiner
```

| Role | What you actually do |
|---|---|
| 🎬 **Director** | You decide WHAT gets built and WHAT "good" means |
| 🔍 **QA Lead** | You test every flow like a suspicious first-time user |
| ✨ **Refiner** | You fix wording, spacing, flow until it feels effortless |

You are NOT: a large language model's typist. If AI wrote it, **you still own it** —
including its bugs. That's the whole professional mindset in one line.

---

## 📜 The 10 Rules

### 1. Define "done" before you prompt
Write 3–5 bullet acceptance criteria **before** asking AI to build:
> "Mobile me bhi full-width ho, click karne par file download ho, console clean ho."

If you can't describe done, AI will happily build never-ending.

### 2. One feature per prompt
Big prompts create big messes. Build in slices that each end with
something you can **open and test**.

### 3. Test like a suspicious user
The moment code "runs", your job starts:
- Wrong inputs daalo (empty, huge, weird characters)
- Mobile size pe dekho
- Every button actually click karo
- Console check karo

### 4. Never ship what you haven't clicked
Untested AI code is a rumor, not a product. **Click it. All of it.**

### 5. Keep a "known issues" list
Every project gets a `KNOWN-ISSUES.md`. Honesty compounds; pretending doesn't.

### 6. Small fixes, commit fast
One fix = one commit = one clear message. Future-you will send thanks.

### 7. When AI hallucinates, cut your losses
If a fix spirals (3+ failed attempts), stop. Re-explain the problem from
scratch — fresh context beats arguing with a confused model.

### 8. Read the diff, not the vibes
Before accepting AI changes: actually **look at what changed**.
Green-checkmark energy is not verification.

### 9. Be honest about your stack
"I built this with AI, tested it by hand" is a **strength** in 2026 — hiring
managers, clients and open-source communities all value shipping + judgment.
Fake skills collapse in the first technical interview. Real process scales.

### 10. Leave it better
Every session: fix one papercut, improve one text, delete one dead thing.
Small refinements × time = pro-level products.

---

## 🔁 The Loop (daily driver)

```
1. IDEA      →  Khud se: "kya problem, kisko kaam ayega?"
2. CRITERIA  →  3–5 bullets of "done"
3. PROMPT    →  AI ko chhota, context-rich task do
4. TEST      →  Suspicious user mode: sab kuch click karo
5. NOTE      →  Jo tuta, KNOWN-ISSUES.md me likho
6. FIX       →  Ek baar me ek fix
7. SHIP      →  Commit + deploy
8. REFINEMENT→  Kal ka phase 1
```

### Prompt template that works

```text
Context: Ye ek [type] hai jo [purpose]. Abhi [current state].
Task: Sirf [ek specific change] karna hai.
Softly keep in mind: [brand/style constraints].
Definition of done:
- [criterion 1]
- [criterion 2]
- [criterion 3]
Also: koi naya file bina bataye create mat karna.
```

---

## 🧰 The Toolkit

| Need | Tool |
|---|---|
| Site reviewing karna | [Site Review Lab](https://github.com/mukund-buddy/site-review-lab) |
| JSON inspect karna | [JSON Forge](https://github.com/mukund-buddy/json-forge) |
| Design sense | [Website Mastery Skill](https://github.com/mukund-buddy/website-mastery-skill) |

---

## ❌ Common Failures (all personally witnessed)

| Failure | Cure |
|---|---|
| "AI bola chal gya" | Browser khologe to hi chala hoga |
| Feature soup | Ek prompt = ek feature |
| Two competing truths in code | Purana wala delete karo, do truth mat rakho |
| Mobile layout guess kiya | DevTools → toggle device → dekho |
| Beautiful but broken | Rule #3 suspicious user test |
| Shiny object syndrome | KNOWN-ISSUES.md pehle zero karo, naya feature baad me |

---

## 🏷️ Suggested GitHub Topics

`ai-assisted-development` `pair-programming` `prompting` `workflow` `guide` `web-development` `vanilla-js` `the-antigle`

## 📄 License

MIT — use it, remix it, pass it on.
