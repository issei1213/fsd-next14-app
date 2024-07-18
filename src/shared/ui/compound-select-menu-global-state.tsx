import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from 'react';

const SelectMenuContext = createContext<{
  menu: 'open' | 'close';
  setMenu: Dispatch<SetStateAction<'open' | 'close'>>;
  selectedValue: ReactElement | undefined;
  setSelectedValue: Dispatch<SetStateAction<ReactElement | undefined>>;
}>({
  menu: 'close',
  setMenu: () => {},
  selectedValue: undefined,
  setSelectedValue: () => {},
});

const SelectMenu = ({ children }: PropsWithChildren) => {
  const [menu, setMenu] = useState<'open' | 'close'>('close');
  const [selectedValue, setSelectedValue] = useState<ReactElement | undefined>(
    undefined,
  );

  return (
    <SelectMenuContext.Provider
      value={{ menu, setMenu, selectedValue, setSelectedValue }}
    >
      {children}
    </SelectMenuContext.Provider>
  );
};

type SelectMenuListProps = {};

const SelectMenuList = ({
  children,
}: PropsWithChildren<SelectMenuListProps>) => {
  const { menu, setMenu, selectedValue } = useContext(SelectMenuContext);

  return (
    <div className="w-1/4">
      <button
        type="button"
        className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
        onClick={() =>
          setMenu((state) => (state === 'open' ? 'close' : 'open'))
        }
      >
        {selectedValue ?? '未選択'}
      </button>
      {menu === 'open' && (
        <ul className="absolute z-10 mt-1 max-h-56 w-1/4 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {children}
        </ul>
      )}
    </div>
  );
};

const SelectMenuItem = ({
  children,
  value,
}: PropsWithChildren<{
  value: string;
}>) => {
  const { setSelectedValue, setMenu } = useContext(SelectMenuContext);

  return (
    <li
      className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
      onClick={() => {
        setMenu('close');
        setSelectedValue(() => (
          <div className="flex gap-3 items-center">{children}</div>
        ));
      }}
    >
      <div className="flex gap-3 items-center">{children}</div>
    </li>
  );
};

SelectMenu.List = SelectMenuList;
SelectMenu.Item = SelectMenuItem;

export { SelectMenu };
