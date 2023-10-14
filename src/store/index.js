import { createStore } from 'vuex'

export default createStore({
  state: {
    title:'Minimal Look Bedrooms',
    subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
    items: [
      { img: require("../assets/imgIndex/imgBlog/item1.jpg"), title: 'Let’s Get Solution For Building Construction Work', text: '26 December,2022', icon: require("../assets/imgIndex/imgBlog/icon.jpg") },
      { img: require("../assets/imgIndex/imgBlog/item2.jpg"), title: 'Low Cost Latest Invented Interior Designing Ideas.', text: '26 December,2022', icon: require("../assets/imgIndex/imgBlog/icon.jpg") },
      { img: require("../assets/imgIndex/imgBlog/item3.jpg"), title: 'Best For Any Office & Business Interior Solution', text: '26 December,2022', icon: require("../assets/imgIndex/imgBlog/icon.jpg") },
      { img: require("../assets/imgIndex/imgBlog/items4.png"), title: 'Let’s Get Solution For Building Construction Work', text: '26 December,2022', icon: require("../assets/imgIndex/imgBlog/icon.jpg") },
      { img: require("../assets/imgIndex/imgBlog/items5.png"), title: 'Low Cost Latest Invented Interior Designing Ideas.', text: '26 December,2022', icon: require("../assets/imgIndex/imgBlog/icon.jpg") },
      { img: require("../assets/imgIndex/imgBlog/items6.png"), title: 'Best For Any Office & Business Interior Solution', text: '26 December,2022', icon: require("../assets/imgIndex/imgBlog/icon.jpg") },],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
