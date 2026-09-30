# Client Guide: How to Update Content, Photos & Videos

All content on this website is centralized in a single file:
👉 **`data/portfolioData.ts`**

You do **not** need to touch any React code, HTML templates, or complex components. Simply open `data/portfolioData.ts` and edit the values.

---

## 1. Changing Profile Photos & Avatar

### Profile Avatar (Header & Navigation)
In `data/portfolioData.ts`:
```ts
avatarImage: "/wallace-avatar.png", // or "/images/my-avatar.jpg"
```

### Executive Portrait (About Section)
In `data/portfolioData.ts`:
```ts
portraitImage: "/wallace-avatar.png", // or "/images/wallace-suit.jpg"
```

> **To add a local photo:**
> 1. Copy your `.jpg` or `.png` file into the `public/images/` folder (e.g., `public/images/wallace-photo.jpg`).
> 2. Set the path in `portfolioData.ts` to `"/images/wallace-photo.jpg"`.
> 
> **To use an external photo:**
> Simply paste the full URL (e.g., `https://res.cloudinary.com/...` or `https://images.unsplash.com/...`). Any secure image host works automatically!

---

## 2. Adding or Changing Videos (Media Showcase)

In `data/portfolioData.ts`, scroll down to the `media` array:

```ts
{
  id: "media-keynote-1",
  type: "video",
  title: "Keynote Address: Unlocking Pan-African Trade",
  category: "Keynote Presentation",
  thumbnail: "https://images.unsplash.com/photo-...", // Cover image
  videoUrl: "https://www.youtube.com/watch?v=7wtfhZwyrcc", // Any video link!
  duration: "18:40",
  date: "Nov 2024",
  description: "Wallace delivers the opening keynote at the East African Commercial Summit...",
  metrics: "Presented to 650+ corporate delegates."
}
```

### Supported Video Formats:
The website automatically detects and streams:
- **Standard YouTube Links:** `https://www.youtube.com/watch?v=XXXXX`
- **Short YouTube Links:** `https://youtu.be/XXXXX`
- **YouTube Shorts:** `https://www.youtube.com/shorts/XXXXX`
- **Vimeo Links:** `https://vimeo.com/123456789`
- **Direct MP4 / WebM Files:** `https://example.com/video.mp4` or `/videos/myvideo.mp4`

*(If you don't provide a thumbnail for a YouTube video, the site will automatically fetch YouTube's high-resolution cover image!)*

---

## 3. Adding or Changing Photo Assets in the Gallery

To add a photo framework, diagram, or event photo to the Media Showcase:

```ts
{
  id: "media-framework-new",
  type: "image",
  title: "Commercial Expansion Playbook 2025",
  category: "Strategic Framework",
  thumbnail: "/images/playbook-chart.jpg", // or web URL
  date: "Jan 2025",
  description: "High-level strategic blueprint detailing distributor onboarding...",
  metrics: "Implemented across 14 enterprise distributor hubs."
}
```

---

## 4. Updating Case Studies (Projects)

In `data/portfolioData.ts`, find the `projects` list. Each project has:
- `title`: Case study title
- `category`: e.g. "Market Expansion & GTM"
- `image`: Hero photo for the project card
- `metrics`: 4 key quantifiable highlights (e.g. `$22M`, `14 Hubs`, `+38%`)
- `challenge`: Executive problem description
- `solution`: Strategic actions taken
- `results`: List of bullet-point outcomes

---

## 5. Updating Contact Information & Social Links

In `data/portfolioData.ts`:
```ts
email: "contact@wallaceogundo.com",
phone: "+254 700 892 411",
whatsApp: "+254700892411",
linkedIn: "https://www.linkedin.com/in/wallaceogundo",
twitterX: "https://x.com/wallaceogundo",
location: "Nairobi, Kenya",
```

---

## 6. How Changes Go Live
When using Vercel connected to GitHub:
1. Commit and push your changes to GitHub.
2. Vercel automatically detects the update, rebuilds the site in ~30 seconds, and publishes it live worldwide with zero downtime!
