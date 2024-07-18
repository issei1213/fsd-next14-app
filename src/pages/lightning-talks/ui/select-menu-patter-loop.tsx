'use client';

import { SelectMenu } from '@/shared/ui/compound-select-menu';
import { Icon } from '@/shared/ui/icon';
import { Typography } from '@/shared/ui/typography';
import { useState } from 'react';

export const SelectMenuPatterLoop = () => {
  const MENU_LIST = [
    {
      value: 'instagram',
      icon: <Icon variant="instagram" />,
      text: 'Instagram',
    },
    { value: 'linkedin', icon: <Icon variant="linkedin" />, text: 'LinkedIn' },
    { value: 'x', text: 'X（旧Twitter）' },
  ];

  const [selected, setSelected] = useState<string | undefined>(undefined);

  const onChangeMenu = (value: string) => {
    setSelected(value);
  };

  const SelectedValue = () => {
    const selectedMenu = MENU_LIST.find((menu) => menu.value === selected);
    if (!selectedMenu) {
      return (
        <Typography variant="tertiary" size="sm">
          未選択
        </Typography>
      );
    }

    return (
      <div className="flex gap-3 items-center">
        {'icon' in selectedMenu && selectedMenu.icon}
        <Typography variant="tertiary" size="sm">
          {selectedMenu.text}
        </Typography>
      </div>
    );
  };

  return (
    <SelectMenu valueRender={<SelectedValue />} onChange={onChangeMenu}>
      {MENU_LIST.map((menu) => (
        <SelectMenu.Item key={menu.value} value={menu.value}>
          {'icon' in menu && menu.icon}
          <Typography variant="tertiary" size="sm">
            {menu.text}
          </Typography>
        </SelectMenu.Item>
      ))}
    </SelectMenu>
  );
};
