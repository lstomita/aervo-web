# Aervo Web — Claude Notes

## Recent Session Changes (2026-03-11)

### 1. Welcome Screen — "Slipstream" Redesign
- Fully replaced previous welcome screen with new Slipstream design.
- Purple color palette, staggered FadeUp animations via `react-native-reanimated`.
- Ghost SVG mark, hero title, and feature rows with dividers.
- "Plan Your First Trip" button calls `handleFinish`: sets AsyncStorage flag + `router.replace('/(tabs)')`.
- "Sign in" button calls `handleSignIn`: `router.replace` to profile tab with `openAuth: 'login'` param.

### 2. Profile Tab — Deep-Link Auth Opening
- Reads `openAuth` param via `useLocalSearchParams` on mount.
- If `'login'` → opens auth container on login tab.
- If `'signup'` → opens auth container on signup tab.

### 3. app.config.js — Splash & Adaptive Icon Colors
- `splash.backgroundColor` updated to `#08080a`.
- `android.adaptiveIcon.backgroundColor` updated to `#08080a`.
- `android.adaptiveIcon.foregroundImage` updated to `adaptive-icon.png`.

### 4. UX Consistency Pass
- `activeOpacity={0.8}` added to 28 `TouchableOpacity` elements across `trips.tsx`, `new.tsx`, and `trips/[id]/index.tsx`.
- Padding in `trips.tsx` header, tabs, and emptyState aligned to `paddingHorizontal: 20`.

### 5. Map Auto-Zoom Fix — `trips/[id]/index.tsx`
- Effect 1 now guards on `mapIsReady` and includes it in the dependency array.
- `mapIsReady` resets to `false` on `MapView` unmount so zoom works correctly on every visit to the map view.

### 7. Public Trip Page — Unauthenticated Read Fix (2026-03-11)
- `app/p/[id].tsx` Effect 1: added `where('isPublic', '==', true)` to the trips slug-resolution query so Firestore can guarantee the unauthenticated read rule is satisfied. Without this filter, Firestore rejected the list query for unauthenticated visitors, causing "trip not found" on valid public trips.
- `components/PublicProfileModal.tsx`: catch block in `fetchProfileData` now checks `e?.code === 'permission-denied'`. On that error, silently exits (modal renders with no author data) rather than logging noise and calling `fetchFallbackTrips`. Applies when unauthenticated visitors open the author profile modal (`users` collection requires `request.auth != null`).

### 6. Google API Keys — Temporarily Unrestricted
- Both iOS and Android Google API keys temporarily unrestricted for Expo dev client testing.
- **Must be re-restricted before App Store / Play Store submission.**
- Google Maps API key also needs `aervo.co` added as an allowed referrer for web map rendering.
- `google-services.json` and `GoogleService-Info.plist` removed from git tracking and added to `.gitignore`. EAS Secrets injection required before CI/CD builds.

## Session Changes (2026-03-11, Batch 2)

