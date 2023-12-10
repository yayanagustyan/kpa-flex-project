# KPA Flex Recruiting Project

This is a small coding project for KPA Flex software developer candidates.

You'll create a simple page then __email a zipped archive of your code.__


## Getting Started

First, make sure you can run this on your machine. Node 18.X or later
is recommended.

```javascript
git clone git@github.com:HazardScout/recruit-project-vue3.git kpaflex
cd kpaflex
npm ci
npm run dev
```

You should now be able to view the application at: http://localhost:5173

The project should automatically hot-reload as you make changes.

## What Matters?

This project uses TailwindCSS. But styles/colors are not that important. Here's what is:

 * Well-organized code
 * Well-named variables, functions, arguments, etc
 * Clean & easy user-interfaces

## Project Requirements

Nyan Cat will be performing at your house. You can only fit 20 people
so this app will keep track of who is coming.

Here are the features:

   * For each guest, you'll track email address and number of tickets
      * You don't need to track anything else (like name, etc)
   * Show a table of all the guests
   * There should be a way to add, edit, and delete guests
   * When editing a guest, the user should be able to cancel
   * Show the total number of guests somewhere

For your convenience, use the Guest Repository to load/save data.
For simplicity, do not worry about error reporting, but do enforce the app requirements:

    import GuestRepository from 'src/services/guest-repository';

    const repo = new GuestRepository();

    // Fetch guests
    const guests = await repo.load();
    > [ { email: 'foo@bar.com', tickets: 3 }, ...]

    // Save guests
    guests.splice(0, 1);
    await repo.save(guests);

    // Reset (if desired)
    await repo.reset();


## Extras

Don't spend a ton of time on this project, but here are some bonus
elements if you're feeling crazy.

   * Feel free to pull in libraries like Bootstrap or Vuetify. But
     don't spend too much time on styles.
   * Try using a modal dialog for the new/edit functionality.



## Submitting Your Project

Once you're ready, email a zipped copy of your code to your primary contact.
