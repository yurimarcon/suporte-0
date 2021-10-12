<template>
    <v-row justify="center">

        <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                v-bind="attrs"
                v-on="on"
                class="mt-16 mr-5"
                color="primary"
                fab
                
                dark
                top
                right
                fixed
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-toolbar
                dark
                color="primary"
                >
                <v-spacer></v-spacer>
                <v-toolbar-title>Abrindo chamado</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    dark
                    @click="dialog = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                </v-toolbar>
                
                <v-container>
                    <v-form
                    class="d-flex justify-center"
                    @submit.prevent="showConfirmacao = !showConfirmacao"
                    >
                        <v-row>
                            <v-col
                            cols="12"
                            >
                                <v-text-field
                                v-model="ticket.title"
                                label="Título"
                                placeholder="Informe um título para a ocorrência"
                                ></v-text-field>
                            </v-col>

                            <v-col
                            class="d-flex"
                            cols="12"
                            >
                                <v-select
                                v-model="ticket.priority"
                                :items="items"
                                label="Prioridade"
                                ></v-select>
                            </v-col>

                            <v-col
                            cols="12"
                            >
                                <v-textarea
                                v-model="ticket.description"
                                outlined
                                name="input-7-4"
                                label="Descrição"
                                ></v-textarea>
                            </v-col>

                            <v-col
                            cols="12"
                            >
                                <v-file-input
                                v-model="ticket.files"
                                color="primary"
                                counter
                                label="Arquivos"
                                multiple
                                prepend-icon="mdi-paperclip"
                                outlined
                                :show-size="1000"
                                >
                                    <template v-slot:selection="{ index, text }">
                                    <v-chip
                                        v-if="index < 4"
                                        color="primary"
                                        dark
                                        label
                                        small
                                    >
                                        {{ text }}
                                    </v-chip>

                                    <span
                                        v-else-if="index === 2"
                                        class="text-overline grey--text text--darken-3 mx-2"
                                    >
                                        +{{ ticket.files.length - 2 }} File(s)
                                    </span>
                                    </template>
                                </v-file-input>
                            </v-col>

                            <v-col
                            cols="12"
                            >
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn
                                class="ma-3"
                                color="success"
                                fab
                                large
                                bottom
                                right
                                type="submit"
                                >
                                    <v-icon>mdi-check</v-icon>
                                </v-btn>
                            </v-row>
                            </v-col>
                        </v-row>
                    </v-form>

                <DialogConfirm 
                v-if="showConfirmacao"
                :showConfirmacao="showConfirmacao"
                @closeDialog="showConfirmacao = !showConfirmacao"
                @createTicket="handleAbrirTicket"
                />
                </v-container>
                

            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import DialogConfirm from "./DialogConfirm.vue";
export default {
    components:{DialogConfirm},
    data () {
      return {
        dialog: null,
        showConfirmacao: false,
        items: ['Baixa', 'Média', 'Alta', 'Crítica'],
        ticket:{
            title: null,
            priority: null,
            description: null,
            files: [],
        },
      }
    },
    methods:{
        handleAbrirTicket(){
            console.log(this.ticket)
            this.$store.dispatch('createTicket', this.ticket)

            this.ticket = {
                title: null,
                priority: null,
                description: null,
                files: []
            }

            this.showConfirmacao = false;
            this.dialog = false;
        }
    }
}
</script>