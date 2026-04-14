/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  CheckCircle2, 
  Circle, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Trophy, 
  XCircle,
  ArrowLeft,
  Coffee,
  Leaf,
  Menu,
  Settings,
  BarChart3,
  Search,
  ChevronDown,
  User,
  Sparkles,
  Layout
} from 'lucide-react';
import { vocabulary, modules, VocabularyItem, grades } from './data';

// Types
interface ModuleProgress {
  completed: boolean;
  score: number;
  total: number;
  wrongWords: string[];
}

interface ProgressState {
  [moduleName: string]: ModuleProgress;
}

interface QuizState {
  moduleName: string;
  items: VocabularyItem[];
  currentIndex: number;
  userAnswers: (string | null)[];
  options: string[][];
}

type ViewType = 'welcome' | 'test' | 'review' | 'stats' | 'settings';

export default function App() {
  // Global State
  const [view, setView] = useState<ViewType>('welcome');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedGrade, setSelectedGrade] = useState(grades[0]);
  const [progress, setProgress] = useState<ProgressState>({});
  
  // Test State (Internal to VocabularyTest but managed here for simplicity in this refactor)
  const [testView, setTestView] = useState<'modules' | 'quiz' | 'result'>('modules');
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Sync answer state when navigating
  useEffect(() => {
    if (quiz) {
      const answer = quiz.userAnswers[quiz.currentIndex];
      setSelectedAnswer(answer);
      setIsAnswered(answer !== null);
    }
  }, [quiz?.currentIndex]);

  // Load progress
  useEffect(() => {
    const saved = localStorage.getItem('vocab_progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse progress', e);
      }
    }
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem('vocab_progress', JSON.stringify(progress));
  }, [progress]);

  // Sidebar toggle for mobile/desktop
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Helper: Generate random options
  const generateOptions = (correctMeaning: string) => {
    const distractors = vocabulary
      .filter(v => v.meaning !== correctMeaning)
      .map(v => v.meaning)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    return [correctMeaning, ...distractors].sort(() => 0.5 - Math.random());
  };

  // Actions
  const startModule = (moduleName: string, reviewItems?: VocabularyItem[]) => {
    const moduleItems = reviewItems || vocabulary.filter(v => v.unit === moduleName);
    const options = moduleItems.map(item => generateOptions(item.meaning));
    
    setIsReviewMode(!!reviewItems);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuiz({
      moduleName,
      items: moduleItems,
      currentIndex: 0,
      userAnswers: new Array(moduleItems.length).fill(null),
      options
    });
    setTestView('quiz');
    setView('test');
  };

  const handleAnswer = (answer: string) => {
    if (!quiz || isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    const newAnswers = [...quiz.userAnswers];
    newAnswers[quiz.currentIndex] = answer;
    setQuiz({ ...quiz, userAnswers: newAnswers });
  };

  const nextQuestion = () => {
    if (!quiz) return;
    if (quiz.currentIndex < quiz.items.length - 1) {
      setQuiz({ ...quiz, currentIndex: quiz.currentIndex + 1 });
    } else {
      finishQuiz();
    }
  };

  const prevQuestion = () => {
    if (!quiz || quiz.currentIndex === 0) return;
    setQuiz({ ...quiz, currentIndex: quiz.currentIndex - 1 });
  };

  const finishQuiz = () => {
    if (!quiz) return;
    
    let correctCount = 0;
    const wrongWords: string[] = [];
    
    quiz.items.forEach((item, index) => {
      if (quiz.userAnswers[index] === item.meaning) {
        correctCount++;
      } else {
        const phoneticMatch = item.word.match(/\/(.*?)\//);
        const wordOnly = item.word.split(' /')[0];
        const phonetic = phoneticMatch ? `/${phoneticMatch[1]}/` : '';
        wrongWords.push(`${wordOnly} ${phonetic} (${item.meaning})`);
      }
    });

    if (!isReviewMode) {
      const newProgress = {
        ...progress,
        [quiz.moduleName]: {
          completed: true,
          score: correctCount,
          total: quiz.items.length,
          wrongWords
        }
      };
      setProgress(newProgress);
    }
    
    setTestView('result');
  };

  const startReview = () => {
    if (!quiz) return;
    const currentResult = progress[quiz.moduleName];
    if (!currentResult) return;

    const wrongItems = vocabulary.filter(v => 
      v.unit === quiz.moduleName && 
      currentResult.wrongWords.some(w => w.startsWith(v.word))
    );

    if (wrongItems.length > 0) {
      startModule(quiz.moduleName, wrongItems);
    }
  };

  const resetProgress = () => {
    if (confirm('确定要重置所有进度吗？')) {
      setProgress({});
      localStorage.removeItem('vocab_progress');
    }
  };

  // Components
  const Sidebar = () => (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {!sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(true)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ 
          width: sidebarOpen ? 280 : 0,
          x: sidebarOpen ? 0 : -280
        }}
        className="fixed lg:relative h-screen bg-white border-r border-slate-100 z-50 overflow-hidden flex flex-col"
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sage flex items-center justify-center text-white shadow-lg">
            <Coffee size={24} />
          </div>
          <span className="font-bold text-slate-700 tracking-tight text-lg">Nordic Cafe</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <div className="pb-4">
            <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Main</p>
            <div 
              className={`sidebar-item ${view === 'welcome' ? 'active' : ''}`}
              onClick={() => { setView('welcome'); if (window.innerWidth < 1024) setSidebarOpen(false); }}
            >
              <Layout size={20} />
              <span>欢迎首页</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between px-4 mb-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">词汇测试</p>
              <ChevronDown size={12} className="text-slate-400" />
            </div>
            <div className="space-y-1">
              {grades.map(grade => (
                <div 
                  key={grade.id}
                  className={`sidebar-item pl-10 ${view === 'test' && selectedGrade.id === grade.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedGrade(grade);
                    setView('test');
                    setTestView('modules');
                    if (window.innerWidth < 1024) setSidebarOpen(false);
                  }}
                >
                  <span className="text-sm">{grade.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 space-y-1">
            <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Learning</p>
            <div 
              className={`sidebar-item ${view === 'review' ? 'active' : ''}`}
              onClick={() => { setView('review'); if (window.innerWidth < 1024) setSidebarOpen(false); }}
            >
              <BookOpen size={20} />
              <span>生词巩固</span>
            </div>
            <div 
              className={`sidebar-item ${view === 'stats' ? 'active' : ''}`}
              onClick={() => { setView('stats'); if (window.innerWidth < 1024) setSidebarOpen(false); }}
            >
              <BarChart3 size={20} />
              <span>学习进度</span>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-50">
          <div 
            className={`sidebar-item ${view === 'settings' ? 'active' : ''}`}
            onClick={() => { setView('settings'); if (window.innerWidth < 1024) setSidebarOpen(false); }}
          >
            <Settings size={20} />
            <span>系统设置</span>
          </div>
        </div>
      </motion.aside>
    </>
  );

  const WelcomePage = () => (
    <div className="max-w-5xl mx-auto p-6 md:p-12 min-h-full flex flex-col justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-10 pointer-events-none">
        <Coffee size={240} strokeWidth={0.5} className="text-sage" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 pointer-events-none">
        <Leaf size={180} strokeWidth={0.5} className="text-terracotta -rotate-45" />
      </div>

      <header className="mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-bold tracking-widest uppercase">
              Minimalist Learning
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-sage/20 to-transparent" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-slate-800 tracking-tight mb-4">
            Hej! <span className="font-normal text-sage">欢迎来到</span><br />
            极简主义学习空间
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide max-w-2xl">
            在这里，我们通过北欧现代美学与高效记忆法的结合，让英语学习变得如品味咖啡般优雅。
          </p>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {[
          { icon: <Sparkles className="text-sage" />, title: '开始测试', desc: '基于教材单元的智能闪卡', action: () => { setView('test'); setTestView('modules'); }, color: 'bg-sage/5' },
          { icon: <BookOpen className="text-terracotta" />, title: '生词巩固', desc: '针对性攻克你的薄弱环节', action: () => setView('review'), color: 'bg-terracotta/5' },
          { icon: <BarChart3 className="text-slate-400" />, title: '学习进度', desc: '可视化你的每一步成长', action: () => setView('stats'), color: 'bg-slate-400/5' }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={item.action}
            className="glass-card p-8 cursor-pointer group"
          >
            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <div className="flex items-center gap-6">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400">
                <User size={14} />
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 font-light tracking-widest">已有 1,240+ 位同学加入学习</p>
        </div>
        <p className="text-[10px] text-slate-300 uppercase tracking-[0.3em]">Nordic Modern Cafe · Est. 2024</p>
      </footer>
    </div>
  );

  const renderModules = () => (
    <div className="max-w-5xl mx-auto p-6 md:p-12 pt-8 md:pt-12 relative overflow-hidden">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 relative z-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 tracking-[0.1em] sm:tracking-[0.2em] whitespace-nowrap">
            英语词汇闪卡 <span className="text-sage/40 mx-1 sm:mx-2">|</span> <span className="text-terracotta">{selectedGrade.name}</span>
          </h1>
          <p className="text-slate-400 tracking-widest font-light text-xs sm:text-sm flex items-center gap-2">
            <Coffee size={14} className="text-sage" />
            NORDIC MODERN CAFE · 极简主义学习空间
          </p>
        </div>
        <button 
          onClick={resetProgress}
          className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-terracotta hover:bg-terracotta/10 rounded-full transition-all border border-terracotta/20 bg-white/50 backdrop-blur-sm"
        >
          <RotateCcw size={14} />
          重置进度
        </button>
      </header>

      {selectedGrade.data.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <Coffee size={48} className="text-slate-200 mx-auto mb-4" />
          <p className="text-slate-400 font-light tracking-widest">该教材数据正在整理中，敬请期待...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
          {modules.map(moduleName => {
            const modProgress = progress[moduleName];
            const isCompleted = modProgress?.completed;
            const wordCount = vocabulary.filter(v => v.unit === moduleName).length;
            
            return (
              <motion.button
                key={moduleName}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => startModule(moduleName)}
                className={`floating-card flex items-center p-5 md:p-6 text-left group gap-5 ${
                  isCompleted ? 'bg-white/90' : 'bg-white'
                }`}
              >
                <div className={`shrink-0 p-4 rounded-2xl transition-colors ${
                  isCompleted ? 'bg-sage text-white' : 'bg-sage/10 text-sage'
                }`}>
                  <BookOpen size={24} strokeWidth={1.5} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg md:text-xl font-bold text-slate-700 tracking-tight truncate">
                      {moduleName}
                    </h3>
                    {isCompleted && (
                      <CheckCircle2 size={18} className="text-sage shrink-0 ml-2" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] md:text-xs text-slate-400 tracking-[0.2em] uppercase font-light">
                      {wordCount} WORDS
                    </span>
                    {isCompleted && (
                      <span className="text-xs font-mono text-terracotta/60">
                        {Math.round((modProgress.score / modProgress.total) * 100)}%
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      )}
    </div>
  );

  const renderQuiz = () => {
    if (!quiz) return null;
    const currentItem = quiz.items[quiz.currentIndex];
    const currentOptions = quiz.options[quiz.currentIndex];
    const progressPercent = ((quiz.currentIndex + 1) / quiz.items.length) * 100;

    const phoneticMatch = currentItem.word.match(/\/(.*?)\//);
    const wordOnly = currentItem.word.split(' /')[0];
    const phonetic = phoneticMatch ? `/${phoneticMatch[1]}/` : '';

    return (
      <div className="min-h-full flex flex-col">
        <div className="bg-white/60 backdrop-blur-lg border-b border-white/20 px-6 md:px-12 py-3 md:py-4 flex items-center justify-between sticky top-0 z-10">
          <button 
            onClick={() => setTestView('modules')}
            className="p-2 hover:bg-oatmeal rounded-full transition-colors text-slate-400"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="text-center">
            <h2 className="text-xs md:text-sm font-medium text-slate-500 tracking-[0.2em] uppercase">{quiz.moduleName}</h2>
          </div>
          <div className="text-[10px] font-mono text-slate-400 tracking-tighter">
            {quiz.currentIndex + 1} / {quiz.items.length}
          </div>
        </div>

        <div className="w-full h-1 bg-white/50">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            className="h-full bg-sage"
          />
        </div>

        <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 max-w-4xl mx-auto w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={quiz.currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="w-full z-10"
            >
              <div className="floating-card p-8 md:p-12 mb-6 md:mb-8 text-center bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-sage/20 via-terracotta/20 to-sage/20" />
                <h3 className="text-3xl md:text-5xl font-light text-sage tracking-tight mb-2">{wordOnly}</h3>
                {phonetic && (
                  <p className="text-base md:text-lg text-terracotta font-light tracking-widest">{phonetic}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {currentOptions.map((option, idx) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === currentItem.meaning;
                  const showFeedback = isAnswered;
                  
                  let buttonClass = 'border-white bg-white text-slate-600 shadow-soft';
                  let iconClass = 'bg-oatmeal text-sage group-hover:bg-sage/10';

                  if (showFeedback) {
                    if (isCorrect) {
                      buttonClass = 'border-sage/20 bg-sage/85 text-white shadow-md';
                      iconClass = 'bg-white/20 text-white';
                    } else if (isSelected) {
                      buttonClass = 'border-terracotta/30 bg-white text-slate-600 shadow-soft';
                      iconClass = 'bg-terracotta text-white';
                    }
                  } else if (isSelected) {
                    buttonClass = 'border-sage/30 bg-sage/5 text-sage';
                    iconClass = 'bg-sage text-white';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      disabled={isAnswered}
                      className={`p-4 md:p-6 rounded-[18px] text-left transition-all border-2 group ${buttonClass}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono transition-colors ${iconClass}`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm md:text-base font-light tracking-wide">{option}</span>
                        {showFeedback && isCorrect && (
                          <CheckCircle2 size={18} className="ml-auto text-white" />
                        )}
                        {showFeedback && isSelected && !isCorrect && (
                          <XCircle size={18} className="ml-auto text-terracotta" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center w-full mt-6 px-2 z-10">
                <button
                  onClick={prevQuestion}
                  disabled={quiz.currentIndex === 0}
                  className="text-slate-400 font-light text-base md:text-lg tracking-wide hover:text-sage transition-colors disabled:opacity-10 py-3 px-4 -ml-4 cursor-pointer"
                >
                  &lt; Previous
                </button>
                <button
                  onClick={nextQuestion}
                  className="text-slate-400 font-light text-base md:text-lg tracking-wide hover:text-sage transition-colors py-3 px-4 -mr-4 cursor-pointer"
                >
                  {quiz.currentIndex === quiz.items.length - 1 ? 'Finish >' : 'Next >'}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    );
  };

  const renderResult = () => {
    if (!quiz) return null;
    const result = progress[quiz.moduleName];
    if (!result) return null;

    const accuracy = Math.round((result.score / result.total) * 100);

    return (
      <div className="max-w-5xl mx-auto p-6 md:p-12 py-8 md:py-12 relative">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Trophy size={200} strokeWidth={0.5} className="text-sage" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8 md:mb-12 relative z-10">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-8 border-white flex items-center justify-center relative bg-white shadow-soft">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" r="45%" fill="none" stroke="currentColor" strokeWidth="8" className="text-sage/10" />
                <motion.circle
                  cx="50%" cy="50%" r="45%" fill="none" stroke="url(#gradient)" strokeWidth="8" strokeDasharray="100"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 100 - accuracy }}
                  pathLength="100" strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8DAA91" />
                    <stop offset="100%" stopColor="#D6A48D" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-center z-10">
                <Trophy size={24} className="text-terracotta mx-auto mb-1" strokeWidth={1.5} />
                <p className="text-3xl md:text-4xl font-light text-slate-700">{accuracy}%</p>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-light text-slate-800 tracking-widest mb-2">测试已完成</h2>
            <p className="text-slate-400 tracking-widest font-light mb-6 text-sm">
              {isReviewMode ? '错题巩固练习结束' : `你已完成 ${quiz.moduleName} 的全部练习`}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <div className="bg-white px-5 py-2.5 rounded-xl shadow-soft border border-white/50">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-0.5">正确</span>
                <span className="text-lg font-medium text-sage">{result.score}</span>
              </div>
              <div className="bg-white px-5 py-2.5 rounded-xl shadow-soft border border-white/50">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-0.5">总计</span>
                <span className="text-lg font-medium text-slate-600">{result.total}</span>
              </div>
            </div>
          </div>
        </div>

        {result.wrongWords.length > 0 && (
          <div className="mb-8 relative z-10">
            <h3 className="flex items-center gap-3 font-medium text-slate-500 mb-4 px-2 tracking-[0.2em] uppercase text-[10px]">
              <XCircle size={14} className="text-terracotta" />
              待巩固词汇 ({result.wrongWords.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {result.wrongWords.map((word, i) => (
                <div key={i} className="bg-white/50 p-3 rounded-xl border border-white/50 flex items-center gap-2 hover:bg-white transition-colors group shadow-sm">
                  <span className="w-1 h-1 rounded-full bg-terracotta/40 group-hover:bg-terracotta transition-colors" />
                  <span className="text-slate-500 font-light tracking-wide text-xs truncate">{word}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
          {result.wrongWords.length > 0 && (
            <button
              onClick={startReview}
              className="py-4 rounded-xl font-medium text-white bg-sage hover:bg-sage-dark transition-all shadow-soft tracking-[0.2em] text-sm"
            >
              错题巩固
            </button>
          )}
          <button
            onClick={() => startModule(quiz.moduleName)}
            className="py-4 rounded-xl font-medium text-white bg-sage hover:bg-sage-dark transition-all shadow-soft tracking-[0.2em] text-sm"
          >
            重新测试
          </button>
          <button
            onClick={() => setTestView('modules')}
            className="py-4 rounded-xl font-medium text-terracotta bg-white border border-terracotta/20 hover:bg-terracotta/5 transition-all tracking-[0.2em] shadow-soft text-sm"
          >
            返回列表
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-oatmeal font-sans selection:bg-sage/20">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Top Header Bar */}
        <header className="h-16 border-b border-slate-100 bg-white/50 backdrop-blur-md flex items-center justify-between px-6 z-30">
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-400">
              <Search size={16} />
              <input type="text" placeholder="搜索词汇..." className="bg-transparent border-none outline-none text-xs w-32" />
            </div>
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-sage to-terracotta p-0.5 shadow-md">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-slate-400">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {view === 'welcome' && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="h-full"
              >
                <WelcomePage />
              </motion.div>
            )}
            {view === 'test' && (
              <motion.div
                key="test"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full"
              >
                {testView === 'modules' && renderModules()}
                {testView === 'quiz' && renderQuiz()}
                {testView === 'result' && renderResult()}
              </motion.div>
            )}
            {(view === 'review' || view === 'stats' || view === 'settings') && (
              <motion.div
                key={view}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-12 text-center"
              >
                <div className="glass-card p-20 inline-block">
                  <Sparkles size={48} className="text-sage mx-auto mb-6" />
                  <h2 className="text-2xl font-light text-slate-700 tracking-widest mb-2 uppercase">{view}</h2>
                  <p className="text-slate-400 font-light tracking-widest">该功能模块正在开发中...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
