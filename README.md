# Rental Car

## Project Description

**Rental Car** is a car rental web application developed with React using Material-UI. The application allows users to browse a catalog of cars, filter them by various criteria, add favorite cars, and book cars through an order form.

## Main Features

### 🚗 **Car Catalog**

- Browse available cars list
- Pagination with ability to load additional cars
- Detailed information about each car

### 🔍 **Filtering and Search**

- Filter by car brand
- Filter by rental price
- Filter by mileage (from/to)
- Combined filters with reset capability

### ❤️ **Favorites System**

- Add/remove cars from favorites
- Save favorites in local storage (Redux Persist)
- Visual indication of favorite cars

### 📋 **Detailed Car Information**

- Complete car specifications
- Rental conditions
- Accessories and functionality
- Image gallery

### 📅 **Booking System**

- Order form with fields for name, email, comment
- Rental period selection via DateRangePicker
- Form validation and data submission

### 🎨 **Modern UI/UX**

- Design with Material-UI
- Theme with custom colors
- Smooth animations and transitions

## Technologies

### Frontend

- **React 19** — main library
- **Vite** — project bundler
- **Material-UI (MUI)** — UI components
- **React Router DOM** — routing
- **Redux Toolkit** — state management
- **Redux Persist** — state persistence
- **Axios** — HTTP client
- **Day.js** — date handling

### Styling

- **Material UI** — components
- **CSS Variables** — custom colors
- **Emotion** — CSS-in-JS
- **PostCSS** — CSS processing
- **Manrope** — font

### Development Tools

- **ESLint** — code linting
- **SWC** — fast compilation
- **GitHub Actions** — CI/CD

## Project Structure

```
src/
├── api/                    # API client
├── components/             # React components
│   ├── app/               # Main application component
│   ├── bookingForm/       # Booking form
│   ├── button/            # Buttons
│   ├── carDetails/        # Car details
│   ├── carList/           # Car list
│   ├── container/         # Container
│   ├── filters/           # Filters
│   ├── header/            # Header
│   ├── hero/              # Hero section
│   └── loader/            # Loading indicator
├── pages/                 # Application pages
├── redux/                 # Redux store and slices
├── utils/                 # Utilities
└── index.css              # Global styles
```

## Installation and Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Vitaliy-Z/rental-car.git
   cd rental-car
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run in development mode**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Other Commands

```bash
# Build for production
npm run build

# Build for GitHub Pages
npm run build:gh-pages

# Preview build
npm run preview

# Code linting
npm run lint
```

## Usage

### Navigation

- **Home page** (`/`) — banner with main call-to-action and button to navigate to catalog
- **Catalog** (`/catalog`) — with ability to filter by specific criteria (brand, price, mileage) and add car to favorites
- **Car details** (`/catalog/:carId`) — with detailed description of specific car, photo, rental form

### Filtering

1. Select car brand from dropdown list
2. Choose car price from dropdown list
3. Specify mileage range
4. Click "Search" to apply filters

### Favorite Cars

- Click the heart icon next to a car to add/remove from favorites
- Favorite cars are saved when page is refreshed

### Booking

1. Go to car details page
2. Fill out the booking form:
   - Name (required)
   - Email (required)
   - Rental period (select dates) (optional)
   - Comment (optional)
3. Click "Send" to submit the request

## API

The application uses REST API to fetch data:

- **Base URL**: `https://car-rental-api.goit.global`
- **Endpoints**:
  - `GET /cars` — get cars list
  - `GET /cars/:id` — get car details
  - `GET /brands` — get brands list

## Deployment

### GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

- When pushing to `feat/mui` branch, build automatically starts
- Result is published at `https://vitaliy-z.github.io/rental-car/`

### Local Deployment

```bash
npm run build
npm run preview
```

## Author

**Vitaliy Zvieriev**

FullStack Web Developer with experience in React, Redux, Material-UI, Node.js and more. Specializes in creating modern, responsive web interfaces with excellent user experience.

### Contacts

- **GitHub**: [@Vitaliy-Z](https://github.com/Vitaliy-Z)
- **Email**: vitaliyzvieriev@gmail.com

## License

This project is developed for educational purposes. All rights reserved.

---

**Enjoy using Rental Car! 🚗✨**