### 8. Public Trip Page — SEO & Web Metadata (`app/p/[id].tsx`)
- Imported `expo-router/head` (`Head` component) for web-only meta tag injection.
- `pageTitle` pre-computed as a plain string variable (not JSX) to satisfy React Helmet's string-child requirement.
- Dynamic `<title>`, `<meta name="description">`, OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`), and canonical `<link rel="canonical">` added inside `<Head>`.
- JSON-LD structured data (`@type: TouristTrip`) injected via `<script type="application/ld+json">` for search engine rich results.
- Semantic heading tags (`h1`, `h2`, `h3`) added to the web render path only; native render path unchanged.

### 9. Public Trip Page — Web Visual Enhancements (`app/p/[id].tsx`)
- **Hero stat chips**: inline stat pills (stops count, days count) displayed beneath the trip title on web.
- **Social proof bar**: strip showing saves count and share count (view count intentionally omitted — decided not to show views pre-launch to avoid displaying inaccurate dev/testing numbers).
- **Feature card strip**: icon + label cards highlighting trip attributes (e.g., curated stops, offline access).
- **Scroll-triggered CTA banner**: fixed/sticky banner that appears after scrolling, prompting download.
- **CTA copy changes**: updated call-to-action text across the web layout for clarity and conversion.
- All enhancements are web-only; native code paths are unaffected.

### 10. `vercel.json` — Asset Passthrough Rewrites
- Added `/assets/:match*` and `/_expo/:match*` passthrough rewrites before the catch-all SPA rewrite rule.
- Ensures Expo-bundled static assets are served directly rather than being intercepted by the catch-all.

### 11. Known Web Issues (Open)
- **Ionicons font 404**: font files still returning 404 on web despite vercel.json fix — pre-existing deployment issue, not introduced this session.
- **Google Maps API key**: `aervo.co` not yet added as an allowed referrer; web map rendering blocked until resolved.

## Known Sensitive / Previously Fixed Areas

### Clone Reset — `authorName`, `authorAvatar`, `showAuthor`, `lastCloneAt` (`app/p/[id].tsx`)
- **Fixed 2026-03-11.** Four fields were inherited from the source trip via `...trip` spread in `newTripData` without being explicitly reset.
- Added to the `newTripData` block (alongside the existing `viewCount`/`cloneCount`/etc. wipes):
  - `authorName: auth.currentUser?.displayName || ''` — cloner's own identity, not original creator's
  - `authorAvatar: auth.currentUser?.photoURL || ''` — same
  - `showAuthor: false` — consistent with `isPublic: false` and `publicBudget: false`; cloner opts in when publishing
  - `lastCloneAt: null` — prevents a stale timestamp from incorrectly triggering the trending badge on the new trip
- No other logic changed.

### `cost`/`amount` Stripped from Itinerary State When `publicBudget` is False (`app/p/[id].tsx`)
- **Fixed 2026-03-11.** `PUBLIC_ITEM_FIELDS` includes `cost` and `amount`, so those values entered React state even when `trip.publicBudget === false`. They were invisible in the UI (render guards) but accessible via React DevTools / browser memory.
- After `.map(toPublicItem)`, a post-filter now strips `cost` and `amount` from each item before `setItinerary()` when `trip?.publicBudget` is falsy.
- `safeItems` (pre-filter) is intentionally preserved for the `calcCost` loop — the existing render guards on `totalCost` control display. Only `itinerary` state is affected.
- `toPublicItem()` signature and `PUBLIC_ITEM_FIELDS` array are unchanged. No render guards were modified.
- **Do not add `cost`/`amount` back to the items passed to `setItinerary`** without also gating on `publicBudget`.

### Free-Tier Limits Extracted to `lib/constants.ts`
- **Added 2026-03-11.** `FREE_TRIP_LIMIT = 2` and `FREE_SCAN_LIMIT = 5` are now defined in `lib/constants.ts`.
- Previously inline magic numbers in two files:
  - `app/trips/new.tsx` (2 call sites) — imports `FREE_TRIP_LIMIT`
  - `app/trips/[id]/add.tsx` (2 call sites: pre-check + transaction) — imports `FREE_SCAN_LIMIT`
- No logic changed — only value references updated. If limits change in future, update `lib/constants.ts` only.

### Dead Screen Deleted — `app/trips/[id]/select-category.tsx`
- **Deleted 2026-03-11.** Full codebase search found zero active references (no `router.push`, `router.replace`, `href`, `Link`, or import). Only mention was in `aervo-app/CLAUDE.md` documentation, which has been updated.
- Screen was superseded by navigating directly to `/trips/${id}/add` with an `initialCategory` param.

### Places Autocomplete Debounce — `app/discover/bucket-list.tsx`
- **Fixed 2026-03-11.** `handleTextChange` previously fired a Places Autocomplete API call on every keystroke (no debounce).
- Added `debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)` alongside `mapRef` at the top of the component.
- `handleTextChange` now clears any pending timer on every call, then sets a 400ms `setTimeout` before firing the API request. If `text.length <= 2`, predictions are cleared immediately (no timer).
- Pattern mirrors the debounce in `(tabs)/index.tsx` (`searchDebounceRef`, 400ms).
- **Do not revert to the async-on-every-keystroke pattern** — it fires a billable Places API call per character.

### Private Trip Leak via Raw Firestore ID (`app/p/[id].tsx`)
- **Fixed 2026-03-11.** The fallback `getDoc` path (used when the slug query returns no results) now guards on `data.isPublic` immediately after `docSnap.exists()`:
  ```ts
  if (!data.isPublic) { setLoading(false); return; }
  ```
- Without this guard, an authenticated user who knew a trip's raw Firestore document ID could navigate to `/p/{tripId}` and cause the page to render a private trip's cover image, destination, itinerary stops, and author metadata (even though `toPublicTrip` strips sensitive fields like `inviteCode`/`collaborators`).
- The primary slug query path already filters `where('isPublic', '==', true)` and is unaffected.
- **Do not remove this guard** — it is a security fix, not dead code.

## Known Accepted Risks (Post-Launch Cloud Function Work)

### `isTopTrip` / `isTrending` — Client-Writable Badge Fields
**Risk**: The Firestore PUBLIC LOGIC update rule allows any authenticated client to write `isTopTrip` and `isTrending` to any public trip, with no server-side threshold verification. A malicious user could award the badge to any trip.
**Accepted because**: Abuse requires knowing a target trip's Firestore ID and being authenticated. The badge is cosmetic — it does not affect access control or billing.
**Post-launch fix**: Remove `isTopTrip` and `isTrending` from the client-writable PUBLIC LOGIC allowlist in `firestore.rules`. Move badge assignment to a Firestore Cloud Function trigger that fires on `cloneCount`/`viewCount` writes and applies the qualifying threshold server-side.

### `viewCount` Undercounted for Unauthenticated Web Visitors
**Risk**: `updateDoc(…, { viewCount: increment(1) })` in `app/p/[id].tsx` requires `request.auth != null` per Firestore rules. Unauthenticated visitors — the primary audience for shared `/p/[id]` influencer links — never increment the counter. This directly undercounts organic traffic and affects Discover feed prioritization (which uses `viewCount` as a signal).
**Accepted because**: `viewCount` display is currently suppressed pre-launch (see §12 social proof bar decision). Inaccurate counts are not user-visible yet.
**Post-launch fix**: Move the increment to a Cloud Function via an unauthenticated-safe HTTP endpoint, or create a `counters/{tripId}` Firestore collection with a permissive anonymous-write rule scoped only to `viewCount`. **First post-launch Cloud Function priority after the invite code join flow migration.**

### `cloneCount` on Source Trip — Client-Side Increment Can Drift
**Risk**: The `cloneCount` increment on the source trip (`app/p/[id].tsx`) runs client-side after the itinerary copy `Promise.all`. If the app crashes or network drops between itinerary copy and the `updateDoc` call, the clone is created but `cloneCount` is not incremented — silent counter drift with no retry or recovery path.
**Accepted because**: Drift is rare (requires mid-clone crash), the counter is cosmetic/soft-ranking only, and the clone itself succeeds.
**Post-launch fix**: Move the increment to a Cloud Function trigger on new trip document creation when `originalTripId` is set, so the increment is server-driven and atomic with the trip document's existence.

---

### 12. Social Proof / Author Bar — `showAuthor` Gate (`app/p/[id].tsx`)
- Web-only bar below the hero image now respects `trip.showAuthor`:
  - `showAuthor === true` → bar renders with creator name only (right-aligned). No view count, clone count, or like count shown here.
  - `showAuthor !== true` (false or absent) → bar is hidden entirely.
- The stats row elsewhere on the page (day count, item count, season) is unaffected.
- **Do not re-add view/clone/like counts to this bar** — decision made to avoid displaying inaccurate pre-launch numbers and to respect creator privacy settings.
