"use client";
import React from "react";
import { Button } from "../Button/movingBorderButton";

export function MovingBorderButtonComponent({children,}) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {children}
      </Button>
    </div>
  );
}
