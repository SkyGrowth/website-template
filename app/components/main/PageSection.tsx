const PageSection = ({ children, backgroundStyle }) => {
  return (
    <section
      className={`${backgroundStyle} relative flex items-center justify-center -z-10 pt-8 pb-32 sm:pt-32`}
    >
      {children}
    </section>
  );
};

export default PageSection;
