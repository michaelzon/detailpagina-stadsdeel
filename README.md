# Detailpagina Stadsdeel Nieuw-West

This project is a Next.js application designed to display hierarchical data about a specific stadsdeel (district) in Amsterdam, focusing on Nieuw-West. The application fetches data from Amsterdam's public APIs and provides an interactive interface to explore stadsdelen, wijken (neighborhoods), and buurten (sub-neighborhoods).
Live app can be viewed here: https://detailpagina-stadsdeel.vercel.app/

## Features

- Displays detailed information about the selected stadsdeel (Nieuw-West).
- Lists wijken within the stadsdeel and allows selection via a dropdown.
- Fetches and displays buurten based on the selected wijk.
- Handles errors gracefully with user-friendly messages.
- Includes accessibility features like keyboard navigation for dropdowns.

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

### API Dependencies

This application uses public APIs provided by Amsterdam. Ensure the following endpoints are accessible:

- Stadsdelen: `https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/`
- Wijken: `https://api.data.amsterdam.nl/v1/gebieden/wijken/`
- Buurten: `https://api.data.amsterdam.nl/v1/gebieden/buurten/`

### Project Structure

- **API Layer:** Fetch functions (`getStadsdeelData`, `getWijkenData`, `getBuurtenData`) retrieve hierarchical data from Amsterdam's public APIs.
- **Components:**
    - `AppContainer`: The main container managing state and API interactions.
    - `DetailPage`: Displays data for stadsdeel, wijken, and buurten.
    - `Dropdown`: A reusable dropdown component with keyboard navigation.
    - `Card`: A flexible card component for displaying errors and messages.
- **Styling:** Modular CSS files ensure scoped styles.

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

## Learn More

For more information, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Amsterdam's Public APIs](https://data.amsterdam.nl) - Explore the open datasets provided by the City of Amsterdam.

[//]: # (## Author)

[//]: # ()
[//]: # (This project was created by [Michael Zonneveld]&#40;https://github.com/michaelzon&#41; for Gemeente Amsterdam.)

[//]: # ()
[//]: # (View the repository: [GitHub]&#40;https://github.com/michaelzon/detailpagina-stadsdeel&#41;)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.