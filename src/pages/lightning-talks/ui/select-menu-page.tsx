'use client';

import { SelectMenuPatterStatic } from './select-menu-patter-static';
import { SelectMenuPatterLoop } from './select-menu-patter-loop';
import { SelectMenuPatterGlobalStore } from './select-menu-pattern-global-store';

export const SelectMenuPage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        {/*<SelectMenuPatterLoop />*/}
        <SelectMenuPatterStatic />
        {/*<SelectMenuPatterGlobalStore/>*/}
      </div>
    </>
  );
};
