import {
  cloneElement,
  PropsWithChildren,
  Children,
  isValidElement,
  useState,
  ReactNode,
} from 'react';

const SelectMenu = ({
  valueRender,
  children,
  onChange,
  testProps,
}: PropsWithChildren<{
  onChange: (value: string) => void;
  valueRender: ReactNode | string;
  testProps?: string;
}>) => {
  const [menu, setMenu] = useState<'open' | 'close'>('close');

  return (
    <div className="w-1/4">
      <button
        type="button"
        className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
        onClick={() =>
          setMenu((state) => (state === 'open' ? 'close' : 'open'))
        }
      >
        {valueRender}
      </button>
      {menu === 'open' && (
        <ul className="absolute z-10 mt-1 max-h-56 w-1/4 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {Children.map(children, (child) =>
            isValidElement(child)
              ? cloneElement(child, {
                  onChange: () => {
                    onChange(child.props.value);
                    setMenu('close');
                  },
                  testProps: testProps,
                  // testProps: 'dummyProps', // シャローマージにより上書きされてしまう
                })
              : child,
          )}
        </ul>
      )}
    </div>
  );
};

const SelectMenuItem = ({
  children,
  value,
  onChange,
  testProps,
}: PropsWithChildren<{
  value: string;
  onChange?: (value: string) => void;
  testProps: string;
}>) => {
  console.log('testProps', testProps);
  return (
    <li
      className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
      onClick={onChange && (() => onChange(value))}
    >
      <div className="flex gap-3 items-center">{children}</div>
      <span>{testProps && testProps}</span>
    </li>
  );
};

SelectMenu.Item = SelectMenuItem;

export { SelectMenu };
