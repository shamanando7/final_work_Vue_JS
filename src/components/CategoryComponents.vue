<template>
   <div>
    <HeaderComponents/>
    <maine class="maine">
        <div class="intro center">
            <div class="intro-box"><h2 class="intro__title">Our Project</h2>
                <p class="intro__text">Home / Project</p></div>
            
        </div>
    </maine>
    <div class="sort center">
        <div class="sort-button">
            <button class="button" @click="selectTag = 'bathroom'">Bathroom</button>
            <button class="button" @click="selectTag = 'Bed Room'">Bed Room</button>
            <button class="button" @click="selectTag = 'Kitchan'">Kitchan</button>
           
        </div>
        <div class="sort-category">
            <div @dblclick="toggleColor(index)" class="item" v-for="(item, index) in items" :key="item.tag" >
              <div v-if="item.tag === selectTag" ><img :src="item.img" alt="photo" class="item__img" >
                <div class="item__footer">
                    <div class="item__footer_left">
                        <h2 class="item__title">{{item.title}}</h2>
                        <p class="item__text">{{item.text}}</p>
                    </div> 
                    <div class="item__footer_right"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg></div>
                
                <div class="star">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                        <g filter="url(#filter0_d_993_156)">
                          <path  :fill="item.isActive ? '#FFA928' : 'none'" stroke="gray" :stroke="starContur" d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z" fill="#FFA928"/>
                        </g>
                        <defs>
                          <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156" result="shape"/>
                          </filter>
                        </defs>
                      </svg>
                </div>

            </div></div></div>
        </div>
    </div>
    <FooterComponents/></div> 


</template>

<script>
import FooterComponents from './FooterComponents.vue';
import HeaderComponents from './HeaderComponents.vue';

    export default {
    name: 'CategoryComponents',
    components: { HeaderComponents, FooterComponents },
    data() {
        return {
            starColor:"none",
            starContur:"gray",
            selectTag:'bathroom',
            items:[
                {tag:'bathroom',img:require('../assets/imgcategory/Photo1.svg'),title:'Minimal Bedroom',text:'Decor / Artchitecture',isActive:false},
                {tag:'bathroom',img:require('../assets/imgcategory/Photo2.svg'),title:'Minimal Bedroom',text:'Decor / Artchitecture',isActive:false},
                {tag:'Bed Room',img:require('../assets/imgcategory/Photo3.svg'),title:'Minimal Bedroom',text:'Decor / Artchitecture',isActive:false},
                {tag:'Bed Room',img:require('../assets/imgcategory/Photo4.svg'),title:'Minimal Bedroom',text:'Decor / Artchitecture',isActive:false},
                {tag:'Kitchan',img:require('../assets/imgcategory/Photo5.svg'),title:'Minimal Bedroom',text:'Decor / Artchitecture',isActive:false},
                {tag:'Kitchan',img:require('../assets/imgcategory/Photo6.svg'),title:'Minimal Bedroom',text:'Decor / Artchitecture',isActive:false},
                


            ]
        }
    },
    methods:{
        toggleColor(index){
            this.items[index].isActive = !this.items[index].isActive;
            
        }
    }
}
</script>

<style lang="scss" scoped>
.maine{
    
    .intro{
    background-image: url(../assets/cssBlog/Photo.svg);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 41px 78px;
        border-radius: 37px 37px 0px 0px;
        background: #FFF;
        margin-top: 170px;
    }
        &__title{
            color: #292F36;
            font-family: DM Serif Display;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
        }
        &__text{
            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 33px */
            letter-spacing: 0.22px;
        }
    }
  }
  .sort-button{
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  .item__footer{display: flex;    justify-content: space-between}
  .item{
    width: 48%;
    position: relative;
  }
  .item__img{
    max-width: 100%;
  }
  .star{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .sort-category{
    display: flex;
    gap:8px;
    flex-wrap:wrap;
  }
  .button{
    display: flex;
    padding: 26px 66px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>