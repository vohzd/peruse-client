<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	import { mapGetters }					from "vuex";

	import io 										from "socket.io-client";

	export default {
		data(){
			return {
				hasVisited: false,
				socket: io("http://localhost:1337"),
				visitorData: {
					referrer: document.referrer,
					currentPage: location.pathname,
					userAgent: navigator.userAgent,
					firstAccess: Date.now()
				},
			}
		},
		methods: {
			getVisitorProfile(){
				this.visitorProfile = JSON.parse(localStorage.getItem("vVisitorProfile"));
			},
			handleVisitor(){
				this.getVisitorProfile();
				if (!this.visitorProfile){
					this.setVisitorProfile(this.visitorData);
					this.getVisitorProfile();
				}
				this.socket.emit("clientConnected", this.visitorData);
			},
			setVisitorProfile(){
				localStorage.setItem("vVisitorProfile", JSON.stringify(this.visitorData));
			}
		},
		mounted(){
			this.handleVisitor();
			//this.socket.emit("clientConnected", this.visitorData);
		}
	}
</script>

<style lang="css">

	body {
		margin: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #8c829b;
		background: #ffffff;
		font-size: 18px;
	}

	h1, h2, h3, h4, h5, h6, p, ul, li {
		margin: 0;
		padding: 0;
		font-weight: normal;
		margin-bottom: 16px;
	}

	a {
		color: #9d7660;
		text-decoration: none;
	}

	a:hover{
		color: #82718e;
	}

</style>
