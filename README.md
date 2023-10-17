# Examination-Hangman

# Hampus Falk, Mike Waser och Anton Hansen


Krav på funktionalitet

Du ska bygga det klassiska spelet hänga gubbe.
Det ska vara gjort med HTML/CSS/Javascript
Användaren ska kunna mata in med tangentbordet bokstäver
Användaren ska kunna se vilka bokstäver den gissar rätt på och var i ordet de hamnar
Vid varje fel ska en del av gubben visas
Ifall användaren gissar på rätt ord så ska en ”Du vann”-skärm visas med en fråga om man vill spela igen,
Ifall användaren inte hinner gissa rätt ska en ”Du förlorade”-skärm visas med det rätta ordet och en fråga om man vill spela igen.
Du ska enbart kunna gissa på en bokstav i taget.
Ordet får inte vara hårdkodat i Javascript-filen när den ska jämföras. Förslagsvis kan ordet slumpas från en array med ord.


Betygskriterier för godkänt 

Alla krav på funktionalitet är uppfyllda och följs.
Att SVG:en som bifogas i HTML:en används
Spelet fungerar med inga fel i konsolen i developer tools.
Vettiga namn på variabler och funktioner på engelska.


Inlämning

Via classroom
Länka till Git repository *deadline tom 17/ 10


PLAN
1. Layout HTML, CSS (Först eller sist?) [ok]
3. Array med ord (wordBank) [ok]
4. Timer 5 min [ok]
5. Start knapp [ok ish]!!!!! Ska start knapp och timer knapp vara samma?
6. Funktion (chooseWord) slumpar ett ord från arrayn och gör understreck istället. [ok]
7. Input box för att gissa bokstav. [ok ish]
8. Funktion (checkLetter) tar 1 bokstav och kollar om bokstaven stämmer med ordet som funktionen       chooseWord valde om bostaven stämmde blir det return i "container randomWord" och om den inte       stämmer kör funktionen return till container wrongGuess, lägger till en del av hangman och ta       bort bokstaven som alternativ.
9. Funktion (drawHangman) lägger till delar av hangman bilden när man gissar fel bokstav.
10. Länka ihop funktionerna
11. Resultat meddelande i form av en box i mitten av skärmen som säger antingen "DU VANN" eller "DU FÖRLORADE" beroende på hur det gick
   med en knapp som kan starta ett nytt spel. Ska komma upp om antingen tiden går ut, gissar för många gånger eller gissat rätt.

SVG bilden är indelar i 6 delar betyder det att man bara får gissa fel 6 gånger?
