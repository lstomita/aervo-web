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
