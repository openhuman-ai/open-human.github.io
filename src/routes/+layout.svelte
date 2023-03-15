<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="https://openhuman.ai"><strong class="text-xl">OpenHuman.ai</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.facebook.com/OpenHumanAI"
					target="_blank"
					rel="noreferrer"
				>
					Facebook
				</a>

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.tiktok.com/@openhuman_ai"
					target="_blank"
					rel="noreferrer"
				>
					Tiktok
				</a>

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://vk.com/openhuman_ai"
					target="_blank"
					rel="noreferrer"
				>
					WK
				</a>

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/openhuman_ai"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/A4bCeYzRVfI"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.instagram.com/openhuman_ai/"
					target="_blank"
					rel="noreferrer"
				>
					Instagram
				</a>

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
