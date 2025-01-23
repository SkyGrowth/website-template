const HeroSection = ({ children, backgroundStyle }) => {
  return (
    <section
      className={`${backgroundStyle} relative flex items-center justify-center pt-16 pb-32 sm:pt-32 lg:pt-40`}
    >
      {children}
    </section>
  );
};

export default HeroSection;
