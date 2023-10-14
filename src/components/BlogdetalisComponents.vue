<template>
 <div> <body>
    <div class="top">
      
      <!-- <header class="header center">
        <div class="logo">
          <div class="logo__svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                fill="#CDA274"
              />
            </svg>
          </div>
          <div class="logo__interno">
            <p class="logo__interno_text">Interno</p>
          </div>
        </div>
        <nav class="nav">
          <div class="nav__menuBar">
            <a href="#" class="nav__menubar_link">Home</a>
          </div>
          <div class="nav__menuBar">
            <a href="#" class="nav__menubar_link">Project</a>
          </div>
          <div class="nav__menuBar">
            <a href="#" class="nav__menubar_link">Blog</a>
          </div>
        </nav>
      </header> -->
      <div class="maine">
        <div class="intro"></div>
      </div>
      <div class="article center">
  <div class="aricle-box" >
    <div  class="articles" v-for="arti in articles"
    :key="arti.tag " 
    >
    <div v-if="arti.tag === selecttitle || selecttitle === 'all'">
      <h2 class="articles__title">{{arti.title}}</h2>
      <img :src="arti.img" alt="" class="articles__img" />
      <p class="articles__text">
        {{arti.text}}
       
      </p></div>
    </div>
<div class="box">
  <div class="articles" v-for="arti in articles" :key="arti.tag">
    <div v-if="arti.tag !== selecttitle">
      <h2 class="articles__title">{{arti.title}}</h2>
      <img :src="arti.img" alt="" class="articles__img" />
      <p class="articles__text">
        {{arti.text}}
      </p>
    </div>
  </div></div></div>
  
  <div class="tagss">
    <h2 class="tags__title">Tags</h2>
    <button class="tags__button" :class="{ active: selecttitle === 'kitchen' }" @click="selecttitle='kitchen'">Kitchen</button>

    <button class="tags__button" :class="{ active: selecttitle === 'bedroom' }" @click="selecttitle='bedroom'">Bedroom</button>
    
    <button class="tags__button" :class="{ active: selecttitle === 'building' }" @click="selecttitle='building'">Building</button>
    <button class="tags__button" :class="{ active: selecttitle === 'archilecture' }" @click="selecttitle='architecture'">Architecture</button>
  </div></div>
  
  <!-- <footer class="footer center">
    <div class="footer-box">
        <div class="footer-box__left">
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
            <p class="footer-box__left_text">It is a long established fact that a reader <br> will be distracted lookings.</p>
            <div class="footer-box__left_svg">
                <img src="../assets/imgIndex/k(1).svg" alt="">
                <img src="../assets/imgIndex/2.svg" alt="">
            </div>
        </div>
        <div class="footer-box__medium">
            <a href="#" class="footer-box__medium_link">Pages</a>
            <p class="footer-box__medium_text">
             Home <br> Project <br> Blog
            </p>
        </div>
        <div class="footer-box__right">
            <a class="footer-box__right_title">Contact</a>
            <p class="footer-box__right_text"><br> 55 East Birchwood Ave. <br> Brooklyn, New York 11201 <br><br> contact@interno.com <br><br>
                (123) 456 - 7890</p>
        </div>
    </div>
</footer> -->
    </div>
    
 
  </body></div>

</template>

<script>



    export default {
    name: 'BlogdetalisComponents',
    data() {
        return {
            selecttitle: 0,
            articles: [
                {
                    tag: "kitchen",
                    title: "Lets Get Solution for Building Construction Work",
                    img: require("../assets/imgBlogdetalis/img/11.svg"),
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium!",
                },
                { tag: "bedroom", title: "Let’s Get Solution for Building Construction Work", img: require("../assets/imgBlogdetalis/img/8.svg"), text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium!" },
                { tag: "building", title: "Let’s Get Solution for Building Construction Work", img: require("../assets/imgBlogdetalis/img/item1.jpg"), text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium!" },
                { tag: "archilecture", title: "Let’s Get Solution for Building Construction Work", img: require("../assets/imgBlogdetalis/img/item2.jpg"), text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium!" }
            ],
        };
    },
    components: {  }
}
    
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *a {
    text-decoration: none;
  }
  .center {
    padding-left: calc(50% - 1200px / 2);
    padding-right: calc(50% - 1200px / 2);
  }
.header {
    display: flex;
    margin-top: 45px;
    align-items: center;
    .logo {
      display: flex;
      width: 50%;
      &__svg {
        margin-top: 5px;
      }
      &__interno {
        &_text {
          color: #292f36;
          font-family: DM Serif Display;
          font-size: 40px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%; /* 50px */
        }
      }
    }
    .nav {
      display: flex;
      justify-content: flex-end;
      width: 50%;
      gap: 32px;
      &__menubar_link {
        color: #292f36;
        text-align: center;
        font-family: Jost;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
      }
    }
  }

.intro{
    background-image: url(../assets/imgBlogdetalis/img/Photo10.svg);
     min-height: 350px;     }

  
.article{
    display: flex;
        gap: 56px;
        &-box{
            display: flex;
        }
       
      }
     
      .articles{
        &__title{
          color: #292F36;
          font-family: DM Serif Display;
          font-size: 50px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%; /* 62.5px */
          letter-spacing: 1px;
          margin-top: 80px;
          margin-bottom: 30px;
        }
        &__img{
          width: 650px;
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
.tagss{
        display: flex;
        flex-direction: column;
        gap: 24px;
        &__button{
          border-radius: 10px;
          background: #F4F0EC;
          
        }
      }
.tags__button{border-radius: 10px;
  background: #F4F0EC;
  padding: 8px 12px;
          margin-left: 16px;
          color: #000;
text-align: center;
font-family: Jost;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 125%; /* 22.5px */
letter-spacing: 0.36px;}



.tags__title{
  margin-top: 100px;
          margin-bottom: 30px;
          color: #292F36;
font-family: DM Serif Display;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: 125%; /* 31.25px */
letter-spacing: 0.5px;
}
.active{
  background: #000;
  color: #FFF;

}
.footer {
  &-box {
    display: flex;
    margin-bottom: 100px;
    justify-content: space-between;
    margin-top: 200px;

    &__left {
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 400px;
    
      &_text {
        color: #4d5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
      }
      &_svg {
      }
    }
    &__medium{
        &_link{
            color: #292F36;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%; /* 31.25px */
        }
        &_text{
            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 300%; /* 66px */
            letter-spacing: 0.22px;
            }

            
        }
    &__right{
        &_title{
            color: #292F36;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
        }
        &_text{
            
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
  .logo {
    display: flex;
    gap: 10px;
    
    &__svg {
        margin-top: 5px;
    }
    &__interno {
      display: flex;
      &_text {
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
      }
    }
  }
}

.article-box{
    display: flex;
} 

</style>