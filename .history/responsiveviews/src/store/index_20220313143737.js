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
        image: "https://s3-alpha-sig.figma.com/img/e19b/d497/68c1a43bcc4a24d597612577c6e83775?Expires=1646611200&Signature=E7x9aFn35mpwWA-6GJOf8XwttvDKGTGbwUCrb4CPnsgLUp6NaNfPRSQVBQLJ-i0P4G0Ra2JAssw2VEddmpkkBzDJlq-q96db7Xm0jJXPY9NvQmmWKHHwjaw-2TLe8wZcQr8QzuKSWcXOhBnsb2~Ca4Lhhbceh4RSkFfBgPqW1l6CyrfVtJtQXBsz1vQl3g2KmjkN1bFH20W2YmT8SJ4rMI7BmxTtGtcsiRSgZv~HWORVNzauRMqKZKgwBjUyeYzf79w0wOauhgl4VaqNBhAWWam~N9HaJTNDRz5KMdSu7dUL3aFlRZySvv6gdqJDO2Uu-mdFfoy31Dz1hSlW94ryfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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
