<script>
  import { onMount } from 'svelte';
  onMount(() => {
    let darkToggle = document.querySelector('#darkToggle')
    darkToggle.addEventListener('click', ()=> {
      document.documentElement.classList.toggle('dark')
    });
  })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
  <li><a href="https://dev.to/khromov/adding-locally-hosted-google-fonts-to-your-sveltekit-project-26kd">Adding fonts to your SvelteKit app</a></li>
</ul>

<div class="w-20 h-20 bg-blue-600 rounded-full ring-8 ring-blue-700"></div>
<h1 class="text-3xl ml-6">Simple Tailwind Starter</h1>
<button id="darkToggle" class="rounded-lg bg-slate-500 border-4 border-slate-600 px-4 py-2 text-white">Day / Night</button>