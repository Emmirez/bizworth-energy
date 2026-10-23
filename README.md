# Bizworth Oil & Gas Sdn. Bhd. — Website

React + Vite + Tailwind CSS frontend (`client/`) and Node/Express + MongoDB backend (`server/`, used by the contact form).

## 1. Before you run
- Put your logo at `client/public/biz.png`
- (Optional) Add photos to `client/public/images/` — names are listed in `client/public/images/README.txt`

## 2. Run the frontend
```
cd client
npm install
npm run dev
```
Opens on http://localhost:5173

## 3. Run the backend (contact form)
```
cd server
npm install
copy .env.example .env     (Windows)   |   cp .env.example .env   (Mac/Linux)
npm run dev
```
Runs on http://localhost:5000. Edit `MONGO_URI` in `.env` for MongoDB Atlas.

## Project structure
```
client/src/
  App.jsx                     routes — add new pages here
  data/
    company.js                name, address, phone, registration no.
    navigation.js             EVERY menu link (desktop, mega menu, mobile, search)
    home.js                   homepage text, slides, segments, media releases
  components/
    layout/                   Header, DesktopNav, MegaMenu, DropdownMenu,
                              MobileMenu, MobileAccordionItem, MobileSearch,
                              Footer, Layout, ScrollToTop
    ui/                       Button, AccentLine, Logo, Gem, Modal,
                              PageBanner, SectionHeading
  sections/
    home/                     HeroSlider, HeroSlide, BookMockup, BlueDivider,
                              BusinessSegments, BusinessSegmentCard,
                              GlobalFootprint, FootprintPins, NewsAndStock,
                              MediaReleases, StockPrice, EngageSection,
                              JoinUs, ConnectWithUs, CallToActionBanner
    contact/                  ContactInfo, ContactForm
    shared/                   SectionLanding, LinkCardGrid
  pages/                      Home, AboutUs, Services, Assets, Corporate,
                              Investors, Media, Career, ContactUs,
                              PrivacyPolicy, LegalDisclaimer, SearchResults,
                              ComingSoon, NotFound
  services/api.js             backend calls
```

## Adding the sub-pages later
Every sub-link already has a URL (see `data/navigation.js`). Until a page exists,
it shows a branded "Coming soon" page. To add one, e.g. Board of Directors:

1. Create `client/src/pages/about/BoardOfDirectors.jsx`
2. In `App.jsx` import it and add:
   `<Route path="about-us/board-of-directors" element={<BoardOfDirectors />} />`
