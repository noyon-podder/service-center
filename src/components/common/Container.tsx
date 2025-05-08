import React, { type ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto max-w-screen-xl">
      {children}
    </div>
  );
};

export default Container;
