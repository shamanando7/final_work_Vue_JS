<template>
    
    <div class="maine ">
        
        <img src="../assets/imgcategory/Photo7.svg" alt="" class="maine-img">
        <h2 class="maine-title ">{{title}}</h2>
        <p class="maine-text">{{subtitle}}</p>

        
    </div>
    <SwipersComponents/>
</template>

<script>

import HeaderComponents from './HeaderComponents.vue';
import SwipersComponents from './SwipersComponents.vue';
import { mapState} from 'vuex';

    export default {
    computed:{
            ...mapState(['title']),
            ...mapState(['subtitle'])
            

        
    },
    name: 'ProjectDetaliscComponents',
    components: { HeaderComponents, SwipersComponents},
    
        
    
}
</script>

<style lang="scss" scoped>
.maine{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    &-img{
        
    }
    &-text{width: 658px;
    margin: 20px 0px;}
    &-title{width: 658px;}
}

</style>