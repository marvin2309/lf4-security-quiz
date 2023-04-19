import { Question } from "../types/types"

export const questions: Question[] = 
[
    {
      question: 'Wie beginnt die URL zu einer sicheren Website?',
      answers:
          [
            {id:1, text:"www."},
            {id:2, text:"https://"},
            {id:3, text:"http://"},
            {id:4, text:"Keine der obrigen Antworten"},
          ],
        correctAnswers: [2],
        explanation: 'Das "www" in einer URL enthält keine Aussage über die Sicherheit der Verbindung zu einer Website.' +
            ' Die Abkürzungen HTTP (Hypertext Transfer Protocol) und HTTPS (Hypertext Transfer Protocol Secure) sind Protokolle zur Datenübertragung.' +
            ' Das S in HTTPS steht für secure als für verschlüsselt, während HTTP dies nicht ist.'
    },
    {
      question: 'Mit welcher Tastenkombination können Sie Ihren Windows-Computer sperren? ',
      answers:
          [
            {id:1, text:"Strg+U"},
            {id:2, text:"Alt+F4"},
            {id:3, text:"Strg+J"},
            {id:4, text:"Windowstaste+L"},
          ],
        correctAnswers: [4],
        explanation: 'Einen Windows-Computer wird standardmäßig mit Windowstaste+L gesperrt.' +
            ' Dies ist wichtig, damit der Zugriff von unbefugten Personen verhindert werden kann, sollten sie sich mal nicht an ihrem Arbeitsplatz befinden.'
    },
    {
    question: 'Welche Daten können sie problemlos freigeben?',
    answers:
[
    {id:1, text:"Geburtsdatum"},
    {id:2, text:"Politische Auffassung"},
    {id:3, text:"Ethnische Herkunft"},
    {id:4, text:"Religionszugehörigkeit"},
],
    correctAnswers: [1],
    explanation: 'Das Geburtsdatum zählt im Gegensatz zu den anderen Optionen nicht zu den besonders schutzwürdigen Daten,' +
        ' sondern zu den allgemeinen Personendaten und untersteht somit keinem großen Schutz.' +
        ' Die anderen Optionen sind besonders schutzwürdige personenbezogenen Daten und dürfen ohne Zustimmung der betroffenen Person grundsätzlich nicht verarbeitet werden.'

},
    {
        question: 'Anhand welcher Kriterien wird IT-Sicherheit bemessen?',
        answers:
            [
                {id:1, text:"Integrität"},
                {id:2, text:"Vertraulichkeit"},
                {id:3, text:"Verfügbarkeit"},
                {id:4, text:"Bedienbarkeit"},
            ],
        correctAnswers: [1,2,3],
        explanation: 'Integrität, Vertrauchlichkeit und Verfügbarkeit sind die Kriterien des BSI. Integrität bedeutet, dass Systeme nicht unbermerkt verändert werden können.' +
            'Vertrauchlichkeit ist, wenn sensible Informationen nur von autorisierten Personal eingesehen werden kann.' +
            'Verfügbarkeit bezieht sich auf die Verfügbarkeit von IT-System wie z.B.: Server, Kommunikationsdienste etc..'
    },
    {
        question: 'Sie erhalten eine Mail mit Ihnen unbekannten Absender, in welcher Sie zur Aktualisierung ihrer Accountdaten über einen Link gebeten werden.' +
            ' Wie verhalten Sie sich?',
        answers:
            [
                {id:1, text:"Einen Vorgesetzten informieren, ohne den Link zu öffnen"},
                {id:2, text:"Den Link öffnen um zu prüfen, dass der Mail-Absender seriös ist"},
                {id:3, text:"Die Mail an Kollegen weiterleiten"},
                {id:4, text:"Den Anweisungen folgen"},
            ],
        correctAnswers: [1],
        explanation: 'Es handelt sich bei solchen Mails, sofern sie die Aktion nicht kurz zuvor angefordert haben, um Phishing-Mails.' +
            ' Phishing beschreibt betrügerische Versuche, sensible Informationen wie Passwörter, Kreditkartennummern oder andere persönliche Daten durch Täuschung von Nutzern zu erhalten.' +
            ' Hinter den Links können sich auch Downloadlinks für Viren oder andere schädliche Programme verstecken.'
    },
    {
        question: 'Was ist bei der Erstellung eines Passwortes zu beachten?',
        answers:
            [
                {id:1, text:"Möglichst lang"},
                {id:2, text:"Es sollte Alphanumerische und Sonderzeichen erhalten"},
                {id:3, text:"Es sollte personbezogene Daten enthalten"},
                {id:4, text:"Einheitliches Passwort"},
            ],
        correctAnswers: [1,2],
        explanation: 'Lange Passwörter mit Sonderzeichen, Zahlen und Groß- und Kleinschreibung sind am sichersten, da die Anzahl der möglichen Kombinationen bei diesen am größten ist.' +
            ' Leicht herleitbare Passwörter oder einheitliche Passwörter machen es potentiellen Angreifern deutlich einfacher Ihre Passwörter zu knacken.' +
            ' Tipp: Erstellen Sie ein Passwort, indem Sie die ersten Buchstaben eines Satzes oder einer Phrase nehmen, die leicht zu merken ist.'
    },
    {
        question: 'Was ist eine wichtige Maßnahme, um den Zugriff auf sensible Daten in einer Firma zu schützen?',
        answers:
            [
                {id:1, text:"Erstellung komplexer Passwörter"},
                {id:2, text:"Verwendung einer Firewall"},
                {id:3, text:"Speicherung aller Daten auf einem lokalen Server"},
                {id:4, text:"Teilen aller sensiblen Daten über Cloud-Plattformen"},
            ],
        correctAnswers: [1,2],
        explanation: 'Die Verwendung einer firmeninternen Firewall gehört zu einer der grundlegenden Schutzmechanismen, da durch diese der Zugriff von außen gesteuert werden kann.' +
            'Komplexe Passwörter sind auch wichtig, um zu verhindern dass nicht-autorisierte Daten in fremde Hände gelangen.'
    },
    {
        question: 'Was ist ein sicheres Passwort?',
        answers:
            [
                {id:1, text:"abcdefg"},
                {id:2, text:"qwertz"},
                {id:3, text:"marvin2309nico"},
                {id:4, text:"582&$a!L"},
            ],
        correctAnswers: [4],
        explanation: 'Passwörter dürfen weder durch personbezogene Daten erkennbar sein, noch dürfen sie durch einfache Muster auffallen, da sie sonst einfach zu erraten sind.'
    },
    {
        question: 'Was ist ein VPN und wofür wird es verwendet?',
        answers:
            [
                {id:1, text:"Ein virtuelles privates Netzwerk, das verwendet wird, um den Datenzugriff von außerhalb des Netzwerks zu ermöglichen"},
                {id:2, text:"Eine Anti-Viren-Software, die das System vor Malware schützt"},
                {id:3, text:"Ein kabelloses Netzwerk, das sich automatisch mit Geräten verbindet"},
                {id:4, text:"Ein Mechanismus, um den Datenverkehr innerhalb des Netzwerks zu überwachen"},
            ],
        correctAnswers: [1],
        explanation: 'Ein virtuelles privates Netzwerk, das verwendet wird, um den Datenzugriff von außerhalb des Netzwerks zu ermöglichen, um die Firewall zu umgehen'
    },
    {
        question: 'Wo soll der Schlüssel für den Serverschrank sein?',
        answers:
            [
                {id:1, text:"Es wird kein Schlüssel gebraucht"},
                {id:2, text:"Der Schlüssel steck im Schloss des Serverschranks"},
                {id:3, text:"Nur autorisierte Personen dürfen über den Schlüssel verfügen"},
                {id:4, text:"Jeder Mitarbeiter besitzt einen"},
            ],
        correctAnswers: [3],
        explanation: 'Um die Vertraulichkeit der Server-Infastruktur sicherzustellen ist es notwendig, dass nur autorisierte Personen Zugriff auf den Schlüssel haben.'
    },
    {
        question: 'Wo sollten physische Ordner mit sensiblen Daten untergebracht werden?',
        answers:
            [
                {id:1, text:"Der Boden ist gut genug"},
                {id:2, text:"Griffsbereit am Arbeitsplatz"},
                {id:3, text:"In einem abschließbaren Bereich"},
                {id:4, text:"Bei mir zuhause"},
            ],
        correctAnswers: [3],
        explanation: 'Sensible Daten müssen gesichert in einem abschließbaren Bereich aufbewahrt werden, damit fremde Personen keinen Zugriff haben.'
    },
    {
        question: 'Was ist eine Methode, um Mitarbeiter einer Firma für IT-Sicherheitsmaßnahmen zu sensibilisieren?',
        answers:
            [
                {id:1, text:"Regelmäßige Schulungen und Trainings"},
                {id:2, text:"Nudeln kochen"},
                {id:3, text:"Einführung von strengen IT-Sicherheitsrichtlinien"},
                {id:4, text:"Androhung von Gewalt"},
            ],
        correctAnswers: [1],
        explanation: 'Regelmäßige Schulungen und Trainings sind eine wichtige Methode, um Mitarbeiter in einer Firma für IT-Sicherheitsrisiken zu sensibilisieren.' +
            ' Schulungen und Trainings können die Mitarbeiter darüber informieren, wie sie sichere Passwörter erstellen, wie sie Phishing-Angriffe erkennen und vermeiden.'
    },
]
