# @coderty/astro-embed-dailymotion

This package contains a component for embedding Dailymotion videos in Astro projects with a performance-focused, lazy-loading approach.

## Install

```bash
npm i @coderty/astro-embed-dailymotion
```

## Usage

### Basic usage

The `Dailymotion` component can be used in an Astro file by passing either a Dailymotion video ID or URL:

```astro
---
import { Dailymotion } from '@coderty/astro-embed-dailymotion';
---

<!-- Using a video ID -->
<Dailymotion id="x8oz9jd" />

<!-- Using a Dailymotion URL -->
<Dailymotion id="https://www.dailymotion.com/video/x8oz9jd" />

<!-- Using a short dai.ly URL -->
<Dailymotion id="https://dai.ly/x8oz9jd" />
```

### Setting a custom poster image

By default, the component will fetch the video's thumbnail from Dailymotion. You can provide a custom poster image:

```astro
<Dailymotion id="x8oz9jd" poster="https://example.com/custom-poster.jpg" />
```

### Adding a title

For accessibility, you can add a title to the video:

```astro
<Dailymotion id="x8oz9jd" title="My Dailymotion Video" />
```

### Custom play button label

You can customize the accessible label for the play button:

```astro
<Dailymotion id="x8oz9jd" playlabel="Reproducir video" />
```

### Player parameters

You can pass additional player parameters:

```astro
<Dailymotion id="x8oz9jd" params="autoplay=1&mute=1" />
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | **Required.** Dailymotion video ID or full URL. |
| `poster` | `string` | Custom poster image URL. Defaults to Dailymotion thumbnail. |
| `title` | `string` | Title for the video element. |
| `playlabel` | `string` | Accessible label for the play button. Default: `'Play'` |
| `params` | `string` | Additional player parameters as a query string. |
