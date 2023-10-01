interface SectionContainerProps {
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return (
    <div className='p-4 bg-white rounded'>
      {children}
    </div>  );
};

export default SectionContainer;
