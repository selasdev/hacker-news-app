import React from "react";
import { StoryType } from "components/StoriesRenderer";

type FaveContextProps = {
  children: JSX.Element;
};

type useFaveType = {
  currentFaves: Array<StoryType>;
  addCurrentFave: Function;
  deleteCurrentFave: Function;
};

const Context = React.createContext<useFaveType>({
  currentFaves: [],
  addCurrentFave: () => {},
  deleteCurrentFave: () => {},
});

const FaveContext = ({ children }: FaveContextProps) => {
  const [currentFaves, setCurrentFaves] = React.useState<Array<StoryType>>(
    window.localStorage.getItem("faves") //@ts-ignore
      ? JSON.parse(window.localStorage.getItem("faves"))
      : []
  );

  const addCurrentFave = (fave: StoryType) => {
    setCurrentFaves((faves) => {
      const newFaves = [...faves, fave];
      window.localStorage.setItem("faves", JSON.stringify(newFaves));
      return newFaves;
    });
  };
  const deleteCurrentFave = (fave: StoryType) => {
    setCurrentFaves((faves) => {
      const newFaves = faves.filter((favorite) => favorite.id !== fave.id);
      window.localStorage.setItem("faves", JSON.stringify(newFaves));
      return newFaves;
    });
  };

  return (
    <Context.Provider
      value={{ currentFaves, addCurrentFave, deleteCurrentFave }}
    >
      {children}
    </Context.Provider>
  );
};

export const useFave = (): useFaveType => {
  return React.useContext(Context);
};

export default FaveContext;
