# Discord GNOME Theme

A GNOME theme for Discord, following the Adwaita style & GNOME Human Interface Guidelines (with whatever the Discord CSS lets me do).

## Requirements

1. Vesktop

   For enabling the Windows titlebar.

2. Settings > Language > Choose "English (US)"

   This allows for custom icons due to how they are identified in Discord. You may [localize](./src/global/icons.scss) the theme, but read the localization note.

3. Settings > Plugins > Enable "ThemeAttributes"

   This allows for icons in the settings dialog.

4. Settings > Vesktop Settings > Enable "Discord Titlebar"

   Optional, but recommended if you have titlebars.

### Optional additions

1. Remove Nitro references: https://github.com/CroissantDuNord/discord-adblock

## Theming philosophy

### Human Interface Guidelines

The theme may not fully confine to the HIG because of Discord's either CSS or design limitations or my own choices.

### Support

These are not supported:

- Discord experiments

  I do not work for Discord, so I have no way of knowing if these experiments are getting changed, deprecated, etc., i.e. maintenance burden — I maintain several other projects

- Nitro

  Exceptions — anything accessible with the FakeNitro plugin.

You \*can\* open an issue about any of these, but it's only getting fixed if it's an easy fix, i.e. missing icon.

## Installation

### No configuration

Copy the following into the text box located in Settings > Themes > Online Themes:

```
https://raw.githubusercontent.com/garecrow/discord-gnome-theme/refs/heads/patch-1/index.css
```

### Including configuration

Put [gnome.theme.css](./gnome.theme.css) in ~/.config/vesktop/themes. It's still updated automatically.

## Preview

![first](<img width="1610" height="945" alt="image" src="https://github.com/user-attachments/assets/e0745beb-a512-43a8-8a6f-ba0b148596e9" />
)
![cozy second](<img width="1610" height="945" alt="image" src="https://github.com/user-attachments/assets/57ea8e6d-fbd5-4be8-8311-e4cec3e7e6c8" />
)
![third](<img width="1610" height="945" alt="image" src="https://github.com/user-attachments/assets/43015fe2-d028-4144-8854-42ed94e25e47" />
)
