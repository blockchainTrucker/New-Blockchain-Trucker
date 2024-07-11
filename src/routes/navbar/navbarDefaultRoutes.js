import { v4 as uuid } from "uuid";

const NavbarDefaultRoutes = [
  {
    id: uuid(),
    menuitem: "Portfolio",
    link: "#",
    children: [
      {
        id: uuid(),
        menuitem: "All",
        link: "/portfolio",
      },
      {
        id: uuid(),
        menuitem: "Projects",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "Funding Chain",
            link: "/portfolio/funding-chain",
          },
          {
            id: uuid(),
            menuitem: "Smart Contract Verifier",
            link: "/portfolio/smart-contract-verifier",
          },
          {
            id: uuid(),
            menuitem: "Decentralized Ventures",
            link: "/portfolio/decentralized-ventures",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "About Me",
    link: `/about-me`,
  },
  {
    id: uuid(),
    menuitem: "Contact Me",
    link: "/contact-me",
  },
];

export default NavbarDefaultRoutes;
