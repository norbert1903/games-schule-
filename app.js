// ===== STATE =====
let state = {
    currentSubject: null,
    currentTopic: null,
    currentQuestions: [],
    currentIndex: 0,
    selectedOption: null,
    hearts: 3,
    correctAnswers: 0,
    wrongAnswers: 0,
    totalScore: parseInt(localStorage.getItem('totalScore') || '0'),
    streak: parseInt(localStorage.getItem('streak') || '0'),
    correctTotal: parseInt(localStorage.getItem('correctTotal') || '0'),
    answered: false,
    lastRetrySubject: null,
    lastRetryTopic: null,
};

// ===== QUESTION DATABASE =====
const questionDB = {
    math: {
        quadratisch: {
            name: "Quadratische Funktionen",
            emoji: "📈",
            color: "math-topic",
            questions: [
                {
                    q: "Was ist die allgemeine Form einer quadratischen Funktion?",
                    options: ["f(x) = mx + b", "f(x) = ax² + bx + c", "f(x) = a/x", "f(x) = √x"],
                    answer: 1,
                    explanation: "Die Normalform der quadratischen Funktion lautet f(x) = ax² + bx + c, wobei a ≠ 0 gilt."
                },
                {
                    q: "Was beschreibt der Koeffizient 'a' in f(x) = ax² + bx + c?",
                    options: ["Den y-Achsenabschnitt", "Die Verschiebung nach links/rechts", "Die Streckung/Stauchung und Öffnungsrichtung", "Den Scheitelpunkt"],
                    answer: 2,
                    explanation: "Der Koeffizient 'a' bestimmt, ob die Parabel nach oben (a > 0) oder unten (a < 0) geöffnet ist, und wie stark sie gestaucht oder gestreckt wird."
                },
                {
                    q: "Wie berechnet man die x-Koordinate des Scheitelpunkts?",
                    options: ["xs = -b/a", "xs = b/2a", "xs = -b/(2a)", "xs = b²-4ac"],
                    answer: 2,
                    explanation: "Die x-Koordinate des Scheitelpunkts berechnet sich mit der Formel xs = -b/(2a)."
                },
                {
                    q: "Was ist die Diskriminante D = b² - 4ac?",
                    options: ["Die Länge der Parabel", "Entscheidet über die Anzahl der Nullstellen", "Der Scheitelpunkt", "Die Steigung"],
                    answer: 1,
                    explanation: "D > 0: zwei Nullstellen, D = 0: eine Nullstelle, D < 0: keine reellen Nullstellen."
                },
                {
                    q: "Welche der folgenden Parabeln öffnet sich nach unten?",
                    options: ["f(x) = 2x²", "f(x) = x² + 3", "f(x) = -3x² + x", "f(x) = 0.5x² - 1"],
                    answer: 2,
                    explanation: "Da der Koeffizient a = -3 negativ ist, öffnet sich die Parabel f(x) = -3x² + x nach unten."
                },
                {
                    q: "Wie lautet die Scheitelpunktform einer quadratischen Funktion?",
                    options: ["f(x) = a(x + d)² + e", "f(x) = a(x - d)² + e", "f(x) = ax² + e", "f(x) = (x-d)(x-e)"],
                    answer: 1,
                    explanation: "Die Scheitelpunktform lautet f(x) = a(x - d)² + e, wobei S(d|e) der Scheitelpunkt ist."
                }
            ]
        },
        linear: {
            name: "Lineare Funktionen",
            emoji: "📉",
            color: "math-topic",
            questions: [
                {
                    q: "Wie lautet die allgemeine Form einer linearen Funktion?",
                    options: ["f(x) = ax²", "f(x) = mx + b", "f(x) = a·xⁿ", "f(x) = a/x + b"],
                    answer: 1,
                    explanation: "Die Normalform der linearen Funktion lautet f(x) = mx + b, wobei m die Steigung und b den y-Achsenabschnitt beschreibt."
                },
                {
                    q: "Was beschreibt die Steigung m einer linearen Funktion?",
                    options: ["Den y-Achsenabschnitt", "Wo die Gerade die x-Achse schneidet", "Um wie viel y sich ändert, wenn x um 1 steigt", "Den Nullpunkt"],
                    answer: 2,
                    explanation: "Die Steigung m gibt an, um wie viele Einheiten der y-Wert steigt (m > 0) oder fällt (m < 0), wenn x um 1 erhöht wird."
                },
                {
                    q: "Zwei Geraden sind parallel, wenn...",
                    options: ["...sie denselben y-Achsenabschnitt haben", "...sie dieselbe Steigung haben", "...ihre Steigungen sich zu 0 addieren", "...sie keinen Schnittpunkt haben"],
                    answer: 1,
                    explanation: "Parallele Geraden haben identische Steigungen m₁ = m₂, aber verschiedene y-Achsenabschnitte."
                },
                {
                    q: "Berechne die Steigung durch P(2|4) und Q(6|12):",
                    options: ["m = 1", "m = 3", "m = 2", "m = 4"],
                    answer: 2,
                    explanation: "m = (y₂-y₁)/(x₂-x₁) = (12-4)/(6-2) = 8/4 = 2"
                },
                {
                    q: "Wo schneidet f(x) = 3x - 6 die x-Achse?",
                    options: ["x = 3", "x = 2", "x = -6", "x = 6"],
                    answer: 1,
                    explanation: "Nullstelle: 0 = 3x - 6 → 6 = 3x → x = 2. Die Gerade schneidet die x-Achse bei x = 2."
                },
                {
                    q: "Zwei Geraden stehen senkrecht zueinander, wenn...",
                    options: ["m₁ · m₂ = 1", "m₁ + m₂ = 0", "m₁ · m₂ = -1", "m₁ = m₂"],
                    answer: 2,
                    explanation: "Für zwei senkrecht zueinander stehende Geraden gilt: m₁ · m₂ = -1 (negativer Kehrwert)."
                }
            ]
        },
        pythagoras: {
            name: "Satz des Pythagoras",
            emoji: "📐",
            color: "math-topic",
            questions: [
                {
                    q: "Wie lautet der Satz des Pythagoras?",
                    options: ["a + b = c", "a² + b² = c²", "a² · b² = c²", "c = √(a+b)"],
                    answer: 1,
                    explanation: "Im rechtwinkligen Dreieck gilt: a² + b² = c², wobei c die Hypotenuse (längste Seite gegenüber dem rechten Winkel) ist."
                },
                {
                    q: "Was ist die Hypotenuse in einem rechtwinkligen Dreieck?",
                    options: ["Die kürzeste Seite", "Eine der Katheten", "Die Seite gegenüber dem rechten Winkel", "Die Höhe des Dreiecks"],
                    answer: 2,
                    explanation: "Die Hypotenuse ist immer die längste Seite und liegt dem rechten Winkel gegenüber."
                },
                {
                    q: "Die Katheten eines rechtwinkligen Dreiecks sind 3 und 4. Wie lang ist die Hypotenuse?",
                    options: ["5", "6", "7", "√7"],
                    answer: 0,
                    explanation: "c = √(3² + 4²) = √(9 + 16) = √25 = 5. Das 3-4-5-Dreieck ist ein bekanntes pythagoräisches Tripel!"
                },
                {
                    q: "Die Hypotenuse beträgt 13, eine Kathete 5. Wie lang ist die andere Kathete?",
                    options: ["10", "12", "8", "√144"],
                    answer: 1,
                    explanation: "b = √(c² - a²) = √(169 - 25) = √144 = 12. Das 5-12-13-Dreieck ist ein pythagoräisches Tripel."
                },
                {
                    q: "Der Satz des Pythagoras gilt nur für...",
                    options: ["Gleichseitige Dreiecke", "Rechtwinklige Dreiecke", "Alle Dreiecke", "Stumpfwinklige Dreiecke"],
                    answer: 1,
                    explanation: "Der Satz des Pythagoras gilt ausschließlich für rechtwinklige Dreiecke, d.h. Dreiecke mit einem 90°-Winkel."
                },
                {
                    q: "Ist ein Dreieck mit den Seiten 6, 8 und 10 rechtwinklig?",
                    options: ["Nein, weil 6+8 ≠ 10", "Ja, weil 6²+8² = 10²", "Nein, weil es keine ganze Zahl ergibt", "Ja, aber nur ungefähr"],
                    answer: 1,
                    explanation: "6² + 8² = 36 + 64 = 100 = 10². Da die Gleichung erfüllt ist, handelt es sich um ein rechtwinkliges Dreieck."
                }
            ]
        }
    },
    english: {
        presentPerfect: {
            name: "Present Perfect",
            emoji: "⏰",
            color: "english-topic",
            questions: [
                {
                    q: "Which sentence uses the Present Perfect correctly?",
                    options: ["She go to Paris yesterday.", "She has gone to Paris.", "She is going to Paris.", "She went to Paris."],
                    answer: 1,
                    explanation: "Present Perfect = have/has + past participle. 'She has gone' is correct for actions with a connection to the present."
                },
                {
                    q: "When do we use the Present Perfect?",
                    options: ["Only for future actions", "For actions finished at a specific past time", "For past actions with a present connection or unspecified time", "Only with 'yesterday'"],
                    answer: 2,
                    explanation: "Present Perfect connects past actions to the present, used for experiences, recent news, or actions with unspecified time."
                },
                {
                    q: "Fill in: I _____ never _____ sushi before.",
                    options: ["have / eat", "have / eaten", "has / eaten", "had / eat"],
                    answer: 1,
                    explanation: "With 'never', we use Present Perfect: 'I have never eaten sushi before.' The past participle of 'eat' is 'eaten'."
                },
                {
                    q: "Which signal word typically goes with Present Perfect?",
                    options: ["Yesterday", "Last week", "In 2010", "Already"],
                    answer: 3,
                    explanation: "Signal words for Present Perfect include: already, yet, ever, never, just, since, for, recently."
                },
                {
                    q: "Choose the correct sentence:",
                    options: ["They have lived here since 10 years.", "They lived here for 10 years ago.", "They have lived here for 10 years.", "They are living here since 10 years."],
                    answer: 2,
                    explanation: "'For' + duration with Present Perfect: 'They have lived here for 10 years.' 'Since' is used with a point in time."
                },
                {
                    q: "The Present Perfect is formed with:",
                    options: ["did + infinitive", "was/were + past participle", "have/has + past participle", "will + infinitive"],
                    answer: 2,
                    explanation: "The Present Perfect uses 'have' (I/you/we/they) or 'has' (he/she/it) followed by the past participle."
                }
            ]
        },
        writing: {
            name: "Schreiben",
            emoji: "✍️",
            color: "english-topic",
            questions: [
                {
                    q: "Which is a correct way to start a formal letter in English?",
                    options: ["Hey there!", "What's up,", "Dear Sir or Madam,", "Hello friend,"],
                    answer: 2,
                    explanation: "'Dear Sir or Madam,' is the standard formal opening when you don't know the recipient's name."
                },
                {
                    q: "What does a good paragraph structure include?",
                    options: ["Only examples", "Topic sentence, supporting details, conclusion", "Just a title and ending", "Random sentences"],
                    answer: 1,
                    explanation: "A good paragraph has: 1) Topic sentence (main idea), 2) Supporting details/examples, 3) Concluding sentence."
                },
                {
                    q: "Which is an appropriate ending for a formal email?",
                    options: ["Bye bye!", "Yours sincerely,", "See ya!", "Love,"],
                    answer: 1,
                    explanation: "'Yours sincerely' is used when you know the name, 'Yours faithfully' when you don't. Both are formal closings."
                },
                {
                    q: "What is the purpose of a thesis statement?",
                    options: ["To summarize the whole essay", "To state the main argument or point", "To list all examples", "To write a conclusion"],
                    answer: 1,
                    explanation: "A thesis statement presents the main argument of your essay, usually at the end of the introduction."
                },
                {
                    q: "Which transition word shows contrast?",
                    options: ["Furthermore", "Therefore", "However", "Additionally"],
                    answer: 2,
                    explanation: "'However' introduces contrast. 'Furthermore/Additionally' add information. 'Therefore' shows result."
                },
                {
                    q: "Which sentence is written in an appropriate formal style?",
                    options: ["I wanna know more about this.", "I would like to inquire further about this matter.", "This stuff is really cool!", "Can u tell me more?"],
                    answer: 1,
                    explanation: "Formal writing avoids contractions and slang. 'I would like to inquire' is appropriately formal and professional."
                }
            ]
        },
        grammar: {
            name: "Grammatik",
            emoji: "📝",
            color: "english-topic",
            questions: [
                {
                    q: "Which sentence is grammatically correct?",
                    options: ["She don't like it.", "She doesn't likes it.", "She doesn't like it.", "She not like it."],
                    answer: 2,
                    explanation: "In the third person singular (she/he/it), we use 'doesn't' + base form: 'She doesn't like it.'"
                },
                {
                    q: "Choose the correct comparative form of 'good':",
                    options: ["gooder", "more good", "better", "best"],
                    answer: 2,
                    explanation: "'Good' is an irregular adjective. Comparative: better, Superlative: best. Never 'gooder' or 'more good'."
                },
                {
                    q: "Fill in the blank: If I _____ rich, I would travel the world.",
                    options: ["am", "will be", "would be", "were"],
                    answer: 3,
                    explanation: "In a conditional type 2 (unreal/hypothetical), we use 'were' for all persons: 'If I were rich...'"
                },
                {
                    q: "Which sentence uses passive voice correctly?",
                    options: ["The book wrote by her.", "The book was written by her.", "The book is write by her.", "She written the book."],
                    answer: 1,
                    explanation: "Passive voice = was/were + past participle: 'The book was written by her.'"
                },
                {
                    q: "Which is the correct article usage?",
                    options: ["She is a honest person.", "She is an honest person.", "She is
