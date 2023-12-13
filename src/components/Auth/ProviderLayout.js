
const ProviderLayout = ({ children }) => {
    return (
      <main>
        {/* <div 
          className="absolute top-0 left-0 w-full h-full
          before:bg-gradient-to-l before:from-[#000000d7] before:w-full before:h-full before:absolute
          after:bg-gradient-to-t after:from-[#000000] after:w-full after:h-full after:absolute
          flex justify-center items-center 
          "
        >
          <div
            className="absolute z-[1] w-full h-full bg-no-repeat bg-cover
            background
            "
          >
          </div>        
           
        </div> */}
        {children}
      </main>
    );
};

export default ProviderLayout;