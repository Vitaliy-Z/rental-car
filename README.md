# Rental Car - Car Rental Service

## Project Description

**Rental Car** is a modern web application for car rentals, developed using React and Redux. The application provides a convenient interface for searching, viewing, and booking cars.

## Main Features

### 🏠 Home Page

- Welcome page with service description
- Button to navigate to the car catalog
- Modern design with hero section

### 📋 Car Catalog

- **Car filtering:**
  - By car brand
  - By rental price (per hour)
  - By mileage (minimum and maximum)
- **Pagination** with ability to load additional cars
- **Car list** with cards containing basic information

### 🚗 Car Details Page

- **Detailed car information**
- **Booking form** with validation:
  - User name and email
  - Rental date selection (start and end)
  - Additional comments
- **High-quality car images**

### 🎯 Additional Features

- **Redux Persist** for application state persistence
- **React Router** for navigation between pages
- **Formik + Yup** for form validation
- **Axios** for HTTP requests
- **Responsive design** for different devices

## Technologies

### Frontend

- **React 19.1.0** - main library
- **Redux Toolkit** - state management
- **React Router DOM** - routing
- **Formik + Yup** - form handling and validation
- **Axios** - HTTP client
- **React Date Range** - date selection
- **React Spinners** - loading indicators

### Styling

- **CSS Modules** - local styles
- **Modern Normalize** - browser style reset
- **CLSX** - conditional CSS class addition

### Development Tools

- **Vite** - project bundler
- **ESLint** - code linting
- **SWC** - fast compilation

## Installation and Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vitaliy-Z/rental-car.git
   cd rental-car
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the project in development mode:**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Available Commands

```bash
# Start in development mode
npm run dev

# Build project for production
npm run build

# Preview built project
npm run preview

# Check code with linter
npm run lint
```

## Project Structure

```
rental-car/
├── public/                 # Static files
│   ├── images/            # Images
│   └── logo/              # Logos
├── src/
│   ├── api/               # API requests
│   ├── components/         # React components
│   │   ├── app/           # Main component
│   │   ├── bookingForm/   # Booking form
│   │   ├── carsList/      # Car list
│   │   ├── filters/       # Filters
│   │   └── ...
│   ├── pages/             # Application pages
│   │   ├── homePage/      # Home page
│   │   ├── catalogPage/   # Catalog
│   │   └── detailsPage/   # Car details
│   ├── redux/             # Redux store and slices
│   │   ├── cars/          # Car management
│   │   ├── filters/       # Filter management
│   │   └── ...
│   └── utils/             # Helper functions
└── package.json
```

## Usage

### Navigation

1. **Home Page** - welcome and service description
2. **Catalog** - browse and filter cars
3. **Car Details** - detailed information and booking

### Car Filtering

- Select brand from dropdown list
- Set desired price per hour
- Specify mileage range
- Click "Search" to apply filters

### Car Booking

1. Navigate to car details page
2. Fill out the booking form:
   - Enter name and email
   - Select rental dates
   - Add comment (optional)
3. Click the booking button

## Author

**Vitaliy Zvieriev**

FullStack Web Developer with experience in React, Redux, Material-UI, Node.js and more. Specializes in creating modern, responsive web interfaces with excellent user experience.

**Contacts**

GitHub: @Vitaliy-Z
Email: vitaliyzvieriev@gmail.com

## License

This project is created for educational purposes as part of the GoIT course.
