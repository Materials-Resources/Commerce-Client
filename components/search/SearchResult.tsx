"use client";
import { Props } from "next/script";
import { ReactNode } from "react";
import Link from "next/link";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid";

interface Result {
  ItemId: string;
  ItemDesc: string;
  InvMastUid: string;
}
export default function SearchResult(result: Result) {
  return (
    <div
      className={
        "flex aspect-square flex-col justify-between rounded-2xl p-5 shadow-2xl"
      }
    >
      <div>
        <p className={"text-2xl font-bold"}>{result.ItemDesc}</p>
        <p className={"my-2 font-extralight italic"}>{result.ItemId}</p>
      </div>
      <div className={"flex flex-row place-items-center justify-between gap-5"}>
        <Link
          className={"justify-self-end"}
          href={`/product/${result.InvMastUid}`}
        >
          <div className={"rounded-2xl border-2 py-2 px-5"}>
            <p>View Product</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
