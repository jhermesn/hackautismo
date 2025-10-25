import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Checklist } from './components/Checklist';
import { Result } from './components/Result';
import { Footer } from './components/Footer';
import { FullGuidelines } from './components/FullGuidelines';
import { TopTools } from './components/TopTools';
import { checklistData } from './data/checklist';
import { getScoreMessage } from './utils/score';
import type { ChecklistItem } from './types/checklist';

export default function AutismAwarenessLanding() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleCheckItem = (item: ChecklistItem) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(item.id)) {
      newCheckedItems.delete(item.id);
      setTotalScore(totalScore - item.points);
    } else {
      newCheckedItems.add(item.id);
      setTotalScore(totalScore + item.points);
    }
    setCheckedItems(newCheckedItems);
  };

  const handleShowResult = () => {
    setShowResult(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const resetChecklist = () => {
    setCheckedItems(new Set());
    setTotalScore(0);
    setShowResult(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scoreResult = getScoreMessage(totalScore);
  const maxScore = checklistData.reduce((sum, item) => sum + item.points, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/60 via-yellow-50/40 to-green-50/60 relative overflow-hidden">

      <Header />
      <Hero />

      <FullGuidelines />

      <TopTools />

      <Checklist
        items={checklistData}
        checked={checkedItems}
        onToggle={handleCheckItem}
        totalScore={totalScore}
        onShowResult={handleShowResult}
      />

      {showResult && (
        <Result
          score={totalScore}
          maxScore={maxScore}
          title={scoreResult.title}
          message={scoreResult.message}
          emoji={scoreResult.emoji}
          onReset={resetChecklist}
        />
      )}

      <Footer />
    </div>
  );
}