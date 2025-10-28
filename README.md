# Discord GNOME Theme

A GNOME theme for Discord, following the Adwaita style & GNOME Human Interface Guidelines (with whatever the Discord CSS lets me do). Forked from ricewind012/discord-gnome-theme (and offers a more comprehensive theme) after bugfixes/releases became too few and far between. Much appreciation for the work they did.

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

1. Remove Nitro references: https://codeberg.org/ridge/Discord-AdBlock

## Theming philosophy

### Human Interface Guidelines

The theme may not fully confine to the HIG because of Discord's either CSS or design limitations.

### Support

These are not supported for now, but requests for certain features will be considered if they present popular enough:

- Discord experiments

  For the most park, experiments are too hard to keep up with, but I will consider support on an individual basis.

- Nitro

  Anything accessible with the FakeNitro plugin is supported, and requests for further nitro support will be considered.

## Installation

### No configuration

Copy the following into the text box located in Settings > Themes > Online Themes:

```
https://raw.githubusercontent.com/garecrow/discord-gnome-theme/refs/heads/master/index.css
```

### Including configuration

Put [gnome.theme.css](./gnome.theme.css) in ~/.config/vesktop/themes. It's still updated automatically.

## Preview

![first]([<img width="1610" height="945" alt="image" src="https://github.com/user-attachments/assets/e0745beb-a512-43a8-8a6f-ba0b148596e9" />](https://github.com/garecrow/discord-gnome-theme/blob/master/assets/preview/Screenshot%20From%202025-10-27%2022-39-49.png?raw=true)
)
![cozy second]([<img width="1610" height="945" alt="image" src="https://github.com/user-attachments/assets/57ea8e6d-fbd5-4be8-8311-e4cec3e7e6c8" />](https://github.com/garecrow/discord-gnome-theme/blob/master/assets/preview/Screenshot%20From%202025-10-27%2022-38-18.png?raw=true)
)
![third]([<img width="1610" height="945" alt="image" src="https://github.com/user-attachments/assets/43015fe2-d028-4144-8854-42ed94e25e47" />](https://github.com/garecrow/discord-gnome-theme/blob/master/assets/preview/Screenshot%20From%202025-10-27%2022-37-41.png?raw=true)
)
