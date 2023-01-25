import { NextPage } from "next";
import Image from "next/image";

const orders = [
  {
    number: "4376",
    status: "Delivered on January 22, 2021",
    href: "#",
    invoiceHref: "#",
    products: [
      {
        id: 1,
        name: "Safety Glasses",
        href: "#",
        price: "$95.00",
        color: "Brass",
        size: '3" x 3" x 3"',
        imageSrc:
          "https://imagedelivery.net/ABOKdsGnCenw7al-aeuiGQ/92a9c930-dafd-4828-f63d-15b639e69700/p",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      // More products...
    ],
  },
  {
    number: "4378",
    status: "Delivered on January 22, 2021",
    href: "#",
    invoiceHref: "#",
    products: [
      {
        id: 1,
        name: "Safety Glasses",
        href: "#",
        price: "$95.00",
        color: "Brass",
        size: '3" x 3" x 3"',
        imageSrc:
          "https://imagedelivery.net/ABOKdsGnCenw7al-aeuiGQ/92a9c930-dafd-4828-f63d-15b639e69700/p",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      {
        id: 1,
        name: "Safety Glasses",
        href: "#",
        price: "$95.00",
        color: "Brass",
        size: '3" x 3" x 3"',
        imageSrc:
          "https://imagedelivery.net/ABOKdsGnCenw7al-aeuiGQ/92a9c930-dafd-4828-f63d-15b639e69700/p",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },

      // More products...
    ],
  },
  // More orders...
];

export default function Orders() {
  return (
    <>
      <p className={"text-4xl font-bold"}>Your Orders</p>
    </>
  );
}
