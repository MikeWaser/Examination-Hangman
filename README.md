# Examination-Hangman




1. Layout (Först eller sist?)
2. Array med ord
3. Timer 5 min
4. Start knapp
5. Funktion (chooseWord) slumpar ett ord från arrayn och gör understreck istället.
6. Funktion (letterCheck) tar 1 bokstav och kollar om bokstaven stämmer med ordet som funktionen chooseWord valde.
   om bostaven stämmde blir det return i "container answer" och om den inte stämmde kör funktionen return till container wrongGuess
   och ta bort som alternativ.
7. Funktion (drawHangman) lägger till delar av hangman bilden när man gissar fel bokstav.
8. 
9. Resultat meddelande i form av en box i mitten av skärmen som säger antingen "DU VANN" eller "DU FÖRLORADE" beroende på hur det gick
   med en knapp som kan starta ett nytt spel. Ska kolla upp om antingen tiden går ut, gissar för många gånger eller gissat rätt.

SVG bilden är indelar i 6 delar betyder det att man bara får gissa fel 6 gånger?
