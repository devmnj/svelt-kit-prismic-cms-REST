<script>
	import MobileMenuIcon from 'components/MobileMenuIcon.svelte';
	import SocialIcons from 'components/SocialIcons.svelte';
	import Logo from 'components/Logo.svelte';
	import Menu from 'components/Menu.svelte';
	import NavContainer from './NavContainer.svelte';
	import MenuItem from './MenuItem.svelte';
</script>

<NavContainer>
	<div class="lg:flex lg:items-center">
		<div class="flex items-center justify-between">
			<Logo>DEVMNJ</Logo>
			<!-- Mobile menu button-->
			<MobileMenuIcon />
		</div>
		<Menu>
			<MenuItem caption="Home"  />
			<MenuItem path="https://javascriptsu.wordpress.com/" caption="JS Blog" />
			<MenuItem path="https://www.flickr.com/photos/flowersandmacros/albums/72157711552332141" caption="Gallery" />
			<MenuItem path="https://unsplash.com/@manojap" caption="Unsplash" />
		</Menu>
	</div>
	<!-- Social Icons -->
	<SocialIcons />
</NavContainer>
