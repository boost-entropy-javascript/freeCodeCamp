import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';
import { FullWidthRow } from '../helpers';
import ThemeSettings, { ThemeProps } from '../../components/settings/theme';
import SoundSettings from '../../components/settings/sound';
import KeyboardShortcutsSettings from '../../components/settings/keyboard-shortcuts';
import ScrollbarWidthSettings from '../../components/settings/scrollbar-width';

type MiscSettingsProps = ThemeProps & {
  currentTheme: string;
  keyboardShortcuts: boolean;
  sound: boolean;
  editorLayout: boolean | null;
  toggleKeyboardShortcuts: (keyboardShortcuts: boolean) => void;
  toggleNightMode: () => void;
  toggleSoundMode: (sound: boolean) => void;
  resetEditorLayout: () => void;
};

const MiscSettings = ({
  currentTheme,
  keyboardShortcuts,
  sound,
  editorLayout,
  resetEditorLayout,
  toggleKeyboardShortcuts,
  toggleNightMode,
  toggleSoundMode
}: MiscSettingsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Spacer size='m' />
      <FullWidthRow>
        <ThemeSettings
          currentTheme={currentTheme}
          toggleNightMode={toggleNightMode}
        />
        <SoundSettings sound={sound} toggleSoundMode={toggleSoundMode} />
        <KeyboardShortcutsSettings
          keyboardShortcuts={keyboardShortcuts}
          toggleKeyboardShortcuts={toggleKeyboardShortcuts}
          explain={t('settings.shortcuts-explained')?.toString()}
        />
        <ScrollbarWidthSettings />
        <label htmlFor='reset-layout-btn'>
          {t('settings.reset-editor-layout-tooltip')}
        </label>
        <Spacer size='xs' />
        <Button
          onClick={resetEditorLayout}
          id='reset-layout-btn'
          data-playwright-test-label='reset-layout-btn'
          disabled={!editorLayout}
          aria-disabled={!editorLayout}
        >
          {t('settings.reset-editor-layout')}
        </Button>
      </FullWidthRow>
    </>
  );
};

export default MiscSettings;
