<template>
  <div
    id="team"
    class="flex flex-col my-20">
    <div class="flex-1 text-center">
      <h1 class="uppercase">Team</h1>
      <p class="py-12">Teambeschrijving</p>
    </div>
    <div class="flex justify-center flex-wrap">
      <div
        v-for="member in members"
        class="sm:width-full md:w-1/2 lg:w-1/3 text-center p-10">
        <team-member
          :image="member.image"
          :name="member.name"
          :role="member.role"
          :expertise="member.expertise" />
      </div>
    </div>
  </div>
</template>

<script>
import { members } from '@/assets/data/members'
import TeamMember from '@/components/TeamMember.vue';

export default {
  name: 'TeamSection',
  components: {
    TeamMember
  },
  data: () => ({
    members: members
  })
}
</script>
