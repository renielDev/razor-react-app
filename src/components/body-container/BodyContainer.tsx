import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const BodyContainer: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col flex-grow w-full gap-4 p-4 bg-colorbg">
      {children}
    </div>
  );
};

export default BodyContainer;
