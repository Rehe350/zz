// Generator script for index.html
const fs = require('fs');
const path = require('path');

const part1 = require('./data_part1.js');
const part2 = require('./data_part2.js');
const quizList = require('./data_quiz_all_219.js');

const allPoints = [...part1.points, ...part2.points];

console.log(`Loaded ${allPoints.length} points and ${quizList.length} quiz questions (1:1 full coverage).`);

const htmlTemplate = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>专升本政治考前冲刺通关站 · 2026冲刺版</title>
  <meta name="description" content="成人高考专升本政治考前冲刺资料答题系统，提供考点挖空背诵自测、实战单项选择题刷题、全真模拟考试与错题消灭系统。">
  <style>
    :root {
      --bg-gradient: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #182234 100%);
      --card-bg: rgba(26, 34, 52, 0.85);
      --card-border: rgba(99, 102, 241, 0.2);
      --card-hover-border: rgba(99, 102, 241, 0.5);
      --text-main: #F3F4F6;
      --text-sub: #9CA3AF;
      --text-muted: #6B7280;
      --accent-primary: #6366F1;
      --accent-hover: #4F46E5;
      --accent-glow: rgba(99, 102, 241, 0.35);
      --success: #10B981;
      --success-bg: rgba(16, 185, 129, 0.15);
      --danger: #EF4444;
      --danger-bg: rgba(239, 68, 68, 0.15);
      --warning: #F59E0B;
      --warning-bg: rgba(245, 158, 11, 0.15);
      --blank-bg: #312E81;
      --blank-text: #E0E7FF;
      --blank-mask-bg: #374151;
      --blank-mask-border: #4B5563;
      --nav-bg: rgba(17, 24, 39, 0.88);
      --header-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.5);
      --card-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    }

    [data-theme="light"] {
      --bg-gradient: linear-gradient(135deg, #F0F4F8 0%, #E2E8F0 50%, #EDF2F7 100%);
      --card-bg: rgba(255, 255, 255, 0.95);
      --card-border: rgba(203, 213, 225, 0.8);
      --card-hover-border: rgba(99, 102, 241, 0.6);
      --text-main: #0F172A;
      --text-sub: #475569;
      --text-muted: #94A3B8;
      --accent-primary: #4F46E5;
      --accent-hover: #4338CA;
      --accent-glow: rgba(79, 70, 229, 0.25);
      --success: #059669;
      --success-bg: rgba(5, 150, 105, 0.12);
      --danger: #DC2626;
      --danger-bg: rgba(220, 38, 38, 0.12);
      --warning: #D97706;
      --warning-bg: rgba(217, 119, 6, 0.12);
      --blank-bg: #EEF2FF;
      --blank-text: #3730A3;
      --blank-mask-bg: #E2E8F0;
      --blank-mask-border: #CBD5E1;
      --nav-bg: rgba(255, 255, 255, 0.9);
      --header-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.08);
      --card-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      font-family: var(--font-sans);
      background: var(--bg-gradient);
      background-attachment: fixed;
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      line-height: 1.6;
      transition: background 0.3s ease, color 0.3s ease;
    }

    /* Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0,0,0,0.1);
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(99, 102, 241, 0.4);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--accent-primary);
    }

    /* Header & Navigation */
    header {
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      background: var(--nav-bg);
      border-bottom: 1px solid var(--card-border);
      box-shadow: var(--header-shadow);
      padding: 0.75rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .brand-area {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .brand-logo {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, #6366F1, #EC4899);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 1.25rem;
      color: #FFF;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
    }

    .brand-title h1 {
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      background: linear-gradient(to right, #818CF8, #F472B6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .brand-title p {
      font-size: 0.75rem;
      color: var(--text-sub);
    }

    .nav-tabs {
      display: flex;
      gap: 0.35rem;
      background: rgba(0, 0, 0, 0.2);
      padding: 0.3rem;
      border-radius: 12px;
      border: 1px solid var(--card-border);
    }

    [data-theme="light"] .nav-tabs {
      background: #F1F5F9;
    }

    .nav-btn {
      padding: 0.5rem 1rem;
      border: none;
      background: transparent;
      color: var(--text-sub);
      font-weight: 600;
      font-size: 0.85rem;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: all 0.2s ease;
    }

    .nav-btn:hover {
      color: var(--text-main);
      background: rgba(255, 255, 255, 0.05);
    }

    .nav-btn.active {
      background: var(--accent-primary);
      color: #FFF;
      box-shadow: 0 2px 8px var(--accent-glow);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .icon-btn {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      border: 1px solid var(--card-border);
      background: rgba(255, 255, 255, 0.04);
      color: var(--text-main);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      transition: all 0.2s ease;
    }

    .icon-btn:hover {
      background: var(--card-hover-border);
      transform: translateY(-1px);
    }

    /* Container */
    .container {
      max-width: 1080px;
      width: 100%;
      margin: 0 auto;
      padding: 1.5rem 1rem 3rem;
      flex: 1;
    }

    /* Top Stats Ribbon */
    .stats-ribbon {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }

    .stat-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 14px;
      padding: 0.9rem 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: var(--card-shadow);
      backdrop-filter: blur(8px);
    }

    .stat-info .stat-label {
      font-size: 0.75rem;
      color: var(--text-sub);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .stat-info .stat-val {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--text-main);
      margin-top: 0.2rem;
    }

    .stat-badge {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }

    /* Mode Views */
    .mode-view {
      display: none;
      animation: fadeIn 0.3s ease;
    }

    .mode-view.active {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Filter Controls Bar */
    .control-panel {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 1rem 1.25rem;
      margin-bottom: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      box-shadow: var(--card-shadow);
    }

    .pill-group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .pill-btn {
      padding: 0.4rem 0.85rem;
      border-radius: 20px;
      border: 1px solid var(--card-border);
      background: rgba(255, 255, 255, 0.03);
      color: var(--text-sub);
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .pill-btn:hover {
      border-color: var(--accent-primary);
      color: var(--text-main);
    }

    .pill-btn.active {
      background: var(--accent-primary);
      border-color: var(--accent-primary);
      color: #FFF;
      box-shadow: 0 2px 6px var(--accent-glow);
    }

    .search-box {
      position: relative;
      min-width: 220px;
      flex: 1;
      max-width: 320px;
    }

    .search-box input {
      width: 100%;
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 0.45rem 1rem 0.45rem 2.2rem;
      color: var(--text-main);
      font-size: 0.85rem;
      outline: none;
      transition: border-color 0.2s ease;
    }

    [data-theme="light"] .search-box input {
      background: #F8FAFC;
    }

    .search-box input:focus {
      border-color: var(--accent-primary);
    }

    .search-box .search-icon {
      position: absolute;
      left: 0.8rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      font-size: 0.9rem;
      pointer-events: none;
    }

    /* Flashcard View (Mode 1) */
    .flashcard-wrapper {
      position: relative;
    }

    .flashcard {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 2.25rem 2.5rem;
      box-shadow: var(--card-shadow);
      min-height: 380px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      backdrop-filter: blur(10px);
      transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .flashcard-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    [data-theme="light"] .flashcard-meta {
      border-bottom-color: rgba(0, 0, 0, 0.06);
    }

    .flashcard-tag-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(99, 102, 241, 0.15);
      color: #818CF8;
      padding: 0.25rem 0.75rem;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 700;
    }

    .flashcard-progress-text {
      font-size: 0.85rem;
      color: var(--text-sub);
      font-weight: 600;
    }

    .flashcard-title {
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 1.2rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .flashcard-content {
      font-size: 1.15rem;
      line-height: 2;
      color: var(--text-main);
      flex: 1;
      white-space: pre-wrap;
    }

    /* Blank Pill Elements */
    .blank-slot {
      display: inline-flex;
      align-items: center;
      margin: 0 4px;
      vertical-align: baseline;
    }

    .blank-btn {
      display: inline-block;
      cursor: pointer;
      border-radius: 6px;
      font-weight: 700;
      padding: 2px 10px;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      user-select: none;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .blank-btn.hidden-mode {
      background: var(--blank-mask-bg);
      color: var(--text-sub);
      border: 1px dashed var(--blank-mask-border);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .blank-btn.hidden-mode:hover {
      background: var(--accent-primary);
      color: #FFF;
      border-style: solid;
      border-color: var(--accent-primary);
      transform: translateY(-1px);
    }

    .blank-btn.revealed-mode {
      background: var(--blank-bg);
      color: #E0E7FF;
      border: 1px solid var(--accent-primary);
      box-shadow: 0 0 10px var(--accent-glow);
      animation: popReveal 0.25s ease;
    }

    [data-theme="light"] .blank-btn.revealed-mode {
      color: #312E81;
      font-weight: 800;
    }

    @keyframes popReveal {
      0% { transform: scale(0.92); opacity: 0.7; }
      50% { transform: scale(1.06); }
      100% { transform: scale(1); opacity: 1; }
    }

    /* Card Controls */
    .flashcard-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 2rem;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    [data-theme="light"] .flashcard-actions {
      border-top-color: rgba(0, 0, 0, 0.06);
    }

    .btn-group-left, .btn-group-right {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      flex-wrap: wrap;
    }

    .action-btn {
      padding: 0.55rem 1.15rem;
      border-radius: 10px;
      border: 1px solid var(--card-border);
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-main);
      font-weight: 600;
      font-size: 0.88rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: all 0.2s ease;
    }

    .action-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }

    .action-btn.primary {
      background: var(--accent-primary);
      border-color: var(--accent-primary);
      color: #FFF;
      box-shadow: 0 4px 12px var(--accent-glow);
    }

    .action-btn.primary:hover {
      background: var(--accent-hover);
    }

    .action-btn.success {
      background: var(--success-bg);
      border-color: var(--success);
      color: var(--success);
    }

    .action-btn.success.active {
      background: var(--success);
      color: #FFF;
    }

    .action-btn.warning {
      background: var(--warning-bg);
      border-color: var(--warning);
      color: var(--warning);
    }

    .action-btn.warning.active {
      background: var(--warning);
      color: #FFF;
    }

    /* Index Slider & Jumper */
    .jump-panel {
      margin-top: 1.25rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
    }

    .slider-range {
      flex: 1;
      max-width: 450px;
      accent-color: var(--accent-primary);
      cursor: pointer;
    }

    .jump-input-box {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.85rem;
      color: var(--text-sub);
    }

    .jump-input-box input {
      width: 55px;
      text-align: center;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid var(--card-border);
      border-radius: 6px;
      padding: 0.25rem 0.4rem;
      color: var(--text-main);
      outline: none;
    }

    /* Quiz Mode (Mode 2 & 3) */
    .quiz-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 2.25rem;
      box-shadow: var(--card-shadow);
      backdrop-filter: blur(10px);
    }

    .quiz-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    [data-theme="light"] .quiz-header {
      border-bottom-color: rgba(0, 0, 0, 0.06);
    }

    .quiz-stem {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 1.75rem;
      line-height: 1.7;
    }

    .options-grid {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      margin-bottom: 1.5rem;
    }

    .option-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.25rem;
      border-radius: 12px;
      border: 1px solid var(--card-border);
      background: rgba(255, 255, 255, 0.03);
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
    }

    .option-item:hover {
      background: rgba(99, 102, 241, 0.08);
      border-color: var(--accent-primary);
      transform: translateX(3px);
    }

    .option-letter {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.08);
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.95rem;
      flex-shrink: 0;
      transition: all 0.2s ease;
    }

    .option-text {
      font-size: 1.05rem;
      color: var(--text-main);
      flex: 1;
    }

    /* Option States */
    .option-item.correct {
      background: var(--success-bg);
      border-color: var(--success);
    }
    .option-item.correct .option-letter {
      background: var(--success);
      color: #FFF;
    }

    .option-item.wrong {
      background: var(--danger-bg);
      border-color: var(--danger);
    }
    .option-item.wrong .option-letter {
      background: var(--danger);
      color: #FFF;
    }

    .option-item.disabled {
      cursor: not-allowed;
      opacity: 0.85;
      transform: none !important;
    }

    /* Explanation Box */
    .explain-card {
      display: none;
      margin-top: 1.5rem;
      padding: 1.25rem 1.5rem;
      border-radius: 12px;
      background: rgba(99, 102, 241, 0.08);
      border-left: 4px solid var(--accent-primary);
      animation: fadeIn 0.3s ease;
    }

    .explain-card.active {
      display: block;
    }

    .explain-title {
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--accent-primary);
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .explain-body {
      font-size: 0.95rem;
      color: var(--text-main);
      line-height: 1.7;
    }

    /* Exam Mode Floating Question Matrix */
    .exam-timer-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 14px;
      padding: 0.75rem 1.25rem;
      margin-bottom: 1rem;
      box-shadow: var(--card-shadow);
    }

    .timer-display {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--accent-primary);
      font-variant-numeric: tabular-nums;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .timer-display.pulse-urgent {
      color: var(--danger);
      animation: pulse 1s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    .question-matrix {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
      gap: 0.45rem;
      padding: 1rem;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 14px;
      margin-bottom: 1.25rem;
    }

    .q-matrix-btn {
      aspect-ratio: 1;
      border-radius: 8px;
      border: 1px solid var(--card-border);
      background: rgba(255, 255, 255, 0.03);
      color: var(--text-sub);
      font-weight: 700;
      font-size: 0.82rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .q-matrix-btn:hover {
      border-color: var(--accent-primary);
    }

    .q-matrix-btn.current {
      border-color: var(--accent-primary);
      background: rgba(99, 102, 241, 0.2);
      color: #FFF;
      box-shadow: 0 0 8px var(--accent-glow);
    }

    .q-matrix-btn.answered {
      background: var(--accent-primary);
      border-color: var(--accent-primary);
      color: #FFF;
    }

    /* Modal for Exam Report */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(8px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
    }

    .modal-overlay.active {
      display: flex;
    }

    .modal-box {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      max-width: 580px;
      width: 100%;
      padding: 2.25rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
      text-align: center;
      animation: modalSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes modalSlide {
      from { transform: scale(0.9) translateY(20px); opacity: 0; }
      to { transform: scale(1) translateY(0); opacity: 1; }
    }

    .score-circle {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6366F1, #EC4899);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.25rem;
      font-size: 2.5rem;
      font-weight: 800;
      color: #FFF;
      box-shadow: 0 10px 25px rgba(99, 102, 241, 0.5);
    }

    .report-stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
      margin: 1.5rem 0;
    }

    .report-stat-item {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 0.75rem;
    }

    .report-stat-item .val {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-main);
    }

    .report-stat-item .lbl {
      font-size: 0.75rem;
      color: var(--text-sub);
    }

    /* Empty state */
    .empty-card {
      text-align: center;
      padding: 4rem 2rem;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
    }

    .empty-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      opacity: 0.6;
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 1.5rem;
      color: var(--text-muted);
      font-size: 0.8rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      header {
        flex-direction: column;
        align-items: stretch;
        padding: 0.75rem;
      }
      .nav-tabs {
        overflow-x: auto;
        justify-content: flex-start;
      }
      .nav-btn {
        padding: 0.4rem 0.65rem;
        font-size: 0.8rem;
        white-space: nowrap;
      }
      .flashcard {
        padding: 1.5rem 1.25rem;
        min-height: 320px;
      }
      .flashcard-content {
        font-size: 1.05rem;
      }
      .flashcard-actions {
        flex-direction: column;
        align-items: stretch;
      }
      .btn-group-left, .btn-group-right {
        justify-content: space-between;
      }
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header>
    <div class="brand-area">
      <div class="brand-logo">政</div>
      <div class="brand-title">
        <h1>专升本政治考前冲刺通关站</h1>
        <p>成人高考专升本 · 马原毛概 (119条) + 习思想 (100条)</p>
      </div>
    </div>

    <!-- Navigation Modes -->
    <nav class="nav-tabs" id="navTabs">
      <button class="nav-btn active" data-mode="flashcard">
        <span>📖</span> 考点挖空背诵卡
      </button>
      <button class="nav-btn" data-mode="quiz">
        <span>📝</span> 模拟实战选择题
      </button>
      <button class="nav-btn" data-mode="exam">
        <span>⏱️</span> 全真限时模考
      </button>
      <button class="nav-btn" data-mode="notebook">
        <span>📕</span> 错题与复习本
      </button>
    </nav>

    <div class="header-actions">
      <button class="icon-btn" id="soundToggle" title="音效开关">🔊</button>
      <button class="icon-btn" id="themeToggle" title="深浅主题切换">🌙</button>
      <button class="icon-btn" id="resetDataBtn" title="清空刷题记录">🔄</button>
    </div>
  </header>

  <!-- Main Container -->
  <main class="container">

    <!-- Top Stats Banner -->
    <section class="stats-ribbon">
      <div class="stat-card">
        <div class="stat-info">
          <div class="stat-label">考点背诵已掌握</div>
          <div class="stat-val" id="statMasteredCount">0 / 219</div>
        </div>
        <div class="stat-badge" style="background: rgba(16, 185, 129, 0.15); color: #10B981;">✓</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <div class="stat-label">背诵重点/易错标记</div>
          <div class="stat-val" id="statStarredCount">0</div>
        </div>
        <div class="stat-badge" style="background: rgba(245, 158, 11, 0.15); color: #F59E0B;">★</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <div class="stat-label">选择题累计错题</div>
          <div class="stat-val" id="statWrongCount">0</div>
        </div>
        <div class="stat-badge" style="background: rgba(239, 68, 68, 0.15); color: #EF4444;">✕</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <div class="stat-label">模考最高成绩</div>
          <div class="stat-val" id="statBestScore">-- 分</div>
        </div>
        <div class="stat-badge" style="background: rgba(99, 102, 241, 0.15); color: #6366F1;">🏆</div>
      </div>
    </section>

    <!-- MODE 1: 考点挖空背诵卡 (Flashcards) -->
    <section class="mode-view active" id="viewFlashcard">
      <div class="control-panel">
        <div class="pill-group" id="fcPartFilter">
          <button class="pill-btn active" data-part="0">全部 219 条</button>
          <button class="pill-btn" data-part="1">第一部分 马原毛概 (119条)</button>
          <button class="pill-btn" data-part="2">第二部分 习思想 (100条)</button>
        </div>
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" id="fcSearchInput" placeholder="输入关键词检索考点...">
        </div>
      </div>

      <div class="flashcard-wrapper">
        <div class="flashcard" id="mainFlashcard">
          <div>
            <div class="flashcard-meta">
              <span class="flashcard-tag-badge" id="fcPartBadge">第一部分 马原与毛概</span>
              <span class="flashcard-progress-text" id="fcProgressIndicator">第 1 / 219 条</span>
            </div>
            <h2 class="flashcard-title" id="fcTitle">
              <span id="fcNumBadge">1.</span>
              <span id="fcTitleText">世界观的定义</span>
            </h2>
            <div class="flashcard-content" id="fcContent">
              <!-- Rendered blanks here -->
            </div>
          </div>

          <div class="flashcard-actions">
            <div class="btn-group-left">
              <button class="action-btn primary" id="btnRevealAll" title="快捷键: 空格键">
                <span>👁️</span> 揭晓全部 (Space)
              </button>
              <button class="action-btn" id="btnHideAll">
                <span>🔒</span> 重新遮盖
              </button>
            </div>
            <div class="btn-group-right">
              <button class="action-btn success" id="btnMarkMastered" title="快捷键: 回车键">
                <span>✓</span> 标记已掌握 (Enter)
              </button>
              <button class="action-btn warning" id="btnMarkStar">
                <span>★</span> 设为重点易错
              </button>
              <button class="action-btn" id="btnPrevCard" title="快捷键: 方向键左">
                <span>←</span> 上一条
              </button>
              <button class="action-btn" id="btnNextCard" title="快捷键: 方向键右">
                下一条 <span>→</span>
              </button>
              <button class="action-btn" id="btnRandomCard">
                <span>🎲</span> 随机抽取
              </button>
            </div>
          </div>
        </div>

        <div class="jump-panel">
          <input type="range" class="slider-range" id="fcSlider" min="0" max="218" value="0">
          <div class="jump-input-box">
            <span>跳转至:</span>
            <input type="number" id="fcJumpInput" min="1" max="219" value="1">
            <span>/ <span id="fcTotalCountText">219</span></span>
          </div>
        </div>
      </div>
    </section>

    <!-- MODE 2: 模拟实战单选题 (Practice Quiz) -->
    <section class="mode-view" id="viewQuiz">
      <div class="control-panel">
        <div class="pill-group" id="quizPartFilter">
          <button class="pill-btn active" data-part="0">全部 219 题 (全量对齐)</button>
          <button class="pill-btn" data-part="1">第一部分 马原毛概 (119题)</button>
          <button class="pill-btn" data-part="2">第二部分 习思想 (100题)</button>
          <button class="pill-btn" data-random="30">随机 30 题特训</button>
        </div>
        <div style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; color: var(--text-sub);">
          <span>当前第 <strong id="quizProgressNum" style="color: var(--accent-primary); font-size: 0.95rem;">1</strong> / <span id="quizTotalNum">219</span> 题</span>
          <span style="opacity: 0.4;">|</span>
          <span>跳转题号:</span>
          <input type="number" id="quizJumpInput" min="1" max="219" value="1" style="width: 55px; text-align: center; background: rgba(0,0,0,0.2); border: 1px solid var(--card-border); border-radius: 6px; padding: 0.2rem 0.4rem; color: var(--text-main); outline: none;">
        </div>
      </div>

      <div class="quiz-card">
        <div class="quiz-header">
          <span class="flashcard-tag-badge" id="quizCategoryBadge">哲学基本问题</span>
          <span style="font-size: 0.85rem; color: var(--text-sub);" id="quizModeIndicator">单项选择题</span>
        </div>

        <div class="quiz-stem" id="quizStem">
          哲学的基本问题是（ ）。
        </div>

        <div class="options-grid" id="quizOptionsList">
          <!-- Options A, B, C, D -->
        </div>

        <div class="explain-card" id="quizExplainCard">
          <div class="explain-title">
            <span>💡 考点深度解析</span>
          </div>
          <div class="explain-body" id="quizExplainBody">
            考点第3条：思维和存在的关系问题是哲学的基本问题。
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.75rem; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 1.25rem;">
          <button class="action-btn" id="quizPrevBtn">← 上一题</button>
          <div style="display: flex; gap: 0.6rem;">
            <button class="action-btn" id="quizCollectBtn">★ 收藏本题</button>
            <button class="action-btn primary" id="quizNextBtn">下一题 →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- MODE 3: 全真限时模考 (Mock Exam) -->
    <section class="mode-view" id="viewExam">
      <!-- Exam Start Intro -->
      <div id="examIntroCard" class="quiz-card" style="text-align: center; padding: 3rem 2rem;">
        <div style="font-size: 3.5rem; margin-bottom: 1rem;">⏱️</div>
        <h2 style="font-size: 1.6rem; margin-bottom: 0.75rem;">专升本政治全真模拟机考</h2>
        <p style="color: var(--text-sub); max-width: 500px; margin: 0 auto 2rem; font-size: 0.95rem;">
          系统将从题库中随机抽取 <strong>30 道高频单选题</strong>（满分 100 分），考试时间 <strong>20 分钟</strong>。交卷后生成全套成绩单、错题复盘及评语建议。
        </p>
        <button class="action-btn primary" id="startExamBtn" style="padding: 0.8rem 2.5rem; font-size: 1.1rem; margin: 0 auto;">
          🚀 立即开考（开始倒计时）
        </button>
      </div>

      <!-- Live Exam Container -->
      <div id="examLiveContainer" style="display: none;">
        <div class="exam-timer-bar">
          <div class="timer-display" id="examTimerDisplay">
            <span>⏳</span> <span id="timerCountdown">20:00</span>
          </div>
          <div style="display: flex; gap: 0.6rem;">
            <button class="action-btn" id="examMarkReviewBtn">🚩 标记本题待复查</button>
            <button class="action-btn primary" id="examSubmitBtn" style="background: #10B981; border-color: #10B981;">
              📝 立即交卷
            </button>
          </div>
        </div>

        <div class="question-matrix" id="examMatrix">
          <!-- 30 question chips -->
        </div>

        <div class="quiz-card">
          <div class="quiz-header">
            <span class="flashcard-tag-badge" id="examCatBadge">第 1 题</span>
            <span style="font-size: 0.85rem; color: var(--text-sub);">单选 · 满分 100 分制</span>
          </div>
          <div class="quiz-stem" id="examStem">
            题目加载中...
          </div>
          <div class="options-grid" id="examOptionsList">
            <!-- Exam Options -->
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
            <button class="action-btn" id="examPrevBtn">← 上一题</button>
            <button class="action-btn primary" id="examNextBtn">下一题 →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- MODE 4: 错题与复习本 (Mistake Notebook) -->
    <section class="mode-view" id="viewNotebook">
      <div class="control-panel">
        <div class="pill-group" id="nbTypeFilter">
          <button class="pill-btn active" data-nb="wrong">选择题错题集 (<span id="nbWrongBadge">0</span>)</button>
          <button class="pill-btn" data-nb="starred">背诵疑难考点 (<span id="nbStarBadge">0</span>)</button>
        </div>
        <button class="action-btn" id="clearNbBtn" style="color: var(--danger); border-color: rgba(239,68,68,0.3);">
          🗑️ 清空当前本
        </button>
      </div>

      <div id="nbContentList" style="display: flex; flex-direction: column; gap: 1rem;">
        <!-- Items in notebook -->
      </div>
    </section>

  </main>

  <!-- Modal for Exam Result -->
  <div class="modal-overlay" id="examResultModal">
    <div class="modal-box">
      <div class="score-circle" id="modalScore">85</div>
      <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem;" id="modalVerdict">冲刺表现优秀！</h3>
      <p style="color: var(--text-sub); font-size: 0.9rem;" id="modalComment">距离专升本政治高分冲刺仅一步之遥！</p>

      <div class="report-stats-grid">
        <div class="report-stat-item">
          <div class="val" id="modalAccuracy">85%</div>
          <div class="lbl">正确率</div>
        </div>
        <div class="report-stat-item">
          <div class="val" id="modalTimeSpent">08:24</div>
          <div class="lbl">答题用时</div>
        </div>
        <div class="report-stat-item">
          <div class="val" id="modalWrongCount">4 题</div>
          <div class="lbl">错题数量</div>
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; justify-content: center; margin-top: 1.5rem;">
        <button class="action-btn primary" id="modalCloseBtn">返回主界面</button>
        <button class="action-btn" id="modalViewMistakesBtn" style="background: rgba(239, 68, 68, 0.15); border-color: var(--danger); color: var(--danger);">
          查看错题解析
        </button>
      </div>
    </div>
  </div>

  <footer>
    政治考前冲刺资料 · 纯 HTML 专升本交互答题系统 · 本地持久化离线畅跑
  </footer>

  <!-- App Logic & Embedded Data -->
  <script>
    // --- EMBEDDED COMPLETE DATA ---
    const POINT_DATA = ${JSON.stringify(allPoints)};
    const QUIZ_DATA = ${JSON.stringify(quizList)};

    // --- SYNTHETIC AUDIO ENGINE (Web Audio API) ---
    class SoundEngine {
      constructor() {
        this.ctx = null;
        this.enabled = localStorage.getItem('political_quiz_sound') !== 'false';
      }

      init() {
        if (!this.ctx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) this.ctx = new AudioContext();
        }
      }

      toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('political_quiz_sound', this.enabled ? 'true' : 'false');
        return this.enabled;
      }

      playSuccess() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const freqs = [523.25, 659.25, 783.99]; // C5, E5, G5
        freqs.forEach((f, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now + i * 0.08);
          gain.gain.setValueAtTime(0.12, now + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.26);
        });
      }

      playWrong() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.2);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.23);
      }

      playClick() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
      }

      playFanfare() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.5];
        const now = this.ctx.currentTime;
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
          gain.gain.setValueAtTime(0.15, now + idx * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.35);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.12);
          osc.stop(now + idx * 0.12 + 0.36);
        });
      }
    }

    const sound = new SoundEngine();

    // --- STATE MANAGEMENT (LocalStorage) ---
    const STORAGE = {
      getMastered() {
        try { return JSON.parse(localStorage.getItem('pol_mastered') || '[]'); } catch(e) { return []; }
      },
      setMastered(arr) {
        localStorage.setItem('pol_mastered', JSON.stringify(arr));
      },
      getStarred() {
        try { return JSON.parse(localStorage.getItem('pol_starred') || '[]'); } catch(e) { return []; }
      },
      setStarred(arr) {
        localStorage.setItem('pol_starred', JSON.stringify(arr));
      },
      getWrongQuiz() {
        try { return JSON.parse(localStorage.getItem('pol_wrong_quiz') || '[]'); } catch(e) { return []; }
      },
      setWrongQuiz(arr) {
        localStorage.setItem('pol_wrong_quiz', JSON.stringify(arr));
      },
      getBestScore() {
        return localStorage.getItem('pol_best_score') || null;
      },
      setBestScore(s) {
        localStorage.setItem('pol_best_score', s);
      }
    };

    // Global App State
    const state = {
      mode: 'flashcard',
      theme: localStorage.getItem('political_quiz_theme') || 'dark',
      mastered: new Set(STORAGE.getMastered()),
      starred: new Set(STORAGE.getStarred()),
      wrongQuiz: new Set(STORAGE.getWrongQuiz()),
      bestScore: STORAGE.getBestScore(),

      // Flashcard state
      fcPart: 0,
      fcSearch: '',
      filteredPoints: [...POINT_DATA],
      fcIndex: 0,
      revealedBlanks: new Set(),

      // Quiz state
      quizPart: 0,
      quizFiltered: [...QUIZ_DATA],
      quizIndex: 0,
      quizAnswered: false,

      // Exam state
      examActive: false,
      examQuestions: [],
      examCurrentIdx: 0,
      examAnswers: {}, // { qIdx: optIdx }
      examMarked: new Set(),
      examTimeRemaining: 20 * 60,
      examTimerInterval: null,
      examStartTime: 0
    };

    // Apply Theme
    function applyTheme(theme) {
      state.theme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('political_quiz_theme', theme);
      document.getElementById('themeToggle').textContent = theme === 'dark' ? '🌙' : '🌞';
    }
    applyTheme(state.theme);

    // Update Top Ribbon Statistics
    function updateStatsRibbon() {
      document.getElementById('statMasteredCount').textContent = \`\${state.mastered.size} / \${POINT_DATA.length}\`;
      document.getElementById('statStarredCount').textContent = state.starred.size;
      document.getElementById('statWrongCount').textContent = state.wrongQuiz.size;
      document.getElementById('statBestScore').textContent = state.bestScore ? \`\${state.bestScore} 分\` : '-- 分';
      document.getElementById('nbWrongBadge').textContent = state.wrongQuiz.size;
      document.getElementById('nbStarBadge').textContent = state.starred.size;
    }

    // --- MODE 1: FLASHCARD LOGIC ---
    function filterFlashcards() {
      let list = POINT_DATA;
      if (state.fcPart === 1) {
        list = list.filter(p => p.part === 1);
      } else if (state.fcPart === 2) {
        list = list.filter(p => p.part === 2);
      }
      if (state.fcSearch.trim()) {
        const query = state.fcSearch.trim().toLowerCase();
        list = list.filter(p => 
          p.title.toLowerCase().indexOf(query) >= 0 ||
          p.content.toLowerCase().indexOf(query) >= 0 ||
          (p.tags && p.tags.some(t => t.toLowerCase().indexOf(query) >= 0))
        );
      }
      state.filteredPoints = list;
      if (state.fcIndex >= list.length) {
        state.fcIndex = Math.max(0, list.length - 1);
      }
      renderFlashcard();
    }

    function renderFlashcard() {
      const list = state.filteredPoints;
      const total = list.length;
      document.getElementById('fcTotalCountText').textContent = total;
      const slider = document.getElementById('fcSlider');
      slider.max = Math.max(0, total - 1);
      slider.value = state.fcIndex;
      document.getElementById('fcJumpInput').max = total;
      document.getElementById('fcJumpInput').value = total === 0 ? 0 : state.fcIndex + 1;

      if (total === 0) {
        document.getElementById('fcTitleText').textContent = '未检索到符合条件的考点';
        document.getElementById('fcNumBadge').textContent = '';
        document.getElementById('fcContent').textContent = '请尝试清除搜索关键词或切换分类。';
        document.getElementById('fcProgressIndicator').textContent = '0 / 0';
        return;
      }

      const point = list[state.fcIndex];
      document.getElementById('fcPartBadge').textContent = point.part === 1 ? '第一部分 马原与毛概' : '第二部分 习思想概论';
      document.getElementById('fcProgressIndicator').textContent = \`第 \${state.fcIndex + 1} / \${total} 条 (考点#\${point.num})\`;
      document.getElementById('fcNumBadge').textContent = \`\${point.num}.\`;
      document.getElementById('fcTitleText').textContent = point.title;

      // Render content with interactive blanks
      const contentEl = document.getElementById('fcContent');
      contentEl.innerHTML = '';

      // Pattern: {{blank:text}}
      const regex = /\\{\\{blank:([^\\}]+)\\}\\}/g;
      let lastIndex = 0;
      let match;
      let blankCount = 0;

      while ((match = regex.exec(point.content)) !== null) {
        // Plain text before blank
        if (match.index > lastIndex) {
          const plainText = point.content.substring(lastIndex, match.index);
          contentEl.appendChild(document.createTextNode(plainText));
        }

        const blankWord = match[1];
        const blankId = \`\${point.id}-\${blankCount}\`;
        blankCount++;

        const isRevealed = state.revealedBlanks.has(blankId);

        const blankBtn = document.createElement('button');
        blankBtn.className = \`blank-btn \${isRevealed ? 'revealed-mode' : 'hidden-mode'}\`;
        blankBtn.textContent = isRevealed ? blankWord : '【 点击刮开 】';
        blankBtn.title = isRevealed ? '点击再次隐藏' : '点击揭晓考点词';

        blankBtn.onclick = () => {
          sound.playClick();
          if (state.revealedBlanks.has(blankId)) {
            state.revealedBlanks.delete(blankId);
          } else {
            state.revealedBlanks.add(blankId);
          }
          renderFlashcard();
        };

        const spanSlot = document.createElement('span');
        spanSlot.className = 'blank-slot';
        spanSlot.appendChild(blankBtn);
        contentEl.appendChild(spanSlot);

        lastIndex = regex.lastIndex;
      }

      // Remaining plain text
      if (lastIndex < point.content.length) {
        contentEl.appendChild(document.createTextNode(point.content.substring(lastIndex)));
      }

      // Mastery & Star Buttons State
      const btnMaster = document.getElementById('btnMarkMastered');
      if (state.mastered.has(point.id)) {
        btnMaster.classList.add('active');
        btnMaster.innerHTML = '<span>✓</span> 已掌握 (点击取消)';
      } else {
        btnMaster.classList.remove('active');
        btnMaster.innerHTML = '<span>✓</span> 标记已掌握 (Enter)';
      }

      const btnStar = document.getElementById('btnMarkStar');
      if (state.starred.has(point.id)) {
        btnStar.classList.add('active');
        btnStar.innerHTML = '<span>★</span> 已设为易错 (点击取消)';
      } else {
        btnStar.classList.remove('active');
        btnStar.innerHTML = '<span>★</span> 设为重点易错';
      }
    }

    function revealAllCurrentBlanks() {
      if (state.filteredPoints.length === 0) return;
      sound.playClick();
      const point = state.filteredPoints[state.fcIndex];
      const regex = /\\{\\{blank:([^\\}]+)\\}\\}/g;
      let count = 0;
      while (regex.exec(point.content) !== null) {
        state.revealedBlanks.add(\`\${point.id}-\${count}\`);
        count++;
      }
      renderFlashcard();
    }

    function hideAllCurrentBlanks() {
      if (state.filteredPoints.length === 0) return;
      sound.playClick();
      const point = state.filteredPoints[state.fcIndex];
      const regex = /\\{\\{blank:([^\\}]+)\\}\\}/g;
      let count = 0;
      while (regex.exec(point.content) !== null) {
        state.revealedBlanks.delete(\`\${point.id}-\${count}\`);
        count++;
      }
      renderFlashcard();
    }

    function toggleMastered() {
      if (state.filteredPoints.length === 0) return;
      const point = state.filteredPoints[state.fcIndex];
      if (state.mastered.has(point.id)) {
        state.mastered.delete(point.id);
      } else {
        state.mastered.add(point.id);
        sound.playSuccess();
      }
      STORAGE.setMastered(Array.from(state.mastered));
      updateStatsRibbon();
      renderFlashcard();
    }

    function toggleStarred() {
      if (state.filteredPoints.length === 0) return;
      sound.playClick();
      const point = state.filteredPoints[state.fcIndex];
      if (state.starred.has(point.id)) {
        state.starred.delete(point.id);
      } else {
        state.starred.add(point.id);
      }
      STORAGE.setStarred(Array.from(state.starred));
      updateStatsRibbon();
      renderFlashcard();
    }

    // --- MODE 2: PRACTICE QUIZ LOGIC ---
    function filterQuiz() {
      if (state.quizPart === 0) {
        state.quizFiltered = [...QUIZ_DATA];
      } else {
        state.quizFiltered = QUIZ_DATA.filter(q => q.part === state.quizPart);
      }
      state.quizIndex = 0;
      state.quizAnswered = false;
      renderQuiz();
    }

    function renderQuiz() {
      const list = state.quizFiltered;
      const totalEl = document.getElementById('quizTotalNum');
      if (totalEl) totalEl.textContent = list.length;
      const progEl = document.getElementById('quizProgressNum');
      if (progEl) progEl.textContent = state.quizIndex + 1;
      const jumpInput = document.getElementById('quizJumpInput');
      if (jumpInput) {
        jumpInput.max = list.length;
        jumpInput.value = list.length === 0 ? 0 : state.quizIndex + 1;
      }

      if (list.length === 0) return;
      const q = list[state.quizIndex];

      document.getElementById('quizCategoryBadge').textContent = q.category || '核心考点';
      document.getElementById('quizStem').textContent = \`\${state.quizIndex + 1}. \${q.question}\`;

      const optionsList = document.getElementById('quizOptionsList');
      optionsList.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      const explainCard = document.getElementById('quizExplainCard');
      explainCard.classList.remove('active');
      state.quizAnswered = false;

      q.options.forEach((optText, optIdx) => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option-item';
        optDiv.innerHTML = \`
          <div class="option-letter">\${letters[optIdx]}</div>
          <div class="option-text">\${optText}</div>
        \`;

        optDiv.onclick = () => {
          if (state.quizAnswered) return;
          state.quizAnswered = true;

          const isCorrect = optIdx === q.answer;
          if (isCorrect) {
            optDiv.classList.add('correct');
            sound.playSuccess();
          } else {
            optDiv.classList.add('wrong');
            sound.playWrong();
            // Highlight correct option
            const allOpts = optionsList.querySelectorAll('.option-item');
            if (allOpts[q.answer]) allOpts[q.answer].classList.add('correct');

            // Add to wrong quiz set
            state.wrongQuiz.add(q.id);
            STORAGE.setWrongQuiz(Array.from(state.wrongQuiz));
            updateStatsRibbon();
          }

          // Disable options
          optionsList.querySelectorAll('.option-item').forEach(el => el.classList.add('disabled'));

          // Show explanation
          document.getElementById('quizExplainBody').textContent = q.explain;
          explainCard.classList.add('active');
        };

        optionsList.appendChild(optDiv);
      });

      // Update collect button
      const collectBtn = document.getElementById('quizCollectBtn');
      if (state.starred.has(q.id + 1000)) { // quiz bookmarks marked with 1000 offset
        collectBtn.style.color = '#F59E0B';
        collectBtn.textContent = '★ 已收藏';
      } else {
        collectBtn.style.color = '';
        collectBtn.textContent = '★ 收藏本题';
      }
    }

    // --- MODE 3: TIMED MOCK EXAM LOGIC ---
    function startExam() {
      sound.playClick();
      // Pick 30 random questions (shuffled)
      const shuffled = [...QUIZ_DATA].sort(() => 0.5 - Math.random());
      state.examQuestions = shuffled.slice(0, 30);
      state.examCurrentIdx = 0;
      state.examAnswers = {};
      state.examMarked.clear();
      state.examTimeRemaining = 20 * 60; // 20 mins
      state.examStartTime = Date.now();
      state.examActive = true;

      document.getElementById('examIntroCard').style.display = 'none';
      document.getElementById('examLiveContainer').style.display = 'block';

      renderExamMatrix();
      renderExamQuestion();

      if (state.examTimerInterval) clearInterval(state.examTimerInterval);
      state.examTimerInterval = setInterval(() => {
        state.examTimeRemaining--;
        updateExamTimerDisplay();
        if (state.examTimeRemaining <= 0) {
          clearInterval(state.examTimerInterval);
          submitExam();
        }
      }, 1000);
    }

    function updateExamTimerDisplay() {
      const mins = Math.floor(state.examTimeRemaining / 60);
      const secs = state.examTimeRemaining % 60;
      const str = \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
      const disp = document.getElementById('timerCountdown');
      disp.textContent = str;
      const timerBar = document.getElementById('examTimerDisplay');
      if (state.examTimeRemaining < 180) { // under 3 mins
        timerBar.classList.add('pulse-urgent');
      } else {
        timerBar.classList.remove('pulse-urgent');
      }
    }

    function renderExamMatrix() {
      const matrix = document.getElementById('examMatrix');
      matrix.innerHTML = '';
      state.examQuestions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'q-matrix-btn';
        if (idx === state.examCurrentIdx) btn.classList.add('current');
        if (state.examAnswers[idx] !== undefined) btn.classList.add('answered');
        if (state.examMarked.has(idx)) btn.style.borderColor = '#F59E0B';

        btn.textContent = idx + 1;
        btn.onclick = () => {
          sound.playClick();
          state.examCurrentIdx = idx;
          renderExamMatrix();
          renderExamQuestion();
        };
        matrix.appendChild(btn);
      });
    }

    function renderExamQuestion() {
      const q = state.examQuestions[state.examCurrentIdx];
      document.getElementById('examCatBadge').textContent = \`第 \${state.examCurrentIdx + 1} / 30 题 · \${q.category}\`;
      document.getElementById('examStem').textContent = q.question;

      const optsList = document.getElementById('examOptionsList');
      optsList.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      q.options.forEach((optText, optIdx) => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option-item';
        if (state.examAnswers[state.examCurrentIdx] === optIdx) {
          optDiv.classList.add('correct'); // Highlight selected
        }

        optDiv.innerHTML = \`
          <div class="option-letter">\${letters[optIdx]}</div>
          <div class="option-text">\${optText}</div>
        \`;

        optDiv.onclick = () => {
          sound.playClick();
          state.examAnswers[state.examCurrentIdx] = optIdx;
          renderExamMatrix();
          renderExamQuestion();
        };

        optsList.appendChild(optDiv);
      });

      // Review mark btn
      const markBtn = document.getElementById('examMarkReviewBtn');
      if (state.examMarked.has(state.examCurrentIdx)) {
        markBtn.style.color = '#F59E0B';
        markBtn.textContent = '🚩 已标记待复查';
      } else {
        markBtn.style.color = '';
        markBtn.textContent = '🚩 标记本题待复查';
      }
    }

    function submitExam() {
      if (state.examTimerInterval) clearInterval(state.examTimerInterval);
      state.examActive = false;

      // Calculate score
      let correctCount = 0;
      const wrongList = [];

      state.examQuestions.forEach((q, idx) => {
        const userChoice = state.examAnswers[idx];
        if (userChoice === q.answer) {
          correctCount++;
        } else {
          wrongList.push({ question: q, userChoice });
          state.wrongQuiz.add(q.id);
        }
      });

      STORAGE.setWrongQuiz(Array.from(state.wrongQuiz));
      updateStatsRibbon();

      // Score: 100 points scale
      const score = Math.round((correctCount / 30) * 100);
      if (!state.bestScore || score > parseInt(state.bestScore, 10)) {
        state.bestScore = score;
        STORAGE.setBestScore(score);
        updateStatsRibbon();
      }

      // Time taken
      const timeSpentSecs = 1200 - state.examTimeRemaining;
      const mins = Math.floor(timeSpentSecs / 60);
      const secs = timeSpentSecs % 60;
      const timeStr = \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;

      // Show Result Modal
      document.getElementById('modalScore').textContent = score;
      document.getElementById('modalAccuracy').textContent = \`\${Math.round((correctCount / 30) * 100)}%\`;
      document.getElementById('modalTimeSpent').textContent = timeStr;
      document.getElementById('modalWrongCount').textContent = \`\${wrongList.length} 题\`;

      let verdict = '表现优异，金榜题名！';
      let comment = '政治理论功底非常扎实，保持当前状态，冲刺高分！';
      if (score < 60) {
        verdict = '仍需加倍努力夯实基础！';
        comment = '部分核心考点尚未完全吃透，建议回到【挖空背诵卡】重点复习。';
      } else if (score < 80) {
        verdict = '成绩良好，稳步冲刺！';
        comment = '已掌握绝大部分基础知识，重点关注错题本中的薄弱环节。';
      }
      document.getElementById('modalVerdict').textContent = verdict;
      document.getElementById('modalComment').textContent = comment;

      sound.playFanfare();
      document.getElementById('examResultModal').classList.add('active');
    }

    // --- MODE 4: NOTEBOOK LOGIC ---
    let currentNbTab = 'wrong';

    function renderNotebook() {
      const container = document.getElementById('nbContentList');
      container.innerHTML = '';

      if (currentNbTab === 'wrong') {
        const wrongIds = Array.from(state.wrongQuiz);
        if (wrongIds.length === 0) {
          container.innerHTML = \`
            <div class="empty-card">
              <div class="empty-icon">🎉</div>
              <h3>暂无错题，继续保持！</h3>
              <p style="color: var(--text-sub); margin-top: 0.5rem;">在模拟答题或考试中做错的题目会自动收录至此处。</p>
            </div>
          \`;
          return;
        }

        const questions = QUIZ_DATA.filter(q => wrongIds.indexOf(q.id) >= 0);
        questions.forEach((q, idx) => {
          const card = document.createElement('div');
          card.className = 'quiz-card';
          card.innerHTML = \`
            <div class="quiz-header">
              <span class="flashcard-tag-badge" style="background: rgba(239, 68, 68, 0.15); color: #EF4444;">错题 #\${idx + 1} · \${q.category}</span>
              <button class="action-btn" style="padding: 0.25rem 0.6rem; font-size: 0.78rem; color: #10B981;" data-remove-wrong="\${q.id}">
                ✓ 消灭错题（移出）
              </button>
            </div>
            <div class="quiz-stem" style="font-size: 1.1rem; margin-bottom: 1rem;">
              \${q.question}
            </div>
            <div style="background: rgba(16, 185, 129, 0.1); border-left: 3px solid #10B981; padding: 0.6rem 1rem; border-radius: 8px; margin-bottom: 0.75rem; font-size: 0.95rem;">
              <strong>正确答案：</strong>\${['A', 'B', 'C', 'D'][q.answer]}. \${q.options[q.answer]}
            </div>
            <div style="font-size: 0.88rem; color: var(--text-sub); line-height: 1.6;">
              <strong>考点依据：</strong>\${q.explain}
            </div>
          \`;

          card.querySelector('[data-remove-wrong]').onclick = (e) => {
            sound.playSuccess();
            state.wrongQuiz.delete(q.id);
            STORAGE.setWrongQuiz(Array.from(state.wrongQuiz));
            updateStatsRibbon();
            renderNotebook();
          };

          container.appendChild(card);
        });

      } else {
        // Starred flashcards
        const starIds = Array.from(state.starred);
        if (starIds.length === 0) {
          container.innerHTML = \`
            <div class="empty-card">
              <div class="empty-icon">🌟</div>
              <h3>暂无重点标记考点</h3>
              <p style="color: var(--text-sub); margin-top: 0.5rem;">在背诵卡片中点击【设为重点易错】即可快速归纳于此。</p>
            </div>
          \`;
          return;
        }

        const points = POINT_DATA.filter(p => starIds.indexOf(p.id) >= 0);
        points.forEach((p, idx) => {
          const card = document.createElement('div');
          card.className = 'quiz-card';
          // Render plain content with highlights
          const formatted = p.content.replace(/\\{\\{blank:([^\\}]+)\\}\\}/g, '<strong style="color: #818CF8; border-bottom: 2px solid #818CF8;">$1</strong>');
          card.innerHTML = \`
            <div class="quiz-header">
              <span class="flashcard-tag-badge" style="background: rgba(245, 158, 11, 0.15); color: #F59E0B;">考点 #\${p.num} · \${p.title}</span>
              <button class="action-btn" style="padding: 0.25rem 0.6rem; font-size: 0.78rem;" data-remove-star="\${p.id}">
                ✕ 取消标记
              </button>
            </div>
            <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main); white-space: pre-wrap;">\${formatted}</div>
          \`;

          card.querySelector('[data-remove-star]').onclick = () => {
            sound.playClick();
            state.starred.delete(p.id);
            STORAGE.setStarred(Array.from(state.starred));
            updateStatsRibbon();
            renderNotebook();
          };

          container.appendChild(card);
        });
      }
    }

    // --- EVENT LISTENERS ---
    function setupEvents() {
      // Nav Tabs
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.onclick = () => {
          sound.playClick();
          document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const mode = btn.dataset.mode;
          state.mode = mode;

          document.querySelectorAll('.mode-view').forEach(v => v.classList.remove('active'));
          if (mode === 'flashcard') {
            document.getElementById('viewFlashcard').classList.add('active');
            renderFlashcard();
          } else if (mode === 'quiz') {
            document.getElementById('viewQuiz').classList.add('active');
            renderQuiz();
          } else if (mode === 'exam') {
            document.getElementById('viewExam').classList.add('active');
          } else if (mode === 'notebook') {
            document.getElementById('viewNotebook').classList.add('active');
            renderNotebook();
          }
        };
      });

      // Flashcard Actions
      document.getElementById('btnRevealAll').onclick = revealAllCurrentBlanks;
      document.getElementById('btnHideAll').onclick = hideAllCurrentBlanks;
      document.getElementById('btnMarkMastered').onclick = toggleMastered;
      document.getElementById('btnMarkStar').onclick = toggleStarred;

      document.getElementById('btnNextCard').onclick = () => {
        sound.playClick();
        if (state.fcIndex < state.filteredPoints.length - 1) {
          state.fcIndex++;
          renderFlashcard();
        }
      };

      document.getElementById('btnPrevCard').onclick = () => {
        sound.playClick();
        if (state.fcIndex > 0) {
          state.fcIndex--;
          renderFlashcard();
        }
      };

      document.getElementById('btnRandomCard').onclick = () => {
        sound.playClick();
        const rand = Math.floor(Math.random() * state.filteredPoints.length);
        state.fcIndex = rand;
        renderFlashcard();
      };

      // Slider & Jump
      const slider = document.getElementById('fcSlider');
      slider.oninput = (e) => {
        state.fcIndex = parseInt(e.target.value, 10);
        renderFlashcard();
      };

      const jumpInput = document.getElementById('fcJumpInput');
      jumpInput.onchange = (e) => {
        const val = parseInt(e.target.value, 10) - 1;
        if (val >= 0 && val < state.filteredPoints.length) {
          state.fcIndex = val;
          renderFlashcard();
        }
      };

      // Flashcard Filters
      document.querySelectorAll('#fcPartFilter .pill-btn').forEach(btn => {
        btn.onclick = () => {
          sound.playClick();
          document.querySelectorAll('#fcPartFilter .pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.fcPart = parseInt(btn.dataset.part, 10);
          state.fcIndex = 0;
          filterFlashcards();
        };
      });

      document.getElementById('fcSearchInput').oninput = (e) => {
        state.fcSearch = e.target.value;
        state.fcIndex = 0;
        filterFlashcards();
      };

      // Quiz Actions
      document.getElementById('quizNextBtn').onclick = () => {
        sound.playClick();
        if (state.quizIndex < state.quizFiltered.length - 1) {
          state.quizIndex++;
          renderQuiz();
        } else {
          alert('本组题目已全部刷完！可切换分类继续练习或进入模拟考试。');
        }
      };

      document.getElementById('quizPrevBtn').onclick = () => {
        sound.playClick();
        if (state.quizIndex > 0) {
          state.quizIndex--;
          renderQuiz();
        }
      };

      document.getElementById('quizCollectBtn').onclick = () => {
        sound.playClick();
        const q = state.quizFiltered[state.quizIndex];
        const key = q.id + 1000;
        if (state.starred.has(key)) {
          state.starred.delete(key);
        } else {
          state.starred.add(key);
        }
        STORAGE.setStarred(Array.from(state.starred));
        updateStatsRibbon();
        renderQuiz();
      };

      const quizJump = document.getElementById('quizJumpInput');
      if (quizJump) {
        quizJump.onchange = (e) => {
          const val = parseInt(e.target.value, 10) - 1;
          if (val >= 0 && val < state.quizFiltered.length) {
            state.quizIndex = val;
            renderQuiz();
          }
        };
      }

      document.querySelectorAll('#quizPartFilter .pill-btn').forEach(btn => {
        btn.onclick = () => {
          sound.playClick();
          document.querySelectorAll('#quizPartFilter .pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          if (btn.dataset.random) {
            state.quizFiltered = [...QUIZ_DATA].sort(() => 0.5 - Math.random()).slice(0, 30);
            state.quizIndex = 0;
            renderQuiz();
          } else {
            state.quizPart = parseInt(btn.dataset.part, 10);
            filterQuiz();
          }
        };
      });

      // Exam Actions
      document.getElementById('startExamBtn').onclick = startExam;
      document.getElementById('examPrevBtn').onclick = () => {
        sound.playClick();
        if (state.examCurrentIdx > 0) {
          state.examCurrentIdx--;
          renderExamMatrix();
          renderExamQuestion();
        }
      };
      document.getElementById('examNextBtn').onclick = () => {
        sound.playClick();
        if (state.examCurrentIdx < 29) {
          state.examCurrentIdx++;
          renderExamMatrix();
          renderExamQuestion();
        }
      };
      document.getElementById('examMarkReviewBtn').onclick = () => {
        sound.playClick();
        if (state.examMarked.has(state.examCurrentIdx)) {
          state.examMarked.delete(state.examCurrentIdx);
        } else {
          state.examMarked.add(state.examCurrentIdx);
        }
        renderExamMatrix();
        renderExamQuestion();
      };
      document.getElementById('examSubmitBtn').onclick = () => {
        const answeredCount = Object.keys(state.examAnswers).length;
        if (answeredCount < 30) {
          if (!confirm(\`当前还有 \${30 - answeredCount} 道题未作答，确定立即提前交卷吗？\`)) {
            return;
          }
        }
        submitExam();
      };

      document.getElementById('modalCloseBtn').onclick = () => {
        document.getElementById('examResultModal').classList.remove('active');
        document.getElementById('examLiveContainer').style.display = 'none';
        document.getElementById('examIntroCard').style.display = 'block';
      };

      document.getElementById('modalViewMistakesBtn').onclick = () => {
        document.getElementById('examResultModal').classList.remove('active');
        document.getElementById('examLiveContainer').style.display = 'none';
        document.getElementById('examIntroCard').style.display = 'block';
        // Jump to notebook
        document.querySelector('[data-mode="notebook"]').click();
      };

      // Notebook Tab Switching
      document.querySelectorAll('#nbTypeFilter .pill-btn').forEach(btn => {
        btn.onclick = () => {
          sound.playClick();
          document.querySelectorAll('#nbTypeFilter .pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentNbTab = btn.dataset.nb;
          renderNotebook();
        };
      });

      document.getElementById('clearNbBtn').onclick = () => {
        if (!confirm('确定要清空当前的错题或标记记录吗？')) return;
        sound.playClick();
        if (currentNbTab === 'wrong') {
          state.wrongQuiz.clear();
          STORAGE.setWrongQuiz([]);
        } else {
          state.starred.clear();
          STORAGE.setStarred([]);
        }
        updateStatsRibbon();
        renderNotebook();
      };

      // Reset all data
      document.getElementById('resetDataBtn').onclick = () => {
        if (!confirm('确定要清空所有学习记录（背诵进度、错题本、最高分）重新开始吗？')) return;
        sound.playClick();
        localStorage.clear();
        state.mastered.clear();
        state.starred.clear();
        state.wrongQuiz.clear();
        state.bestScore = null;
        updateStatsRibbon();
        renderFlashcard();
        renderQuiz();
        alert('学习进度已全部重置！祝您冲刺顺利！');
      };

      // Sound & Theme Toggle
      document.getElementById('soundToggle').onclick = () => {
        const isEnabled = sound.toggle();
        document.getElementById('soundToggle').textContent = isEnabled ? '🔊' : '🔇';
      };
      document.getElementById('soundToggle').textContent = sound.enabled ? '🔊' : '🔇';

      document.getElementById('themeToggle').onclick = () => {
        sound.playClick();
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      };

      // Global Keyboard Shortcuts
      window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT') return; // ignore typing
        if (state.mode === 'flashcard') {
          if (e.code === 'Space') {
            e.preventDefault();
            revealAllCurrentBlanks();
          } else if (e.code === 'ArrowRight') {
            e.preventDefault();
            document.getElementById('btnNextCard').click();
          } else if (e.code === 'ArrowLeft') {
            e.preventDefault();
            document.getElementById('btnPrevCard').click();
          } else if (e.code === 'Enter') {
            e.preventDefault();
            toggleMastered();
          }
        }
      });
    }

    // Initialize App
    function initApp() {
      try { setupEvents(); } catch(e) { console.error('setupEvents error:', e); }
      try { updateStatsRibbon(); } catch(e) { console.error('updateStatsRibbon error:', e); }
      try { filterFlashcards(); } catch(e) { console.error('filterFlashcards error:', e); }
      try { filterQuiz(); } catch(e) { console.error('filterQuiz error:', e); }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), htmlTemplate, 'utf8');
console.log('Successfully generated complete standalone index.html!');
