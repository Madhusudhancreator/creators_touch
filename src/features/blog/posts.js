/**
 * Maps a raw DB blog row (from GET /api/blogs) to the same shape as POSTS entries.
 * DB shape: { id, slug, tag, title, excerpt, img, read_time, body, published, created_at }
 * Display shape: { slug, tag, date, title, excerpt, img, read, body }
 */
/**
 * Maps a raw DB blog row (v2 schema) to the display shape used by all
 * frontend components.
 *
 * DB shape (v2): { id, slug, title, description, body_markdown, body_html,
 *   processed_html, canonical_url, social_image, published, published_at,
 *   reading_time, tags_array, cached_tag_list, author_id, created_at, updated_at }
 *
 * Display shape: { slug, tag, date, title, excerpt, img, read, body,
 *   body_html, canonical_url }
 */
export function normalizeDbPost(post) {
  const dateSource = post.published_at || post.created_at;
  return {
    slug:          post.slug,
    // Use first tag from tags_array, or fall back to cached_tag_list
    tag:           (Array.isArray(post.tags_array) && post.tags_array[0])
                     || post.cached_tag_list
                     || "",
    date:          dateSource
                     ? new Date(dateSource).toLocaleDateString("en-US", {
                         month: "long", day: "numeric", year: "numeric",
                       })
                     : "",
    title:         post.title,
    excerpt:       post.description   || "",
    img:           post.social_image  || "",
    read:          post.reading_time  ? `${post.reading_time} min read` : "",
    // body_html is used by the slug page for rich rendering
    body_html:     post.processed_html || post.body_html || "",
    // body kept as fallback array for static-post compatibility
    body:          post.body_markdown
                     ? post.body_markdown.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean)
                     : [],
    canonical_url: post.canonical_url || "",
  };
}

