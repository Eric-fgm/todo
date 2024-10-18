import React from "react";

interface StackProps extends React.PropsWithChildren {
  spacing?: keyof typeof spacingClassMap;
}

const spacingClassMap = {
  normal: {
    container: "-m-2",
    item: "p-2",
  },
  large: {
    container: "-m-3",
    item: "p-3",
  },
};

const Stack: React.FC<StackProps> = ({ children, spacing = "normal" }) => {
  const spacingClass = spacingClassMap[spacing];

  return (
    <div className={`flex flex-wrap ${spacingClass.container}`}>
      {React.Children.map(children, (child) => (
        <div
          className={`basis-full xs:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 ${spacingClass.item}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Stack;
