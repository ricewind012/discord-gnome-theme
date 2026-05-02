# Discord GNOME Theme

A GNOME theme for Discord, following the Adwaita style & GNOME Human Interface Guidelines (with whatever the Discord CSS lets me do).

<picture>
	<source srcset="assets/preview/theme-dark.png" media="(prefers-color-scheme: dark)">
	<source srcset="assets/preview/theme-light.png" media="(prefers-color-scheme: light)">
	<img align="center" src="assets/preview/theme-light.png" alt="Theme preview">
</picture>

## Requirements

1. Vesktop

   Recommended for enabling the Discord's custom titlebar. Enable with Settings > Vesktop Settings > "Discord Titlebar".

   You can still use something else like BetterDiscord - the theme will work but without the usual GNOME headerbar and with BetterDiscord content unthemed.

2. Install [Discord Adblock][adblock]

   Removes Nitro elements, as they will look out of place.

3. Settings > Language > Choose "English (US)"

   This allows for custom icons due to how they are identified in Discord. You may [localize][css-icons] the theme, but read the localization note.

4. Settings > Plugins > Enable "ThemeAttributes"

   This allows for icons in the server settings modal. Optional, does not affect user settings.

## Installation

Copy the following into the text box located in Settings > Themes > Online Themes:

```
https://raw.githubusercontent.com/ricewind012/discord-gnome-theme/master/gnome.theme.css
```

If you'd like to configure it, put [gnome.theme.css][css-main] in `~/.config/vesktop/themes`. It's still updated automatically.

## Configuration

### Nitro themes

<picture>
	<source srcset="assets/preview/nitro-theme-dark.png" media="(prefers-color-scheme: dark)">
	<source srcset="assets/preview/nitro-theme-light.png" media="(prefers-color-scheme: light)">
	<img align="right" src="assets/preview/nitro-theme-light.png" alt="Nitro theme preview">
</picture>

1. Go to Settings > Plugins and enable the FakeNitro plugin.
2. Set corner smoothing to 0.1 in [Rounded Window Corners Reborn][ext-rounded-window-corners] extension settings.
3. Set a nitro theme in Settings > Display.

<br clear="right" />

### Transparent sidebar

<picture>
	<source srcset="assets/preview/transparent-sidebar-dark.png" media="(prefers-color-scheme: dark)">
	<source srcset="assets/preview/transparent-sidebar-light.png" media="(prefers-color-scheme: light)">
	<img align="right" src="assets/preview/transparent-sidebar-light.png" alt="Transparent sidebar preview">
</picture>

1. Get the [Blur my Shell][ext-blur-my-shell] extension
2. In the extension's settings, go to Pipelines > Manage Effects > Add the "Corner" effect. Click on the effect, set "Radius" to 17.

   The Adwaita window corner radius is 15, but setting it to said number will not _fully_ round them. 17 looks good on all windows.

   If the corners stick out, in [Rounded Window Corners Reborn][ext-rounded-window-corners] settings, turn up "Corner Smoothing".

3. In theme's [CSS file][css-main] set `--option-transparent-sidebar` to `true`.

Settings used for the screenshot were: radius - 100, brightness - 1.00.

<br clear="right" />

## Unsupported list

- Discord experiments

  I do not work for Discord, so I have no way of knowing if these experiments are getting changed, deprecated, etc.

- Nitro

  Exceptions — anything accessible with the FakeNitro plugin; it does support nitro themes after all.

[adblock]: https://codeberg.org/ridge/Discord-AdBlock
[css-icons]: ./src/global/icons.scss
[css-main]: ./gnome.theme.css
[ext-blur-my-shell]: https://github.com/aunetx/blur-my-shell
[ext-rounded-window-corners]: https://github.com/flexagoon/rounded-window-corners
