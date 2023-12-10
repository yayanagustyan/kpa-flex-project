<template>
  <article class="prose !max-w-[90ch]">
    <!-- optional: you can remove this readme -->
    <!-- html rendered by a markdown converter -->
    <p>This is a small coding project for KPA Flex software developer candidates.</p>
    <p>You'll create a simple page then <strong>email a zipped archive of your code.</strong></p>
    <h2 class="mt-0">
      <a id="user-content-getting-started"
         class="anchor"
         aria-hidden="true"
         tabindex="-1"
         href="#getting-started"
      ><span aria-hidden="true"
             class="octicon octicon-link"
      ></span></a>Getting Started</h2>
    <p>First, make sure you can run this on your machine. Node 18.X or later
      is recommended.</p>
    <div class="highlight highlight-source-js">
      <pre><span class="pl-s1">git</span> <span class="pl-s1">clone</span> <span class="pl-c">git@github.com:HazardScout/recruit-project-vue3.git kpaflex</span>
<span class="pl-s1">cd</span> <span class="pl-s1">kpaflex</span>
<span class="pl-s1">npm</span><span class="pl-kos"></span> <span class="pl-s1">ci</span>
<span class="pl-s1">npm</span> <span class="pl-s1">run</span> <span class="pl-s1">dev</span></pre>
    </div>
    <p>You should now be able to view the application at: <a href="http://localhost:5173"
                                                             rel="nofollow"
    >http://localhost:5173</a></p>
    <p>The project should automatically hot-reload as you make changes.</p>
    <h2><a id="user-content-what-matters"
           class="anchor"
           aria-hidden="true"
           tabindex="-1"
           href="#what-matters"
    ><span aria-hidden="true"
           class="octicon octicon-link"
    ></span></a>What Matters?</h2>
    <p>This project uses TailwindCSS. But styles/colors are not that important. Here's what is:</p>
    <ul>
      <li>Well-organized code</li>
      <li>Well-named variables, functions, arguments, etc</li>
      <li>Clean &amp; easy user-interfaces</li>
    </ul>
    <h2><a id="user-content-project-requirements"
           class="anchor"
           aria-hidden="true"
           tabindex="-1"
           href="#project-requirements"
    ><span aria-hidden="true"
           class="octicon octicon-link"
    ></span></a>Project Requirements</h2>
    <p>Nyan Cat will be performing at your house. You can only fit 20 people
      so this app will keep track of who is coming.</p>
    <p>Here are the features:</p>
    <ul>
      <li>For each guest, you'll track email address and number of tickets
        <ul>
          <li>You don't need to track anything else (like name, etc)</li>
        </ul>
      </li>
      <li>Show a table of all the guests</li>
      <li>There should be a way to add, edit, and delete guests</li>
      <li>When editing a guest, the user should be able to cancel</li>
      <li>Show the total number of guests somewhere</li>
    </ul>
    <p>
      For your convenience, use the Guest Repository to load/save data.
      For simplicity, do not worry about error reporting, but do enforce the app requirements:
    </p>
    <pre><code>import GuestRepository from 'src/services/guest-repository';

const repo = new GuestRepository();

// Fetch guests
const guests = await repo.load();
&gt; [ { email: 'foo@bar.com', tickets: 3 }, ...]

// Save guests
guests.splice(0, 1);
await repo.save(guests);

// Reset (if desired)
await repo.reset();
</code></pre>
    <h2><a id="user-content-extras"
           class="anchor"
           aria-hidden="true"
           tabindex="-1"
           href="#extras"
    ><span aria-hidden="true"
           class="octicon octicon-link"
    ></span></a>Extras</h2>
    <p>Don't spend a ton of time on this project, but here are some bonus
      elements if you're feeling crazy.</p>
    <ul>
      <li>Feel free to pull in libraries like Bootstrap or Vuetify. But
        don't spend too much time on styles.</li>
      <li>Try using a modal dialog for the new/edit functionality.</li>
    </ul>
    <h2><a id="user-content-submitting-your-project"
           class="anchor"
           aria-hidden="true"
           tabindex="-1"
           href="#submitting-your-project"
    ><span aria-hidden="true"
           class="octicon octicon-link"
    ></span></a>Submitting Your Project</h2>
    <p>Once you're ready, email a zipped copy of your code to your primary contact.</p>
  </article>
</template>

