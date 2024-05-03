import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  DocumentIcon,
  ShoppingBagIcon,
  SignalIcon,
  FolderOpenIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { InputForm } from "@/pages/InputForm";
import TablesAntri from "./pages/dashboard/tabllesAntri";
import TablesOutbox from "./pages/dashboard/tabllesOutbox";
import DataProduk from "./pages/dashboard/dataProduk";
import DataKomisi from "./pages/dashboard/dataKomisi";
import Inbox from "./pages/dashboard/Inbox";
import Layout from "./componentsIntegrasi/Layout";
import UserHome from "./pages/report/UserHome";
import MemberSaldo from "./pages/report/MemberSaldo";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        name: "DEPO SPL",
        path: "/input",
        element: <InputForm />,
      },
      {
        name: "DATA SPL",
        path: "/inbox",
        element: <Inbox />,
      },
      {
        name: "CEK PENDING",
        path: "/tablesOutbox",
        element: <TablesOutbox />,
      },
      {
        name: "DATA TRANSAKSI",
        path: "/tablesAntri",
        element: <TablesAntri />,
      },
      {
        name: "DATA TRANSAKSI(SPL&BANK)",
        path: "/dataKomisi",
        element: <DataKomisi />,
      },
      {
        name: "SALDO AWAL BANK",
        path: "/dataProduk",
        element: < DataProduk />,
      },
      {
        name: "MEMBER TRANSACTIONS",
        path: "/tes",
        element: <UserHome />,
      },
      {
        name: "SALDO",
        path: "/saldo",
        element: <MemberSaldo />,
      }
    ],
  },
  // {
  //   layout: <Layout />,
  //   pages: [
  //     {
  //       name: "tes",
  //       path: "/tes",
  //       element: <UserHome />,
  //     }
  //   ],
  // },
];

export default routes;
