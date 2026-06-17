const questionsBank = {
    englisch_grammatik: [
        { q: "Bilde das Passiv: 'The chef cooks the food.'", a: ["The food was cooked by the chef.", "The food is cooked by the chef.", "The food is cooking the chef.", "The food has been cooked."], c: "The food is cooked by the chef." },
        { q: "Welche Form ist grammatikalisch korrekt für einen If-Clause Typ 2?", a: ["If I have time, I will go.", "If I had time, I would go.", "If I would have time, I went.", "If I had had time, I would have gone."], c: "If I had time, I would go." },
        { q: "Ergänze sinnvoll: 'If it rains tomorrow, we ... the match.'", a: ["would cancel", "will cancel", "canceled", "canceling"], c: "will cancel" },
        { q: "Bilde das Passiv im Past Simple: 'Alexander Fleming discovered penicillin.'", a: ["Penicillin is discovered by Alexander Fleming.", "Penicillin was discovered by Alexander Fleming.", "Penicillin had been discovered.", "Penicillin was discovering."], c: "Penicillin was discovered by Alexander Fleming." },
        { q: "Welche Zeiten-Kombination nutzt man beim Conditional Clause Typ 3?", a: ["If + Simple Present -> will + Infinitiv", "If + Simple Past -> would + Infinitiv", "If + Past Perfect -> would have + Past Participle", "If + Simple Past -> will have + Past Participle"], c: "If + Past Perfect -> would have + Past Participle" },
        { q: "Ergänze: 'The window ... by the storm yesterday.'", a: ["is broken", "was broken", "has broken", "was broke"], c: "was broken" },
        { q: "Welcher Satz enthält ein korrektes Relativpronomen?", a: ["The man which lives next door is nice.", "The man whose lives next door is nice.", "The man who lives next door is nice.", "The man what lives next door is nice."], c: "The man who lives next door is nice." },
        { q: "Ergänze: 'If I ... a millionaire, I would buy an island.'", a: ["am", "was/were", "would be", "had been"], c: "was/were" },
        { q: "Was drückt der If-Clause Typ 1 aus?", a: ["Eine unmögliche Bedingung in der Vergangenheit", "Eine theoretische/unwahrscheinliche Bedingung in der Gegenwart", "Eine erfüllbare, reale Bedingung in der Zukunft", "Einen Befehl"], c: "Eine erfüllbare, reale Bedingung in der Zukunft" },
        { q: "Bilde das Passiv im Present Perfect: 'They have built a new bridge.'", a: ["A new bridge was built.", "A new bridge has been built.", "A new bridge is built.", "A new bridge had been built."], c: "A new bridge has been built." },
        { q: "Vervollständige: 'If she had studied more, she ... the exam.'", a: ["will pass", "would pass", "would have passed", "passed"], c: "would have passed" },
        { q: "Welche Konjunktion leitet einen Hauptsatz ein, der einen Gegensatz ausdrückt?", a: ["Because", "Although", "However", "Therefore"], c: "However" },
        { q: "Wann benutzt man das Passiv (Passive Voice) im Englischen?", a: ["Wenn die handelnde Person wichtiger als die Aktion ist", "Wenn die Aktion oder das Objekt wichtiger ist als wer es tut", "Nur in alten Texten", "Wenn man über Gefühle spricht"], c: "Wenn die Aktion oder das Objekt wichtiger ist als wer es tut" },
        { q: "Ergänze: 'He said that he ... his keys the day before.'", a: ["has lost", "had lost", "loses", "will lose"], c: "had lost" },
        { q: "Welche Verbform folgt typischerweise nach Präpositionen wie 'interested in' oder 'good at'?", a: ["Infinitiv mit to", "Gerundium (-ing Form)", "Past Participle", "Simple Past"], c: "Gerundium (-ing Form)" }
    ],
    englisch_vokabeln: [
        { q: "Was bedeutet das Phrasal Verb 'to give up'?", a: ["nachgeben", "aufgeben", "verteilen", "mitbringen"], c: "aufgeben" },
        { q: "Was ist das korrekte Synonym für 'environment'?", a: ["Development", "Surroundings / Nature", "Government", "Pollution"], c: "Surroundings / Nature" },
        { q: "Was bedeutet das Wort 'consequence' auf Deutsch?", a: ["Reihenfolge", "Konsequenz / Auswirkung", "Gerechtigkeit", "Zustimmung"], c: "Konsequenz / Auswirkung" },
        { q: "Was bedeutet das Phrasal Verb 'to look forward to'?", a: ["zurückblicken auf", "sich freuen auf", "aufpassen auf", "nachschlagen"], c: "sich freuen auf" },
        { q: "Wähle das Gegenteil von 'mandatory' (verpflichtend):", a: ["compulsory", "optional", "necessary", "urgent"], c: "optional" },
        { q: "Was bedeutet 'to take advantage of something'?", a: ["etwas ablehnen", "etwas ausnutzen / von etwas profitieren", "etwas beschädigen", "etwas wiederholen"], c: "etwas ausnutzen / von etwas profitieren" },
        { q: "Übersetze: 'Verantwortung'", a: ["Opportunity", "Responsibility", "Relationship", "Government"], c: "Responsibility" },
        { q: "Was bedeutet das Wort 'anxious'?", a: ["wütend", "ängstlich / besorgt", "glücklich", "gelangweilt"], c: "ängstlich / besorgt" },
        { q: "Was bedeutet 'to postpone a meeting'?", a: ["ein Treffen absagen", "ein Treffen verschieben", "ein Treffen pünktlich beginnen", "ein Treffen leiten"], c: "ein Treffen verschieben" },
        { q: "Was bedeuten die 'pros and cons'?", a: ["Gewinn und Verlust", "Vor- und Nachteile", "Rechte und Pflichten", "Fragen und Antworten"], c: "Vor- und Nachteile" },
        { q: "Was bedeutet 'to convince someone'?", a: ["jemanden betrügen", "jemanden überzeugen", "jemanden einladen", "jemanden ignorieren"], c: "jemanden überzeugen" },
        { q: "Ergänze: 'Climate change is a global ...'", a: ["issue", "solution", "benefit", "agreement"], c: "issue" },
        { q: "Was bedeutet das Adjektiv 'sustainable'?", a: ["schädlich", "nachhaltig", "zerbrechlich", "vorübergehend"], c: "nachhaltig" },
        { q: "Was bedeutet das Phrasal Verb 'to find out'?", a: ["hinausgehen", "herausfinden", "verlieren", "erfinden"], c: "herausfinden" },
        { q: "Was ist die deutsche Bedeutung von 'disadvantage'?", a: ["Vorteil", "Nachteil", "Verabredung", "Enttäuschung"], c: "Nachteil" }
    ]
};

// *(Kopiere exakt den logischen Steuerungscode aus 'mathe-script.js' ab Zeile 38 ('let currentQuestions = [];' bis zum Ende) hier drunter)*
