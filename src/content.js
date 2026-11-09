/* Inhalte der Seite «MFE Skifahren – Konzentration im Schneesport».
 *
 * Zeilenformat (pro Block ein String, Trennzeichen "|"):
 *   h|Zwischentitel          p|Absatz              b|Fetter Absatz
 *   l|Listenpunkt            q|Zitat / Anweisung   c|Abhak-Aufgabe (Zustand wird auf dem Gerät gespeichert)
 *   r|Zeit|TAG|Text          Programmzeile, TAG = SCHNEE, INDOOR, HOTEL oder leer
 *   v|Videotitel|YouTube-ID  Eingebettetes Video (11 Zeichen); sonst Link-URL (leer = noch kein Link hinterlegt)
 *   k|Button-Text|URL        Button-Link  (URL leer lassen = noch kein Link hinterlegt)
 */
window.CONTENT = {
  prog1: [
    "r|09.00–12.00|SCHNEE|Praxis – MF-Thema Konzentrieren im Schneesport",
    "r|12.00–13.30||Mittagessen · Austausch zum Vorbereitungsauftrag",
    "r|13.30|SCHNEE|Praxis – MF-Thema Konzentrieren im Schneesport",
    "r|15.30||Reflexion und Transfer · Umsetzung im MFL",
    "r|17.00–18.00|INDOOR|Theorie",
    "r|18.00|INDOOR|Austausch · offene Fragen klären",
    "r|19.00|HOTEL|Nachtessen"
  ],
  prog2: [
    "r|09.00|SCHNEE|Praxis – MF-Thema Konzentrieren im Schneesport · Kompetenznachweis Praxis LK",
    "r|12.00–13.30||Mittagessen und Austausch",
    "r|13.30|SCHNEE|Praxis · Unterrichten und Technik 1 – Blended Learning",
    "r|15.00||Reflexion und Transfer · Transfer in die Praxis · Module Kanton",
    "r|15.30||Modulschluss · Evaluation"
  ],
  fokus: {
    aw: { title: 'Aussen weit', sub: 'external-weit', d: 'Umgebung als Ganzes wahrnehmen: Strecke, Gelände, Sicht, Schnee, andere Athlet:innen, Kurs oder Anlage im Überblick.', e: 'Besichtigung von Kurs, Loipe oder Park, Einschätzen der Bedingungen, Taktik im Feld (z. B. Massenstart), freie Fahrt auf belebter Piste, Sicherheit.' },
    ae: { title: 'Aussen eng', sub: 'external-eng', d: 'Aufmerksamkeit auf ein einzelnes äusseres Detail: das nächste Obstacle (Tor, Kicker, Rail, Scheibe), ein Punkt in der Linie, die Schneeoberfläche vor dem Gerät.', e: 'Blicksteuerung im Lauf, Ansatzpunkt eines Schwungs, Absprungkante, Landezone, Zielscheibe beim Schiessen.' },
    iw: { title: 'Innen weit', sub: 'internal-weit', d: 'Mehrere innere Signale gleichzeitig: Körpergefühl, Anspannung, Ermüdung, Emotionen, Gedanken; Analysieren und Planen.', e: 'Analyse nach Lauf, Run oder Rennen, Einschätzen von Aktivierung und Belastung, Erarbeiten von Renntaktik oder Run-Aufbau.' },
    ie: { title: 'Innen eng', sub: 'internal-eng', d: 'Ein einziges inneres Signal: der Druck unter dem Fuss, ein Atemzug, ein Schlüsselwort.', e: 'Vorstartroutine, Reset nach einem Fehler, Atmung vor dem Schuss, Fokus auf ein Bewegungsmerkmal in einer Technikübung.' }
  },
  tabs: [
    { id: 'ablauf', title: 'Ablauf', groups: [
      { title: 'Vorbereitungsauftrag', lines: [
        "c|J+S Lernbaustein «Konzentrieren» durcharbeiten, inkl. 2 Fragen zur Praxis (ca. 45')",
        "c|Notiere dir 2 Beispiele, wie du deine Teilnehmenden in ihrer Konzentration unterstützt",
        "c|Schneesport-News 26/27 lesen" ] },
      { title: 'Programm', seg: true, lines: [] }
    ] },

    { id: 'tag1', title: 'Tag 1 – Verstehen und erleben', groups: [
      { title: 'Morgen – Einflussfaktoren der Konzentration', lines: [
        "l|Was sind externale und internale Einflussfaktoren auf die Konzentration?",
        "l|Sicherheit",
        "l|Engen und weiten Aufmerksamkeitsfokus erleben" ] },
      { title: 'Nachmittag – Konzentration steuern', lines: [
        "l|Übungen mit Fokusvorgaben und Schlagwörtern einsetzen",
        "l|Bewegungsform frei wählbar in der Gruppe",
        "l|Erholungsphasen einbauen",
        "l|Techniklernen" ] },
      { title: 'MFL-Thema · 5 Std', lines: [
        "b|Vormittag – Einflussfaktoren der Konzentration",
        "l|TN können externale und internale Einflussfaktoren auf die eigene Konzentration benennen und bewusst lenken.",
        "l|TN erkennen, welcher Fokus (enge oder weite Aufmerksamkeit) in welcher Situation lern- und sicherheitsrelevant ist.",
        "b|Nachmittag – Konzentration der Teilnehmenden im eigenen Unterricht lenken",
        "l|TN setzen externale oder internale Fokusvorgaben bewusst ein, um Bewegungsqualität und Sicherheit ihrer Gruppe zu fördern.",
        "l|TN kennen den Nutzen von Übungen mit Schlagwörtern zur Förderung der Konzentration auf die Bewegung und wenden diese zielführend an." ] },
      { title: 'Aufwärmen – Roboter-Spiel', lines: [
        "p|In Zweiergruppen, alle im gleichen markierten Feld. Alle Roboter bewegen sich frei und leicht joggend im Feld. Klopfen auf die rechte oder linke Schulter steuert die Richtung, Berühren des Kopfes = geradeaus. Andere TN dürfen nicht berührt werden.",
        "b|Zusatzaufgabe 1 – Internal: sehr genaue Körperanweisungen",
        "q|«Beuge deine Knie.»",
        "q|«Halte den Oberkörper aufrecht.»",
        "q|«Ziehe deine Schulterblätter nach hinten und zusammen.»",
        "b|Zusatzaufgabe 2 – External: nur noch Ziele vorgeben",
        "q|«Bewege dich möglichst schnell zur Aussenlinie.»",
        "q|«Stampfe so laut wie möglich zur Aussenlinie.»" ] },
      { title: 'Reflexionsfragen – auf den Lift mitnehmen', hl: true, lines: [
        "b|Bei welcher Variante habt ihr weniger über eure Bewegung nachgedacht?",
        "p|Internal: Was passiert, wenn ich den TN sage, wie sie ihren Körper bewegen sollen? → Internale Fokuspunkte helfen bei gezielter Fehlerkorrektur, fördern Körpergefühl, Wahrnehmung und Technikverständnis.",
        "p|External: Was passiert, wenn ich den TN sage, welches Bewegungsergebnis sie erreichen sollen? → Externale Fokuspunkte fördern das Bewegungslernen am stärksten." ] },
      { title: 'Einfahren (1–2 Fahrten) – weiter und enger Blick', lines: [
        "l|Vormittag – Aufmerksamkeitsfokus erleben",
        "l|Nachmittag – Konzentration steuern",
        "l|Reflexion und Transfer (30')" ] },
      { title: 'Theorie · 1 Std', lines: [
        "h|Schneesport-News vertiefen + Input zur Transferwirksamkeit",
        "p|Ziele: TN können relevante Neuigkeiten aus dem Schneesport einordnen und diskutieren. TN können Erkenntnisse aus dem Vorbereitungsauftrag auf ihre eigene Arbeitspraxis übertragen.",
        "h|Informationsstände / Inputs",
        "l|Vorbereitungsauftrag: internaler/externaler Fokus im Detail – was heisst das in der Praxis? Good Practice Schneesport, Wirkung",
        "l|FTEM: FTEM-Webseite Swiss-Ski",
        "l|Ausbildungsweg SWSK: NDS Skifahren / Swiss Snowsports",
        "l|Kursdossier: Ilias (Login wird separat abgegeben)",
        "l|Leiterkurs Unterrichten und Technik 1",
        "l|Snowsafety-App (BFU)",
        "l|Transferwirksamkeit (PPT BASPO)",
        "h|Reflexion und Transfer · 30'",
        "p|In Klasse einordnen: Transferwirksamkeit (BASPO), Vorbereitungsauftrag, internaler/externaler Fokus im Detail, Good Practice Schneesport, Wirkung." ] }
    ] },

    { id: 'tag2', title: 'Tag 2 – Anwenden als Ausbilder:in', groups: [
      { title: 'Morgen – Beobachten und Rückmelden', lines: [
        "l|Konzentration beim Beobachten steuern und die Aufmerksamkeitslenkungsroutine durchführen",
        "l|In den Prüfungsdisziplinen",
        "l|Kriteriengeleitet beobachten und rückmelden",
        "l|Ritual" ] },
      { title: 'Nachmittag – Blended Learning', lines: [
        "l|Digitale Lernmedien im Unterricht einsetzen",
        "l|Beispiel Unterrichten und Technik 1" ] },
      { title: "Expert:innen-Weiterbildung UT 1, 2 · 5 Std", lines: [
        "b|Vormittag – Den eigenen Fokus beim Beobachten schärfen",
        "l|TN können ihre eigene Beobachtungskonzentration steuern (im Hier und Jetzt) und geben pro Rückmeldung einen einzigen, klar priorisierten Entwicklungspunkt.",
        "l|TN können die Aufmerksamkeitslenkungsroutine durchführen und verstehen deren Wirkung.",
        "b|Nachmittag – Beispiel Unterricht / SnowHow anwenden (überarbeitete Swiss Snow League / MFL FTEM / Mobilesport Konzentration 5–12)",
        "l|TN erleben Ausbildungsinhalte UT1 und KNW des Level 2 / ET-2.",
        "l|TN kennen Möglichkeiten, wie SnowHow gezielt zur Lernunterstützung und Reflexion eingesetzt werden kann." ] },
      { title: "Tagesvorbereitung (15') – 16-Sekunden-Kur", hl: true, lines: [
        "l|Snowsafety-Sicherheitstest – alle machen ihn einmal.",
        "k|Snow Safety öffnen|https://snowsafety.ch/de",
        "l|Bewegungsform: Keypoints, Good Practice (SnowHow einbinden).",
        "l|Aufmerksamkeitslenkung als Routine verankern: 16-Sekunden-Kur.",
        "k|SRF Sportlounge – Die 16-Sekunden-Kur · auf SRF öffnen|",
        "l|Achtsamkeitsübungen (beliebig einsetzbar)" ] },
      { title: 'Ablauf', lines: [
        "l|Aufwärmen + Einfahren",
        "l|Vormittag – Beobachtungsfokus setzen (im Hier und Jetzt)",
        "l|Leiterkurs Kompetenznachweis",
        "l|Nachmittag – Prüfungsformen beobachten und rückmelden",
        "l|Reflexion und Transfer (30')" ] }
    ] },

    { id: 'fokus', title: 'Fokus', groups: [
      { title: 'Kernaussagen', hl: true, lines: [
        "l|Sicherheit ist immer der erste Fokus – im Gelände und im Feedback.",
        "l|Internale enge Fokuspunkte fördern Körpergefühl und Technikverständnis.",
        "l|Externale enge Fokuspunkte fördern das Bewegungslernen am stärksten.",
        "l|Konzentration ist steuerbar – als Leiter:in legst du fest, worauf deine Gruppe den Fokus legt.",
        "l|Ein einziger, gut gewählter Fokus ist wirksamer als drei gleichzeitige Anweisungen." ] },
      { title: 'Aufmerksamkeitsfokus', matrix: true, lines: [] }
    ] },

    { id: 'material', title: 'Material', groups: [
      { title: 'Modullernziele MFE KT', lines: [
        "p|Verbindliche Modullernziele",
        "h|Sich als J+S-Expert:in engagieren",
        "p|Die J+S-Expertinnen und -Experten …",
        "l|verstehen und identifizieren sich mit dem MFL-Programm und kreieren Umsetzungsmöglichkeiten.",
        "l|verstehen das Thema «Entwicklungsfaktor Psyche – Konzentrieren» und können dieses J+S-Leiter:innen vermitteln.",
        "l|entwickeln Möglichkeiten, die Transferwirksamkeit in der eigenen Praxis zu verstärken.",
        "h|Sportart verstehen",
        "p|Die J+S-Expertinnen und -Experten …",
        "l|erleben den Entwicklungsfaktor Psyche – Konzentration und verstehen die Anwendung in der Praxis.",
        "h|Sportart unterrichten",
        "p|Die J+S-Expert:innen können …",
        "l|dem jeweiligen Modul angepasste Trainingsformen aussuchen und das MF-Thema für die Leiter:innen verständlich aufbereiten.",
        "l|die Lehrunterlagen modulbezogen einsetzen.",
        "l|die Kursdossiers der Karrieremodule in der Praxis anwenden." ] },
      { title: 'Videos – SnowHow Ski', lines: [
        "p|Erscheinungsformen und Good Practice von SnowHow (Swiss Snowsports). Weitere Formen auf tool.jugendundsport.ch.",
        "v|Erscheinungsformen Ski|AtKq_MKRNKk",
        "h|Carveschwung",
        "v|Bewegungsform Carveschwung|tVbVPHpavHo",
        "v|Good Practice Carveschwung|P0EG47ajNTI",
        "h|Kurzschwung",
        "v|Bewegungsform Kurzschwung|DnHn6E4HdIw",
        "v|Bewegungsform Kurzschwung (2)|wXdIfo3dWoE",
        "v|Good Practice: Aufbaureihe Kurzschwung|ihNf6POZSbE",
        "v|Good Practice: Trichter – Parallelschwünge zu Kurzschwung|iVsYYd3Lz58",
        "h|Parallelschwung Switch",
        "v|Parallelschwung Switch|",
        "v|Parallelschwung Switch – gerutscht|ymcrPIevX0o",
        "v|Parallelschwung Switch – geschnitten|gl0i8jar0MU",
        "v|Parallelschwung Switch – Blickrichtungen|n24uoy2oLUo",
        "k|Good Practice Parallelschwung Switch: auf LernFlink öffnen|",
        "k|Vermitteln: auf LernFlink öffnen|" ] },
      { title: 'Kompetenznachweis UT 2', lines: [
        "p|Technische Grundsätze Level 2 (Swiss Snowsports) als Orientierung für den weiteren Bildungsweg J+S.",
        "k|LernFlink Swiss Snowsports & Swiss-Ski öffnen|",
        "v|KNW – Kurzschwung|X8ns9SLvtCQ",
        "v|KNW – Parallelschwung Switch|SMvNIYMO36c",
        "v|KNW – Sprung|FomNSKz0mzM",
        "v|KNW UT 2 – Video 4|z25xeApaus0",
        "v|KNW UT 2 – Video 5|yyX3p__Wt0g",
        "v|KNW UT 2 – Video 6|JIqpSdkQOPM" ] },
      { title: 'Transfer', lines: [
        "l|Brief in die Zukunft – Massnahmen für meine Praxis definieren, terminiert auf kurz vor Saisonstart.",
        "l|Idee MFL-PostCard-App – Karte mit Foto des MFL an sich selbst schreiben, mit Massnahmen für die eigene Praxis." ] }
    ] }
  ]
};
