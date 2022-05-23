
U can create new file as below instructions.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

This uses the adapter-auto for SvelteKit, which detects Vercel and runs adapter-vercel on your behalf.

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
now the project can be see in localhost:3000 or 5000 but before deploying push the files into git so that deploying the application will be easy.
next commit the changes.

after the project is shown in your Localhost:3000 or Localhost:5000 u can deploy it using vercel platform
vercel supports svelte so it will be a very good oppurtunity for us.

log into vercel account and add your git repository into the website. thereby deploy the project with name movie-lib in the repository section.

## login page

guys I've made the login page using taiwindcss and js it's much simpler than css. simply add the classes so that large css code can be minimized.

## movie-lib

here you can search the desired movie you can find their poster and you can open and download it separately.

## future changes

changes will be made to improvise the UI and adding the platform for clients to share the movie posters with each other.

## Website Link
https://movie-lib-ten.vercel.app

any queries reach me @ regidigunaditya@gmail.com
