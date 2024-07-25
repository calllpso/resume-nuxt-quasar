<script setup lang="ts">

const ddapi = new api.Dadata()
const candidate: Ref<Card.User> = ref(fillCard.user());

const inputsExperience: Ref<Card.Experience[]> = ref([
  fillCard.experience()
])

const inputsEducation: Ref<Card.Education[]> = ref([
  fillCard.education()
])

const phoneRules = [
  (val: string) =>
    regex.phone.test(val) ||
    'Please type your russian phone number',
];

type CardType = 'experience' | 'education';
function addItem(type: CardType) {
  if (type === 'experience') {
    inputsExperience.value.push(fillCard.experience());
  } 
  else if (type === 'education') {
    inputsEducation.value.push(fillCard.education());
  }
}

const doPrint = () => print()
</script>

<template>

  <q-card class="my-card teal-10 bg-grey-1 " flat bordered>
    <q-card-section>
      <span class="text-h5">
        Personal information
      </span>
      <q-input clearable filled color="teal-10" v-model="candidate.firstName" label="First name" counter
        :rules="[
          val => !!val || '* Required',
          val => val.length > 1 || 'Please use minimum 2 characters',
        ]" lazy-rules />

      <q-input clearable filled color="teal-10" v-model="candidate.lastName" label="Last name" counter
        :rules="[
          val => !!val || '* Required',
          val => val.length > 1 || 'Please use minimum 2 characters',
        ]" lazy-rules />
      <q-input clearable filled color="teal-10" v-model="candidate.title" label="Title" counter />
      <FormFile v-model:file="candidate.yourPhoto"></FormFile>


      <FormSelect label="address" v-model:vSearchStr="candidate.address" :getOptions="ddapi.POST.location"></FormSelect>

      <q-input clearable filled color="teal-10" v-model="candidate.phoneNumber" label="Phone number" counter
        :rules="phoneRules" />

      <q-input clearable filled color="teal-10" v-model="candidate.Email" label="Email" counter :rules="[
        (val, rules) =>
          rules.email(val) || 'Please enter a valid email address',
      ]" lazy-rules />
      <q-input clearable filled color="teal-10" v-model="candidate.desciption" label="Description" autogrow />
    </q-card-section>

    <q-separator />
    <q-card-section>
      <div class="text-h5 q-pb-sm">
        Experience
      </div>
        <div v-for="(input, index) in inputsExperience" :key="index" class="q-mb-md">
          <FormSelect v-model:vSearchStr="input.city" :label="'city'" :getOptions="ddapi.POST.city"></FormSelect>
          <FormSelect v-model:vSearchStr="input.company" :label="'company'" :getOptions="ddapi.POST.organization"></FormSelect>
          <FormData v-model:vDate="input.from" :label="'from'"/>
          <FormData v-model:vDate="input.to" :label="'to'"/>
          <q-input v-model="input.position" :label="'position'" outlined counter filled/>
          <q-btn size=sm icon="delete" round color="red-14" :disable="inputsExperience.length < 2" @click="inputsExperience.splice(index, 1)" />
          <q-separator/>
        </div>
        <q-btn size=sm icon=add round color="green-14" @click="addItem('experience')" />
      
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="text-h5 q-pb-sm">
        Education
      </div>

      <div v-for="(input, index) in inputsEducation" :key="index" class="q-mb-md">
          <FormSelect v-model:vSearchStr="input['university name']" :label="'UniversityName'" :getOptions="ddapi.POST.organization"></FormSelect>
          <FormSelect v-model:vSearchStr="input.city" :label="'city'" :getOptions="ddapi.POST.city"></FormSelect>
          <q-input v-model="input.subject" :label="'subject'" outlined counter filled/>
          <q-input v-model="input.degree" :label="'degree'" outlined counter filled/>
          <FormData v-model:vDate="input.from" :label="'from'"/>
          <FormData v-model:vDate="input.to" :label="'to'"/>
          <q-btn size=sm icon="delete" round color="red-14" :disable="inputsEducation.length < 2" @click="inputsEducation.splice(index, 1)" />
          <q-separator/>
        </div>
        <q-btn size=sm icon=add round color="green-14" @click="addItem('education')" />      
    </q-card-section>

    <q-card-actions class="q-pl-md">
          <div class="col row justify-end text-body1">
            <span class="row items-center q-ma-sm" >Распечатать</span>
            <q-btn push size=md icon="print" round color="primary"  @click="doPrint">
            </q-btn>
        </div>
    </q-card-actions>
  </q-card>

  <Teleport to="#teleports">
    <CardEmployeePrint class="print-only" :candidate="candidate"
    :inputsExperience="inputsExperience" 
    :inputsEducation="inputsEducation" 
    ></CardEmployeePrint>
  </Teleport>


  
</template>
<style lang="sass" scoped>
.my-card
  width: clamp(300px, 70% ,800px)
</style>
