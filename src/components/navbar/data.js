import {
  dashboardIcon,
  paymentLogo,
  registrationLogo,
  resultsLogo,
} from "../../assets/svgs";

export const NAVBAR_DATA = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
    icon: dashboardIcon,
  },
  {
    id: 2,
    title: "Payment info",
    url: "/payment",
    icon: paymentLogo,
  },
  {
    id: 3,
    title: "Registration",
    url: "/registration",
    icon: registrationLogo,
  },
  {
    id: 4,
    title: "Results",
    url: "/results",
    icon: resultsLogo,
  },
];
