// Vue component for each character. The component is composed by a visible data (less info) and an invisible data (more info).
Vue.component("character-label", {
    // Data that shows the LessInfo section or the MoreInfo section
    data(){
        return {
            visible : false,
        }
    },

    props: {
      data: Object
    },

    // HTML from each character
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
    
    // Methods that changes variable visible
    methods: {
        loadMoreInfo() {
            this.visible = true;
        },

        loadLessInfo(){
            this.visible = false;
        }
    }            
});