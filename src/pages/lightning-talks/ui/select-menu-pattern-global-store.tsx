import { SelectMenu } from '@/shared/ui/compound-select-menu-global-state';
import { Icon } from '@/shared/ui/icon';
import { Typography } from '@/shared/ui/typography';
import { useState } from 'react';

export const SelectMenuPatterGlobalStore = () => {
  return (
    <SelectMenu>
      <SelectMenu.List>
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
      </SelectMenu.List>
    </SelectMenu>
  );
};