export const POSTS = [
  {
    slug:    "first-impressions-online-worth-more-than-billboard",
    tag:     "UI / UX Design",
    date:    "March 18, 2026",
    title:   "Why First Impressions Online Are Worth More Than a Billboard",
    excerpt: "Your website is your hardest-working salesperson — available 24/7, never late, never tired. Here's how to make it count.",
    img:     "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
    read:    "4 min read",
    body: [
      "In the physical world, you have seconds to make an impression before someone walks past your storefront. Online, you have less than three. Studies consistently show that visitors form a judgement about a website within 50 milliseconds — before they've read a single word.",
      "That's why investing in your digital first impression isn't a luxury. It's a business-critical decision that affects every conversion, every inquiry, every rupee spent on marketing. A compelling website works around the clock — it doesn't sleep, it doesn't take weekends off, and it never has a bad day.",
      "The best-performing websites share a few qualities: they load fast, they communicate a clear value proposition above the fold, and they guide visitors toward a single obvious next action. Cluttered navigation, slow load times, and generic stock photos are silent revenue killers.",
      "At Creators Touch, we approach every website project as a business problem first. Design is the medium, but results are the goal. Whether it's a service business in Vijayawada or an e-commerce brand shipping across India, the fundamentals remain the same — make it fast, make it clear, make it beautiful.",
      "Ready to rethink your first impression? Start by asking yourself what action you want a visitor to take within the first 10 seconds of landing on your page. If your current site doesn't make that obvious, it's time for a change.",
    ],
  },
  {
    slug:    "logo-to-legacy-building-brand-people-remember",
    tag:     "Brand Strategy",
    date:    "February 28, 2026",
    title:   "From Logo to Legacy: Building a Brand That People Remember",
    excerpt: "A logo is just the beginning. Discover how cohesive brand systems create trust, loyalty and long-term recognition.",
    img:     "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=1200&q=80",
    read:    "5 min read",
    body: [
      "Most people think branding is a logo. A good-looking icon, a memorable name, maybe a colour palette — and you're done. The reality is far more layered, and far more powerful when done right.",
      "A brand is a promise. It's the feeling someone gets when they see your packaging, read your Instagram caption, walk into your office, or speak to a member of your team. Every touchpoint is a vote for or against the version of your company you want people to believe in.",
      "The most iconic brands — think Apple, Amul, or Tanishq — aren't remembered because of their logos alone. They're remembered because every element of how they present themselves is consistent, intentional, and emotionally resonant. The typeface, the tone of voice, the colours, the spacing — it all tells a story.",
      "Building that consistency starts with a brand system: a documented guide that captures your visual identity, messaging principles, and application rules. It sounds corporate, but even a small business with a tight brief has a massive advantage over one that wings it every time.",
      "At Creators Touch, our branding engagements go deep: discovery workshops, competitor mapping, audience persona development, and full visual identity systems. Because a logo without a strategy is just decoration.",
    ],
  },
  {
    slug:    "small-businesses-vijayawada-winning-online",
    tag:     "Digital Marketing",
    date:    "February 10, 2026",
    title:   "How Small Businesses in Vijayawada Are Winning Online",
    excerpt: "Local businesses are seeing real results with targeted digital campaigns. Here's what's working right now.",
    img:     "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
    read:    "3 min read",
    body: [
      "Vijayawada is one of the fastest-growing tier-2 cities in India, and the local business landscape is shifting fast. Customers who once walked in through a recommendation or a newspaper ad are now discovering businesses through Google searches and Instagram reels.",
      "The businesses seeing the sharpest growth aren't necessarily the biggest. They're the ones that showed up online consistently when their competitors didn't. A jewellery store in Governorpet that started posting daily reels saw a 40% increase in walk-in inquiries within three months.",
      "What's working in 2026 specifically? Hyper-local content — posts that name the locality, reference local events, and speak to the specific pain points of the Vijayawada market. Google Business Profile optimisation remains hugely underutilised. Short-form video continues to outperform everything else on reach.",
      "The barrier to entry has never been lower. A smartphone, a clean background, and a willingness to show up on camera can outperform a ₹50,000 static campaign. But having a strategy — knowing what to post, when, and why — is the difference between posting and growing.",
      "If you're a local business still relying on word-of-mouth alone, the opportunity cost is enormous. Every month you're not on digital is a month your more visible competitor is building a lead.",
    ],
  },
  {
    slug:    "video-content-drives-3x-more-engagement",
    tag:     "Video Production",
    date:    "January 25, 2026",
    title:   "Why Video Content Drives 3× More Engagement Than Static Posts",
    excerpt: "Video isn't just a trend — it's the dominant format across every platform. Here's how to use it strategically.",
    img:     "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
    read:    "6 min read",
    body: [
      "In 2026, if your content strategy doesn't lead with video, you're already playing catch-up. Every major platform — Instagram, YouTube, LinkedIn, even WhatsApp — has restructured its algorithm to prioritise video content. Video generates 3× more engagement, 2× the time-on-page, and significantly higher conversion rates compared to static images or text.",
      "But not all video is created equal. A shaky, poorly-lit phone clip does more damage to a brand than no clip at all. The bar has risen. Audiences have been trained by Netflix and YouTube to expect a minimum level of production quality, and that expectation has migrated to brand content.",
      "The strategic question isn't whether to do video — it's what kind of video to prioritise. For most businesses, the highest ROI formats are: product demonstrations, behind-the-scenes content, and customer testimonials. These three formats build trust, answer objections, and create social proof simultaneously.",
      "Short-form (under 60 seconds) dominates reach. Long-form (5 minutes or more) dominates depth and SEO. The smartest brands repurpose one piece of long-form content into ten pieces of short-form, maximising output from a single shoot.",
      "Production doesn't have to mean expensive. Our team at Creators Touch regularly produces high-impact videos for clients using a mix of professional gear and smart storytelling. The script, the lighting, and the edit matter far more than camera cost.",
    ],
  },
  {
    slug:    "5-signs-business-needs-mobile-app",
    tag:     "App Development",
    date:    "January 12, 2026",
    title:   "5 Signs Your Business Needs a Mobile App Right Now",
    excerpt: "If your customers are on mobile and your business isn't, you're leaving money on the table. Let's fix that.",
    img:     "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    read:    "4 min read",
    body: [
      "Most businesses wait too long before investing in a mobile app. By the time they build one, a competitor has already owned that channel. Here are five signs that your business is ready — and probably overdue — for an app.",
      "First: if more than 60% of your website traffic is coming from mobile, your customers are already telling you where they want to engage with you. A responsive website is a floor, not a ceiling. Apps offer push notifications, offline functionality, and a frictionless experience that mobile browsers can't match.",
      "Second: if you have a repeat-purchase model — a restaurant, a salon, a subscription service — an app with loyalty features and one-tap reordering will measurably increase retention and lifetime value.",
      "Third: if your team is still managing operations through WhatsApp groups and spreadsheets, an internal operations app can reduce errors, speed up workflows, and give you real-time visibility into your business.",
      "Fourth: if your competitors have apps and you don't, you're at a disadvantage on discoverability in the app stores and on perceived professionalism.",
      "Fifth: if your customer service team is handling the same queries repeatedly, a self-service app feature — order tracking, appointment booking, FAQ chat — can dramatically reduce support costs. Building the right app starts with asking the right questions: what problem are we solving, and what does success look like in 6 months?",
    ],
  },
  {
    slug:    "local-seo-2026-rank-number-one-your-city",
    tag:     "SEO",
    date:    "December 20, 2025",
    title:   "Local SEO in 2026: How to Rank #1 in Your City",
    excerpt: "Google Maps, local keywords, reviews — here's the complete playbook for dominating local search.",
    img:     "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
    read:    "5 min read",
    body: [
      "Local SEO has always been one of the highest-leverage marketing activities for businesses that serve a specific geography. In 2026, with AI Overviews now dominating search results for generic queries, ranking locally has become even more valuable because Google still privileges verified local businesses for near-me searches.",
      "The foundation is your Google Business Profile. Incomplete profiles — missing hours, no photos, no service descriptions — are invisible to Google's local ranking algorithm. Profiles with 10+ photos, accurate categories, regular posts, and a steady stream of reviews consistently outrank those without.",
      "Reviews are the most underutilised local SEO lever. A business with 50 reviews averaging 4.8 stars will almost always outrank one with 200 reviews at 3.9. Quality and recency matter. Building a simple post-service review request flow — a WhatsApp message with a direct link — can generate 5-10 new reviews per month with minimal effort.",
      "On-page local SEO means including your city and neighbourhood in your page titles, H1 headings, meta descriptions, and body content naturally. A page titled 'Web Design Services' is invisible for 'web design in Vijayawada'. A page titled 'Web Design Services in Vijayawada' ranks.",
      "Citations — consistent listings on JustDial, Sulekha, IndiaMART, and industry directories — still matter for validating your business's legitimacy to Google. NAP (Name, Address, Phone) consistency across every listing is non-negotiable. One link from a respected Vijayawada business publication can move the needle more than ten generic directory submissions.",
    ],
  },
];
