<template>
    <div>
        <v-card class="my-3 pa-5">
            <v-form
            :disabled="disabled"
            @submit.prevent=""
            >
                <v-textarea
                outlined
                name="Mensagem"
                label="Mensagem"
                ></v-textarea>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    :disabled="disabled"
                    color="primary"
                    type="submit"
                    >
                        enviar 
                        <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data:()=>{
        return{
            disabled:false
        }
    }
}
</script>

<style>

</style>