<script setup lang="ts">

const candidate: Ref<types.Card.User | undefined> = defineModel('candidate')
const inputsExperience: Ref<types.Card.Experience[] | undefined> = defineModel('inputsExperience')
const inputsEducation: Ref<types.Card.Education[] | undefined> = defineModel('inputsEducation')




const imgSrc: Ref<string | null> = computed(()=>{
    if(!!candidate.value){
        return !!candidate.value.yourPhoto ? URL.createObjectURL(candidate.value.yourPhoto) : null
    }
    else return null
}
)

</script>

<template>    
<q-card v-if="candidate">
    <div class="row bg-cyan-1 q-pl-md q-pt-md" >
        <div class="col-12">
            <header class="header">
                <div class="row">
                    <div class="col-2 text-h6 q-pl-md q-pt-md">
                        Candidate: 
                    </div>
                    <div class="col-10 text-h6 q-pt-md">
                        {{ `${candidate.lastName} ${candidate.firstName}` }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 text-h6 q-pa-md">
                        Title:
                    </div>
                    <div class="col-9 text-h6 q-pt-md">
                        {{ candidate.title }}
                    </div>
                </div>
            </header>
        </div>
    </div>

    <div class="row full-height ">
        <div class="col-8">
            <q-card class="q-pl-md q-pt-md">
                <q-card-section>
                    <div class="text-h6">Desciption</div>
                    <q-separator/>
                    <div>{{ candidate.desciption }}</div>
                </q-card-section>
            </q-card>

            <q-card class="q-pl-md q-pt-md">
                <q-card-section>

                    <div class="text-h6">Experience</div>
                    <q-separator/>

                    <div v-for="item in inputsExperience" class="row">  
                        <template v-for="key in Object.keys(item)" :key="key">
                            <div class="col-3">
                            {{ key}}
                        </div>
                        <div class="col-9 ">
                            <template>
                                {{ item[key] }}
                            </template>
                        </div>
                        
                    </template>
                    <q-separator/>
                    </div>
                
            </q-card-section>
            </q-card>

            <q-card class="q-pl-md q-pt-md">
                <q-card-section>
                    <div class="text-h6">Education</div>
                    <q-separator/>
                    <div v-for="item in inputsEducation" class="row">  
                        <template v-for="key in Object.keys(item)" :key="key">
                            <div class="col-3">
                                {{ key}}
                            </div>
                            <div class="col-9">
                            {{ item[key] }}
                        </div>
                        
                        </template>
                        <q-separator/>
                    </div>

                </q-card-section>
            </q-card>
            
        </div>

        <div class="col-4">
                <q-separator></q-separator>
                <q-card class="my-card">
                    <q-card-section v-if="!!imgSrc" >
                        <q-img :src="imgSrc"/>
                    </q-card-section>
                    <q-card-section>
                        <div class="row text-h6">Personal details</div>
                        <q-separator/>
                        <div class="row">
                            <div class="col-3">Address:</div>
                            <div class="col-9 text-wrap">{{ candidate.address }}</div>
                        </div>
                        <div class="row">
                            <div class="col-3">Phone number:</div>
                            <div class="col-9">{{ candidate.phoneNumber }}</div>
                        </div>
                        <div class="row">
                            <div class="col-3">Email:</div>
                            <div class="col-9">{{ candidate.Email }}</div>
                        </div>
                    </q-card-section>
                </q-card>

        </div>
    </div>

</q-card>

</template>

<style scoped>
.my-card {
    height: 100%;
    width: 100%
}
@media print{
    .header{
        background: '#bebebe';
}
} 

</style>