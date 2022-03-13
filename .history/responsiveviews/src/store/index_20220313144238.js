import { createStore } from "vuex";

export default createStore({
  state: {
    pageName: "ProductName",
    pageNameCollectionDetails: "",
    colorProductName:'false',

    Data: [
      {
        id: 1,
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        image: "https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/5dd1d174b232c2001ede91c3.jpg",
        name: "Bookcover",
        title: "Collection item",
      },
      {
        id: 2,
        image:"https://www.elms.edu/wp-content/uploads/2019/12/neonbrand-zFSo6bnZJTw-unsplash.jpg",
        name: "classlesson",
      },
    ],
  },


  mutations: {
    pageName(state, payload) {
      state.pageName = payload;
      state.pageNameCollectionDetails = "";
    },

    pageNameCollectionDetails(state, payload) {
      state.pageNameCollectionDetails = payload;
    },
  },
  actions: {},
  modules: {},
});
