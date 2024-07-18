'use client';

import { SelectMenu } from '@/shared/ui/compound-select-menu';
import { Icon } from '@/shared/ui/icon';
import { Typography } from '@/shared/ui/typography';
import { useState } from 'react';

export const SelectMenuPatterStatic = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const onChangeMenu = (value: string) => {
    setSelected(value);
  };

  return (
    <SelectMenu
      valueRender={selected ? selected : '未選択'}
      onChange={onChangeMenu}
      testProps="testProps"
    >
      <SelectMenu.Item value="instagram">
        <Icon variant="instagram" />
        <Typography variant="tertiary" size="sm">
          Instagram
        </Typography>
      </SelectMenu.Item>
      <SelectMenu.Item value="linkedin">
        <Icon variant="linkedin" />
        <Typography variant="tertiary" size="sm">
          LinkedIn
        </Typography>
      </SelectMenu.Item>
      <SelectMenu.Item value="x">
        <Typography variant="tertiary" size="sm">
          X（旧Twitter）
        </Typography>
      </SelectMenu.Item>
    </SelectMenu>
  );
};
