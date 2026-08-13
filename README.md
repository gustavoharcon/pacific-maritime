# Pacific Maritime Industries Corp. - Corporate Website

A high-performance, modern corporate website and client portal for **Pacific Maritime Industries Corp.**, a San Diego-based manufacturer of MIL-SPEC compliant shipboard interiors and structural components. 

Built with the Next.js App Router, this application handles front-end marketing pages, dynamic catalog viewing, and secure backend API routes for job applications and urgent Request for Quote (RFQ) submissions.

## 🚀 Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Library:** React.js
*   **Database:** MongoDB (Mongoose/Native Driver)
*   **Styling:** Modular CSS / PostCSS
*   **Deployment:** Vercel (Optimized for edge networking and CI/CD)

## 📁 Repository Structure

The project follows a modular and scalable architecture:

*   **/app**: Contains the core Next.js App Router structure, including all page routes (`/about`, `/careers`, `/contact`, `/catalogs-and-downloads`).
*   **/app/api**: Secure backend API routes handling form submissions (`/api/contact`, `/api/submit`), job applications (`/api/careers`), and data fetching.
*   **/components**: Reusable React UI components categorized by function (e.g., `/Buttons`, `/HeroSections`, `/NavBars`, `/Form`).
*   **/assets**: Static assets including global styles (`/styles`), images, and icons.
*   **/config**: Database connection configurations (`mongodb.js`, `database.js`).
*   **/context**: React Context providers (e.g., `GlobalContext.js`) for managing global application state.
*   **/data**: Static site data and configuration files (`siteData.js`).
*   **/utils**: Helper functions and authentication configurations (`helperFunctions.js`, `authOptions.js`).

## 🛠️ Getting Started

### Prerequisites
Ensure you have the following installed on your local machine:
*   Node.js (v18.x or later recommended)
*   npm or yarn
*   A running instance of MongoDB (Local or Atlas)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-org/pacific-maritime.git](https://github.com/your-org/pacific-maritime.git)
    cd pacific-maritime
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add your required variables (e.g., database URIs, API keys):
    ```env
    MONGODB_URI=your_mongodb_connection_string
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    # Add other required API keys here (e.g., email service providers)
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🚢 Core Features

*   **Capabilities Showcase:** Dedicated pages outlining advanced CNC fabrication, equipment lists, and production capacities.
*   **Quality & Compliance Hub:** Documentation of ISO 9001:2015 and Cybersecurity CMMC Level 2 credentials.
*   **Interactive Catalogs:** Custom UI components (`CatalogsInteractive.jsx`, `ShipboardFurnitureCatalog.jsx`) for browsing marine components.
*   **Multi-Step Forms:** Guided routing for detailed manufacturing quotes (`MultiStepForm.jsx`) ensuring exact specifications are captured.
*   **Careers Portal:** Dynamic job listings and application form routing.

## 🔒 Project Guidelines & Best Practices

To maintain alignment with corporate and defense-contracting standards, please adhere to the following when contributing to this repository:

*   **Performance:** All visual assets should be highly optimized to ensure rapid load times, reflecting the company's commitment to precision and speed.
*   **Code Style:** ESLint configurations are included in the root directory (`eslint.config.mjs`). Ensure all code passes standard linting before opening a pull request.