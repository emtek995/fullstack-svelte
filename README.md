# Calendar

## What is it?

Everything you need to organize your life.

## Really? Another todo?

No. And yes.
This app is part of a grand creation. It is meant to be displayed in an open area on a large screen. To organize the activities of a whole household. Co-ordinate activities, meal plan, plan date nights, the posibilites are endless.

There is also a hardware aspect to this app. Like mentioned above it is displayed in the living area so everyone can access and see at a glance. It can also be displayed on your computer to use there. A native Android and iOS app is also planned. Every device syncronized. It is also meant to be deployed on a home server, but cloud based solutions are being looked into.

## What tech are you using on this crazy thing?

-   Sveltekit - for the web frontend and backend.
-   Tailwindcss - to make it look really nice.
-   Daisyui - to get a consistant look between components
-   MongoDB - a nice place too keep all the info the users need
-   Typescript - who doesn't like types?

## Developing

Once you've cloned this repo and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
