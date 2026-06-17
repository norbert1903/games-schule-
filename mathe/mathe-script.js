const questionsBank = {
    mathe_funktionen: [
        { q: "Welche Form hat der Graph einer quadratischen Funktion f(x) = x²?", a: ["Gerade", "Parabel", "Hyperbel", "Kreis"], c: "Parabel" },
        { q: "Wie lauten die Lösungen der Gleichung x² − 9 = 0?", a: ["x = 3", "x = -3", "x = 3 und x = -3", "Es gibt keine Lösung"], c: "x = 3 und x = -3" },
        { q: "Was gibt der Scheitelpunkt einer nach oben geöffneten Parabel an?", a: ["Den höchsten Punkt", "Den tiefsten Punkt", "Die Nullstelle", "Den Schnittpunkt mit der y-Achse"], c: "Den tiefsten Punkt" },
        { q: "Welche Formel nutzt man standardmäßig zum Lösen einer gemischt-quadratischen Gleichung (x² + px + q = 0)?", a: ["Mitternachtsformel", "pq-Formel", "Satz des Thales", "Binomische Formel"], c: "pq-Formel" },
        { q: "Wie nennt man eine Parabel der Form f(x) = x²?", a: ["Normalparabel", "Basisparabel", "Einheitsparabel", "Urparabel"], c: "Normalparabel" },
        { q: "Was bewirkt der Faktor a in f(x) = a • x², wenn a > 1 ist?", a: ["Die Parabel wird gestreckt (schmaler)", "Die Parabel wird gestaucht (breiter)", "Die Parabel verschiebt sich nach oben", "Die Parabel verschiebt sich nach rechts"], c: "Die Parabel wird gestreckt (schmaler)" },
        { q: "Wohin ist die Parabel f(x) = x² − 4 verschoben?", a: ["4 Einheiten nach links", "4 Einheiten nach rechts", "4 Einheiten nach oben", "4 Einheiten nach unten"], c: "4 Einheiten nach unten" },
        { q: "Wie viele Nullstellen kann eine quadratische Funktion maximal haben?", a: ["Keine", "Eine", "Zwei", "Unendlich viele"], c: "Zwei" },
        { q: "Welche Koordinaten hat der Scheitelpunkt bei f(x) = (x − 3)² + 2?", a: ["S(-3 | 2)", "S(3 | 2)", "S(3 | -2)", "S(-3 | -2)"], c: "S(3 | 2)" },
        { q: "Was passiert mit einer Parabel, wenn der Koeffizient vor dem x² negativ ist?", a: ["Sie ist nach links geöffnet", "Sie ist nach rechts geöffnet", "Sie ist nach unten geöffnet", "Sie bleibt unverändert"], c: "Sie ist nach unten geöffnet" },
        { q: "Wie lauten die Rechenschritte bei der ersten binomischen Formel?", a: ["(a+b)² = a² + b²", "(a+b)² = a² + 2ab + b²", "(a-b)² = a² - 2ab + b²", "(a+b)(a-b) = a² - b²"], c: "(a+b)² = a² + 2ab + b²" },
        { q: "Was steht unter der Wurzel der pq-Formel und bestimmt die Anzahl der Lösungen?", a: ["Diskriminante", "Exponent", "Scheitelwert", "Nullstellenfaktor"], c: "Diskriminante" },
        { q: "Wenn die Diskriminante negativ ist, wie viele reelle Lösungen gibt es?", a: ["Genau eine", "Zwei", "Keine", "Drei"], c: "Keine" },
        { q: "Bringe x² + 6x + 9 in die faktorisierte Form.", a: ["(x - 3)²", "(x + 3)²", "(x + 4.5)²", "(x + 9)²"], c: "(x + 3)²" },
        { q: "Wie lauten die Parameter der allgemeinen Normalform einer quadratischen Funktion?", a: ["f(x) = mx + b", "f(x) = ax² + bx + c", "f(x) = a(x-d)² + e", "f(x) = x³"], c: "f(x) = ax² + bx + c" }
    ],
    mathe_geometrie: [
        { q: "Wie lautet die Formel des Satzes von Pythagoras für ein rechtwinkliges Dreieck mit den Katheten a, b und der Hypotenuse c?", a: ["a + b = c", "a² + b² = c²", "a² - b² = c²", "a • b = c²"], c: "a² + b² = c²" },
        { q: "In einem rechtwinkligen Dreieck ist das Verhältnis von Gegenkathete zu Hypotenuse definiert als...", a: ["Tangens", "Cosinus", "Sinus", "Pythagoras"], c: "Sinus" },
        { q: "Ein rechtwinkliges Dreieck hat die Katheten a = 3 cm und b = 4 cm. Wie lang ist die Hypotenuse c?", a: ["5 cm", "7 cm", "25 cm", "6 cm"], c: "5 cm" },
        { q: "Gegenüber von welchem Winkel liegt immer die Hypotenuse?", a: ["Gegenüber dem spitzesten Winkel", "Gegenüber dem 90°-Winkel", "Gegenüber dem 45°-Winkel", "Das ist völlig zufällig"], c: "Gegenüber dem 90°-Winkel" },
        { q: "Wie ist der Cosinus eines Winkels im rechtwinkligen Dreieck definiert?", a: ["Gegenkathete / Ankathete", "Ankathete / Hypotenuse", "Gegenkathete / Hypotenuse", "Hypotenuse / Ankathete"], c: "Ankathete / Hypotenuse" },
        { q: "Wie nennt man die beiden kürzeren Seiten in einem rechtwinkligen Dreieck?", a: ["Hypotenusen", "Katheten", "Schenkel", "Diagonalen"], c: "Katheten" },
        { q: "Wie ist der Tangens definiert?", a: ["Gegenkathete / Ankathete", "Ankathete / Gegenkathete", "Ankathete / Hypotenuse", "Hypotenuse / Gegenkathete"], c: "Gegenkathete / Ankathete" },
        { q: "Wie groß ist die Innenwinkelsumme in jedem ebenen Dreieck?", a: ["90°", "180°", "360°", "270°"], c: "180°" },
        { q: "Der Satz des Thales besagt: Liegt ein Punkt C auf einem Halbkreis über der Strecke AB, dann hat der Winkel ACB immer...", a: ["45°", "60°", "90°", "120°"], c: "90°" },
        { q: "Eine Leiter ist 5m lang und steht 3m von einer Wand entfernt. Wie hoch reicht sie an der Wand?", a: ["2 m", "4 m", "4.5 m", "16 m"], c: "4 m" },
        { q: "Welche Seite ist in einem rechtwinkligen Dreieck immer die längste?", a: ["Ankathete", "Gegenkathete", "Hypotenuse", "Basis"], c: "Hypotenuse" },
        { q: "Was berechnet man mit der Formel A = 0.5 • g • h?", a: ["Den Umfang eines Kreises", "Die Fläche eines Dreiecks", "Das Volumen eines Würfels", "Die Fläche eines Trapezes"], c: "Die Fläche eines Dreiecks" },
        { q: "Wie nennt man ein Dreieck, bei dem zwei Seiten gleich lang sind?", a: ["Gleichseitiges Dreieck", "Gleichschenkliges Dreieck", "Unregelmäßiges Dreieck", "Rechtwinkliges Dreieck"], c: "Gleichschenkliges Dreieck" },
        { q: "Wenn Sinus(alpha) = 0.5 ist, wie groß ist der Winkel alpha?", a: ["30°", "45°", "60°", "90°"], c: "30°" },
        { q: "Kann der Satz des Pythagoras in einem stumpfwinkligen Dreieck direkt angewendet werden?", a: ["Ja, immer", "Nein, nur in rechtwinkligen Dreiecken", "Nur wenn zwei Seiten gleich lang sind", "Ja, aber nur für die Basis"], c: "Nein, nur in rechtwinkligen Dreiecken" }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let hearts = 3;

function startGame(subject) {
    currentQuestions = [...questionsBank[subject]];
    currentQuestionIndex = 0;
    score = 0;
    hearts = 3;
    document.getElementById("end-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    updateHeader();
    showQuestion();
}

function showQuestion() {
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-btn").classList.add("hidden");
    let currentQ = currentQuestions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQ.q;
    let progressPercent = (currentQuestionIndex / currentQuestions.length) * 100;
    document.getElementById("progress").style.width = progressPercent + "%";
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    currentQ.a.forEach(option => {
        let btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = option;
        btn.onclick = () => checkAnswer(btn, option, currentQ.c);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selectedBtn, chosenOption, correctOption) {
    let buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correctOption) btn.classList.add("correct-choice");
    });
    let feedback = document.getElementById("feedback");
    if (chosenOption === correctOption) {
        feedback.innerText = "Hervorragend! 🎉";
        feedback.className = "feedback correct";
        score += 10;
    } else {
        selectedBtn.classList.add("wrong-choice");
        feedback.innerText = "Das war leider falsch. 😢";
        feedback.className = "feedback wrong";
        hearts--;
    }
    updateHeader();
    if (hearts <= 0) {
        setTimeout(() => endGame(false), 1200);
    } else {
        document.getElementById("next-btn").classList.remove("hidden");
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length && hearts > 0) {
        showQuestion();
    } else if (hearts > 0) {
        document.getElementById("progress").style.width = "100%";
        setTimeout(() => endGame(true), 400);
    }
}

function updateHeader() {
    document.getElementById("score-display").innerText = `Score: ${score}`;
    document.getElementById("hearts-display").innerText = "❤️".repeat(hearts) + "💔".repeat(3 - hearts);
}

function endGame(win) {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");
    let title = document.getElementById("end-title");
    let msg = document.getElementById("end-message");
    if (win) {
        title.innerText = "Quest abgeschlossen! 🏆";
        msg.innerText = `Großartige Leistung! Du hast alle Fragen gemeistert und ${score} Punkte erzielt.`;
    } else {
        title.innerText = "Nächster Versuch! 🕹️";
        msg.innerText = "Alle Herzen sind aufgebraucht. Schließe das Tab und versuche es noch einmal!";
    }
}
