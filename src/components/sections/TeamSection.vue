<template>
  <div
    id="team"
    class="flex flex-col">
    <div class="flex-1 text-center">
      <h1 class="uppercase">Team</h1>
      <p class="py-12">Teambeschrijving</p>
    </div>
    <div class="flex justify-center flex-wrap">
      <div class="sm:width-full md:w-1/2 lg:w-1/3 text-center p-10">
        <team-member
          image="https://randomuser.me/api/portraits/men/6.jpg"
          name="Arie Visser"
          role="Full Stack Developer"
          expertise="Laravel, Vue.js & Node.js" />
      </div>
      <div class="sm:width-full md:w-1/2 lg:w-1/3 text-center p-10">
        <team-member
          image="https://randomuser.me/api/portraits/men/7.jpg"
          name="Gerwin Overeem"
          role="Frontend Developer"
          expertise="Vue.js Guru" />
      </div>
      <div class="sm:width-full md:w-1/2 lg:w-1/3 text-center p-10">
        <team-member
          image="https://randomuser.me/api/portraits/men/8.jpg"
          name="Ivo Jonkers"
          role="Project Manager"
          expertise="Blockchain Researcher" />
      </div>
      <div class="sm:width-full md:w-1/2 lg:w-1/3 text-center p-10">
        <team-member
          image="https://randomuser.me/api/portraits/men/9.jpg"
          name="Jaap vd Voort"
          role="Graphic Designer"
          expertise="UX Designer" />
      </div>
      <div class="sm:width-full md:w-1/2 lg:w-1/3 text-center p-10">
        <team-member
          image="https://randomuser.me/api/portraits/men/16.jpg"
          name="Nathan Alder"
          role="Fontend Developer"
          expertise="Animation Master" />
      </div>
      <div class="sm:width-full md:w-1/2 lg:w-1/3 text-center p-10">
        <team-member
          image="https://randomuser.me/api/portraits/men/65.jpg"
          name="Sander de Vos"
          role="Backend Developer"
          expertise="Security & DevOps" />
      </div>
    </div>
  </div>
</template>

<script>
import TeamMember from '@/components/TeamMember.vue';
export default {
  name: 'TeamSection',
  components: {
    TeamMember
  }
}
</script>
