# Location Form

**Location Form** je forma napravljena u **Next.js** (React framework) koja omogućava korisnicima unos i validaciju podataka o lokaciji.  
Koristi **React Hook Form** i **Zod** za validaciju, te **Material UI** za moderan izgled.  
Dodatno, koristi biblioteke za prikaz zastava i preuzimanje podataka o državama, regijama i gradovima.

---


## Polja forme

Korisnik u formu unosi sljedeće podatke:

- **Venue Title** – naziv mjesta (obavezno polje)  
- **Alt Name** – alternativni naziv (opcionalno)  
- **Address** – adresa lokacije (obavezno polje)  
- **City** – naziv grada (obavezno polje)  
- **Country** – država (obavezno polje, izbor iz liste sa zastavama)  
- **State/Province** – regija ili pokrajina (obavezno ako država ima regije)  
- **Zip/Postal** – poštanski broj (obavezno polje)  
- **Parking Fee** – prekidač (Switch) za označavanje da li postoji naknada za parking  
- **Parking Info** – dodatne informacije o parkingu (opcionalno)  

## Sadržaj
- [Tehnologije](#tehnologije)
- [Instalacija](#instalacija)
- [Korištenje](#korištenje)
- [Skripte](#skripte)
- [Funkcionalnosti](#funkcionalnosti)
- [Licenca](#licenca)

---

## Tehnologije

- **Frontend Framework:** [Next.js]
- **Programski jezik:** [TypeScript] 
- **UI Biblioteka:** [Material UI (MUI)]
- **State & Forme:** [React Hook Form] + [Zod]
- **Stilizacija:** [Tailwind CSS]
- **Pomoćne biblioteke:**  
  - [`country-code-to-flag-emoji`] – prikaz zastava prema ISO kodovima država  
  - [`country-state-city`]– lista država, regija i gradova

---

## Instalacija

Instaliraj sve zavisnosti:
```bash
npm install
```

Instaliraj razvojne zavisnosti:
```bash
npm install -D typescript tailwindcss @tailwindcss/postcss eslint eslint-config-next @types/node @types/react @types/react-dom
```

---

## Korištenje

### Razvojni mod:
```bash
npm run dev
```

### Produkcijski build:
```bash
npm run build
npm start
```

### Lint provjera:
```bash
npm run lint
```

---

## Funkcionalnosti

- Next.js + TypeScript za brz i tipiziran razvoj
- React Hook Form za upravljanje formama
- Zod za validaciju na osnovu šema
- Material UI komponente uz Tailwind CSS stilizaciju
- Padajuće liste za države, regije i gradove sa emoji zastavama


## Autor
Anesa Kečo — [anesaK](https://github.com/anesaK)


