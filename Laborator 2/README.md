# Campus Info Hub

## 1. Ce este o resursa (resource) in aplicatia ta?

O resursa reprezinta o locatie sau serviciu din campus care poate fi accesat de studenti, cum ar fi biblioteca, cantina sau salile de studiu.

## 2. Da exemplu de un URI si explica componentele acestuia.

Exemplu:  
/pages/library.html#schedule

Componente:
- /pages/library.html → calea catre document
- #schedule → fragment care duce direct la sectiunea programului

## 3. Care parti sunt statice si care sunt dinamice?

Parti statice:
- fisierele HTML
- structura paginilor

Parti dinamice:
- incarcarea datelor din resources.json
- afisarea si filtrarea resurselor folosind JavaScript

## 4. Este aplicatia ta document-centric sau interactive?

Aplicatia este ambele.

Document-centric deoarece contine pagini informative despre resursele din campus.

Interactive deoarece foloseste JavaScript pentru a incarca si filtra date din JSON.