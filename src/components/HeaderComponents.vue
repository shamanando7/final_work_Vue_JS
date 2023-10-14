<template>
   <div> <header class="header center">
        <div class="logo">
            <div class="logo__svg"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
              </svg></div>
            <div class="logo__interno">
                <p class="logo__interno_text">
                    Interno
                </p>
            </div>
        </div>
        <nav class="nav">
           <router-link :to="link.url" v-for="link in links" :key="link.id" class="nav__menuBar">
            
            {{link.title}}
           
        </router-link> 
        </nav>
    </header></div>
</template>

<script>
    export default {
        name: "HeaderComponents",
        data() {
            return {
                links:[
                    {id:1,title:'Home',url:'./'},
                    {id:1,title:'Project',url:'./Project'},
                    {id:1,title:'Blog',url:'./Blog'},
                ]
            }
        },
    }
</script>

<style scoped>

</style>