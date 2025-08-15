# Location Form

**Location Form** is a form built with **Next.js** (React framework) that allows users to input and validate location data.
It uses **React Hook Form** and **Zod** for validation, and **Material UI** for a modern design.
Additionally, it uses libraries for displaying flags and fetching data about countries and states/provinces.

---

## Form Fields

Users can enter the following information:

- **Venue Title** – name of the venue (required) 
- **Alt Name** – alternative name (optional) 
- **Address** – location address (required) 
- **City** – city name (required)  
- **Country** – country (required, selectable from a list with flags)  
- **State/Province** – region or province (required if the country has states)
- **Zip/Postal** – postal code (required)
- **Parking Fee** – switch to indicate whether there is a parking fee  
- **Parking Info** – additional parking information (optional)dodatne informacije o parkingu (opcionalno)  

## Usage
- [Technologies]
- [Installation]
- [Usage]
- [Scripts]
- [Features]
- [License]

---

## Technologies

* **Frontend Framework:** [Next.js]
* **Programming Language:** [TypeScript]
* **UI Library:** [Material UI (MUI)]
* **State & Forms:** [React Hook Form] + [Zod]
* **Styling:** [Tailwind CSS]
* **Helper Libraries:**
  * [`country-code-to-flag-emoji`] – displays flags based on ISO country codes
  * [`country-state-city`] – provides lists of countries and states


---

## Installation

Install all dependencies::
```bash
npm install
```

Install development dependencies::
```bash
npm install -D typescript tailwindcss @tailwindcss/postcss eslint eslint-config-next @types/node @types/react @types/react-dom
```

---

## Usage

### Development mode:
```bash
npm run dev
```

### Production build:
```bash
npm run build
npm start
```

### Lint check:
```bash
npm run lint
```
---

## Features

* Next.js + TypeScript for fast and typed development
* React Hook Form for form management
* Zod for schema-based validation
* Material UI components with Tailwind CSS styling
* Dropdown lists for countries, states, and with emoji flags



## Author
Anesa Kečo — [anesaK](https://github.com/anesaK)


