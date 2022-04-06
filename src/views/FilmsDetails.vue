<template>
	<div>
		<div class="courses-container">
			<div class="course">
				<div class="course-preview">
					<img :src="movie.image" alt="affiche" />
				</div>
				<div class="course-info" :style="{ backgroundImage: `url(${movie.movie_banner})` }">
					<div class="back"> <h2>{{ movie.title }}</h2>
					<h6>{{ movie.release_date }}</h6>
					<span>{{ movie.description }}</span>
				</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
const PATH_URL="https://ghibliapi.herokuapp.com/films/"


export default {
	name: 'FilmDetails',
	data: () => ({

		movie: {}

	}),
	async created() {

		let data = await axios.get( PATH_URL+ this.$route.params.filmId)
		this.movie = data.data
console.log(this.movie)
	},
}
</script>
<style scoped>
@import url("data:application/octet-stream;base64,QGZvbnQtZmFjZSB7CiAgZm9udC1mYW1pbHk6ICdNdWxpJzsKICBmb250LXN0eWxlOiBub3JtYWw7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBmb250LWRpc3BsYXk6IHN3YXA7CiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL211bGkvdjI2LzdBdWxwXzBxaXotYVZ6N3UzUEpMY1VNWU9Gbk9rRWszMGUwLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpOwp9Cg==");

.courses-container {
	font-family: "Muli", sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	flex-direction: column;
}

.course {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 100%;
	margin: 20px;
	overflow: hidden;
	width: 700px;
}

.course h6 {
	opacity: 0.6;
	margin: 0;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.course h2 {
	letter-spacing: 1px;
	margin: 10px 0;
}

.course-preview {
	background-color: cyan;
	color: #fff;
	padding: 30px;
	max-width: 250px;
}
.course-preview img {
	max-height: 250px;
}
.course-preview a {
	color: #fff;
	display: inline-block;
	font-size: 12px;
	opacity: 0.6;
	margin-top: 30px;
	text-decoration: none;
}

.course-info {
	padding: 30px;
	position: relative;
	width: 100%;
	background-size:cover;
 
}

.btn {
	background-color: #2a265f;
	border: 0;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	color: #fff;
	font-size: 16px;
	padding: 12px 25px;
	position: absolute;
	bottom: 30px;
	right: 30px;
	letter-spacing: 1px;
}
.back{
	background-color: rgba(255, 255, 255, 0.7);
	padding: 5%;
	
}
</style>
