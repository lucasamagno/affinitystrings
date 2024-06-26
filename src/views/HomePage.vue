<template>
  <div>
    <h1>Welcome to Affinity Strings</h1>
    <p class="intro">Affinity Strings was founded by Sherri and John Marttila to provide professional, convenient, and friendly string ensemble services in Michigan’s lower peninsula. Musicians affiliated with Affinity Strings Ensembles are highly experienced professional musicians who have a long history of performing with beautiful success.</p>

    <ImageCarousel />

    <div class="grid-container">
      <div class="grid-item">
        <img :src=longVerticalImage alt="Sherri Marttila" class="sherri_headshot">
        <div class="text">
          <h2>Sherri Marttila</h2>
          <p>Sherri Marttila has been an avid violinist since the age of nine. She has completed educational rigors at Interlochen Arts Academy, the Congress of Strings (New York), and the University of Michigan. She holds a Bachelor’s degree in Violin Performance.</p>
          <p>Sherri is the Concertmaster for the Oakland Symphony (OS) and the Warren Symphony (WS). She also performs in the violin section with the Great Lakes Chamber Orchestra, Macomb Symphony, Flint Symphony, Saginaw Bay Symphony, Midland Symphony, Traverse Symphony, Lansing Symphony and Detroit Opera Theater. Along with her performing responsibilities, she is the Orchestra Personnel Manager for the OS, the WS, the Great Lakes Chamber Orchestra and the Macomb Symphony.</p>
          <p>Sherri has worked with many amazing artists including Andrea Bocelli, Aretha Franklin, John Tesh, Sandi Patty, Michael W. Smith, Johnny Mathis, Anne Murray, Alexander Zonjic, Regis Philbin, Harry Connick Jr., Josh Groban, Sarah McLachlan, Amy Grant, Sarah Brightman and wonderful musical groups like The Who, The Eagles, The Temptations, The Ten Tenors, Il Divo, Il Volo, Mannheim Steamroller, Citizen Zero, Warner Brother Symphony, Wimborne Symphony, The Tea Party, and the Celtic Women. She also performed with the Game of Thrones concert series with the Composer and Director, Ramin Djawdi.</p>
          <p>Aside from her active performance schedule, Sherri also has been teaching and coaching in the Flint, Detroit, and Petoskey areas since 1990, and she is the current University of Michigan – Flint instructor of violin, viola, and string chamber music. Sherri employs varying instructional techniques based on the needs of each individual student. She uses the Suzuki method along with traditional methods with a strong emphasis on note reading skills.</p>
        </div>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-item">
        <div class="text">
          <h2>John Marttila</h2>
          <p>John Marttila started on violin and viola in the Okemos Suzuki string program and public school orchestras, from which he was awarded the Marianne Masterson Memorial Award for his contributions to the orchestra in his senior year. He went on to earn his music degree as a string education specialist from Michigan State University, a Master’s degree in educational technology from Central Michigan University, and he currently balances his career as a public school teacher with his active music performance schedule. </p>
          <p>Aside from performing with Affinity Strings ensembles, John has also performed with the Saginaw Bay Symphony, the Oakland Symphony, the Fort Street Chamber Orchestra, the Warren Symphony Orchestra, the Midland Symphony and has performed with various artists such as Joshua Bell, Aretha Franklin, Josh Grobin, Sarah McLachlan, Michael W. Smith, Alexander Zonjic, Citizen Zero, and Celtic Women. He also performed with the Game of Thrones concert series with the Composer and Director, Ramin Djawdi. </p>
        </div>
        <img :src=johnViolaImage alt="John Marttila" class="john_headshot">
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageCarousel from '@/components/ImageCarousel.vue';
import longVerticalImage from '@/assets/longvertical.jpeg';
import johnViolaImage from '@/assets/John_Viola.jpeg';
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin: 50px 100px;
}

.grid-item {
  display: flex;
  align-items: center;
}

.text {
  max-width: 80%;
  margin: 0px 40px;
}

.text h2 {
  margin-top: 0;
}

img {
  max-width: 100%;
  height: auto;
}

.intro {
  text-align: center;
  margin: 20px auto; 
  max-width: 60%; 
}

.sherri_headshot {
  max-width: 350px;
}

.john_headshot {
  width: 600px;
}

@media (max-width: 600px) {
  .intro {
    margin: 20px 10px; 
    max-width: 95%; 
  }
}
</style>
