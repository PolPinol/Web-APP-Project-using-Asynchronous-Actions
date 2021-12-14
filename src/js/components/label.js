Vue.component("character-label", {
    data(){
        return {
            visible : false,
        }
    },
    props: {
      data: Object
    },
    template: `<div class="all-elements"><section class="element" v-on:click="loadMoreInfo" v-show='visible===false'>
                    <img :src=data.portrait>
                    <section class="infoStruct">
                        <section id="info">
                            <h1>{{ data.name }}</h1>
                            <h2>Occupation: {{ data.role }}</h2>
                        </section>
                        <span id="more" class="material-icons-outlined">add</span>
                    </section>
                </section>
                
                <section class="bigElement" v-on:click="loadLessInfo" v-show='visible===true'>
                    <section class="bigInfoStruct">
                        <h1>{{ data.name }}</h1>
                        <img :src=data.portrait>
                    </section>
                    <section class="infoStruct">
                        <section id="info">
                            <h2>Occupation: {{ data.role }}</h2>
                            <h2 class="lore"><b>Lore</b></h2>
                            <h2 class="description">{{ data.message }}</h2>
                        </section>
                        <span id="less" class="material-icons-outlined">remove</span>
                    </section>
                </section></div>`,
    methods: {
        loadMoreInfo() {
            this.visible = true;
        },

        loadLessInfo(){
            this.visible = false;
        }
    }            
});