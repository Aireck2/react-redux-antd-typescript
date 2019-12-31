import React from "react";

interface Props {
  text: string;
  ok: boolean;
  i: number;
  fn: (bob: string) => string;
  obj: {
    f1: string;
  };
}

export const TextField: React.FC<Props> = () => {
  return (
    <div>
      <h1>Hello TS</h1>
    </div>
  );
};
