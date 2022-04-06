<template><div>
    <table class="styled-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>TITRE</th>
                <th>YEAR</th>
                <th>Voir</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="movie in movies" :key="movie.id">
                <td>{{ movie.id}}</td>
                <td>{{ movie.title }}</td>
                <td>{{ movie.release_date }}</td>
                <td @click=" goToMovieDetails(movie.id)">👀</td> 
            </tr>

            <!-- and so on... -->
        </tbody>
    </table></div>
</template>

<script>
import axios from 'axios'
const PATH_URL="https://ghibliapi.herokuapp.com/films/"


export default {
    name: 'FilmsList',
    components: {
    },

    data: () => ({
       
        movies: []

    }),
    async created() {

        let datas = await axios.get(PATH_URL)
        this.movies = datas.data
    },
    methods: {

          goToMovieDetails(filmId){       
          this.$router.push({ name: 'description', params: { filmId} })
      }
    }


}
</script>
<style scoped>
tr td:last-of-type:hover{
    cursor: pointer;
}
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 800px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
div{
    display: flex;
    justify-content: center;
}
</style>
