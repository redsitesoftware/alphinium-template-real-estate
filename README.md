[![Forge with Alphinium](https://img.shields.io/badge/🔨_Forge_with_Alphinium-Build_Your_Version-6366f1?style=for-the-badge&logo=github)](https://alphinium.com/forge?template=real-estate)

> **This is an Alphinium template.** Click the badge above to fork this project and have an AI agent build your customised version automatically.

---

# PropFind

Professional real estate listings demo built with Expo React Native for iOS, Android, and web.

## Features
- Buy and rent browsing flows
- Search by suburb or address
- Property type, price, beds, and suburb filters
- Property detail view with enquiry and inspection stub
- Saved listings screen
- Nova AI property assistant demo widget
- Map-style suburb hotspot browse for web demos

## Run locally
```bash
npm install --legacy-peer-deps
npx expo install react-dom react-native-web @expo/metro-runtime
npx expo start --web --port 8096 --clear
```

## Notes
- Demo listing data lives in `src/store/realEstateStore.js`.
- Launch prep notes are in `../GOING_LIVE.md`.
- This project intentionally uses `.js` files only.

> Built with [alphinium](https://alphinium.com) — autonomous AI development agents
