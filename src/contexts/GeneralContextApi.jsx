import { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

function GeneralContextApi({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <GeneralContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

function useGeneralContext() {
  if (GeneralContext === undefined) {
    throw new Error("Your context is unset");
  }

  return useContext(GeneralContext);
}

export { GeneralContextApi, useGeneralContext };
