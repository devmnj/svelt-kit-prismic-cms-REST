<script>
	// @ts-nocheck
    import * as prismicH from '@prismicio/helpers'
	import MainContainer from 'components/MainContainer.svelte';
	import PostCard from 'components/PostCard.svelte';
	import StickyPost from 'components/StickyPost.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	// @ts-ignore

	let posts;
	let sticky;

	$: {
		posts = data.documents.filter((d) => d.data.sticky_post == false);
	}
	$: {
		sticky = data.documents.filter((d) => d.data.sticky_post == true)[0];
	}
</script>

<MainContainer>
	<!-- Sticky Post -->
	<!-- {JSON.stringify(posts)} -->

	<StickyPost
		pubDate={sticky.first_publication_date}
		slug={sticky.uid}
		image={sticky.data?.featured_img_link}
		title={sticky.data?.title}
		summary={sticky.data?.post_excerpt}
	/>
	<!-- Post Grid   -->
	<div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{' '}
		<!-- {#await posts}
			<p>waiting for the promise to resolve...</p>
		{:then value} -->
	 

			{#each posts as post}
	 

				<PostCard
                thumb={prismicH.asImageSrc(post?.data?.featured_img_link)}
                title={prismicH.asText(post.data.title)}
                pubDate={ prismicH.asDate(post.first_publication_date)?.toDateString()}
                slug={post.uid}
                summary={prismicH.asHTML(post.data.post_excerpt)}
                />
				<!-- {JSON.stringify(post)} -->
			{/each}
		<!-- {/await} -->
		{' '}
	</div>
</MainContainer>
