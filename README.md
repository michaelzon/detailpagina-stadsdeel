# Detailpagina Stadsdeel Nieuw-West

This project is a Next.js application designed to display hierarchical data about a specific stadsdeel (district) in
Amsterdam, focusing on Nieuw-West. The application fetches data from Amsterdam's public APIs and provides an interactive
interface to explore stadsdelen, wijken (neighborhoods), and buurten (sub-neighborhoods).
Live app can be viewed here: https://detailpagina-stadsdeel.vercel.app/

## Features

- Displays detailed information about the selected stadsdeel (Nieuw-West).
- Lists wijken within the stadsdeel and allows selection via a dropdown.
- Fetches and displays buurten based on the selected wijk.
- Handles errors gracefully with user-friendly messages.
- Includes accessibility features like keyboard navigation for dropdowns.

## Requirements

- Usability
- Accessibility
- Future-proofing through reusable components

## Why I Chose Next.js

Next.js offers the ability to build static (pre-rendered) pages, resulting in faster load times and improved
accessibility for users with slower internet connections or less powerful devices. This approach also enhances
compatibility with assistive technologies, such as screen readers, by ensuring content is readily available on the page.
Additionally, Next.js extends the Fetch API to automatically memoize requests and execute them on the server, leveraging
caching to deliver better performance.

## Accessibility

This is an overview of the techniques I implemented with accessibility in mind:

- **Keyboard-Navigable Dropdown Menu**: The dropdown menu for selecting a district can be fully operated using a keyboard.
- **ARIA Labels**: Implemented ARIA labels to enhance accessibility for screen readers.
- **Semantic HTML**: Used semantic HTML elements to improve content structure and accessibility.
- **Alt Text**: Provided descriptive alt text for images to support screen readers and improve usability.
- **Meaningful Markup**: Avoided overusing generic `<div>` elements by opting for meaningful HTML tags.

## Usability

And this is an overview of the techniques I implemented with accessibility in mind:

- **Responsive Design**: Ensured the application is fully responsive and works seamlessly across tablets, phones, and desktops.
- **Error Handling and Fallbacks**: Added robust error handling and fallback mechanisms for a smoother user experience.
- **User Feedback via Styling**: Incorporated visual feedback through styling to guide users during interactions.

## Future-proofing through reusable components

I used the Compound Component Pattern to avoid prop drilling and write elegant components with implicit state sharing.

- **Reusability**: Easily reusable in other parts of the application.
- **Flexibility**: Offers a clean API, making it highly customizable.
- **Separation of Concerns**: Each child component is responsible for its own functionality.
- **Reduced Prop Drilling**: The parent component manages the implicit state, and children access this state using useContext.

### API Dependencies

This application uses public APIs provided by Amsterdam. Ensure the following endpoints are accessible:

- Stadsdelen: `https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/`
- Wijken: `https://api.data.amsterdam.nl/v1/gebieden/wijken/`
- Buurten: `https://api.data.amsterdam.nl/v1/gebieden/buurten/`

### Project Structure

- **API Layer:** Fetch functions (`getStadsdeelData`, `getWijkenData`, `getBuurtenData`) retrieve hierarchical data from
  Amsterdam's public APIs.
- **Components:**
    - `AppContainer`: The main container managing state and API interactions.
    - `DetailPage`: Displays data for stadsdeel, wijken, and buurten.
    - `Dropdown`: A reusable dropdown component with keyboard navigation.
    - `Card`: A flexible card component for displaying errors and messages.
- **Styling:** Modular CSS files ensure scoped styles.

## Learn More

For more information, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Amsterdam's Public APIs](https://data.amsterdam.nl) - Explore the open datasets provided by the City of Amsterdam.


## Inspiration and sources used for this project 

For more information, check out the following resources:

