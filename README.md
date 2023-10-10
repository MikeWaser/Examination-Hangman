# Examination-Hangman




1. Array med ord
2. Timer 5 min
3. Start knapp
4. Funktion (chooseWord) slumpar ett ord från arrayn och gör understreck istället.
5. Funktion (letterCheck) tar 1 bokstav och kollar om bokstaven stämmer med ordet som funktionen chooseWord valde.
om bostaven stämmde blir det return i "container answer" och om den inte stämmde kör funktionen return till container wrongGuess
och ta bort som alternativ.
6. Funktion (drawHangman) lägger till delar av hangman bilden när man gissar fel bokstav.
7. Resultat meddelande i form av en box i mitten av skärmen som säger antingen "DU VANN" eller "DU FÖRLORADE" med en knapp som kan starta ett nytt spel.
