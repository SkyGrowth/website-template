const PageSection = ({ children }) => {
  return (
    <section className="bg-slate-50 relative flex items-center justify-center -z-10 pt-16 pb-32 sm:pt-32 lg:pt-40">
      {children}
    </section>
  );
};

export default PageSection;