- [Navigating Advanced Dropdowns in React](https://www.behrouz.nl/article/navigating-advanced-dropdowns-in-react) - A detailed guide on implementing complex dropdowns in React.
- [API Data Fetching in React & Next.js](https://dev.to/rashidshamloo/api-data-fetching-in-react-nextjs-289d) - Learn how to fetch data effectively in React and Next.js applications.
- [Fetching and Caching in Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch) - Official Next.js documentation on server-side data fetching, caching, and revalidation.
- [Next.js Project Structure](https://wityan.medium.com/next-js-project-structure-1531610bed71) - Best practices for organizing your Next.js project.
- [ARIA Roles: Contentinfo](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) - Learn about the ARIA `contentinfo` role and its usage in web accessibility.
- [React Design Patterns: Compound Component Pattern](https://medium.com/@vitorbritto/react-design-patterns-compound-component-pattern-ec247f491294) - A guide to implementing the Compound Component Pattern in React.
- [The Compound Component Design Pattern in React](https://medium.com/@cassiecoding/react-design-pattern-compound-component-9c32df41fd8d) - A deeper dive into the Compound Component Pattern and its advantages.

## TODO

- [ ] Incorporate more information from external sources to make the app less basic, ideally around a theme like migration.
  - [Recent Migrants in Amsterdam](https://onderzoek.amsterdam.nl/artikel/recente-migranten-in-amsterdam)
  - [Population in Figures 2024](https://onderzoek.amsterdam.nl/artikel/bevolking-in-cijfers-2024)
- [ ] Refactor the app so users can also select by city district.
- [ ] Provide a quicker overview of neighborhoods.
- [ ] Improve typing (e.g., `DataObj`, `StadsdeelType`, etc.).
- [ ] Add more tests.

## License

This project is licensed under the MIT License.

[//]: # (## Getting Started)

[//]: # ()

[//]: # (### Prerequisites)

[//]: # ()

[//]: # (Ensure you have the following installed on your system:)

[//]: # ()

[//]: # (- Node.js &#40;v16 or later recommended&#41;)

[//]: # (- npm, yarn, pnpm, or bun &#40;your choice of package manager&#41;)

[//]: # ()

[//]: # (### Installation)

[//]: # ()

[//]: # (1. Clone the repository:)

[//]: # ()

[//]: # (   ```bash)

[//]: # (   git clone https://github.com/michaelzon/detailpagina-stadsdeel.git)

[//]: # (   cd detailpagina-stadsdeel)

[//]: # (   ```)

[//]: # ()

[//]: # (2. Install dependencies:)

[//]: # ()

[//]: # (   ```bash)

[//]: # (   npm install)

[//]: # (   # or)

[//]: # (   yarn install)

[//]: # (   # or)

[//]: # (   pnpm install)

[//]: # (   ```)

[//]: # ()

[//]: # (### Running the Development Server)

[//]: # ()

[//]: # (Start the development server:)

[//]: # ()

[//]: # (```bash)

[//]: # (npm run dev)

[//]: # (# or)

[//]: # (yarn dev)

[//]: # (# or)

[//]: # (pnpm dev)

[//]: # (# or)

[//]: # (bun dev)

[//]: # (```)

[//]: # ()

[//]: # (Open [http://localhost:3000]&#40;http://localhost:3000&#41; in your browser to view the application.)

[//]: # (## Deployment)

[//]: # ()

[//]: # (To deploy the application:)

[//]: # ()

[//]: # (1. Build the project:)

[//]: # ()

[//]: # (   ```bash)

[//]: # (   npm run build)

[//]: # (   # or)

[//]: # (   yarn build)

[//]: # (   # or)

[//]: # (   pnpm build)

[//]: # (   ```)

[//]: # ()

[//]: # (2. Start the production server locally:)

[//]: # ()

[//]: # (   ```bash)

[//]: # (   npm start)

[//]: # (   # or)

[//]: # (   yarn start)

[//]: # (   # or)

[//]: # (   pnpm start)

[//]: # (   ```)

[//]: # ()

[//]: # (3. Alternatively, deploy the app on [Vercel]&#40;https://vercel.com/&#41; for production hosting. Check the [Next.js deployment documentation]&#40;https://nextjs.org/docs/deployment&#41; for details.)

[//]: # (### Local Development Tips)

[//]: # ()

[//]: # (- Use the browser's developer tools to debug API requests and responses.)

[//]: # (- Use the included `skeleton-loader.svg` to indicate loading states for data.)

[//]: # (## Author)

[//]: # ()

