<template>
  <div
    id="team"
    class="flex flex-col my-20 text-center">
    <div class="flex-1">
      <h1 class="uppercase tracking-wide text-3xl lg:text-4xl">Team</h1>
    </div>
    <div class="flex flex-wrap">
      <div
        v-for="member in members"
        class="flex lg:w-1/2 xl:w-1/3 flex-grow justify-center">
        <team-member
          :image="member.image"
          :name="member.name"
          :role="member.role"
          :expertise="member.expertise"
          class="p-10" />
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
